import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
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

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/|.*\\.).*)"],
};
