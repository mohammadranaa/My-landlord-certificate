import type { Metadata } from "next";
import Link from "next/link";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import {
  getPortfolioData,
  CERT_CODES,
  CERT_TYPE_LABELS,
  HEALTH_RANK,
  type CertStatus,
  type PropertyGroup,
  type PropertyHealth,
} from "@/lib/portal/properties";
import { formatGbp } from "@/lib/portal/format";
import { StatusCell } from "@/components/portal/status";
import { BookLink } from "@/components/portal/book-link";
import { bookingHref, isCommercialProperty } from "@/lib/portal/booking-links";

export const metadata: Metadata = {
  title: "Properties — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };
const PAGE_SIZE = 25;

type Filter = "all" | "action" | PropertyHealth;
type Sort = "urgency" | "address" | "balance";

const CHIPS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "action", label: "Action needed" },
  { value: "expired", label: "Expired" },
  { value: "expiring", label: "Expiring" },
  { value: "notAvailable", label: "Not available" },
  { value: "awaiting", label: "Awaiting PDF" },
  { value: "booked", label: "Booked in" },
  { value: "compliant", label: "Fully compliant" },
];

const SORTS: { value: Sort; label: string }[] = [
  { value: "urgency", label: "Most urgent" },
  { value: "address", label: "Address A–Z" },
  { value: "balance", label: "Balance due" },
];

const LEGEND: { status: CertStatus; label: string }[] = [
  { status: "valid", label: "Valid" },
  { status: "expiring", label: "Expiring" },
  { status: "expired", label: "Expired" },
  { status: "awaiting", label: "Awaiting PDF" },
  { status: "booked", label: "Booked in" },
  { status: "missing", label: "Not available" },
];

const SUMMARY: Record<PropertyHealth, { label: (g: PropertyGroup) => string; bg: string; text: string }> = {
  expired: {
    label: (g) => {
      const n = CERT_CODES.filter((c) => g.statuses[c] === "expired").length;
      return `${n} expired`;
    },
    bg: "rgba(209,67,67,.12)",
    text: "#a52222",
  },
  expiring: {
    label: (g) => `${CERT_CODES.filter((c) => g.statuses[c] === "expiring").length} expiring`,
    bg: "rgba(245,158,11,.16)",
    text: "#96620a",
  },
  notAvailable: {
    label: (g) => `${CERT_CODES.filter((c) => g.statuses[c] === "missing").length} not available`,
    bg: "rgba(75,85,99,.09)",
    text: "#4B5563",
  },
  awaiting: { label: () => "Awaiting PDF", bg: "rgba(109,91,208,.12)", text: "#5a48b8" },
  booked: { label: () => "Booked in", bg: "rgba(0,147,219,.12)", text: "#0078b8" },
  compliant: { label: () => "Compliant", bg: "rgba(128,209,0,.14)", text: "#4f8a00" },
};

function matchesSearch(g: PropertyGroup, q: string): boolean {
  if (!q) return true;
  const needle = q.toLowerCase().replace(/\s+/g, "");
  const hay = [g.property.address, g.property.postcode, g.property.city, ...g.jobs.map((j) => j.job_number)]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .replace(/\s+/g, "");
  return hay.includes(needle);
}

