import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  getPortfolioData,
  cellStatus,
  certExpiryStatus,
  daysUntil,
  CERT_CODES,
  CERT_TYPE_LABELS,
  type CertCode,
  type CertStatus,
} from "@/lib/portal/properties";
import { RegistrationMarks } from "@/components/portal/registration-marks";
import { StatusBadge } from "@/components/portal/status";
import { RequestRenewalDialog } from "@/components/portal/request-renewal-dialog";
import { ToastStubButton } from "@/components/portal/toast-stub-button";
import type { PortalDiaryEntry } from "@/types/database";

export const metadata: Metadata = {
  title: "Overview — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };

interface NeedsAttentionRow {
  code: CertCode;
  address: string;
  postcode: string | null;
  status: "expired" | "expiring" | "missing";
  urgencyText: string;
  publicUrl: string | null;
  sortKey: number;
}

function buildNeedsAttention(properties: Awaited<ReturnType<typeof getPortfolioData>>["properties"]) {
  const rows: NeedsAttentionRow[] = [];

  for (const group of properties) {
    for (const code of CERT_CODES) {
      const certsOfType = group.certsByCode[code];
      const hasOpenJob = group.jobs.some((j) => j.status?.toLowerCase() !== "completed");
      const status = cellStatus(certsOfType, hasOpenJob && certsOfType.length === 0);
      if (status !== "expired" && status !== "expiring" && status !== "missing") continue;

      const latestCert =
        certsOfType.length > 0
          ? certsOfType.reduce((a, b) => ((a.issue_date ?? "") > (b.issue_date ?? "") ? a : b))
          : null;

      let urgencyText: string;
      let sortKey: number;

      if (status === "missing") {
        urgencyText = "Never supplied";
        sortKey = -100000;
      } else {
        const days = daysUntil(latestCert!.expiry_date) ?? 0;
        sortKey = days;
        urgencyText = status === "expired" ? `Expired ${Math.abs(days)} days ago` : `Expires in ${days} days`;
      }

      rows.push({
        code,
        address: group.property.address,
        postcode: group.property.postcode,
        status,
        urgencyText,
        publicUrl: latestCert?.public_url ?? null,
        sortKey,
      });
    }
  }

  return rows.sort((a, b) => a.sortKey - b.sortKey).slice(0, 8);
}

const STATUS_TYPE_MAP: Record<"expired" | "expiring" | "missing", CertStatus> = {
  expired: "expired",
  expiring: "expiring",
  missing: "missing",
};

export default async function PortalOverviewPage() {
  const { properties, kpis, certs } = await getPortfolioData();

  const totalProperties = properties.length;
  const compliantPct = totalProperties > 0 ? Math.round((kpis.compliant / totalProperties) * 100) : 0;

  const kpiPlates = [
    { label: "Fully compliant", value: kpis.compliant, note: `${compliantPct}% of the portfolio`, dot: "#80D100" },
    { label: "Expiring ≤ 30 days", value: kpis.expiring, note: "Renewal window open", dot: "#F59E0B" },
    { label: "Expired / breach", value: kpis.expiredOrBreach, note: "Action required today", dot: "#D14343" },
    { label: "Awaiting certificate", value: kpis.awaitingCertificate, note: "Visit complete, PDF pending", dot: "#0093DB" },
  ];

  const needsAttention = buildNeedsAttention(properties);

  // By-type breakdown, computed from the real certificate rows across the
  // whole portfolio (not the per-property KPI tallies, which only count
  // "worst status per property" — this wants every individual cell).
  const byTypeCounts: Record<CertCode, { valid: number; expiring: number; expired: number; total: number }> =
    CERT_CODES.reduce(
      (acc, code) => ({ ...acc, [code]: { valid: 0, expiring: 0, expired: 0, total: 0 } }),
      {} as Record<CertCode, { valid: number; expiring: number; expired: number; total: number }>,
    );
  for (const group of properties) {
    for (const code of CERT_CODES) {
      const certsOfType = group.certsByCode[code];
      if (certsOfType.length === 0) continue;
      const latest = certsOfType.reduce((a, b) => ((a.issue_date ?? "") > (b.issue_date ?? "") ? a : b));
      const status = certExpiryStatus(latest.expiry_date);
      byTypeCounts[code][status] += 1;
      byTypeCounts[code].total += 1;
    }
  }

  // Recent activity — real job_diary entries, public-facing only.
  const supabase = await createClient();
  const { data: diaryEntries } = await supabase
    .from("job_diary")
    .select("id, job_id, entry_type, content, author_name, is_internal, created_at")
    .eq("is_internal", false)
    .order("created_at", { ascending: false })
    .limit(5)
    .returns<PortalDiaryEntry[]>();

  const jobById = new Map(properties.flatMap((g) => g.jobs.map((j) => [j.id, j])));

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
            Overview
          </p>
          <h1 className="mt-1 text-[40px] font-semibold leading-[1.08] text-[#1F2937]" style={condensed}>
            Portfolio compliance
          </h1>
          <p className="mt-2 max-w-[60ch] text-[15px] text-[#4B5563]">
            {totalProperties} managed properties across {CERT_CODES.length} certificate types. Everything
            below is live from your job and certificate records.
          </p>
        </div>
        <div className="flex gap-2">
          <ToastStubButton
            label="Download pack"
            message="Compliance pack generating — we'll email the ZIP shortly."
          />
          <ToastStubButton
            label="Request renewals"
            message="Renewal requests sent for every property needing action."
            variant="primary"
          />
        </div>
      </div>

      {/* KPI row */}
      <div
        className="mt-[26px] grid gap-[18px]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
      >
        {kpiPlates.map((kpi) => (
          <div key={kpi.label} className="relative border border-[#dcdfd8] bg-white p-5">
            <RegistrationMarks />
            <div className="flex items-center gap-2">
              <span className="h-[9px] w-[9px]" style={{ background: kpi.dot }} />
              <span
                className="text-[13px] font-semibold uppercase tracking-[.16em] text-[#4B5563]"
                style={condensed}
              >
                {kpi.label}
              </span>
            </div>
            <p className="mt-2 text-[52px] font-semibold leading-none text-[#1F2937]" style={condensed}>
              {kpi.value}
            </p>
            <p className="mt-1 text-[13px] text-[#6B7280]">{kpi.note}</p>
          </div>
        ))}
      </div>

      {/* Needs attention */}
      <div className="mt-[26px] border border-[#dcdfd8] bg-white">
        <div className="flex items-center justify-between border-b border-[#e7e4dc] px-5 py-4">
          <h2 className="text-[23px] font-semibold text-[#1F2937]" style={condensed}>
            Needs attention
          </h2>
          <span className="text-[13px] text-[#6B7280]">Sorted by urgency</span>
        </div>

        {needsAttention.length === 0 ? (
          <p className="px-5 py-6 text-sm text-[#6B7280]">Nothing needs attention right now.</p>
        ) : (
          <div>
            {needsAttention.map((row, i) => (
              <div
                key={`${row.address}-${row.code}-${i}`}
                className="grid items-center gap-4 border-b border-[#f0eee7] px-5 py-4 last:border-b-0"
                style={{ gridTemplateColumns: "minmax(0,1.6fr) minmax(0,.9fr) minmax(0,.7fr) auto" }}
              >
                <div className="flex items-center gap-3">
                  <StatusCode code={row.code} status={STATUS_TYPE_MAP[row.status]} />
                  <div className="min-w-0">
                    <Link
                      href="/portal/properties"
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
                  <StatusBadge status={STATUS_TYPE_MAP[row.status]} />
                </div>

                <div className="flex items-center gap-2 justify-self-end">
                  {row.publicUrl ? (
                    <a
                      href={row.publicUrl}
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
                    subtitle={`${row.address}, ${row.postcode ?? ""}`}
                    trigger={
                      <button className="border border-[#0093DB] bg-[rgba(0,147,219,.08)] px-3 py-1.5 text-[12.5px] font-semibold text-[#0078b8] hover:bg-[#0093DB] hover:text-[#FAFAF7]">
                        Request renewal
                      </button>
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Two-up: by-type + recent activity */}
      <div
        className="mt-[26px] grid gap-[18px]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        <div className="border border-[#dcdfd8] bg-white p-5">
          <h2 className="mb-4 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
            By certificate type
          </h2>
          <div className="space-y-3">
            {CERT_CODES.map((code) => {
              const c = byTypeCounts[code];
              const total = c.total || 1;
              const validPct = (c.valid / total) * 100;
              const expiringPct = (c.expiring / total) * 100;
              const expiredPct = (c.expired / total) * 100;
              return (
                <div
                  key={code}
                  className="grid items-center gap-3"
                  style={{ gridTemplateColumns: "118px minmax(0,1fr) 64px" }}
                >
                  <span className="text-[13px] font-medium text-[#4B5563]">{CERT_TYPE_LABELS[code]}</span>
                  <div className="flex h-[10px] w-full overflow-hidden bg-[#f0eee7]">
                    <div style={{ width: `${validPct}%`, background: "#80D100" }} />
                    <div style={{ width: `${expiringPct}%`, background: "#F59E0B" }} />
                    <div style={{ width: `${expiredPct}%`, background: "#D14343" }} />
                  </div>
                  <span className="text-right text-[13px] text-[#6B7280]">
                    {c.expiring + c.expired} / {c.total}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="border border-[#dcdfd8] bg-white p-5">
          <h2 className="mb-4 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
            Recent activity
          </h2>
          {!diaryEntries || diaryEntries.length === 0 ? (
            <p className="text-sm text-[#9CA3AF]">No recent activity.</p>
          ) : (
            <div className="space-y-3">
              {diaryEntries.map((entry) => {
                const job = jobById.get(entry.job_id ?? "");
                return (
                  <div
                    key={entry.id}
                    className="grid items-start gap-3"
                    style={{ gridTemplateColumns: "14px minmax(0,1fr)" }}
                  >
                    <span className="mt-1 h-[9px] w-[9px] shrink-0" style={{ background: "#0093DB" }} />
                    <div>
                      <p className="text-[14px] text-[#1F2937]">
                        {entry.content}
                        {job?.site_address ? ` — ${job.site_address}` : ""}
                      </p>
                      <p className="mt-0.5 text-[12px] text-[#9CA3AF]">
                        {new Date(entry.created_at).toLocaleString("en-GB", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                        {entry.author_name ? ` · ${entry.author_name}` : ""}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StatusCode({ code, status }: { code: CertCode; status: CertStatus }) {
  const colors: Record<CertStatus, { text: string; border: string }> = {
    valid: { text: "#4f8a00", border: "#80D100" },
    expiring: { text: "#96620a", border: "#F59E0B" },
    expired: { text: "#a52222", border: "#D14343" },
    booked: { text: "#0078b8", border: "#0093DB" },
    missing: { text: "#4B5563", border: "#9CA3AF" },
    na: { text: "#6B7280", border: "#E5E7EB" },
  };
  const c = colors[status];
  return (
    <span
      className="flex h-[30px] w-[46px] shrink-0 items-center justify-center border text-[13px] font-semibold uppercase tracking-[.08em]"
      style={{ color: c.text, borderColor: c.border, ...condensed }}
    >
      {code}
    </span>
  );
}
