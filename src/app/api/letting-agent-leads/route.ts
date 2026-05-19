import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  businessName: z.string().min(2),
  businessWebsite: z.string().optional(),
  propertiesManaged: z.enum(["10-20", "20-50", "50-100", "100+"]),
});

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: "Invalid form data", issues: parsed.error.issues },
      { status: 422 },
    );
  }

  const lead = parsed.data;

  console.log("[letting-agent-lead]", JSON.stringify(lead));

  const sheetUrl = process.env.LETTING_AGENT_LEADS_SHEET_URL;
  if (sheetUrl) {
    try {
      const sheetRes = await fetch(sheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
        redirect: "follow",
      });
      console.log("[letting-agent-lead] Sheet response status:", sheetRes.status);
      const sheetText = await sheetRes.text();
      console.log("[letting-agent-lead] Sheet response body:", sheetText);
    } catch (err) {
      console.error("[letting-agent-lead] Google Sheet submission failed:", err);
    }
  } else {
    console.warn("[letting-agent-lead] LETTING_AGENT_LEADS_SHEET_URL not set — lead logged above only");
  }

  return NextResponse.json({ success: true });
}