export default async function PortalPropertiesPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; q?: string; sort?: string; page?: string }>;
}) {
  const sp = await searchParams;
  const filter = (CHIPS.some((c) => c.value === sp.filter) ? sp.filter : "all") as Filter;
  const sort = (SORTS.some((s) => s.value === sp.sort) ? sp.sort : "urgency") as Sort;
  const q = (sp.q ?? "").trim().slice(0, 100);

  const portalUser = await requireApprovedPortalUser();
  const { groups } = await getPortfolioData(portalUser.client_id);

  const filtered = groups
    .filter((g) => matchesSearch(g, q))
    .filter((g) => {
      if (filter === "all") return true;
      if (filter === "action") return g.health === "expired" || g.health === "expiring" || g.health === "notAvailable";
      return g.health === filter;
    })
    .sort((a, b) => {
      if (sort === "address") return a.property.address.localeCompare(b.property.address);
      if (sort === "balance") return b.payment.outstanding - a.payment.outstanding;
      return HEALTH_RANK[a.health] - HEALTH_RANK[b.health] || a.property.address.localeCompare(b.property.address);
    });

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number.parseInt(sp.page ?? "1", 10) || 1), pageCount);
  const rows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function href(overrides: Partial<{ filter: string; q: string; sort: string; page: number }>) {
    const params = new URLSearchParams();
    const next = { filter, q, sort, page: 1, ...overrides };
    if (next.filter && next.filter !== "all") params.set("filter", next.filter);
    if (next.q) params.set("q", next.q);
    if (next.sort && next.sort !== "urgency") params.set("sort", next.sort);
    if (next.page && next.page > 1) params.set("page", String(next.page));
    const s = params.toString();
    return s ? `/portal/properties?${s}` : "/portal/properties";
  }

  const chipClass = (active: boolean) =>
    `whitespace-nowrap px-3 py-1.5 text-[13px] font-semibold ${
      active ? "border border-[#0093DB] bg-[rgba(0,147,219,.10)] text-[#0078b8]" : "border border-[#dcdfd8] bg-white text-[#4B5563] hover:border-[#0093DB]"
    }`;

  return (
    <div>
      <p className="text-[13px] font-semibold uppercase tracking-[.2em] text-[#0078b8]" style={condensed}>
        Properties
      </p>
      <h1 className="mt-1 text-[34px] font-semibold leading-[1.08] text-[#1F2937] sm:text-[40px]" style={condensed}>
        Every property, every certificate
      </h1>
      <p className="mt-2 max-w-[60ch] text-[15px] text-[#4B5563]">
        One row per property, one column per certificate. Click a property for its full record, jobs and invoices.
      </p>

      <form action="/portal/properties" method="get" className="mt-5 flex max-w-xl gap-2">
        {filter !== "all" && <input type="hidden" name="filter" value={filter} />}
        {sort !== "urgency" && <input type="hidden" name="sort" value={sort} />}
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search address, postcode or job number"
          aria-label="Search properties"
          className="min-w-0 flex-1 border border-[#dcdfd8] bg-white px-3 py-2 text-sm text-[#1F2937] outline-none focus:border-[#0093DB]"
        />
        <button className="bg-[#0093DB] px-4 py-2 text-sm font-semibold text-[#FAFAF7] hover:bg-[#0078b8]">Search</button>
        {q && (
          <Link href={href({ q: "" })} className="border border-[#dcdfd8] bg-white px-3 py-2 text-sm text-[#4B5563]">
            Clear
          </Link>
        )}
      </form>

      <div className="mt-4 flex flex-wrap gap-2">
        {CHIPS.map((chip) => (
          <Link key={chip.value} href={href({ filter: chip.value })} className={chipClass(filter === chip.value)}>
            {chip.label}
          </Link>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[13px] text-[#6B7280]">
        <span>Sort:</span>
        {SORTS.map((s) => (
          <Link
            key={s.value}
            href={href({ sort: s.value })}
            className={sort === s.value ? "font-semibold text-[#0078b8]" : "hover:text-[#0078b8]"}
          >
            {s.label}
          </Link>
        ))}
        <span className="ml-auto">
          {filtered.length} of {groups.length} propert{groups.length === 1 ? "y" : "ies"}
        </span>
      </div>

      <div className="mt-3 overflow-x-auto border border-[#dcdfd8] bg-white">
        <table className="w-full text-left" style={{ minWidth: 1320 }}>
          <thead>
            <tr className="bg-[#FAFAF7]">
              <th className="sticky left-0 z-10 bg-[#FAFAF7] px-3 py-3 text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]" style={condensed}>
                Property
              </th>
              {CERT_CODES.map((code) => (
                <th
                  key={code}
                  title={CERT_TYPE_LABELS[code]}
                  className="px-1.5 py-3 text-center text-[12px] font-semibold uppercase tracking-[.1em] text-[#6B7280]"
                  style={condensed}
                >
                  {code}
                </th>
              ))}
              <th className="px-3 py-3 text-right text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]" style={condensed}>
                Payment
              </th>
              <th className="px-3 py-3 text-right text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]" style={condensed}>
                Summary
              </th>
              <th className="px-3 py-3 text-right text-[12.5px] font-semibold uppercase tracking-[.14em] text-[#6B7280]" style={condensed}>
                <span className="sr-only">Book</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr>
                <td colSpan={CERT_CODES.length + 4} className="px-3 py-10 text-center text-sm text-[#6B7280]">
                  No properties match{q ? ` “${q}”` : " this filter"}.
                </td>
              </tr>
            )}
            {rows.map((g) => {
              const summary = SUMMARY[g.health];
              const dueCodes = CERT_CODES.filter((c) => g.statuses[c] === "expired" || g.statuses[c] === "expiring");
              return (
                <tr key={g.property.id} className="group border-t border-[#f0eee7] hover:bg-[#FAFAF7]">
                  <td className="sticky left-0 z-10 bg-white px-3 py-3 group-hover:bg-[#FAFAF7]">
                    <Link
                      href={`/portal/properties/${g.property.id}`}
                      className="block max-w-[280px] truncate text-[14.5px] font-semibold text-[#1F2937] hover:text-[#0078b8]"
                    >
                      {g.property.address}
                    </Link>
                    <p className="max-w-[280px] truncate text-[12px] text-[#9CA3AF]">
                      {g.property.postcode ?? "—"} · {g.jobs.length} job{g.jobs.length === 1 ? "" : "s"}
                    </p>
                  </td>
                  {CERT_CODES.map((code) => (
                    <td key={code} className="px-1.5 py-3 text-center">
                      <StatusCell status={g.statuses[code]} />
                    </td>
                  ))}
                  <td className="whitespace-nowrap px-3 py-3 text-right text-[13px]">
                    {g.payment.invoiceCount === 0 ? (
                      <span className="text-[#9CA3AF]">No invoice</span>
                    ) : g.payment.outstanding > 0 ? (
                      <span className="font-semibold" style={{ color: g.payment.overdue ? "#a52222" : "#96620a" }}>
                        {formatGbp(g.payment.outstanding)} due
                      </span>
                    ) : (
                      <span className="font-semibold text-[#4f8a00]">Paid</span>
                    )}
                  </td>
                  <td className="px-3 py-3 text-right">
                    <span
                      className="inline-block whitespace-nowrap px-2.5 py-1 text-xs font-semibold"
                      style={{ background: summary.bg, color: summary.text }}
                    >
                      {summary.label(g)}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    {dueCodes.length > 0 ? (
                      <BookLink
                        href={bookingHref({
                          codes: dueCodes,
                          propertyId: g.property.id,
                          isCommercial: isCommercialProperty(g.property.property_type),
                        })}
                        label="Book renewal"
                        location="properties_list"
                        certCode={dueCodes.join(",")}
                        className="max-md:w-auto"
                      />
                    ) : (
                      <BookLink
                        href={bookingHref({ propertyId: g.property.id })}
                        label="Book"
                        location="properties_list"
                        variant="secondary"
                        className="max-md:w-auto"
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {pageCount > 1 && (
        <nav className="mt-4 flex items-center justify-between text-[13px]" aria-label="Pagination">
          {page > 1 ? (
            <Link href={href({ page: page - 1 })} className="border border-[#dcdfd8] bg-white px-3 py-1.5 text-[#4B5563] hover:border-[#0093DB]">
              ← Previous
            </Link>
          ) : (
            <span />
          )}
          <span className="text-[#6B7280]">
            Page {page} of {pageCount}
          </span>
          {page < pageCount ? (
            <Link href={href({ page: page + 1 })} className="border border-[#dcdfd8] bg-white px-3 py-1.5 text-[#4B5563] hover:border-[#0093DB]">
              Next →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}

      <div className="mt-4 flex flex-wrap gap-4">
        {LEGEND.map((item) => (
          <div key={item.status} className="flex items-center gap-1.5 text-[12.5px] text-[#6B7280]">
            <StatusCell status={item.status} />
            {item.label}
          </div>
        ))}
      </div>
      <p className="mt-2 text-[12px] text-[#9CA3AF]">
        Column codes: {CERT_CODES.map((c) => `${c} = ${CERT_TYPE_LABELS[c]}`).join(" · ")}
      </p>
    </div>
  );
}
