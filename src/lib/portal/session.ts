import "server-only";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { PortalUser } from "@/types/database";

export type PortalSessionResult =
  | { status: "signed-out" }
  | { status: "no-portal-user"; authUserId: string }
  | { status: "pending"; portalUser: PortalUser }
  | { status: "suspended"; portalUser: PortalUser }
  | { status: "approved"; portalUser: PortalUser };

/**
 * Combines "get the current Supabase Auth session" with "look up their
 * portal_users row" in one call — nearly every /portal page needs both.
 * Server Components, Route Handlers, and Server Actions only (uses the
 * cookie-aware server client).
 */
export async function getPortalSession(): Promise<PortalSessionResult> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { status: "signed-out" };
  }

  const { data, error } = await supabase
    .from("portal_users")
    .select("*")
    .eq("auth_user_id", user.id)
    .maybeSingle();
  // Supabase's generated types resolve "*" selects to `never` for this schema
  // shape (same known limitation as the `bookings` cast in the Stripe webhook).
  const portalUser = data as PortalUser | null;

  if (error || !portalUser) {
    return { status: "no-portal-user", authUserId: user.id };
  }

  if (portalUser.status === "pending") {
    return { status: "pending", portalUser };
  }

  if (portalUser.status === "suspended") {
    return { status: "suspended", portalUser };
  }

  return { status: "approved", portalUser };
}

/**
 * Guard for authenticated-only pages (dashboard, job detail, account).
 * Redirects signed-out/unknown users to /portal/login, and
 * pending/suspended agents to /portal/pending. Call at the top of every
 * protected Server Component page — returns the PortalUser row on success.
 */
export async function requireApprovedPortalUser(): Promise<PortalUser> {
  const session = await getPortalSession();

  if (session.status === "signed-out" || session.status === "no-portal-user") {
    redirect("/portal/login");
  }

  if (session.status === "pending" || session.status === "suspended") {
    redirect("/portal/pending");
  }

  return session.portalUser;
}
