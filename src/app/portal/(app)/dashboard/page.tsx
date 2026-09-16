import type { Metadata } from "next";
import Link from "next/link";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import { createClient } from "@/lib/supabase/server";
import { PortalRealtimeRefresher } from "@/components/portal/realtime-refresher";
import type { PortalJobSummary } from "@/types/database";

export const metadata: Metadata = {
  title: "Dashboard — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const STATUS_STYLES: Record<string, string> = {
  completed: "bg-action-green/15 text-action-green",
  cancelled: "bg-red-100 text-red-700",
};
const DEFAULT_STATUS_STYLE = "bg-compliance-blue/10 text-compliance-blue";
function statusClass(status: string) {
  return STATUS_STYLES[status.toLowerCase()] ?? DEFAULT_STATUS_STYLE;
}

const PAYMENT_STYLES: Record<string, string> = {
  paid: "bg-action-green/15 text-action-green",
  overdue: "bg-red-100 text-red-700",
  unpaid: "bg-brand-amber/15 text-brand-amber",
};
const DEFAULT_PAYMENT_STYLE = "bg-brand-grey/10 text-brand-grey";
function paymentClass(status: string) {
  return PAYMENT_STYLES[status.toLowerCase()] ?? DEFAULT_PAYMENT_STYLE;
}

function renewalBadge(expiryDate: string | null) {
  if (!expiryDate) return null;
  const days = Math.ceil(
    (new Date(expiryDate).getTime() - Date.now()) / (1000 * 60 * 60 * 24),
  );
  if (days < 0) return { label: "Expired", days, className: "bg-red-100 text-red-700" };
  if (days <= 60)
    return {
      label: `Due in ${days}d`,
      days,
      className: "bg-brand-amber/15 text-brand-amber",
    };
  return { label: "Valid", days, className: "bg-action-green/15 text-action-green" };
}

interface CertRow {
  job_id: string | null;
  certificate_type: string | null;
  expiry_date: string | null;
  public_url: string | null;
}

interface InvoiceRow {
  job_id: string | null;
  status: string | null;
  balance_due: number | null;
  date: string | null;
}

function formatGbp(amount: number | null) {
  if (amount === null) return "";
  return `£${amount.toFixed(2)}`;
}

