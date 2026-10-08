import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import { untyped } from "@/lib/portal/untyped";
import { certExpiryStatus, classifyCertType, CERT_TYPE_LABELS } from "@/lib/portal/properties";
import { formatDate, formatDateTime, formatGbp } from "@/lib/portal/format";
import { StatusBadge } from "@/components/portal/status";
import { DocumentActionButtons } from "@/components/portal/document-action-buttons";
import { BookLink } from "@/components/portal/book-link";
import { bookingHref } from "@/lib/portal/booking-links";

export const metadata: Metadata = {
  title: "Job — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };

interface Job {
  id: string;
  job_number: string;
  title: string;
  description: string | null;
  status: string;
  site_address: string | null;
  site_postcode: string | null;
  tenant_name: string | null;
  tenant_phone: string | null;
  scheduled_date: string | null;
  scheduled_slot: string | null;
  completed_date: string | null;
  service_types: string[] | null;
  property_id: string | null;
}

interface LineItem {
  qty?: number;
  unit_price?: number;
  description?: string;
}

export default async function PortalJobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const portalUser = await requireApprovedPortalUser();
  if (!portalUser.client_id) notFound();

  const supabase = untyped(await createClient());

  // Curated columns only — never select("*") on jobs (internal financials).
  const { data: jobData } = await supabase
    .from("jobs")
    .select(
      "id, job_number, title, description, status, site_address, site_postcode, tenant_name, tenant_phone, scheduled_date, scheduled_slot, completed_date, service_types, property_id",
    )
    .eq("id", id)
    .eq("client_id", portalUser.client_id)
    .maybeSingle();
  if (!jobData) notFound();
  const job = jobData as Job;

  const [certsRes, diaryRes, invoicesRes] = await Promise.all([
    supabase
      .from("certificates")
      .select("id, certificate_type, issue_date, expiry_date, result")
      .eq("job_id", id)
      .eq("client_id", portalUser.client_id)
      .order("issue_date", { ascending: false }),
    supabase
      .from("job_diary")
      .select("id, content, author_name, created_at")
      .eq("job_id", id)
      .eq("is_internal", false)
      .order("created_at", { ascending: false }),
    supabase
      .from("invoices")
      .select("id, invoice_number, status, line_items, subtotal, discount, total, amount_paid, balance_due, date, sent_at")
      .eq("job_id", id)
      .eq("client_id", portalUser.client_id)
      .order("date", { ascending: false }),
  ]);

  const certs = (certsRes.data ?? []) as { id: string; certificate_type: string | null; issue_date: string | null; expiry_date: string | null; result: string | null }[];
  const diary = (diaryRes.data ?? []) as { id: string; content: string | null; author_name: string | null; created_at: string }[];
  const invoices = ((invoicesRes.data ?? []) as {
    id: string;
    invoice_number: string | null;
    status: string | null;
    line_items: unknown;
    subtotal: number | null;
    discount: number | null;
    total: number | null;
    amount_paid: number | null;
    balance_due: number | null;
    date: string | null;
    sent_at: string | null;
  }[]).filter((i) => !["draft", "void", "voided", "cancelled"].includes((i.status ?? "").toLowerCase()));

  const address = [job.site_address, job.site_postcode].filter(Boolean).join(", ");

  return (
    <div>
      <Link
        href={job.property_id ? `/portal/properties/${job.property_id}` : "/portal/properties"}
        className="mb-4 inline-block text-[14px] font-semibold uppercase tracking-[.14em] text-[#0078b8]"
        style={condensed}
      >
        ← Back to property
      </Link>

      <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
        Job #{job.job_number}
      </p>
      <h1 className="mt-1 text-[30px] font-semibold leading-[1.08] text-[#1F2937] sm:text-[36px]" style={condensed}>
        {job.title}
      </h1>
      <p className="mt-2 text-[15px] text-[#4B5563]">{address || "—"}</p>

      <div className="mt-6 grid gap-4 border border-[#dcdfd8] bg-white p-5 sm:grid-cols-4">
        {[
          ["Status", job.status],
          ["Scheduled", job.scheduled_date ? `${formatDate(job.scheduled_date)}${job.scheduled_slot ? ` · ${job.scheduled_slot}` : ""}` : "—"],
          ["Completed", formatDate(job.completed_date)],
          ["Tenant", job.tenant_name ? `${job.tenant_name}${job.tenant_phone ? ` · ${job.tenant_phone}` : ""}` : "—"],
        ].map(([k, v]) => (
          <div key={k}>
            <p className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">{k}</p>
            <p className="mt-0.5 text-[14px] font-semibold text-[#1F2937]">{v}</p>
          </div>
        ))}
        {job.service_types && job.service_types.length > 0 && (
          <div className="sm:col-span-4">
            <p className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">Services</p>
            <p className="mt-0.5 text-[14px] text-[#1F2937]">{job.service_types.join(" · ")}</p>
          </div>
        )}
        {job.description && (
          <div className="sm:col-span-4">
            <p className="text-[11.5px] uppercase tracking-[.12em] text-[#9CA3AF]">Description</p>
            <p className="mt-0.5 text-[14px] text-[#4B5563]">{job.description}</p>
          </div>
        )}
      </div>

      <section className="mt-[22px] border border-[#dcdfd8] bg-white p-5">
        <h2 className="mb-3 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
          Certificates
        </h2>
        {certs.length === 0 ? (
          <p className="text-sm text-[#6B7280]">No certificates issued for this job yet.</p>
        ) : (
          <div className="divide-y divide-[#f0eee7]">
            {certs.map((c) => {
              const code = classifyCertType(c.certificate_type);
              const label = code ? CERT_TYPE_LABELS[code] : c.certificate_type ?? "Document";
              const nextDue =
                code && c.expiry_date && job.status.toLowerCase() === "completed"
                  ? new Date(c.expiry_date).toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "Europe/London" })
                  : null;
              return (
                <div key={c.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <div>
                    <p className="text-[14px] font-semibold text-[#1F2937]">{label}</p>
                    <p className="text-[12.5px] text-[#6B7280]">
                      Issued {formatDate(c.issue_date)}
                      {c.expiry_date ? ` · Expires ${formatDate(c.expiry_date)}` : ""}
                      {c.result ? ` · ${c.result}` : ""}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 max-md:w-full">
                    {c.expiry_date && <StatusBadge status={certExpiryStatus(c.expiry_date)} />}
                    <DocumentActionButtons certId={c.id} label={label} />
                    {nextDue && code && (
                      <>
                        <span className="text-[12.5px] text-[#6B7280]">Next due {nextDue}</span>
                        <BookLink
                          href={bookingHref({ codes: [code], propertyId: job.property_id })}
                          label="Book next one"
                          location="job"
                          certCode={code}
                          variant="secondary"
                        />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="mt-[22px] border border-[#dcdfd8] bg-white p-5">
        <h2 className="mb-3 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
          Invoice &amp; payment
        </h2>
        {invoices.length === 0 ? (
          <p className="text-sm text-[#6B7280]">No invoice issued for this job yet.</p>
        ) : (
          <div className="space-y-4">
            {invoices.map((inv) => {
              const items = Array.isArray(inv.line_items) ? (inv.line_items as LineItem[]) : [];
              const paid = (inv.balance_due ?? 0) <= 0;
              return (
                <div key={inv.id} className="border border-[#f0eee7] p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="text-[14px] font-semibold text-[#1F2937]">
                        {inv.invoice_number ? `Invoice ${inv.invoice_number}` : "Invoice"}
                      </p>
                      <p className="text-[12.5px] text-[#6B7280]">
                        {formatDate(inv.date)}
                        {inv.sent_at ? ` · Sent ${formatDate(inv.sent_at)}` : ""}
                      </p>
                    </div>
                    <span
                      className="px-2 py-0.5 text-xs font-semibold"
                      style={paid ? { background: "rgba(128,209,0,.14)", color: "#4f8a00" } : { background: "rgba(245,158,11,.16)", color: "#96620a" }}
                    >
                      {paid ? "Paid" : inv.status ?? "Unpaid"}
                    </span>
                  </div>
                  {items.length > 0 && (
                    <table className="mt-3 w-full text-[13.5px]">
                      <tbody>
                        {items.map((item, i) => (
                          <tr key={i} className="border-t border-[#f0eee7]">
                            <td className="py-1.5 text-[#1F2937]">
                              {item.description ?? "—"}
                              {item.qty && item.qty !== 1 ? ` × ${item.qty}` : ""}
                            </td>
                            <td className="py-1.5 text-right text-[#1F2937]">{item.unit_price !== undefined ? formatGbp(item.unit_price) : "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#f0eee7] pt-3 text-[13px] sm:grid-cols-4">
                    <div>
                      <p className="text-[#9CA3AF]">Total</p>
                      <p className="font-semibold text-[#1F2937]">{formatGbp(inv.total)}</p>
                    </div>
                    {inv.discount ? (
                      <div>
                        <p className="text-[#9CA3AF]">Discount</p>
                        <p className="font-semibold text-[#1F2937]">{formatGbp(inv.discount)}</p>
                      </div>
                    ) : null}
                    <div>
                      <p className="text-[#9CA3AF]">Paid</p>
                      <p className="font-semibold text-[#1F2937]">{formatGbp(inv.amount_paid)}</p>
                    </div>
                    <div>
                      <p className="text-[#9CA3AF]">Balance due</p>
                      <p className="font-semibold" style={{ color: paid ? "#4f8a00" : "#96620a" }}>
                        {formatGbp(inv.balance_due)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="mt-[22px] border border-[#dcdfd8] bg-white p-5">
        <h2 className="mb-3 text-[23px] font-semibold text-[#1F2937]" style={condensed}>
          Updates
        </h2>
        {diary.length === 0 ? (
          <p className="text-sm text-[#6B7280]">No updates yet.</p>
        ) : (
          <div className="space-y-3">
            {diary.map((d) => (
              <div key={d.id} className="grid items-start gap-3" style={{ gridTemplateColumns: "110px 14px minmax(0,1fr)" }}>
                <span className="text-[12.5px] text-[#9CA3AF]">{formatDateTime(d.created_at)}</span>
                <span className="mt-1.5 h-[9px] w-[9px] shrink-0" style={{ background: "#0093DB" }} />
                <p className="text-[14px] text-[#1F2937]">{d.content}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
