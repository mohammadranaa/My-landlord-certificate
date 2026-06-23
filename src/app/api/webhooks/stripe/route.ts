import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createServiceRoleClient } from "@/lib/supabase/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    try {
      const bookingData = session.metadata?.booking_data
        ? (JSON.parse(session.metadata.booking_data) as Record<string, unknown>)
        : {};

      const customerName = session.metadata?.customer_name ?? "";
      const customerEmail = session.customer_email ?? "";
      const customerPhone = session.metadata?.customer_phone ?? "";
      const propertyAddress = session.metadata?.property_address ?? "";
      const appointmentDate = session.metadata?.appointment_date ?? "";
      const appointmentSlot = session.metadata?.appointment_slot ?? "";
      const servicesReadable = session.metadata?.services_readable ?? "";
      const totalPaid = (session.amount_total ?? 0) / 100;

      // Mark the booking row as paid (created as 'pending' in /api/checkout).
      try {
        const supabase = createServiceRoleClient();
        await supabase
          .from("bookings")
          .update({
            payment_status: "paid",
            amount_total: totalPaid,
            paid_at: new Date().toISOString(),
          } as unknown as never)
          .eq("stripe_session_id", session.id);
      } catch (dbErr) {
        console.error("Booking DB update (paid) failed:", dbErr);
      }

      const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
      if (googleSheetUrl) {
        await fetch(googleSheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...bookingData,
            stripeSessionId: session.id,
            paymentStatus: "paid",
            totalPrice: totalPaid,
            source: "stripe_webhook",
          }),
        }).catch((err) => console.error("Google Sheet log failed:", err));
      }

      console.log("✅ Payment completed:", {
        sessionId: session.id,
        customer: customerName,
        email: customerEmail,
        phone: customerPhone,
        property: propertyAddress,
        services: servicesReadable,
        date: appointmentDate,
        slot: appointmentSlot,
        total: `£${totalPaid.toFixed(2)}`,
      });
    } catch (err) {
      console.error("Error processing checkout.session.completed:", err);
    }
  }

  if (event.type === "payment_intent.payment_failed") {
    const paymentIntent = event.data.object as Stripe.PaymentIntent;
    console.error("❌ Payment failed:", {
      id: paymentIntent.id,
      customer: paymentIntent.metadata?.customer_name,
      amount: paymentIntent.amount,
    });
  }

  return NextResponse.json({ received: true });
}
