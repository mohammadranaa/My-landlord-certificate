import type { Metadata } from "next";
import Link from "next/link";
import {
  getPortfolioData,
  cellStatus,
  CERT_CODES,
  CERT_TYPE_LABELS,
  type CertStatus,
} from "@/lib/portal/properties";
import { StatusCell } from "@/components/portal/status";

export const metadata: Metadata = {
  title: "Properties — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };

type Filter = "all" | "action" | "compliant";

const CHIPS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "action", label: "Action needed" },
  { value: "compliant", label: "Fully compliant" },
];

const LEGEND: { status: CertStatus; label: string }[] = [
  { status: "valid", label: "Valid" },
  { status: "expiring", label: "Expiring" },
  { status: "expired", label: "Expired" },
  { status: "booked", label: "Booked in" },
  { status: "missing", label: "Not available" },
];

export default async function PortalPropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter: rawFilter } = await searchParams;
  const filter: Filter = rawFilter === "action" || rawFilter === "compliant" ? rawFilter : "all";

  const { properties } = await getPortfolioData();

  const rows = properties.map((group) => {
    const statuses = CERT_CODES.map((code) => {
      const certsOfType = group.certsByCode[code];
      const hasOpenJob = group.jobs.some((j) => j.status?.toLowerCase() !== "completed");
      return { code, status: cellStatus(certsOfType, hasOpenJob && certsOfType.length === 0) };
    });

    // Kept separate on purpose: "breach" means an issued certificate has
    // actually lapsed. "notAvailable" means one was never supplied at all.
    // These used to be combined into one "breach" count, which made every
    // never-attempted property look like an active compliance breach.
    const breaches = statuses.filter((s) => s.status === "expired").length;
    const notAvailable = statuses.filter((s) => s.status === "missing").length;
    const expiring = statuses.filter((s) => s.status === "expiring").length;
    const isActionNeeded = breaches > 0 || notAvailable > 0 || expiring > 0;

    return { group, statuses, breaches, notAvailable, expiring, isActionNeeded };
  });

  const filteredRows = rows.filter((r) => {
    if (filter === "action") return r.isActionNeeded;
    if (filter === "compliant") return !r.isActionNeeded;
    return true;
  });

  return (
    <div>
      <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
        Properties
      </p>
      <h1 className="mt-1 text-[40px] font-semibold leading-[1.08] text-[#1F2937]" style={condensed}>
        Every property, every certificate
      </h1>
      <p className="mt-2 max-w-[60ch] text-[15px] text-[#4B5563]">
        One row per property, one column per certificate. Click any row for the full record.
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {CHIPS.map((chip) => {
          const active = filter === chip.value;
          return (
            <Link
              key={chip.value}
              href={chip.value === "all" ? "/portal/properties" : `/portal/properties?filter=${chip.value}`}
              className={`px-3.5 py-2 text-[13px] font-semibold ${
                active
                  ? "border border-[#0093DB] bg-[rgba(0,147,219,.10)] text-[#0078b8]"
                  : "border border-[#dcdfd8] bg-white text-[#4B5563]"
              }`}
            >
              {chip.label}
            </Link>
          );
        })}
      </div>

      <div className="mt-5 overflow-x-auto border border-[#dcdfd8] bg-white">
        <table className="w-full text-left" style={{ minWidth: 1100 }}>
          <thead>
            <tr className="bg-[#FAFAF7]">
              <th
                className="px-3 py-3 text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]"
                style={condensed}
              >
                Property
              </th>
              <th
                className="px-3 py-3 text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]"
                style={condensed}
              >
                Area
              </th>
              {CERT_CODES.map((code) => (
                <th
                  key={code}
                  title={CERT_TYPE_LABELS[code]}
                  className="px-2 py-3 text-center text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]"
                  style={condensed}
                >
                  {code}
                </th>
              ))}
              <th
                className="px-3 py-3 text-right text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]"
                style={condensed}
              >
                Summary
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map(({ group, statuses, breaches, notAvailable, expiring }) => (
              <tr key={group.property.id} className="border-t border-[#f0eee7] hover:bg-[#FAFAF7]">
                <td className="px-3 py-3">
                  <Link
                    href={`/portal/properties/${group.property.id}`}
                    className="block truncate text-[14.5px] font-semibold text-[#1F2937] hover:text-[#0078b8]"
                    style={{ maxWidth: 260 }}
                  >
                    {group.property.address}
                  </Link>
                  <p className="truncate text-[12px] text-[#9CA3AF]">
                    {group.property.postcode ?? "—"}
                    {group.property.bedrooms ? ` · ${group.property.bedrooms} bed` : ""}
                    {group.property.property_type ? ` · ${group.property.property_type}` : ""}
                  </p>
                </td>
                <td className="px-3 py-3 text-[13px] text-[#4B5563]">{group.property.city ?? "—"}</td>
                {statuses.map(({ code, status }) => (
                  <td key={code} className="px-2 py-3 text-center">
                    <StatusCell status={status} />
                  </td>
                ))}
                <td className="px-3 py-3 text-right">
                  {breaches > 0 ? (
                    <span className="inline-block bg-[rgba(209,67,67,.12)] px-2.5 py-1 text-xs font-semibold text-[#a52222]">
                      {breaches} breach{breaches === 1 ? "" : "es"}
                    </span>
                  ) : expiring > 0 ? (
                    <span className="inline-block bg-[rgba(245,158,11,.16)] px-2.5 py-1 text-xs font-semibold text-[#96620a]">
                      {expiring} expiring
                    </span>
                  ) : notAvailable > 0 ? (
                    <span className="inline-block bg-[rgba(75,85,99,.09)] px-2.5 py-1 text-xs font-semibold text-[#4B5563]">
                      {notAvailable} not available
                    </span>
                  ) : (
                    <span className="inline-block bg-[rgba(128,209,0,.14)] px-2.5 py-1 text-xs font-semibold text-[#4f8a00]">
                      Compliant
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap gap-4">
        {LEGEND.map((item) => (
          <div key={item.status} className="flex items-center gap-1.5 text-[12.5px] text-[#6B7280]">
            <StatusCell status={item.status} />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
