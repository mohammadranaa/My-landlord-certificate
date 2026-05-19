import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  customer: z.object({
    name: z.string().min(1),
    email: z.string().min(1),
    phone: z.string().min(1),
    tenantPhone: z.string().optional(),
  }),
  property: z.object({
    streetAddress: z.string().min(1),
    city: z.string().min(1),
    postcode: z.string().min(1),
  }),
  propertyType: z.string().min(1),
  propertySubType: z.string().min(1),
  services: z.array(
    z.object({
      type: z.string(),
      variant: z.string(),
      price: z.number(),
    }),
  ),
  additionalCharges: z.object({
    congestionCharge: z.boolean(),
    parkingCharge: z.boolean(),
  }),
  appointment: z.object({
    date: z.string(),
    timeSlot: z.string(),
  }),
  totalPrice: z.number(),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid booking data", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  const booking = parsed.data;

  // Server-side log — fallback record if Sheet submission fails
  console.log("[booking]", JSON.stringify(booking, null, 2));

  const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
  if (sheetUrl) {
    try {
      const sheetRes = await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
        redirect: "follow",
      });
      console.log("[booking] Sheet response status:", sheetRes.status);
      const sheetText = await sheetRes.text();
      console.log("[booking] Sheet response body:", sheetText);
    } catch (err) {
      console.error("[booking] Google Sheet submission failed:", err);
    }
  } else {
    console.warn("[booking] NEXT_PUBLIC_GOOGLE_SHEET_URL is not set — skipping Sheet submission");
  }

  return NextResponse.json({ success: true });
}
