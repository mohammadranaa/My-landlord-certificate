import { NextRequest, NextResponse } from "next/server";

interface QuoteService {
  type: string;
  variant?: string;
  price: number;
}

export async function POST(request: NextRequest) {
  try {
    const { email, name, services, totalPrice } = (await request.json()) as {
      email?: string;
      name?: string;
      services?: QuoteService[];
      totalPrice?: number;
    };

    const servicesReadable = (services ?? [])
      .map((s) => `${s.variant ?? s.type}: £${s.price?.toFixed(2) ?? "TBC"}`)
      .join(", ");

    const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    if (googleSheetUrl) {
      await fetch(googleSheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: { name, email },
          services,
          totalPrice,
          status: "Saved Quote — Follow Up",
          source: "exit_intent",
          servicesReadable,
        }),
      }).catch((err) => console.error("Save quote sheet error:", err));
    }

    return NextResponse.json({ sent: true });
  } catch (err) {
    console.error("Save quote email error:", err);
    return NextResponse.json({ sent: false });
  }
}
