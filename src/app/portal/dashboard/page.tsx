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

interface DashboardInvoiceRow {
  id: string;
  job_id: string | null;
  status: string | null;
  date: string | null;
}

export default async function PortalDashboardPage() {
  const portalUser = await requireApprovedPortalUser();

  const supabase = await createClient();

  // Deliberately narrow select — never select("*") on jobs. See
  // database-PATCH-2-instructions.md for why.
  const [{ data: jobs, error: jobsError }, { data: invoices }] = await Promise.all([
    supabase
      .from("jobs")
      .select(
        "id, job_number, title, status, site_address, site_postcode, scheduled_date, scheduled_slot, completed_date, certificate_status, created_at",
      )
      .order("created_at", { ascending: false })
      .returns<PortalJobSummary[]>(),
    supabase
      .from("invoices")
      .select("id, job_id, status, date")
      .order("date", { ascending: false })
      .returns<DashboardInvoiceRow[]>(),
  ]);

  if (jobsError) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-sm text-red-600">
          Couldn't load your jobs right now. Please refresh, or contact us if
          this keeps happening.
        </p>
      </div>
    );
  }

  // Most recent invoice per job (already ordered by date desc above), for
  // the payment badge on each card.
  const latestInvoiceByJob = new Map<string, DashboardInvoiceRow>();
  for (const inv of invoices ?? []) {
    if (!inv.job_id) continue;
    if (!latestInvoiceByJob.has(inv.job_id)) {
      latestInvoiceByJob.set(inv.job_id, inv);
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      {portalUser.client_id && (
        <PortalRealtimeRefresher
          channelName={`portal-dashboard-${portalUser.client_id}`}
          subscriptions={[
            { table: "jobs", filter: `client_id=eq.${portalUser.client_id}` },
          ]}
        />
      )}

      <h1 className="mb-6 text-2xl font-bold text-brand-charcoal">Your jobs</h1>

      {jobs.length === 0 ? (
        <p className="text-sm text-brand-grey">
          No jobs on file yet. Once we start work on one of your properties,
          it'll show up here.
        </p>
      ) : (
        <div className="space-y-3">
          {jobs.map((job) => {
            const invoice = latestInvoiceByJob.get(job.id);
            return (
              <Link
                key={job.id}
                href={`/portal/jobs/${job.id}`}
                className="block rounded-xl border border-border bg-white p-4 transition-colors hover:border-compliance-blue"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-brand-charcoal">{job.title}</p>
                    <p className="text-sm text-brand-grey">
                      {job.site_address}
                      {job.site_postcode ? `, ${job.site_postcode}` : ""}
                    </p>
                    <p className="mt-1 text-xs text-brand-grey">Job #{job.job_number}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1.5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${statusClass(job.status)}`}
                    >
                      {job.status}
                    </span>
                    {invoice?.status && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${paymentClass(invoice.status)}`}
                      >
                        {invoice.status}
                      </span>
                    )}
                  </div>
                </div>
                {job.scheduled_date && (
                  <p className="mt-2 text-xs text-brand-grey">
                    Scheduled {job.scheduled_date}
                    {job.scheduled_slot ? ` · ${job.scheduled_slot}` : ""}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