export default async function PortalDashboardPage() {
  const portalUser = await requireApprovedPortalUser();

  const supabase = await createClient();

  // Deliberately narrow select — never select("*") on jobs. See
  // database-PATCH-2-instructions.md for why.
  const [{ data: jobs, error: jobsError }, { data: certs }, { data: invoices }] =
    await Promise.all([
      supabase
        .from("jobs")
        .select(
          "id, job_number, title, status, site_address, site_postcode, scheduled_date, scheduled_slot, completed_date, certificate_status, created_at",
        )
        .order("created_at", { ascending: false })
        .returns<PortalJobSummary[]>(),
      supabase
        .from("certificates")
        .select("job_id, certificate_type, expiry_date, public_url")
        .returns<CertRow[]>(),
      supabase
        .from("invoices")
        .select("job_id, status, balance_due, date")
        .order("date", { ascending: false })
        .returns<InvoiceRow[]>(),
    ]);

  if (jobsError) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-sm text-red-600">
          Couldn't load your jobs right now. Please refresh, or contact us if
          this keeps happening.
        </p>
      </div>
    );
  }

  const certsByJob = new Map<string, CertRow[]>();
  for (const cert of certs ?? []) {
    if (!cert.job_id) continue;
    const list = certsByJob.get(cert.job_id) ?? [];
    list.push(cert);
    certsByJob.set(cert.job_id, list);
  }

  const latestInvoiceByJob = new Map<string, InvoiceRow>();
  for (const inv of invoices ?? []) {
    if (!inv.job_id) continue;
    if (!latestInvoiceByJob.has(inv.job_id)) {
      latestInvoiceByJob.set(inv.job_id, inv);
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {portalUser.client_id && (
        <PortalRealtimeRefresher
          channelName={`portal-dashboard-${portalUser.client_id}`}
          subscriptions={[
            { table: "jobs", filter: `client_id=eq.${portalUser.client_id}` },
          ]}
        />
      )}

      <h1 className="mb-6 text-2xl font-bold text-brand-charcoal">
        Your properties
      </h1>

      {jobs.length === 0 ? (
        <p className="text-sm text-brand-grey">
          No jobs on file yet. Once we start work on one of your properties,
          it'll show up here.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-border bg-white">
          <table className="w-full min-w-[900px] text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs font-medium text-brand-grey">
                <th className="px-4 py-3">Property</th>
                <th className="px-4 py-3">Job</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Certificate</th>
                <th className="px-4 py-3">Renewal</th>
                <th className="px-4 py-3">Payment</th>
                <th className="px-4 py-3">Scheduled</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => {
                const jobCerts = certsByJob.get(job.id) ?? [];
                const invoice = latestInvoiceByJob.get(job.id);

                // Most urgent renewal across this job's certificates (soonest
                // expiry, or already expired) — the one worth surfacing.
                const mostUrgent = jobCerts
                  .map((c) => ({ cert: c, badge: renewalBadge(c.expiry_date) }))
                  .filter((x) => x.badge)
                  .sort((a, b) => (a.badge!.days ?? 0) - (b.badge!.days ?? 0))[0];

                return (
                  <tr
                    key={job.id}
                    className="border-b border-border last:border-b-0 hover:bg-warm-white"
                  >
                    <td className="px-4 py-3 align-top">
                      <p className="font-medium text-brand-charcoal">
                        {job.site_address ?? "—"}
                      </p>
                      {job.site_postcode && (
                        <p className="text-xs text-brand-grey">{job.site_postcode}</p>
                      )}
                    </td>

                    <td className="px-4 py-3 align-top">
                      <p className="text-brand-charcoal">{job.title}</p>
                      <p className="text-xs text-brand-grey">#{job.job_number}</p>
                    </td>

                    <td className="px-4 py-3 align-top">
                      <span
                        className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${statusClass(job.status)}`}
                      >
                        {job.status}
                      </span>
                    </td>

                    <td className="px-4 py-3 align-top">
                      {jobCerts.length === 0 ? (
                        <span className="text-xs text-brand-grey">None yet</span>
                      ) : (
                        <div className="space-y-1">
                          {jobCerts.map((cert, i) =>
                            cert.public_url ? (
                              <a
                                key={i}
                                href={cert.public_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-compliance-blue hover:underline"
                              >
                                {cert.certificate_type}
                              </a>
                            ) : (
                              <p key={i} className="text-brand-charcoal">
                                {cert.certificate_type}
                              </p>
                            ),
                          )}
                        </div>
                      )}
                    </td>

                    <td className="px-4 py-3 align-top">
                      {mostUrgent ? (
                        <span
                          className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${mostUrgent.badge!.className}`}
                        >
                          {mostUrgent.badge!.label}
                        </span>
                      ) : (
                        <span className="text-xs text-brand-grey">—</span>
                      )}
                    </td>

                    <td className="px-4 py-3 align-top">
                      {invoice?.status ? (
                        <div>
                          <span
                            className={`inline-block rounded-full px-2.5 py-1 text-xs font-medium ${paymentClass(invoice.status)}`}
                          >
                            {invoice.status}
                          </span>
                          {invoice.balance_due !== null && invoice.balance_due > 0 && (
                            <p className="mt-1 text-xs text-brand-grey">
                              {formatGbp(invoice.balance_due)} due
                            </p>
                          )}
                        </div>
                      ) : (
                        <span className="text-xs text-brand-grey">No invoice</span>
                      )}
                    </td>

                    <td className="px-4 py-3 align-top text-brand-charcoal">
                      {job.scheduled_date ?? job.completed_date ?? "—"}
                    </td>

                    <td className="px-4 py-3 align-top">
                      <Link
                        href={`/portal/jobs/${job.id}`}
                        className="font-medium text-compliance-blue hover:underline"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
