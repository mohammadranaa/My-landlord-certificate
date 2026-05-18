import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createServiceRoleClient } from "@/lib/supabase/server";
import type { Database } from "@/types/database";

type LeadInsert = Database["public"]["Tables"]["letting_agent_leads"]["Insert"];

const PORTFOLIO_TO_COUNT: Record<string, number> = {
  "10-20": 10,
  "20-50": 20,
  "50-100": 50,
  "100+": 100,
};

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

  const { name, email, phone, businessName, businessWebsite, propertiesManaged } = parsed.data;

  console.log("[letting-agent-lead]", { name, businessName, email, propertiesManaged });

  try {
    const supabase = createServiceRoleClient();
    const insertData: LeadInsert = {
      agency_name: businessName,
      contact_name: name,
      email,
      phone,
      properties_count: PORTFOLIO_TO_COUNT[propertiesManaged],
      areas: businessWebsite?.trim() || null,
      notes: null,
      status: "new",
    };
    const { error } = await supabase.from("letting_agent_leads").insert(insertData as never);
    if (error) {
      console.error("[letting-agent-lead] Supabase error:", error.message);
    }
  } catch (err) {
    console.error("[letting-agent-lead] Supabase unavailable:", err);
  }

  return NextResponse.json({ success: true });
}
