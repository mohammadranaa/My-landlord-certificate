import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

// Landing point for Supabase email links (password reset). Exchanges the
// one-time code for a session, then sends the user on. `next` is restricted
// to /portal/* paths so this can't be used as an open redirect.
export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get("code");
  const nextParam = searchParams.get("next") ?? "/portal/dashboard";
  const next =
    nextParam.startsWith("/portal/") && !nextParam.startsWith("//") ? nextParam : "/portal/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/portal/reset-password`);
}
