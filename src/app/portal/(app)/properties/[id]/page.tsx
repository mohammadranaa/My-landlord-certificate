import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import { untyped } from "@/lib/portal/untyped";
import { getPortfolioData, latestCert, CERT_CODES, CERT_TYPE_LABELS } from "@/lib/portal/properties";
import { formatDate, formatDateTime, formatGbp } from "@/lib/portal/format";
import { StatusBadge, STATUS_CONFIG } from "@/components/portal/status";
import { RequestRenewalDialog } from "@/components/portal/request-renewal-dialog";
import { PortalActionButton } from "@/components/portal/portal-action-button";
import { DocumentActionButtons } from "@/components/portal/document-action-buttons";

export const metadata: Metadata = {
  title: "Property — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };

function jobStatusStyle(status: string) {
  const s = status.toLowerCase();
  if (s === "completed") return { bg: "rgba(128,209,0,.14)", text: "#4f8a00" };
  if (s === "cancelled" || s === "canceled") return { bg: "rgba(209,67,67,.12)", text: "#a52222" };
  return { bg: "rgba(0,147,219,.12)", text: "#0078b8" };
}

export default async function PortalPropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const portalUser = await requireApprovedPortalUser();
  const { groups } = await getPortfolioData(portalUser.client_id);
  const group = groups.find((g) => g.property.id === id);
  if (!group) notFound();

  const { property, jobs, certsByCode, otherCerts, statuses, invoicesByJob, payment } = group;

  const jobIds = jobs.map((j) => j.id);
  const { data: diary } = jobIds.length
    ? await untyped(await createClient())
        .from("job_diary")
        .select("id, job_id, content, created_at")
        .in("job_id", jobIds)
        .eq("is_internal", false)
        .order("created_at", { ascending: false })
        .limit(12)
    : { data: [] };
  const diaryEntries = (diary ?? []) as { id: string; job_id: string; content: string | null; created_at: string }[];

  const subtitle = `${property.address}${property.postcode ? `, ${property.postcode}` : ""}`;

  return (
    <div>
      <Link href="/portal/properties" className="mb-4 inline-block text-[14px] font-semibold uppercase tracking-[.14em] text-[#0078b8]" style={condensed}>
        ← All properties
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
            {[property.city, property.postcode].filter(Boolean).join(" · ") || "Property"}
          </p>
          <h1 className="mt-1 text-[30px] font-semibold leading-[1.08] text-[#1F2937] sm:text-[38px]" style={condensed}>
            {property.address}
          </h1>
          <div className="mt-3 flex flex-wrap gap-2 text-[12.5px] text-[#4B5563]">
            {property.bedrooms ? <span className="border border-[#dcdfd8] bg-white px-2.5 py-1.5">{property.bedrooms} bed</span> : null}
            {property.property_type ? <span className="border border-[#dcdfd8] bg-white px-2.5 py-1.5">{property.property_type}</span> : null}
            <span className="border border-[#dcdfd8] bg-white px-2.5 py-1.5">
              {jobs.length} job{jobs.length === 1 ? "" : "s"}
            </span>
            {payment.outstanding > 0 && (
              <span className="border border-[#F59E0B] bg-[rgba(245,158,11,.1)] px-2.5 py-1.5 font-semibold text-[#96620a]">
                {formatGbp(payment.outstanding)} due
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <PortalActionButton type="download_pack" label="Download pack" propertyId={property.id} />
          <RequestRenewalDialog
            title="Renewal request"
            subtitle={subtitle}
            propertyId={property.id}
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
      <div className="mt-6 grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))" }}>
        {CERT_CODES.map((code) => {
          const status = statuses[code];
          const latest = latestCert(certsByCode[code]);
          const config = STATUS_CONFIG[status];

          let expires = latest ? formatDate(latest.expiry_date) : "—";
          let result = latest?.result ?? "—";
          if (!latest && status === "booked") {
            const next = jobs.find((j) => j.scheduled_date && !["completed", "cancelled"].includes(j.status.toLowerCase()));
            expires = next?.scheduled_date ? `Visit ${formatDate(next.scheduled_date)}` : "Visit scheduled";
            result = "Awaiting visit";
          } else if (!latest && status === "awaiting") {
            result = "Certificate being prepared";
          } else if (!latest) {
            result = "Not supplied";
          }

          return (
            <div key={code} className="flex flex-col border border-[#dcdfd8] bg-white p-[18px]" style={{ borderTopWidth: 3, borderTopColor: config.ring }}>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#9CA3AF]" style={condensed}>
                    {code}
                  </p>
                  <p className="text-[21px] font-semibold leading-tight text-[#1F2937]" style={condensed}>
                    {CERT_TYPE_LABELS[code]}
                  </p>
                </div>
                <StatusBadge status={status} />
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <dt className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">Issued</dt>
                  <dd className="text-[13px] font-semibold text-[#1F2937]">{latest ? formatDate(latest.issue_date) : "—"}</dd>
                </div>
                <div>
                  <dt className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">Expires</dt>
                  <dd className="text-[13px] font-semibold" style={{ color: config.text }}>
                    {expires}
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">Result</dt>
                  <dd className="text-[13px] font-semibold text-[#1F2937]">{result}</dd>
                </div>
              </dl>

              <div className="mt-4 flex gap-2 pt-1" style={{ marginTop: "auto" }}>
                {latest ? (
                  <a
                    href={`/api/portal/certificates/${latest.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-[#cfd6de] bg-white px-3 py-2 text-center text-[12.5px] font-semibold text-[#4B5563] hover:border-[#0093DB] hover:text-[#0078b8]"
                  >
                    View PDF
                  </a>
                ) : (
                  <span className="flex-1 border border-[#e7e4dc] bg-[#FAFAF7] px-3 py-2 text-center text-[12.5px] text-[#9CA3AF]">No PDF</span>
                )}
                <RequestRenewalDialog
                  title={CERT_TYPE_LABELS[code]}
                  subtitle={subtitle}
                  propertyId={property.id}
                  certificateCode={code}
                  trigger={
                    <button className="flex-1 border border-[#0093DB] bg-[rgba(0,147,219,.08)] px-3 py-2 text-[12.5px] font-semibold text-[#0078b8] hover:bg-[#0093DB] hover:text-[#FAFAF7]">
                      {latest ? "Renew" : "Book"}
                    </button>
                  }
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Jobs & payments */}
      <section className="mt-[26px] border border-[#dcdfd8] bg-white">
        <div className="border-b border-[#e7e4dc] px-5 py-4">
          <h2 className="text-[23px] font-semibold text-[#1F2937]" style={condensed}>
            Jobs &amp; invoices
          </h2>
        </div>
        {jobs.length === 0 ? (
          <p className="px-5 py-6 text-sm text-[#6B7280]">No jobs recorded for this property yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left" style={{ minWidth: 760 }}>
              <thead>
                <tr className="bg-[#FAFAF7]">
                  {["Job", "Status", "Date", "Invoice", "Balance", ""].map((h) => (
                    <th key={h} className="px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[.14em] text-[#6B7280]" style={condensed}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => {
                  const inv = invoicesByJob.get(job.id);
                  const st = jobStatusStyle(job.status);
                  const date = job.completed_date ?? job.scheduled_date;
                  return (
                    <tr key={job.id} className="border-t border-[#f0eee7]">
                      <td className="px-4 py-3">
                        <p className="text-[14px] font-medium text-[#1F2937]">{job.title}</p>
                        <p className="text-[12px] text-[#9CA3AF]">#{job.job_number}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 text-xs font-semibold" style={{ background: st.bg, color: st.text }}>
                          {job.status}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-[13px] text-[#4B5563]">
                        {date ? `${job.completed_date ? "Completed" : "Scheduled"} ${formatDate(date)}` : "—"}
                      </td>
                      <td className="px-4 py-3 text-[13px] text-[#4B5563]">
                        {inv ? (
                          <>
                            {inv.invoice_number ?? "Invoice"} · {inv.status}
                          </>
                        ) : (
                          <span className="text-[#9CA3AF]">Not invoiced</span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-[13px] font-semibold">
                        {inv ? (
                          (inv.balance_due ?? 0) > 0 ? (
                            <span className="text-[#96620a]">{formatGbp(inv.balance_due)}</span>
                          ) : (
                            <span className="text-[#4f8a00]">Paid</span>
                          )
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link href={`/portal/jobs/${job.id}`} className="text-[13px] font-semibold text-[#0078b8] hover:underline">
                          Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {otherCerts.length > 0 && (
        <section className="mt-[26px] border border-[#dcdfd8] bg-white p-5">
          <h2 className="mb-3 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
            Other documents
          </h2>
          <div className="divide-y divide-[#f0eee7]">
            {otherCerts.map((c) => (
              <div key={c.id} className="flex items-center justify-between gap-3 py-2.5">
                <div>
                  <p className="text-[14px] font-medium text-[#1F2937]">{c.certificate_type ?? "Document"}</p>
                  <p className="text-[12px] text-[#9CA3AF]">Issued {formatDate(c.issue_date)}</p>
                </div>
                <DocumentActionButtons certId={c.id} label={c.certificate_type ?? "Document"} />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-[26px] border border-[#dcdfd8] bg-white p-5">
        <h2 className="mb-4 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
          Property timeline
        </h2>
        {diaryEntries.length === 0 ? (
          <p className="text-sm text-[#9CA3AF]">No updates recorded for this property yet.</p>
        ) : (
          <div className="space-y-3">
            {diaryEntries.map((entry) => (
              <div key={entry.id} className="grid items-start gap-3" style={{ gridTemplateColumns: "110px 14px minmax(0,1fr)" }}>
                <span className="text-[12.5px] text-[#9CA3AF]">{formatDateTime(entry.created_at)}</span>
                <span className="mt-1.5 h-[9px] w-[9px] shrink-0" style={{ background: "#0093DB" }} />
                <p className="text-[14px] text-[#1F2937]">{entry.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
