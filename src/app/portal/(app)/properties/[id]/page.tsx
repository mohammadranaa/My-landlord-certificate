import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  getPortfolioData,
  cellStatus,
  certExpiryStatus,
  CERT_CODES,
  CERT_TYPE_LABELS,
  type CertCode,
  type CertStatus,
} from "@/lib/portal/properties";
import { StatusBadge } from "@/components/portal/status";
import { RequestRenewalDialog } from "@/components/portal/request-renewal-dialog";
import { ToastStubButton } from "@/components/portal/toast-stub-button";

export const metadata: Metadata = {
  title: "Property — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };

interface PropertyDiaryEntry {
  id: string;
  job_id: string | null;
  content: string | null;
  author_name: string | null;
  created_at: string;
}

const STATUS_BORDER: Record<CertStatus, string> = {
  valid: "#80D100",
  expiring: "#F59E0B",
  expired: "#D14343",
  booked: "#0093DB",
  missing: "#9CA3AF",
  na: "#E5E7EB",
};
const STATUS_TEXT: Record<CertStatus, string> = {
  valid: "#4f8a00",
  expiring: "#96620a",
  expired: "#a52222",
  booked: "#0078b8",
  missing: "#4B5563",
  na: "#6B7280",
};

export default async function PortalPropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { properties } = await getPortfolioData();
  const group = properties.find((g) => g.property.id === id);

  if (!group) notFound();

  const { property, jobs, certsByCode } = group;

  const supabase = await createClient();
  const jobIds = jobs.map((j) => j.id);
  const { data: diaryEntries } =
    jobIds.length > 0
      ? await supabase
          .from("job_diary")
          .select("id, job_id, content, author_name, created_at")
          .in("job_id", jobIds)
          .eq("is_internal", false)
          .order("created_at", { ascending: false })
          .limit(10)
          .returns<PropertyDiaryEntry[]>()
      : { data: [] as PropertyDiaryEntry[] };

  const latestJob = jobs.length > 0 ? jobs[0] : null;

  return (
    <div>
      <Link
        href="/portal/properties"
        className="mb-4 inline-block text-[14px] font-semibold uppercase tracking-[.14em] text-[#0078b8]"
        style={condensed}
      >
        ← All properties
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
            {property.city ?? "—"} · {property.postcode ?? "—"}
          </p>
          <h1 className="mt-1 text-[38px] font-semibold leading-[1.08] text-[#1F2937]" style={condensed}>
            {property.address}
          </h1>

          <div className="mt-3 flex flex-wrap gap-2">
            {property.bedrooms && (
              <span className="border border-[#dcdfd8] bg-white px-2.5 py-1.5 text-[12.5px] text-[#4B5563]">
                {property.bedrooms} bed
              </span>
            )}
            {property.property_type && (
              <span className="border border-[#dcdfd8] bg-white px-2.5 py-1.5 text-[12.5px] text-[#4B5563]">
                {property.property_type}
              </span>
            )}
            {latestJob && (
              <span className="border border-[#dcdfd8] bg-white px-2.5 py-1.5 text-[12.5px] text-[#4B5563]">
                Job #{latestJob.job_number}
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <ToastStubButton
            label="Download all PDFs"
            message={`Compliance pack generating for ${property.address} — we'll email the ZIP shortly.`}
          />
          <RequestRenewalDialog
            title="Renewal request"
            subtitle={`${property.address}, ${property.postcode ?? ""}`}
            trigger={
              <button
                className="bg-[#0093DB] px-[18px] py-[11px] text-[16px] font-semibold uppercase tracking-[.06em] text-[#FAFAF7] hover:bg-[#0078b8]"
                style={condensed}
              >
                Request renewal
              </button>
            }
          />
        </div>
      </div>

      {/* Certificate cards */}
      <div
        className="mt-6 grid gap-[18px]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))" }}
      >
        {CERT_CODES.map((code) => {
          const certsOfType = certsByCode[code];
          const hasOpenJob = jobs.some((j) => j.status?.toLowerCase() !== "completed");
          const status = cellStatus(certsOfType, hasOpenJob && certsOfType.length === 0);
          const latest =
            certsOfType.length > 0
              ? certsOfType.reduce((a, b) => ((a.issue_date ?? "") > (b.issue_date ?? "") ? a : b))
              : null;

          let issued = "—";
          let expires = "—";
          let result = "—";
          if (latest) {
            issued = latest.issue_date ?? "—";
            expires = latest.expiry_date ?? "—";
            result = latest.result ?? "—";
          } else if (status === "booked") {
            const scheduled = jobs.find((j) => j.scheduled_date)?.scheduled_date;
            expires = scheduled ? `Visit ${scheduled}` : "Visit scheduled";
            result = "Awaiting visit";
          } else if (status === "missing") {
            result = "Not supplied";
          }

          return (
            <div
              key={code}
              className="flex flex-col border border-[#dcdfd8] bg-white p-[18px]"
              style={{ borderTopWidth: 3, borderTopColor: STATUS_BORDER[status] }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p
                    className="text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#9CA3AF]"
                    style={condensed}
                  >
                    {code}
                  </p>
                  <p className="text-[22px] font-semibold text-[#1F2937]" style={condensed}>
                    {CERT_TYPE_LABELS[code]}
                  </p>
                </div>
                <StatusBadge status={status} />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <p className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">Issued</p>
                  <p className="text-[13px] font-semibold text-[#1F2937]">{issued}</p>
                </div>
                <div>
                  <p className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">Expires</p>
                  <p className="text-[13px] font-semibold" style={{ color: STATUS_TEXT[status] }}>
                    {expires}
                  </p>
                </div>
                <div>
                  <p className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">Result</p>
                  <p className="text-[13px] font-semibold text-[#1F2937]">{result}</p>
                </div>
                <div>
                  <p className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">Engineer</p>
                  {/* Not tracked in the portal's curated certificate columns —
                      needs a decision on whether to expose this before it can
                      be filled in. See the message accompanying this file. */}
                  <p className="text-[13px] font-semibold text-[#1F2937]">—</p>
                </div>
              </div>

              <div className="mt-4 flex gap-2" style={{ marginTop: "auto" }}>
                {latest?.public_url ? (
                  <a
                    href={latest.public_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#cfd6de] bg-white px-3 py-2 text-center text-[12.5px] font-semibold text-[#4B5563] hover:border-[#0093DB] hover:text-[#0078b8]"
                  >
                    Download PDF
                  </a>
                ) : (
                  <span className="flex-1 border border-[#e7e4dc] bg-[#FAFAF7] px-3 py-2 text-center text-[12.5px] text-[#9CA3AF]">
                    No PDF
                  </span>
                )}
                <RequestRenewalDialog
                  title={CERT_TYPE_LABELS[code]}
                  subtitle={`${property.address}, ${property.postcode ?? ""}`}
                  trigger={
                    <button className="flex-1 border border-[#0093DB] bg-[rgba(0,147,219,.08)] px-3 py-2 text-[12.5px] font-semibold text-[#0078b8] hover:bg-[#0093DB] hover:text-[#FAFAF7]">
                      Request renewal
                    </button>
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="mt-[26px] border border-[#dcdfd8] bg-white p-5">
        <h2 className="mb-4 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
          Property timeline
        </h2>
        {!diaryEntries || diaryEntries.length === 0 ? (
          <p className="text-sm text-[#9CA3AF]">No updates recorded for this property yet.</p>
        ) : (
          <div className="space-y-3">
            {diaryEntries.map((entry) => (
              <div
                key={entry.id}
                className="grid items-start gap-3"
                style={{ gridTemplateColumns: "96px 14px minmax(0,1fr)" }}
              >
                <span className="text-[12.5px] text-[#9CA3AF]">
                  {new Date(entry.created_at).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                  })}
                </span>
                <span className="mt-1 h-[9px] w-[9px] shrink-0" style={{ background: "#0093DB" }} />
                <p className="text-[14px] text-[#1F2937]">{entry.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
