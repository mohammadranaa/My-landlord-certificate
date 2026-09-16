import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import { createClient } from "@/lib/supabase/server";
import { PortalRealtimeRefresher } from "@/components/portal/realtime-refresher";
import type {
  PortalJobDetail,
  PortalCertificate,
  PortalDiaryEntry,
  PortalInvoice,
} from "@/types/database";

export const metadata: Metadata = {
  title: "Job details — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

function renewalBadge(expiryDate: string | null) {
  if (!expiryDate) return null;
  const days = Math.ceil(
    (new Date(expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );
  if (days < 0) {
    return { label: "Expired", className: "bg-red-100 text-red-700" };
  }
  if (days <= 60) {
    return {
      label: `Renewal due in ${days}d`,
      className: "bg-brand-amber/15 text-brand-amber",
    };
  }
  return { label: "Valid", className: "bg-action-green/15 text-action-green" };
}

interface LineItem {
  qty?: number;
  unit_price?: number;
  description?: string;
}

function formatGbp(amount: number | null) {
  if (amount === null) return "—";
  return `£${amount.toFixed(2)}`;
}

const PAYMENT_STYLES: Record<string, string> = {
  paid: "bg-action-green/15 text-action-green",
  overdue: "bg-red-100 text-red-700",
  unpaid: "bg-brand-amber/15 text-brand-amber",
};
const DEFAULT_PAYMENT_STYLE = "bg-brand-grey/10 text-brand-grey";

export default async function PortalJobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireApprovedPortalUser();
  const { id } = await params;

  const supabase = await createClient();

  // Explicit column list only — never select("*") on jobs. See
  // database-PATCH-2-instructions.md.
  const { data: job, error: jobError } = await supabase
    .from("jobs")
    .select(
      "id, job_number, title, description, service_types, job_type, status, site_address, site_postcode, tenant_name, tenant_phone, scheduled_date, scheduled_slot, completed_date, certificate_status, certificate_delivery_date, client_id, created_at",
    )
    .eq("id", id)
    .maybeSingle()
    .returns<PortalJobDetail>();

  // If the job doesn't exist, or belongs to a different agent's client,
  // RLS already filtered it out at the database — either way this 404s.
  if (jobError || !job) {
    notFound();
  }

  const [{ data: certificates }, { data: diaryEntries }, { data: invoices }] =
    await Promise.all([
      supabase
        .from("certificates")
        .select(
          "id, job_id, certificate_type, site_address, issue_date, expiry_date, result, public_url, notes, created_at",
        )
        .eq("job_id", id)
        .order("created_at", { ascending: false })
        .returns<PortalCertificate[]>(),
      supabase
        .from("job_diary")
        .select("id, job_id, entry_type, content, author_name, is_internal, created_at")
        .eq("job_id", id)
        .eq("is_internal", false)
        .order("created_at", { ascending: false })
        .returns<PortalDiaryEntry[]>(),
      // Curated columns only — excludes company/client_*/created_by/notes/
      // payment_notes. See database-PATCH-3-instructions.md.
      supabase
        .from("invoices")
        .select(
          "id, job_id, invoice_number, doc_type, line_items, subtotal, discount, total, amount_paid, balance_due, status, date, sent_at",
        )
        .eq("job_id", id)
        .order("date", { ascending: false })
        .returns<PortalInvoice[]>(),
    ]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <PortalRealtimeRefresher
        channelName={`portal-job-${id}`}
        subscriptions={[
          { table: "jobs", filter: `id=eq.${id}` },
          { table: "certificates", filter: `job_id=eq.${id}` },
          { table: "job_diary", filter: `job_id=eq.${id}` },
        ]}
      />

      <Link
        href="/portal/dashboard"
        className="mb-6 inline-block text-sm text-compliance-blue hover:underline"
      >
        ← Back to jobs
      </Link>

      <h1 className="mb-1 text-2xl font-bold text-brand-charcoal">{job.title}</h1>
      <p className="mb-6 text-sm text-brand-grey">
        Job #{job.job_number} · {job.site_address}
        {job.site_postcode ? `, ${job.site_postcode}` : ""}
      </p>

      {/* ── Job details ──────────────────────────────────────────────── */}
      <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-border bg-white p-4 text-sm sm:grid-cols-3">
        <div>
          <p className="text-brand-grey">Status</p>
          <p className="font-medium text-brand-charcoal">{job.status}</p>
        </div>
        {job.scheduled_date && (
          <div>
            <p className="text-brand-grey">Scheduled</p>
            <p className="font-medium text-brand-charcoal">
              {job.scheduled_date}
              {job.scheduled_slot ? ` · ${job.scheduled_slot}` : ""}
            </p>
          </div>
        )}
        {job.completed_date && (
          <div>
            <p className="text-brand-grey">Completed</p>
            <p className="font-medium text-brand-charcoal">{job.completed_date}</p>
          </div>
        )}
        {job.tenant_name && (
          <div>
            <p className="text-brand-grey">Tenant</p>
            <p className="font-medium text-brand-charcoal">
              {job.tenant_name}
              {job.tenant_phone ? ` · ${job.tenant_phone}` : ""}
            </p>
          </div>
        )}
      </div>

      {job.description && (
        <div className="mb-8">
          <h2 className="mb-2 text-sm font-semibold text-brand-charcoal">
            Description
          </h2>
          <p className="text-sm text-brand-grey">{job.description}</p>
        </div>
      )}

      {/* ── Certificates + renewal ───────────────────────────────────── */}
      <div className="mb-8">
        <h2 className="mb-3 text-sm font-semibold text-brand-charcoal">
          Certificates
        </h2>
        {!certificates || certificates.length === 0 ? (
          <p className="text-sm text-brand-grey">
            No certificates issued for this job yet.
          </p>
        ) : (
          <div className="space-y-2">
            {certificates.map((cert) => {
              const badge = renewalBadge(cert.expiry_date);
              return (
                <div
                  key={cert.id}
                  className="flex items-center justify-between rounded-xl border border-border bg-white p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-brand-charcoal">
                      {cert.certificate_type}
                    </p>
                    <p className="text-xs text-brand-grey">
                      Issued {cert.issue_date ?? "—"}
                      {cert.expiry_date ? ` · Expires ${cert.expiry_date}` : ""}
                      {cert.result ? ` · ${cert.result}` : ""}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    {badge && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${badge.className}`}
                      >
                        {badge.label}
                      </span>
                    )}
                    {cert.public_url && (
                      <a
                        href={cert.public_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-compliance-blue hover:underline"
                      >
                        View PDF
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Invoice & payment status ─────────────────────────────────── */}
      <div className="mb-8">
        <h2 className="mb-3 text-sm font-semibold text-brand-charcoal">
          Invoice &amp; payment
        </h2>
        {!invoices || invoices.length === 0 ? (
          <p className="text-sm text-brand-grey">No invoice raised for this job yet.</p>
        ) : (
          <div className="space-y-3">
            {invoices.map((inv) => {
              const items = Array.isArray(inv.line_items)
                ? (inv.line_items as LineItem[])
                : [];
              return (
                <div key={inv.id} className="rounded-xl border border-border bg-white p-4">
                  <div className="mb-3 flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-brand-charcoal">
                        {inv.invoice_number ? `Invoice ${inv.invoice_number}` : "Invoice"}
                      </p>
                      <p className="text-xs text-brand-grey">
                        {inv.date ?? "—"}
                        {inv.sent_at ? ` · Sent ${new Date(inv.sent_at).toLocaleDateString("en-GB")}` : ""}
                      </p>
                    </div>
                    {inv.status && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          PAYMENT_STYLES[inv.status.toLowerCase()] ?? DEFAULT_PAYMENT_STYLE
                        }`}
                      >
                        {inv.status}
                      </span>
                    )}
                  </div>

                  {items.length > 0 && (
                    <table className="mb-3 w-full text-sm">
                      <tbody>
                        {items.map((item, i) => (
                          <tr key={i} className="border-t border-border first:border-t-0">
                            <td className="py-1.5 text-brand-charcoal">
                              {item.description ?? "—"}
                              {item.qty && item.qty !== 1 ? ` × ${item.qty}` : ""}
                            </td>
                            <td className="py-1.5 text-right text-brand-charcoal">
                              {item.unit_price !== undefined ? formatGbp(item.unit_price) : "—"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  <div className="grid grid-cols-2 gap-2 border-t border-border pt-3 text-sm sm:grid-cols-4">
                    <div>
                      <p className="text-brand-grey">Subtotal</p>
                      <p className="font-medium text-brand-charcoal">{formatGbp(inv.subtotal)}</p>
                    </div>
                    {inv.discount !== null && inv.discount !== 0 && (
                      <div>
                        <p className="text-brand-grey">Discount</p>
                        <p className="font-medium text-brand-charcoal">{formatGbp(inv.discount)}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-brand-grey">Total</p>
                      <p className="font-medium text-brand-charcoal">{formatGbp(inv.total)}</p>
                    </div>
                    <div>
                      <p className="text-brand-grey">Paid</p>
                      <p className="font-medium text-brand-charcoal">{formatGbp(inv.amount_paid)}</p>
                    </div>
                    <div>
                      <p className="text-brand-grey">Balance due</p>
                      <p className="font-medium text-brand-charcoal">{formatGbp(inv.balance_due)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ── Updates ──────────────────────────────────────────────────── */}
      <div>
        <h2 className="mb-3 text-sm font-semibold text-brand-charcoal">Updates</h2>
        {!diaryEntries || diaryEntries.length === 0 ? (
          <p className="text-sm text-brand-grey">No updates yet.</p>
        ) : (
          <div className="space-y-3">
            {diaryEntries.map((entry) => (
              <div
                key={entry.id}
                className="rounded-xl border border-border bg-white p-3"
              >
                <p className="text-sm text-brand-charcoal">{entry.content}</p>
                <p className="mt-1 text-xs text-brand-grey">
                  {entry.author_name ?? "MLC"} ·{" "}
                  {new Date(entry.created_at).toLocaleDateString("en-GB")}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
