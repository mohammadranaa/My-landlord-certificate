import type { Metadata } from "next";
import Link from "next/link";
import {
  getPortfolioData,
  certExpiryStatus,
  CERT_CODES,
  CERT_TYPE_LABELS,
  type CertCode,
} from "@/lib/portal/properties";
import { StatusBadge } from "@/components/portal/status";
import { DocumentActionButtons } from "@/components/portal/document-action-buttons";

export const metadata: Metadata = {
  title: "Documents — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };

type DocStatus = "all" | "valid" | "expiring" | "expired";

const STATUS_CHIPS: { value: DocStatus; label: string }[] = [
  { value: "all", label: "All" },
  { value: "valid", label: "Valid" },
  { value: "expiring", label: "Expiring" },
  { value: "expired", label: "Expired" },
];

const STATUS_TEXT: Record<"valid" | "expiring" | "expired", string> = {
  valid: "#4f8a00",
  expiring: "#96620a",
  expired: "#a52222",
};

export default async function PortalDocumentsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; status?: string }>;
}) {
  const { type: rawType, status: rawStatus } = await searchParams;
  const typeFilter: CertCode | "all" = (CERT_CODES as string[]).includes(rawType ?? "")
    ? (rawType as CertCode)
    : "all";
  const statusFilter: DocStatus =
    rawStatus === "valid" || rawStatus === "expiring" || rawStatus === "expired" ? rawStatus : "all";

  const { properties } = await getPortfolioData();

  // Documents = actual issued certificates only (not the coverage matrix —
  // that's the Properties screen). A property/type combo with no
  // certificate simply doesn't produce a row here.
  const allDocs = properties.flatMap((group) =>
    CERT_CODES.flatMap((code) =>
      group.certsByCode[code].map((cert) => ({
        code,
        cert,
        address: group.property.address,
        postcode: group.property.postcode,
        propertyId: group.property.id,
        status: certExpiryStatus(cert.expiry_date),
      })),
    ),
  );

  const filtered = allDocs
    .filter((d) => typeFilter === "all" || d.code === typeFilter)
    .filter((d) => statusFilter === "all" || d.status === statusFilter)
    .sort((a, b) => (b.cert.issue_date ?? "").localeCompare(a.cert.issue_date ?? ""));

  function chipHref(params: Record<string, string>) {
    const sp = new URLSearchParams();
    if (params.type && params.type !== "all") sp.set("type", params.type);
    if (params.status && params.status !== "all") sp.set("status", params.status);
    const qs = sp.toString();
    return qs ? `/portal/documents?${qs}` : "/portal/documents";
  }

  return (
    <div>
      <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
        Documents
      </p>
      <h1 className="mt-1 text-[40px] font-semibold leading-[1.08] text-[#1F2937]" style={condensed}>
        Certificate library
      </h1>
      <p className="mt-2 max-w-[60ch] text-[15px] text-[#4B5563]">
        Every issued certificate with its result, dates and PDF. Filter by type or status.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={chipHref({ type: "all", status: statusFilter })}
          className={`px-3 py-1.5 text-[12.5px] font-semibold ${
            typeFilter === "all"
              ? "border border-[#0093DB] bg-[rgba(0,147,219,.10)] text-[#0078b8]"
              : "border border-[#dcdfd8] bg-white text-[#4B5563]"
          }`}
        >
          All types
        </Link>
        {CERT_CODES.map((code) => (
          <Link
            key={code}
            href={chipHref({ type: code, status: statusFilter })}
            title={CERT_TYPE_LABELS[code]}
            className={`px-3 py-1.5 text-[12.5px] font-semibold ${
              typeFilter === code
                ? "border border-[#0093DB] bg-[rgba(0,147,219,.10)] text-[#0078b8]"
                : "border border-[#dcdfd8] bg-white text-[#4B5563]"
            }`}
          >
            {code}
          </Link>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-2">
        {STATUS_CHIPS.map((chip) => (
          <Link
            key={chip.value}
            href={chipHref({ type: typeFilter, status: chip.value })}
            className={`px-3 py-1.5 text-[12.5px] font-semibold ${
              statusFilter === chip.value
                ? "border border-[#0093DB] bg-[rgba(0,147,219,.10)] text-[#0078b8]"
                : "border border-[#dcdfd8] bg-white text-[#4B5563]"
            }`}
          >
            {chip.label}
          </Link>
        ))}
      </div>

      <div className="mt-5 overflow-x-auto border border-[#dcdfd8] bg-white">
        <table className="w-full text-left" style={{ minWidth: 860 }}>
          <thead>
            <tr className="bg-[#FAFAF7]">
              {["Certificate", "Property", "Issued", "Expires", "Result", ""].map((h) => (
                <th
                  key={h}
                  className="px-3 py-3 text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]"
                  style={condensed}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((doc) => (
              <tr key={doc.cert.id} className="border-t border-[#f0eee7] hover:bg-[#FAFAF7]">
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-[28px] w-[42px] shrink-0 items-center justify-center border text-[12px] font-semibold uppercase text-[#4B5563]"
                      style={{ borderColor: "#dcdfd8", ...condensed }}
                    >
                      {doc.code}
                    </span>
                    <span className="text-[14px] font-semibold text-[#1F2937]">
                      {CERT_TYPE_LABELS[doc.code]}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <Link
                    href={`/portal/properties/${doc.propertyId}`}
                    className="text-[13.5px] text-[#4B5563] hover:text-[#0078b8]"
                  >
                    {doc.address}, {doc.postcode ?? ""}
                  </Link>
                </td>
                <td className="px-3 py-3 text-[13px] text-[#4B5563]">{doc.cert.issue_date ?? "—"}</td>
                <td className="px-3 py-3 text-[13px] font-semibold" style={{ color: STATUS_TEXT[doc.status] }}>
                  {doc.cert.expiry_date ?? "—"}
                </td>
                <td className="px-3 py-3 text-[13px] text-[#4B5563]">{doc.cert.result ?? "—"}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center justify-end gap-2">
                    <StatusBadge status={doc.status} />
                    <DocumentActionButtons
                      publicUrl={doc.cert.public_url}
                      code={doc.code}
                      address={doc.address}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[13px] text-[#9CA3AF]">
        Showing {filtered.length} of {allDocs.length} documents
      </p>
    </div>
  );
}
