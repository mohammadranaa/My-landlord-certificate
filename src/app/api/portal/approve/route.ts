import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createServiceRoleClient } from "@/lib/supabase/server";
import type { PortalUserStatus } from "@/types/database";

interface ApprovalPortalUserRow {
  id: string;
  email: string;
  full_name: string;
  agency_name: string;
  status: PortalUserStatus;
}

// Internal-use only — called from your own tooling (Postman, an internal
// admin page, a script), never from the public portal UI. Protected by a
// shared secret rather than a Supabase session, since there's no logged-in
// staff context in a plain API call.
//
// Request:
//   POST /api/portal/approve
//   Header: x-portal-admin-key: <PORTAL_ADMIN_KEY>
//   Body:   { "authUserId": "<uuid>", "clientId": "<uuid>" }
//
// authUserId = the pending agent's auth_user_id (from portal_users).
// clientId   = the clients.id row (client_type = 'Estate Agent') to link them to.
export async function POST(request: Request) {
  const adminKey = request.headers.get("x-portal-admin-key");
  if (!adminKey || adminKey !== process.env.PORTAL_ADMIN_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const authUserId = body?.authUserId as string | undefined;
  const clientId = body?.clientId as string | undefined;

  if (!authUserId || !clientId) {
    return NextResponse.json(
      { error: "authUserId and clientId are both required" },
      { status: 400 },
    );
  }

  // Service role — bypasses RLS, which is required here since this runs
  // with no agent session. The protect_portal_users_admin_fields trigger
  // was fixed to allow service-role writes through (auth.uid() is null in
  // that context) rather than silently reverting status/client_id/approved_*.
  const supabase = createServiceRoleClient();

  const { data: portalUser, error: fetchError } = await supabase
    .from("portal_users")
    .select("id, email, full_name, agency_name, status")
    .eq("auth_user_id", authUserId)
    .maybeSingle()
    .returns<ApprovalPortalUserRow>();

  if (fetchError || !portalUser) {
    return NextResponse.json({ error: "Portal user not found" }, { status: 404 });
  }

  const { error: updateError } = await supabase
    .from("portal_users")
    .update({
      status: "approved",
      client_id: clientId,
      approved_at: new Date().toISOString(),
    } as unknown as never)
    .eq("auth_user_id", authUserId);

  if (updateError) {
    return NextResponse.json({ error: "Failed to approve portal user" }, { status: 500 });
  }

  const { error: linkError } = await supabase
    .from("clients")
    .update({ portal_user_id: authUserId } as unknown as never)
    .eq("id", clientId);

  if (linkError) {
    // Approval saved but the client link failed — surfaced explicitly so
    // it gets fixed manually rather than leaving the agent "approved" with
    // no jobs visible (RLS is keyed off clients.portal_user_id).
    return NextResponse.json(
      { error: "Approved, but failed to link client record — link manually in Supabase." },
      { status: 500 },
    );
  }

  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "My Landlord Certificate <no-reply@mylandlordcertificate.co.uk>",
      to: portalUser.email,
      subject: "Your agent portal account is approved",
      html: `<p>Hi ${portalUser.full_name},</p><p>Your agent portal account for ${portalUser.agency_name} has been approved. You can now log in to view your jobs, certificates, and invoices.</p><p><a href="https://www.mylandlordcertificate.co.uk/portal/login">Log in to the portal</a></p>`,
    });
  }

  return NextResponse.json({ success: true });
}
