import { NextRequest, NextResponse } from "next/server";

const isMockMode =
  process.env.SERVICEM8_MOCK_MODE === "true" ||
  !process.env.SERVICEM8_ACCESS_TOKEN ||
  process.env.SERVICEM8_ACCESS_TOKEN === "your_token_here";

// ServiceM8 sends the updated job object as the POST body.
// Shape we care about — everything else is ignored.
interface SM8JobPayload {
  uuid?: string;
  status?: string;
  company_uuid?: string;
  contact_email?: string;
  job_address?: string;
}

export async function POST(request: NextRequest) {
  // Acknowledge immediately — ServiceM8 expects a 200 within a few seconds.
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ received: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (isMockMode) {
    console.log("[SM8 webhook] Mock mode — payload received but not processed:", JSON.stringify(body));
    return NextResponse.json({ received: true, mode: "mock" });
  }

  // ServiceM8 can batch multiple records; normalise to an array.
  const entries: SM8JobPayload[] = Array.isArray(body) ? body : [body as SM8JobPayload];

  for (const entry of entries) {
    const { uuid, status } = entry;

    if (!uuid) continue;

    switch (status) {
      case "Completed":
        // ServiceM8 handles certificate email + review request automatically
        // via its own automation rules. This hook is for monitoring only.
        console.log(`[SM8 webhook] Job ${uuid} completed`);
        // Future: write completion timestamp to analytics / customer portal
        break;

      case "Unsuccessful":
        console.log(`[SM8 webhook] Job ${uuid} marked unsuccessful`);
        // Future: trigger admin notification (email/Slack)
        break;

      default:
        // Other status transitions (Quote → Work Order, etc.) — log at debug level
        if (status) {
          console.log(`[SM8 webhook] Job ${uuid} status → ${status}`);
        }
    }
  }

  return NextResponse.json({ received: true });
}
