"use server";

import { revalidatePath } from "next/cache";
import { createClient, createServiceRoleClient } from "@/lib/supabase/server";
import type { AccountUpdateData, SignupData } from "@/lib/portal/schemas";
import type { PortalUserStatus } from "@/types/database";

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

export async function signUpPortalUser(data: SignupData): Promise<SignupResult> {
  const supabase = await createClient();

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
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

  const { error: insertError } = await serviceClient.from("portal_users").insert({
    auth_user_id: authData.user.id,
    agency_name: data.agencyName,
    full_name: data.fullName,
    email: data.email,
    phone: data.phone || null,
    website: data.website || null,
    properties_managed: data.propertiesManaged ?? 0,
  } as unknown as never);

  if (insertError) {
    // Auth user now exists without a portal_users row — surfaced clearly
    // so it can be fixed manually rather than silently orphaned.
    console.error("portal_users insert failed for", authData.user.id, insertError);
    return {
      success: false,
      error: "Account created but profile setup failed. Please contact support.",
    };
  }

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
