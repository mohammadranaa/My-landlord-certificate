import type { Metadata } from "next";
import Link from "next/link";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import {
  getPortfolioData,
  certExpiryStatus,
  CERT_CODES,
  CERT_TYPE_LABELS,
  type CertCode,
} from "@/lib/portal/properties";
import { formatDate } from "@/lib/portal/format";
import { StatusBadge } from "@/components/portal/status";
import { DocumentActionButtons } from "@/components/portal/document-action-buttons";

export const metadata: Metadata = {
  title: "Documents — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };
const PAGE_SIZE = 50;

type TypeFilter = CertCode | "OTHER" | "all";
type StatusFilter = "all" | "valid" | "expiring" | "expired";

const STATUS_CHIPS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "Any status" },
  { value: "valid", label: "Valid" },
  { value: "expiring", label: "Expiring" },
  { value: "expired", label: "Expired" },
];

const EXPIRY_COLOUR = { valid: "#4f8a00", expiring: "#96620a", expired: "#a52222" } as const;

export default async function PortalDocumentsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; status?: string; q?: string; page?: string }>;
}) {
  const sp = await searchParams;
  const typeFilter: TypeFilter =
    sp.type === "OTHER" || (CERT_CODES as string[]).includes(sp.type ?? "") ? (sp.type as TypeFilter) : "all";
  const statusFilter = (STATUS_CHIPS.some((s) => s.value === sp.status) ? sp.status : "all") as StatusFilter;
  const q = (sp.q ?? "").trim().toLowerCase().slice(0, 100);

  const portalUser = await requireApprovedPortalUser();
  const { groups } = await getPortfolioData(portalUser.client_id);

  const docs = groups.flatMap((g) => [
    ...CERT_CODES.flatMap((code) =>
      g.certsByCode[code].map((cert) => ({
        cert,
        code: code as CertCode | "OTHER",
        label: CERT_TYPE_LABELS[code],
        property: g.property,
        status: cert.expiry_date ? certExpiryStatus(cert.expiry_date) : null,
      })),
    ),
    ...g.otherCerts.map((cert) => ({
      cert,
      code: "OTHER" as const,
      label: cert.certificate_type ?? "Document",
      property: g.property,
      status: null,
    })),
  ]);

  const filtered = docs
    .filter((d) => typeFilter === "all" || d.code === typeFilter)
    .filter((d) => statusFilter === "all" || d.status === statusFilter)
    .filter(
      (d) =>
        !q ||
        `${d.property.address} ${d.property.postcode ?? ""} ${d.label}`.toLowerCase().includes(q),
    )
    .sort((a, b) => (b.cert.issue_date ?? b.cert.created_at).localeCompare(a.cert.issue_date ?? a.cert.created_at));

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number.parseInt(sp.page ?? "1", 10) || 1), pageCount);
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function href(o: Partial<{ type: string; status: string; q: string; page: number }>) {
    const next = { type: typeFilter, status: statusFilter, q: sp.q ?? "", page: 1, ...o };
    const p = new URLSearchParams();
    if (next.type !== "all") p.set("type", next.type);
    if (next.status !== "all") p.set("status", next.status);
    if (next.q) p.set("q", next.q);
    if (next.page > 1) p.set("page", String(next.page));
    const s = p.toString();
    return s ? `/portal/documents?${s}` : "/portal/documents";
  }

  const chip = (active: boolean) =>
    `px-3 py-1.5 text-[12.5px] font-semibold ${
      active ? "border border-[#0093DB] bg-[rgba(0,147,219,.10)] text-[#0078b8]" : "border border-[#dcdfd8] bg-white text-[#4B5563] hover:border-[#0093DB]"
    }`;

  return (
    <div>
      <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
        Documents
      </p>
      <h1 className="mt-1 text-[34px] font-semibold leading-[1.08] text-[#1F2937] sm:text-[40px]" style={condensed}>
        Certificate library
      </h1>
      <p className="mt-2 max-w-[60ch] text-[15px] text-[#4B5563]">
        Every issued certificate and document, with dates, results and secure PDF links. Share links expire after 7 days.
      </p>

      <form action="/portal/documents" method="get" className="mt-5 flex max-w-xl gap-2">
        {typeFilter !== "all" && <input type="hidden" name="type" value={typeFilter} />}
        {statusFilter !== "all" && <input type="hidden" name="status" value={statusFilter} />}
        <input
          type="search"
          name="q"
          defaultValue={sp.q ?? ""}
          placeholder="Search by address, postcode or type"
          aria-label="Search documents"
          className="min-w-0 flex-1 border border-[#dcdfd8] bg-white px-3 py-2 text-sm outline-none focus:border-[#0093DB]"
        />
        <button className="bg-[#0093DB] px-4 py-2 text-sm font-semibold text-[#FAFAF7] hover:bg-[#0078b8]">Search</button>
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        <Link href={href({ type: "all" })} className={chip(typeFilter === "all")}>
          All types
        </Link>
        {CERT_CODES.map((code) => (
          <Link key={code} href={href({ type: code })} title={CERT_TYPE_LABELS[code]} className={chip(typeFilter === code)}>
            {code}
          </Link>
        ))}
        <Link href={href({ type: "OTHER" })} className={chip(typeFilter === "OTHER")}>
          Other
        </Link>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {STATUS_CHIPS.map((s) => (
          <Link key={s.value} href={href({ status: s.value })} className={chip(statusFilter === s.value)}>
            {s.label}
          </Link>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto border border-[#dcdfd8] bg-white">
        <table className="w-full text-left" style={{ minWidth: 880 }}>
          <thead>
            <tr className="bg-[#FAFAF7]">
              {["Document", "Property", "Issued", "Expires", "Result", ""].map((h) => (
                <th key={h} className="px-3 py-3 text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]" style={condensed}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={6} className="px-3 py-10 text-center text-sm text-[#6B7280]">
                  No documents match these filters.
                </td>
              </tr>
            )}
            {rows.map((d) => (
              <tr key={d.cert.id} className="border-t border-[#f0eee7] hover:bg-[#FAFAF7]">
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-[28px] w-[46px] shrink-0 items-center justify-center border border-[#dcdfd8] text-[11.5px] font-semibold uppercase text-[#4B5563]" style={condensed}>
                      {d.code === "OTHER" ? "DOC" : d.code}
                    </span>
                    <span className="text-[14px] font-semibold text-[#1F2937]">{d.label}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <Link href={`/portal/properties/${d.property.id}`} className="text-[13.5px] text-[#4B5563] hover:text-[#0078b8]">
                    {d.property.address}
                    {d.property.postcode ? `, ${d.property.postcode}` : ""}
                  </Link>
                </td>
                <td className="whitespace-nowrap px-3 py-3 text-[13px] text-[#4B5563]">{formatDate(d.cert.issue_date)}</td>
                <td
                  className="whitespace-nowrap px-3 py-3 text-[13px] font-semibold"
                  style={{ color: d.status ? EXPIRY_COLOUR[d.status] : "#9CA3AF" }}
                >
                  {formatDate(d.cert.expiry_date)}
                </td>
                <td className="px-3 py-3 text-[13px] text-[#4B5563]">{d.cert.result ?? "—"}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center justify-end gap-2">
                    {d.status && <StatusBadge status={d.status} />}
                    <DocumentActionButtons certId={d.cert.id} label={`${d.label} — ${d.property.address}`} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-center justify-between text-[13px] text-[#6B7280]">
        <span>
          Showing {rows.length} of {filtered.length} ({docs.length} total)
        </span>
        {pageCount > 1 && (
          <span className="flex gap-2">
            {page > 1 && (
              <Link href={href({ page: page - 1 })} className="text-[#0078b8] hover:underline">
                ← Previous
              </Link>
            )}
            <span>
              Page {page}/{pageCount}
            </span>
            {page < pageCount && (
              <Link href={href({ page: page + 1 })} className="text-[#0078b8] hover:underline">
                Next →
              </Link>
            )}
          </span>
        )}
      </div>
    </div>
  );
}
