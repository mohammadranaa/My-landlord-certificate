import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") ?? "";

  // Enforce www — redirect non-www to www
  // Belt-and-braces: Vercel handles this at edge, but this catches any gaps
  if (
    host === "mylandlordcertificate.co.uk" ||
    host === "mylandlordcertificate.co.uk:443"
  ) {
    url.host = "www.mylandlordcertificate.co.uk";
    return NextResponse.redirect(url, {
      status: 301,
      headers: { "Cache-Control": "public, max-age=31536000" },
    });
  }

  // Remove trailing slashes (except homepage /)
  // Prevents /eicr/ and /eicr being treated as separate URLs by Google
  if (
    url.pathname !== "/" &&
    url.pathname.endsWith("/") &&
    !url.pathname.includes(".")
  ) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url, { status: 301 });
  }

  // Portal routes: refresh the Supabase Auth session cookie on every request
  // so sessions stay alive across page loads. Scoped to /portal only — no
  // need to call Supabase on every marketing page.
  if (url.pathname.startsWith("/portal")) {
    return updatePortalSession(request);
  }

  return NextResponse.next();
}

/**
 * Refreshes the Supabase session cookie for /portal requests.
 * Do not add logic between createServerClient() and supabase.auth.getUser()
 * — required by @supabase/ssr to correctly detect and refresh expired
 * sessions before they're read by Server Components.
 */
async function updatePortalSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  await supabase.auth.getUser();

  return supabaseResponse;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/|.*\\.).*)"],
};
