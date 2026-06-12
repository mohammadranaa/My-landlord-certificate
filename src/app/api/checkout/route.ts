import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { SITE_URL } from "@/lib/constants";

interface BookingService {
  type: string;
  label?: string;
  variant?: string;
  price: number;
}

interface BookingPayload {
  customer?: { name?: string; email?: string; phone?: string };
  property?: { streetAddress?: string; postcode?: string };
  services?: BookingService[];
  additionalCharges?: { congestionCharge?: boolean; parkingCharge?: boolean };
  appointment?: { date?: string; timeSlot?: string };
  totalPrice?: number;
}

type CreateParams = NonNullable<Parameters<typeof stripe.checkout.sessions.create>[0]>;
type LineItem = NonNullable<CreateParams["line_items"]>[number];

export async function POST(request: NextRequest) {
  try {
    const booking = (await request.json()) as BookingPayload;

    const lineItems: LineItem[] = [];

    for (const service of booking.services ?? []) {
      lineItems.push({
        price_data: {
          currency: "gbp",
          product_data: {
            name: service.label ?? service.type,
            description: service.variant ?? undefined,
          },
          unit_amount: Math.round(service.price * 100),
        },
        quantity: 1,
      });
    }

    if (booking.additionalCharges?.congestionCharge) {
      lineItems.push({
        price_data: {
          currency: "gbp",
          product_data: { name: "London Congestion Charge Zone" },
          unit_amount: 1800,
        },
        quantity: 1,
      });
    }

    if (booking.additionalCharges?.parkingCharge) {
      lineItems.push({
        price_data: {
          currency: "gbp",
          product_data: { name: "No Free Parking — Additional Charge" },
          unit_amount: 500,
        },
        quantity: 1,
      });
    }

    const bookingJson = JSON.stringify(booking);
    const metadata: Record<string, string> = {
      booking_data: bookingJson.slice(0, 499),
      customer_name: booking.customer?.name ?? "",
      customer_email: booking.customer?.email ?? "",
      customer_phone: booking.customer?.phone ?? "",
      property_address: [booking.property?.streetAddress, booking.property?.postcode]
        .filter(Boolean)
        .join(", "),
      appointment_date: booking.appointment?.date ?? "",
      appointment_slot: booking.appointment?.timeSlot ?? "",
      services_readable:
        booking.services?.map((s) => s.label ?? s.type).join(", ") ?? "",
    };

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      currency: "gbp",
      line_items: lineItems,
      customer_email: booking.customer?.email,
      metadata,
      payment_intent_data: { metadata },
      success_url: `${SITE_URL}/book/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/book/cancelled`,
      billing_address_collection: "auto",
      phone_number_collection: { enabled: false },
      custom_text: {
        submit: {
          message:
            "Your appointment will be confirmed within 2 hours. " +
            "Certificate emailed within 24 hours of inspection.",
        },
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
