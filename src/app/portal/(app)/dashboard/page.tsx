import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import { untyped } from "@/lib/portal/untyped";
import {
  getPortfolioData,
  buildAttentionItems,
  CERT_CODES,
  CERT_TYPE_LABELS,
  type CertCode,
  type CertStatus,
  type PropertyHealth,
} from "@/lib/portal/properties";
import { formatDateTime, formatGbp } from "@/lib/portal/format";
import { RegistrationMarks } from "@/components/portal/registration-marks";
import { StatusBadge, STATUS_CONFIG } from "@/components/portal/status";
import { RequestRenewalDialog } from "@/components/portal/request-renewal-dialog";
import { PortalActionButton } from "@/components/portal/portal-action-button";

export const metadata: Metadata = {
  title: "Overview — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };
const ATTENTION_LIMIT = 10;

const KPI_PLATES: { key: PropertyHealth; label: string; note: string; dot: string; filter: string }[] = [
  { key: "compliant", label: "Fully compliant", note: "", dot: "#80D100", filter: "compliant" },
  { key: "expiring", label: "Expiring ≤ 30 days", note: "Renewal window open", dot: "#F59E0B", filter: "expiring" },
  { key: "expired", label: "Expired", note: "Issued, now lapsed", dot: "#D14343", filter: "expired" },
  { key: "notAvailable", label: "Not available", note: "Never supplied", dot: "#9CA3AF", filter: "notAvailable" },
  { key: "awaiting", label: "Awaiting PDF", note: "Visit done, certificate pending", dot: "#8b7be0", filter: "awaiting" },
  { key: "booked", label: "Booked in", note: "Visit scheduled", dot: "#0093DB", filter: "booked" },
];

export default async function PortalOverviewPage() {
  const portalUser = await requireApprovedPortalUser();
  const { groups, kpis, byType, jobs, payment } = await getPortfolioData(portalUser.client_id);

  const total = groups.length;
  const compliantPct = total > 0 ? Math.round((kpis.compliant / total) * 100) : 0;
  const attention = buildAttentionItems(groups);
  const urgentCount = attention.filter((a) => a.status !== "missing").length;

  // Recent public updates, explicitly scoped to this agency's jobs.
  const jobIds = jobs.slice(0, 300).map((j) => j.id);
  const jobById = new Map(jobs.map((j) => [j.id, j]));
  const { data: diary } = jobIds.length
    ? await untyped(await createClient())
        .from("job_diary")
        .select("id, job_id, content, author_name, created_at")
        .in("job_id", jobIds)
        .eq("is_internal", false)
        .order("created_at", { ascending: false })
        .limit(6)
    : { data: [] };
  const diaryEntries = (diary ?? []) as { id: string; job_id: string; content: string | null; author_name: string | null; created_at: string }[];

  // Unpaid invoices for the payments panel.
  const unpaid = groups
    .flatMap((g) =>
      g.jobs
        .map((j) => ({ job: j, inv: g.invoicesByJob.get(j.id), property: g.property }))
        .filter((x) => x.inv && (x.inv.balance_due ?? 0) > 0),
    )
    .sort((a, b) => (a.inv!.date ?? "").localeCompare(b.inv!.date ?? ""))
    .slice(0, 5);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
            Overview
          </p>
          <h1 className="mt-1 text-[34px] font-semibold leading-[1.08] text-[#1F2937] sm:text-[40px]" style={condensed}>
            Portfolio compliance
          </h1>
          <p className="mt-2 max-w-[60ch] text-[15px] text-[#4B5563]">
            {total} managed propert{total === 1 ? "y" : "ies"} across {CERT_CODES.length} certificate types, live from your job and
            certificate records.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <PortalActionButton type="download_pack" label="Download pack" />
          <PortalActionButton type="bulk_renewal" label="Request renewals" variant="primary" />
        </div>
      </div>

      {/* KPI plates */}
      <div className="mt-[26px] grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
        {KPI_PLATES.map((kpi) => (
          <Link
            key={kpi.key}
            href={`/portal/properties?filter=${kpi.filter}`}
            className="relative border border-[#dcdfd8] bg-white p-5 transition-colors hover:border-[#0093DB]"
          >
            <RegistrationMarks />
            <div className="flex items-center gap-2">
              <span className="h-[9px] w-[9px] shrink-0" style={{ background: kpi.dot }} />
              <span className="text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#4B5563]" style={condensed}>
                {kpi.label}
              </span>
            </div>
            <p className="mt-2 text-[46px] font-semibold leading-none text-[#1F2937]" style={condensed}>
              {kpis[kpi.key]}
            </p>
            <p className="mt-1 text-[12.5px] text-[#6B7280]">
              {kpi.key === "compliant" ? `${compliantPct}% of the portfolio` : kpi.note}
            </p>
          </Link>
        ))}
      </div>

      {/* Needs attention */}
      <section className="mt-[26px] border border-[#dcdfd8] bg-white">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e4dc] px-5 py-4">
          <div>
            <h2 className="text-[23px] font-semibold text-[#1F2937]" style={condensed}>
              Needs attention
            </h2>
            <p className="text-[13px] text-[#6B7280]">
              {urgentCount} expired or expiring · {attention.length - urgentCount} not available
            </p>
          </div>
          {attention.length > ATTENTION_LIMIT && (
            <Link href="/portal/properties?filter=action" className="text-[13px] font-semibold text-[#0078b8] hover:underline">
              View all {attention.length} →
            </Link>
          )}
        </div>

        {attention.length === 0 ? (
          <p className="px-5 py-6 text-sm text-[#6B7280]">Nothing needs attention right now.</p>
        ) : (
          <div>
            {attention.slice(0, ATTENTION_LIMIT).map((row) => (
              <div
                key={`${row.propertyId}-${row.code}`}
                className="border-b border-[#f0eee7] px-5 py-4 last:border-b-0"
              >
                <div className="grid items-center gap-3 md:grid-cols-[minmax(0,1.6fr)_minmax(0,.9fr)_minmax(0,.6fr)_auto] md:gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <StatusCode code={row.code} status={row.status} />
                    <div className="min-w-0">
                      <Link
                        href={`/portal/properties/${row.propertyId}`}
                        className="block truncate text-[15px] font-semibold text-[#1F2937] hover:text-[#0078b8]"
                      >
                        {row.address}
                      </Link>
                      <p className="truncate text-[12.5px] text-[#6B7280]">
                        {CERT_TYPE_LABELS[row.code]} · {row.postcode ?? "—"}
                      </p>
                    </div>
                  </div>
                  <p className="text-[13.5px] text-[#4B5563]">{row.urgencyText}</p>
                  <div>
                    <StatusBadge status={row.status} />
                  </div>
                  <div className="flex items-center gap-2 md:justify-self-end">
                    {row.certId ? (
                      <a
                        href={`/api/portal/certificates/${row.certId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#cfd6de] bg-white px-3 py-1.5 text-[12.5px] font-semibold text-[#4B5563] hover:border-[#0093DB] hover:text-[#0078b8]"
                      >
                        PDF
                      </a>
                    ) : (
                      <span className="px-3 py-1.5 text-[12.5px] text-[#9CA3AF]">No PDF</span>
                    )}
                    <RequestRenewalDialog
                      title={CERT_TYPE_LABELS[row.code]}
                      subtitle={`${row.address}${row.postcode ? `, ${row.postcode}` : ""}`}
                      propertyId={row.propertyId}
                      certificateCode={row.code}
                      trigger={
                        <button className="border border-[#0093DB] bg-[rgba(0,147,219,.08)] px-3 py-1.5 text-[12.5px] font-semibold text-[#0078b8] hover:bg-[#0093DB] hover:text-[#FAFAF7]">
                          {row.status === "missing" ? "Book" : "Request renewal"}
                        </button>
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="mt-[26px] grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        {/* By type */}
        <section className="border border-[#dcdfd8] bg-white p-5">
          <h2 className="mb-4 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
            By certificate type
          </h2>
          <div className="space-y-3">
            {CERT_CODES.map((code) => {
              const c = byType[code];
              const t = c.total || 1;
              return (
                <div key={code} className="grid items-center gap-3" style={{ gridTemplateColumns: "132px minmax(0,1fr) 56px" }}>
                  <span className="truncate text-[13px] font-medium text-[#4B5563]" title={CERT_TYPE_LABELS[code]}>
                    {CERT_TYPE_LABELS[code]}
                  </span>
                  <div className="flex h-[10px] w-full overflow-hidden bg-[#f0eee7]">
                    <div style={{ width: `${(c.valid / t) * 100}%`, background: "#80D100" }} />
                    <div style={{ width: `${(c.expiring / t) * 100}%`, background: "#F59E0B" }} />
                    <div style={{ width: `${(c.expired / t) * 100}%`, background: "#D14343" }} />
                  </div>
                  <span className="text-right text-[13px] text-[#6B7280]">
                    {c.total === 0 ? "—" : `${c.valid}/${c.total}`}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-[12px] text-[#9CA3AF]">Valid out of issued. Types never supplied show “—”.</p>
        </section>

        {/* Payments */}
        <section className="border border-[#dcdfd8] bg-white p-5">
          <h2 className="mb-1 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
            Payments
          </h2>
          <p className="text-[13px] text-[#6B7280]">
            {payment.unpaidCount === 0
              ? "All issued invoices are paid."
              : `${payment.unpaidCount} unpaid invoice${payment.unpaidCount === 1 ? "" : "s"}`}
          </p>
          <p
            className="mt-3 text-[40px] font-semibold leading-none"
            style={{ ...condensed, color: payment.overdue ? "#a52222" : "#1F2937" }}
          >
            {formatGbp(payment.outstanding)}
          </p>
          <p className="mt-1 text-[12.5px] text-[#6B7280]">Outstanding balance{payment.overdue ? " · includes overdue" : ""}</p>

          {unpaid.length > 0 && (
            <div className="mt-4 divide-y divide-[#f0eee7] border-t border-[#f0eee7]">
              {unpaid.map(({ job, inv, property }) => (
                <Link
                  key={inv!.id}
                  href={`/portal/jobs/${job.id}`}
                  className="flex items-center justify-between gap-3 py-2.5 hover:text-[#0078b8]"
                >
                  <div className="min-w-0">
                    <p className="truncate text-[13.5px] font-medium text-[#1F2937]">{property.address}</p>
                    <p className="text-[12px] text-[#9CA3AF]">
                      {inv!.invoice_number ? `Invoice ${inv!.invoice_number}` : `Job #${job.job_number}`} · {inv!.status}
                    </p>
                  </div>
                  <span className="shrink-0 text-[13.5px] font-semibold text-[#1F2937]">{formatGbp(inv!.balance_due)}</span>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Activity */}
        <section className="border border-[#dcdfd8] bg-white p-5">
          <h2 className="mb-4 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
            Recent activity
          </h2>
          {diaryEntries.length === 0 ? (
            <p className="text-sm text-[#9CA3AF]">No recent activity.</p>
          ) : (
            <div className="space-y-3">
              {diaryEntries.map((entry) => {
                const job = jobById.get(entry.job_id);
                return (
                  <div key={entry.id} className="grid items-start gap-3" style={{ gridTemplateColumns: "14px minmax(0,1fr)" }}>
                    <span className="mt-1.5 h-[9px] w-[9px] shrink-0" style={{ background: "#0093DB" }} />
                    <div className="min-w-0">
                      <p className="text-[14px] text-[#1F2937]">{entry.content}</p>
                      <p className="mt-0.5 truncate text-[12px] text-[#9CA3AF]">
                        {formatDateTime(entry.created_at)}
                        {job?.site_address ? ` · ${job.site_address}` : ""}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function StatusCode({ code, status }: { code: CertCode; status: CertStatus }) {
  const c = STATUS_CONFIG[status];
  return (
    <span
      className="flex h-[30px] w-[46px] shrink-0 items-center justify-center border text-[13px] font-semibold uppercase tracking-[.08em]"
      style={{ color: c.text, borderColor: c.ring, ...condensed }}
    >
      {code}
    </span>
  );
}
