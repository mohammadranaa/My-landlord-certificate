"use server";

import { revalidatePath } from "next/cache";
import { createClient, createServiceRoleClient } from "@/lib/supabase/server";
import type { AccountUpdateData, SignupData } from "@/lib/portal/schemas";
import type { PortalUserStatus } from "@/types/database";
import { untyped } from "@/lib/portal/untyped";
import { SITE_URL, detailsTable, emailLayout, escapeHtml, sendStaffEmail } from "@/lib/portal/email";

export type SignupResult = { success: true } | { success: false; error: string };

/**
 * Supabase Auth writes to auth.users, but a service-role query against a
 * table with a foreign key into auth.users can occasionally run before
 * that row is visible yet — a few hundred ms of race, not a real error.
 * Poll briefly for the row to actually be there before inserting against
 * it, instead of assuming signUp() returning a user id means it's
 * immediately queryable everywhere.
 */
async function waitForAuthUser(
  serviceClient: ReturnType<typeof createServiceRoleClient>,
  userId: string,
  attempts = 5,
  delayMs = 300,
): Promise<boolean> {
  for (let i = 0; i < attempts; i++) {
    const { data, error } = await serviceClient.auth.admin.getUserById(userId);
    if (data?.user && !error) return true;
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  return false;
}

/**
 * "Request portal access" — public, so the portal can be marketed. Creates
 * the account as `pending`, records an access_request, and emails your team.
 * Nobody sees any data until you approve them and link them to a client.
 */
export async function signUpPortalUser(data: SignupData): Promise<SignupResult> {
  const supabase = await createClient();

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      // Critical: handle_new_user() (the trigger on auth.users) checks this
      // flag and skips creating a `profiles` row when it's set. Without it,
      // every portal signup silently became internal staff with full
      // access to every client's data. Never remove this.
      data: { signup_type: "portal" },
      emailRedirectTo: `${SITE_URL}/portal/auth/callback?next=/portal/pending`,
    },
  });

  if (authError) {
    return { success: false, error: authError.message };
  }
  if (!authData.user) {
    return { success: false, error: "Could not create account. Please try again." };
  }

  // Service role bypasses RLS — needed because if email confirmation is
  // required, there's no active session yet at this point to satisfy the
  // "authenticated, auth.uid() = auth_user_id" insert policy.
  const serviceClient = createServiceRoleClient();

  const userReady = await waitForAuthUser(serviceClient, authData.user.id);
  if (!userReady) {
    console.error("Auth user never became visible for insert:", authData.user.id);
    return {
      success: false,
      error:
        "Your account was created but setup is taking longer than expected. Please try logging in in a minute, or contact support if it persists.",
    };
  }

  const { data: inserted, error: insertError } = await untyped(serviceClient)
    .from("portal_users")
    .insert({
      auth_user_id: authData.user.id,
      agency_name: data.agencyName,
      full_name: data.fullName,
      email: data.email,
      phone: data.phone || null,
      website: data.website || null,
      properties_managed: data.propertiesManaged ?? 0,
    })
    .select("id")
    .single();

  if (insertError) {
    // Auth user now exists without a portal_users row — surfaced clearly
    // so it can be fixed manually rather than silently orphaned.
    console.error("portal_users insert failed for", authData.user.id, insertError);
    return {
      success: false,
      error: "Account created but profile setup failed. Please contact support.",
    };
  }

  // Record the access request (for reporting / future automation) and tell the team.
  await untyped(serviceClient).from("portal_requests").insert({
    portal_user_id: (inserted as { id: string }).id,
    auth_user_id: authData.user.id,
    request_type: "access_request",
    notes: `${data.agencyName} — ${data.propertiesManaged ?? 0} properties managed`,
  });

  await sendStaffEmail(
    `[Portal] New access request — ${data.agencyName}`,
    emailLayout(
      `New portal access request: ${data.agencyName}`,
      `${detailsTable([
        ["Agency", data.agencyName],
        ["Name", data.fullName],
        ["Email", data.email],
        ["Phone", data.phone],
        ["Website", data.website],
        ["Properties managed", String(data.propertiesManaged ?? 0)],
        ["Auth user ID", authData.user.id],
      ])}<p style="font-size:14px;">To approve, link this agent to their client record (new or existing) using the approve endpoint or the Portal Access section in the platform.</p><p style="font-size:13px;color:#6B7280;">Reply to this email to contact ${escapeHtml(
        data.fullName,
      )} directly.</p>`,
    ),
    data.email,
  );

  return { success: true };
}

