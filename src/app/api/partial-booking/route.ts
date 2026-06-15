import { NextRequest, NextResponse } from "next/server";

interface PartialService {
  type: string;
  variant?: string;
  price: number;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as {
      step?: number;
      name?: string;
      email?: string;
      phone?: string;
      propertyType?: string;
      propertySubType?: string;
      services?: PartialService[];
      property?: { streetAddress?: string; city?: string; postcode?: string };
      appointment?: { date?: string; timeSlot?: string };
      totalPrice?: number;
      sessionId?: string;
    };

    const {
      step,
      name,
      email,
      phone,
      propertyType,
      propertySubType,
      services,
      property,
      appointment,
      totalPrice,
      sessionId,
    } = data;

    if (!email) {
      return NextResponse.json({ saved: false });
    }

    const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    if (googleSheetUrl) {
      const servicesReadable = (services ?? [])
        .map(
          (s) =>
            `${s.type}${s.variant ? ` - ${s.variant}` : ""} (£${s.price?.toFixed(2) ?? "TBC"})`,
        )
        .join(", ");

      await fetch(googleSheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: { name, email, phone },
          property,
          propertyType,
          propertySubType,
          services,
          appointment,
          totalPrice: totalPrice ?? 0,
          status: `Partial — Step ${step ?? "?"}`,
          stripeSessionId: "",
          sessionId,
          source: "partial_form",
          servicesReadable,
        }),
      }).catch((err) => console.error("Partial booking sheet error:", err));
    }

    return NextResponse.json({ saved: true });
  } catch (err) {
    console.error("Partial booking save error:", err);
    return NextResponse.json({ saved: false });
  }
}
