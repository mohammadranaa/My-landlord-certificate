"use server";

import { createClient } from "@/lib/supabase/server";
import { getPortalSession } from "@/lib/portal/session";
import { untyped } from "@/lib/portal/untyped";
import { getPortfolioData, CERT_TYPE_LABELS, CERT_CODES, type CertCode } from "@/lib/portal/properties";
import { formatDate } from "@/lib/portal/format";
import { SITE_URL, detailsTable, emailLayout, escapeHtml, sendStaffEmail } from "@/lib/portal/email";

export type PortalRequestType = "renewal" | "bulk_renewal" | "download_pack";

export type PortalRequestResult = { success: true; emailed: boolean } | { success: false; error: string };

const TYPE_LABELS: Record<PortalRequestType, string> = {
  renewal: "Renewal request",
  bulk_renewal: "Bulk renewal request",
  download_pack: "Compliance pack request",
};

const MAX_REQUESTS_PER_10_MIN = 15;

/**
 * Handles every action button in the portal. The request is always written
 * to portal_requests first (so nothing is lost if email fails), then your
 * team is emailed. portal_requests.status / job_id exist so this can later
 * create job cards automatically without changing the portal.
 */
export async function submitPortalRequest(input: {
  type: PortalRequestType;
  propertyId?: string | null;
  certificateCode?: string | null;
  notes?: string | null;
}): Promise<PortalRequestResult> {
  if (!["renewal", "bulk_renewal", "download_pack"].includes(input.type)) {
    return { success: false, error: "Unknown request type." };
  }

  const session = await getPortalSession();
  if (session.status !== "approved" || !session.portalUser.client_id) {
    return { success: false, error: "Your session has expired — please log in again." };
  }
  const portalUser = session.portalUser;
  const clientId = portalUser.client_id as string;

  const notes = (input.notes ?? "").trim().slice(0, 1000) || null;
  const certCode =
    input.certificateCode && (CERT_CODES as string[]).includes(input.certificateCode)
      ? (input.certificateCode as CertCode)
      : null;

  const supabase = untyped(await createClient());

  // Basic abuse protection.
  const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from("portal_requests")
    .select("id", { count: "exact", head: true })
    .eq("auth_user_id", portalUser.auth_user_id)
    .gte("created_at", since);
  if ((count ?? 0) >= MAX_REQUESTS_PER_10_MIN) {
    return { success: false, error: "Too many requests in a short time — please wait a few minutes." };
  }

  // The property must belong to this agency.
  type PropertyRef = { id: string; address: string; postcode: string | null };
  let property: PropertyRef | null = null;
  if (input.propertyId) {
    const { data } = await supabase
      .from("properties")
      .select("id, address, postcode")
      .eq("id", input.propertyId)
      .eq("client_id", clientId)
      .maybeSingle();
    if (!data) return { success: false, error: "That property couldn't be found on your account." };
    property = data as PropertyRef;
  }

  const { error: insertError } = await supabase.from("portal_requests").insert({
    client_id: clientId,
    portal_user_id: portalUser.id,
    auth_user_id: portalUser.auth_user_id,
    request_type: input.type,
    property_id: property?.id ?? null,
    certificate_type: certCode ? CERT_TYPE_LABELS[certCode] : null,
    notes,
  });

  if (insertError) {
    console.error("[portal request] insert failed", insertError);
    return { success: false, error: "We couldn't send your request. Please try again or call us." };
  }

  // Build the staff email.
  const rows: [string, string | null][] = [
    ["Request", TYPE_LABELS[input.type]],
    ["Agency", portalUser.agency_name],
    ["Requested by", `${portalUser.full_name} (${portalUser.email})`],
    ["Phone", portalUser.phone],
    ["Property", property ? `${property.address}${property.postcode ? `, ${property.postcode}` : ""}` : null],
    ["Certificate", certCode ? CERT_TYPE_LABELS[certCode] : null],
    ["Access notes", notes],
  ];

  let extraHtml = "";
  if (input.type === "bulk_renewal") {
    const { groups } = await getPortfolioData(clientId);
    const lines: string[] = [];
    for (const g of groups) {
      for (const code of CERT_CODES) {
        const s = g.statuses[code];
        if (s !== "expired" && s !== "expiring") continue;
        const certs = g.certsByCode[code];
        const expiry = certs.length ? certs.reduce((a, b) => ((a.issue_date ?? "") >= (b.issue_date ?? "") ? a : b)).expiry_date : null;
        lines.push(
          `<li style="margin:0 0 6px;font-size:14px;">${escapeHtml(g.property.address)} — ${escapeHtml(
            CERT_TYPE_LABELS[code],
          )} (${s === "expired" ? "expired" : "expires"} ${escapeHtml(formatDate(expiry))})</li>`,
        );
      }
    }
    extraHtml = lines.length
      ? `<p style="font-size:14px;margin:0 0 8px;"><strong>Certificates covered (${lines.length}):</strong></p><ul style="padding-left:18px;margin:0 0 16px;">${lines.join("")}</ul>`
      : `<p style="font-size:14px;">No expired or expiring certificates on file right now — worth calling the agent to confirm what they need.</p>`;
  }

  const subjectTarget = property ? ` — ${property.address}` : "";
  const html = emailLayout(
    `${TYPE_LABELS[input.type]} from ${portalUser.agency_name}`,
    `${detailsTable(rows)}${extraHtml}<p style="font-size:13px;color:#6B7280;">Logged in portal_requests (status: new). Reply to this email to contact the agent directly.</p><p style="font-size:13px;color:#6B7280;">${escapeHtml(
      SITE_URL,
    )}</p>`,
  );

  const emailed = await sendStaffEmail(
    `[Portal] ${TYPE_LABELS[input.type]} — ${portalUser.agency_name}${subjectTarget}`,
    html,
    portalUser.email,
  );

  return { success: true, emailed };
}
