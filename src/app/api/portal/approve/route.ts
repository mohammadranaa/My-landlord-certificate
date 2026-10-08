import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { untyped } from "@/lib/portal/untyped";
import { SITE_URL, button, emailLayout, escapeHtml, sendEmail } from "@/lib/portal/email";

// Internal-use only — called by your platform's "Approve" / "Suspend"
// buttons (or Postman). Protected by a shared secret.
//
//   POST /api/portal/approve
//   Header: x-portal-admin-key: <PORTAL_ADMIN_KEY>
//   Body:   { "authUserId": "<uuid>", "clientId": "<uuid>" }                  → approve
//           { "authUserId": "<uuid>", "action": "suspend" }                   → suspend
//           { "authUserId": "<uuid>", "action": "reinstate" }                 → back to approved
//
// Any number of agents can be approved against the same clientId — that's
// how multi-user agencies work.

function keyMatches(provided: string | null): boolean {
  const expected = process.env.PORTAL_ADMIN_KEY;
  if (!provided || !expected) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  if (!keyMatches(request.headers.get("x-portal-admin-key"))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const authUserId = body?.authUserId as string | undefined;
  const clientId = body?.clientId as string | undefined;
  const action = (body?.action as string | undefined) ?? "approve";

  if (!authUserId || !["approve", "suspend", "reinstate"].includes(action)) {
    return NextResponse.json({ error: "authUserId and a valid action are required" }, { status: 400 });
  }

  const supabase = untyped(createServiceRoleClient());

  const { data: portalUser } = await supabase
    .from("portal_users")
    .select("id, email, full_name, agency_name, status, client_id")
    .eq("auth_user_id", authUserId)
    .maybeSingle();

  if (!portalUser) {
    return NextResponse.json({ error: "Portal user not found" }, { status: 404 });
  }
  const pu = portalUser as {
    email: string;
    full_name: string;
    agency_name: string;
    status: string;
    client_id: string | null;
  };

  if (action === "suspend") {
    const { error } = await supabase.from("portal_users").update({ status: "suspended" }).eq("auth_user_id", authUserId);
    if (error) return NextResponse.json({ error: "Failed to suspend" }, { status: 500 });
    return NextResponse.json({ success: true, status: "suspended" });
  }

  if (action === "reinstate") {
    if (!pu.client_id) {
      return NextResponse.json({ error: "User has no linked client — approve with a clientId instead" }, { status: 400 });
    }
    const { error } = await supabase.from("portal_users").update({ status: "approved" }).eq("auth_user_id", authUserId);
    if (error) return NextResponse.json({ error: "Failed to reinstate" }, { status: 500 });
    return NextResponse.json({ success: true, status: "approved" });
  }

  // approve
  if (!clientId) {
    return NextResponse.json({ error: "clientId is required to approve" }, { status: 400 });
  }

  const { data: client } = await supabase.from("clients").select("id, portal_user_id").eq("id", clientId).maybeSingle();
  if (!client) {
    return NextResponse.json({ error: "Client not found" }, { status: 404 });
  }

  // Confirm the email so an unconfirmed signup can still log in once approved.
  await supabase.auth.admin.updateUserById(authUserId, { email_confirm: true });

  const { error: updateError } = await supabase
    .from("portal_users")
    .update({ status: "approved", client_id: clientId, approved_at: new Date().toISOString() })
    .eq("auth_user_id", authUserId);

  if (updateError) {
    return NextResponse.json({ error: "Failed to approve portal user" }, { status: 500 });
  }

  // Legacy single-user link — only set if empty, so it never overwrites the
  // first agent at a multi-user agency. Access no longer depends on it.
  if (!(client as { portal_user_id: string | null }).portal_user_id) {
    await supabase.from("clients").update({ portal_user_id: authUserId }).eq("id", clientId);
  }

  const emailed = await sendEmail({
    to: pu.email,
    subject: "Your My Landlord Certificate portal access is approved",
    html: emailLayout(
      "Your portal access is approved",
      `<p style="font-size:15px;">Hi ${escapeHtml(pu.full_name)},</p>
       <p style="font-size:15px;">Your agent portal account for <strong>${escapeHtml(
         pu.agency_name,
       )}</strong> is ready. You can now see every property, certificate, renewal date and invoice in one place.</p>
       <p style="margin:24px 0;">${button(`${SITE_URL}/portal/login`, "Log in to the portal")}</p>
       <p style="font-size:13px;color:#6B7280;">Forgotten your password? Use "Forgot password" on the login page.</p>`,
    ),
  });

  return NextResponse.json({ success: true, status: "approved", emailed });
}