export type LoginResult =
  | { success: true; redirectTo: string }
  | { success: false; error: string };

export async function loginPortalUser(
  email: string,
  password: string,
): Promise<LoginResult> {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    if (error?.message?.toLowerCase().includes("email not confirmed")) {
      return {
        success: false,
        error: "Please confirm your email address first — check your inbox for our confirmation link.",
      };
    }
    return { success: false, error: "Incorrect email or password." };
  }

  const { data: statusRow } = await supabase
    .from("portal_users")
    .select("status")
    .eq("auth_user_id", data.user.id)
    .maybeSingle();
  // Same known "*"/column-select-to-`never` limitation as getPortalSession().
  const portalUser = statusRow as { status: PortalUserStatus } | null;

  if (!portalUser) {
    // Signed-in Auth user with no matching portal_users row — not a valid
    // agent login. Sign them back out rather than leaving a dangling session.
    await supabase.auth.signOut();
    return { success: false, error: "No agent account found for this login." };
  }

  // Audit trail — visible to colleagues on the Account page.
  await untyped(supabase)
    .from("portal_users")
    .update({ last_login_at: new Date().toISOString() })
    .eq("auth_user_id", data.user.id);

  if (portalUser.status === "approved") {
    return { success: true, redirectTo: "/portal/dashboard" };
  }

  return { success: true, redirectTo: "/portal/pending" };
}

export type AccountUpdateResult = { success: true } | { success: false; error: string };

export async function updatePortalAccount(
  data: AccountUpdateData,
): Promise<AccountUpdateResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "You've been signed out — please log in again." };
  }

  // Uses the regular (non-service-role) client deliberately — RLS's "Agent
  // can update own portal_users row" policy plus the
  // protect_portal_users_admin_fields trigger already ensure this can only
  // touch this agent's own row and can never change status/client_id/
  // approved_*, so no extra guarding needed here.
  const { error } = await supabase
    .from("portal_users")
    .update({
      agency_name: data.agencyName,
      full_name: data.fullName,
      phone: data.phone || null,
      website: data.website || null,
      properties_managed: data.propertiesManaged ?? 0,
    } as unknown as never)
    .eq("auth_user_id", user.id);

  if (error) {
    return { success: false, error: "Couldn't save your changes. Please try again." };
  }

  revalidatePath("/portal/account");
  return { success: true };
}

// ── Password reset / change ─────────────────────────────────────────────────

export type SimpleResult = { success: true } | { success: false; error: string };

/**
 * Always reports success, whether or not the email exists, so this can't be
 * used to discover which addresses have portal accounts.
 */
export async function requestPasswordReset(email: string): Promise<SimpleResult> {
  const trimmed = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return { success: false, error: "Enter a valid email address." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(trimmed, {
    redirectTo: `${SITE_URL}/portal/auth/callback?next=/portal/reset-password`,
  });
  if (error) console.error("[portal] resetPasswordForEmail failed", error.message);

  return { success: true };
}

export async function updatePassword(password: string): Promise<SimpleResult> {
  if (password.length < 8) {
    return { success: false, error: "Password must be at least 8 characters." };
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { success: false, error: "Your reset link has expired — please request a new one." };
  }

  const { error } = await supabase.auth.updateUser({ password });
  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}
