import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { SITE_URL } from "@/lib/constants";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { ATTRIBUTION_COOKIE, parseAttribution } from "@/lib/attribution";

interface BookingService {
  type: string;
  label?: string;
  variant?: string;
  price: number;
}

interface BookingPayload {
  customer?: { name?: string; email?: string; phone?: string; tenantPhone?: string };
  property?: { streetAddress?: string; city?: string; postcode?: string };
  propertyType?: string;
  propertySubType?: string;
  services?: BookingService[];
  additionalCharges?: { congestionCharge?: boolean; parkingCharge?: boolean };
  appointment?: { date?: string; timeSlot?: string };
  totalPrice?: number;
}

type CreateParams = NonNullable<Parameters<ReturnType<typeof getStripe>["checkout"]["sessions"]["create"]>[0]>;
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

    const session = await getStripe().checkout.sessions.create({
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

    // Persist the booking attempt + ad attribution to the database.
    // Non-blocking: a DB failure must never stop the customer reaching checkout.
    try {
      const attribution = parseAttribution(
        request.cookies.get(ATTRIBUTION_COOKIE)?.value,
      );
      const supabase = createServiceRoleClient();
      await supabase.from("bookings").insert({
        stripe_session_id: session.id,
        payment_status: "pending",
        amount_total: booking.totalPrice ?? null,
        currency: "GBP",
        customer_name: booking.customer?.name ?? null,
        customer_email: booking.customer?.email ?? null,
        customer_phone: booking.customer?.phone ?? null,
        tenant_phone: booking.customer?.tenantPhone ?? null,
        property_address: booking.property?.streetAddress ?? null,
        property_city: booking.property?.city ?? null,
        property_postcode: booking.property?.postcode ?? null,
        property_type: booking.propertyType ?? null,
        property_subtype: booking.propertySubType ?? null,
        services: booking.services ?? null,
        services_readable:
          booking.services?.map((s) => s.label ?? s.type).join(", ") ?? null,
        appointment_date: booking.appointment?.date ?? null,
        appointment_slot: booking.appointment?.timeSlot ?? null,
        congestion_charge: booking.additionalCharges?.congestionCharge ?? false,
        parking_charge: booking.additionalCharges?.parkingCharge ?? false,
        gclid: attribution.gclid ?? null,
        gbraid: attribution.gbraid ?? null,
        wbraid: attribution.wbraid ?? null,
        utm_source: attribution.utm_source ?? null,
        utm_medium: attribution.utm_medium ?? null,
        utm_campaign: attribution.utm_campaign ?? null,
        utm_term: attribution.utm_term ?? null,
        utm_content: attribution.utm_content ?? null,
        landing_page: attribution.landing_page ?? null,
        referrer: attribution.referrer ?? null,
      } as unknown as never);
    } catch (dbErr) {
      console.error("Booking DB insert failed (non-blocking):", dbErr);
    }

    const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    if (googleSheetUrl) {
      fetch(googleSheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...booking,
          status: "Pending Payment",
          paymentStatus: "Unpaid",
          stripeSessionId: session.id,
        }),
      }).catch((err) => console.error("Sheet pre-payment log:", err));
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 },
    );
  }
}
