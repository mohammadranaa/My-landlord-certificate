import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * The generated `Database` type in src/types/database.ts only describes the
 * tables the website originally used, so queries against newer tables
 * (portal_requests, certificate_reminders) or newer columns (storage_path,
 * service_types, last_login_at) resolve to `never`. Rather than patching
 * database.ts again, portal code routes those specific queries through this
 * untyped view of the same client. RLS still applies exactly as before.
 */
export function untyped(client: unknown): SupabaseClient {
  return client as SupabaseClient;
}
