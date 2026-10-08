import { NextResponse } from "next/server";
import { createServiceRoleClient } from "@/lib/supabase/server";
import { untyped } from "@/lib/portal/untyped";
import { classifyCertType, CERT_TYPE_LABELS, daysUntil } from "@/lib/portal/properties";
import { formatDate } from "@/lib/portal/format";
import { SITE_URL, button, emailLayout, escapeHtml, sendEmail, staffInbox } from "@/lib/portal/email";

export const dynamic = "force-dynamic";

const THRESHOLDS = [60, 30, 7]; // days before expiry
const HORIZON = Math.max(...THRESHOLDS);

interface Cert {
  id: string;
  client_id: string;
  property_id: string | null;
  certificate_type: string | null;
  issue_date: string | null;
  expiry_date: string;
  created_at: string;
}

/**
 * Runs daily via Vercel Cron (see vercel.json). For every agency with
 * approved portal users, emails one digest of certificates entering the
 * 60 / 30 / 7-day windows. Each certificate is reminded once per window —
 * certificate_reminders prevents repeats. Certificates already replaced by
 * a newer one of the same type at the same property are skipped.
 */
export async function GET(request: Request) {
  const expected = process.env.CRON_SECRET;
  if (!expected || request.headers.get("authorization") !== `Bearer ${expected}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = untyped(createServiceRoleClient());

  const today = new Date().toISOString().slice(0, 10);
  const horizon = new Date(Date.now() + HORIZON * 86_400_000).toISOString().slice(0, 10);

  const { data: agents } = await supabase
    .from("portal_users")
    .select("email, client_id")
    .eq("status", "approved")
    .not("client_id", "is", null);

  const emailsByClient = new Map<string, string[]>();
  for (const a of (agents ?? []) as { email: string; client_id: string }[]) {
    emailsByClient.set(a.client_id, [...(emailsByClient.get(a.client_id) ?? []), a.email]);
  }
  const clientIds = Array.from(emailsByClient.keys());
  if (clientIds.length === 0) return NextResponse.json({ sent: 0, reason: "no approved agents" });

  const { data: allCerts } = await supabase
    .from("certificates")
    .select("id, client_id, property_id, certificate_type, issue_date, expiry_date, created_at")
    .in("client_id", clientIds)
    .not("expiry_date", "is", null);

  const certs = (allCerts ?? []) as Cert[];

  // Latest certificate per property + type — older ones have been superseded.
  const latestKey = (c: Cert) => `${c.property_id}|${classifyCertType(c.certificate_type) ?? c.certificate_type}`;
  const latest = new Map<string, Cert>();
  for (const c of certs) {
    const k = latestKey(c);
    const cur = latest.get(k);
    if (!cur || (c.issue_date ?? c.created_at) > (cur.issue_date ?? cur.created_at)) latest.set(k, c);
  }

  const due = Array.from(latest.values()).filter((c) => c.expiry_date >= today && c.expiry_date <= horizon);
  if (due.length === 0) return NextResponse.json({ sent: 0, reason: "nothing due" });

  const { data: already } = await supabase
    .from("certificate_reminders")
    .select("certificate_id, threshold_days")
    .in(
      "certificate_id",
      due.map((c) => c.id),
    );
  const sentSet = new Set(
    ((already ?? []) as { certificate_id: string; threshold_days: number }[]).map(
      (r) => `${r.certificate_id}|${r.threshold_days}`,
    ),
  );

  const propertyIds = Array.from(new Set(due.map((c) => c.property_id).filter(Boolean))) as string[];
  const { data: props } = await supabase.from("properties").select("id, address, postcode").in("id", propertyIds);
  const propById = new Map(
    ((props ?? []) as { id: string; address: string; postcode: string | null }[]).map((p) => [p.id, p]),
  );

  // Work out what to send, grouped by agency.
  const digest = new Map<string, { cert: Cert; days: number; window: number }[]>();
  const toRecord: { certificate_id: string; threshold_days: number; client_id: string }[] = [];

  for (const c of due) {
    const days = daysUntil(c.expiry_date);
    if (days === null) continue;
    const applicable = THRESHOLDS.filter((t) => days <= t);
    if (applicable.length === 0) continue;
    const window = Math.min(...applicable);
    if (sentSet.has(`${c.id}|${window}`)) continue;

    digest.set(c.client_id, [...(digest.get(c.client_id) ?? []), { cert: c, days, window }]);
    for (const t of applicable) {
      if (!sentSet.has(`${c.id}|${t}`)) toRecord.push({ certificate_id: c.id, threshold_days: t, client_id: c.client_id });
    }
  }

  let sent = 0;
  for (const [clientId, items] of digest) {
    const recipients = emailsByClient.get(clientId) ?? [];
    if (recipients.length === 0) continue;

    items.sort((a, b) => a.days - b.days);
    const rows = items
      .map(({ cert, days }) => {
        const p = cert.property_id ? propById.get(cert.property_id) : null;
        const code = classifyCertType(cert.certificate_type);
        const label = code ? CERT_TYPE_LABELS[code] : cert.certificate_type ?? "Certificate";
        return `<tr>
          <td style="padding:8px 12px 8px 0;border-top:1px solid #f0eee7;font-size:14px;">${escapeHtml(p?.address ?? "Property")}${
            p?.postcode ? `, ${escapeHtml(p.postcode)}` : ""
          }</td>
          <td style="padding:8px 12px 8px 0;border-top:1px solid #f0eee7;font-size:14px;">${escapeHtml(label)}</td>
          <td style="padding:8px 0;border-top:1px solid #f0eee7;font-size:14px;color:${days <= 7 ? "#a52222" : "#96620a"};white-space:nowrap;">${escapeHtml(
            formatDate(cert.expiry_date),
          )} (${days}d)</td>
        </tr>`;
      })
      .join("");

    const ok = await sendEmail({
      to: recipients,
      bcc: staffInbox() ?? undefined,
      subject: `${items.length} certificate${items.length === 1 ? "" : "s"} due for renewal`,
      html: emailLayout(
        "Certificates due for renewal",
        `<p style="font-size:15px;">The following certificates are coming up for renewal. Book them now to avoid a compliance gap.</p>
         <table width="100%" cellpadding="0" cellspacing="0" style="margin:16px 0;">${rows}</table>
         <p style="margin:24px 0;">${button(`${SITE_URL}/portal/dashboard`, "Request renewals in the portal")}</p>`,
      ),
    });

    if (ok) {
      sent += 1;
      const records = toRecord
        .filter((r) => r.client_id === clientId)
        .map((r) => ({ certificate_id: r.certificate_id, threshold_days: r.threshold_days, recipients }));
      if (records.length) {
        await supabase.from("certificate_reminders").upsert(records, {
          onConflict: "certificate_id,threshold_days",
          ignoreDuplicates: true,
        });
      }
    }
  }

  return NextResponse.json({ sent, agencies: digest.size, certificates: toRecord.length });
}
