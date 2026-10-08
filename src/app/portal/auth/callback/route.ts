import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/**
 * Landing point for links in Supabase Auth emails (password reset, email
 * confirmation). Exchanges the one-time code for a session, then sends the
 * user on. `next` is restricted to /portal paths so this can't be used as
 * an open redirect.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const rawNext = url.searchParams.get("next") ?? "/portal";
  const next = rawNext.startsWith("/portal") && !rawNext.startsWith("//") ? rawNext : "/portal";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(new URL(next, url.origin));
    }
    console.error("[portal] exchangeCodeForSession failed", error.message);
  }

  return NextResponse.redirect(new URL("/portal/login?error=link-expired", url.origin));
}
