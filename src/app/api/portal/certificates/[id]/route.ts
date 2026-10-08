import { NextResponse } from "next/server";
import { createClient, createServiceRoleClient } from "@/lib/supabase/server";
import { getPortalSession } from "@/lib/portal/session";
import { untyped } from "@/lib/portal/untyped";

const BUCKET = "job-files";
const DOWNLOAD_TTL_SECONDS = 5 * 60; // opening/downloading a PDF
const SHARE_TTL_SECONDS = 7 * 24 * 60 * 60; // a link an agent sends to a landlord

/**
 * GET /api/portal/certificates/:id          → redirects to a 5-minute signed URL
 * GET /api/portal/certificates/:id?share=1  → returns { url, expiresAt } (7 days)
 *
 * Ownership is checked twice: RLS on the user's own session, plus an
 * explicit client_id match. The signed URL is created with the service role
 * only after both pass. This works whether the storage bucket is public or
 * private, so the bucket can be made private later without changing this.
 */
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const share = new URL(request.url).searchParams.get("share") === "1";

  const session = await getPortalSession();
  if (session.status !== "approved" || !session.portalUser.client_id) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const supabase = untyped(await createClient());
  const { data: cert } = await supabase
    .from("certificates")
    .select("id, storage_path, public_url, client_id")
    .eq("id", id)
    .eq("client_id", session.portalUser.client_id)
    .maybeSingle();

  if (!cert) {
    return NextResponse.json({ error: "Certificate not found" }, { status: 404 });
  }

  const row = cert as { storage_path: string | null; public_url: string | null };
  let path = row.storage_path;
  if (!path && row.public_url) {
    const marker = `/object/public/${BUCKET}/`;
    const idx = row.public_url.indexOf(marker);
    if (idx !== -1) path = decodeURIComponent(row.public_url.slice(idx + marker.length));
  }
  if (!path) {
    return NextResponse.json({ error: "No PDF uploaded for this certificate yet" }, { status: 404 });
  }

  const ttl = share ? SHARE_TTL_SECONDS : DOWNLOAD_TTL_SECONDS;
  const { data: signed, error } = await untyped(createServiceRoleClient())
    .storage.from(BUCKET)
    .createSignedUrl(path, ttl);

  if (error || !signed?.signedUrl) {
    console.error("[portal] createSignedUrl failed", id, error);
    return NextResponse.json({ error: "Couldn't prepare the PDF" }, { status: 500 });
  }

  if (share) {
    return NextResponse.json({
      url: signed.signedUrl,
      expiresAt: new Date(Date.now() + ttl * 1000).toISOString(),
    });
  }

  return NextResponse.redirect(signed.signedUrl, { status: 302 });
}
