import { cn } from "@/lib/utils";

type Badge = "cheapest" | "most-popular";

export type PriceTableRow = {
  label: string;
  price: number;
  badge?: Badge;
};

interface PriceTableProps {
  title: string;
  rows: readonly PriceTableRow[];
  /** Automatically adds a "Cheapest" badge to the lowest-priced row. */
  highlightCheapest?: boolean;
  className?: string;
}

function formatPrice(price: number): string {
  return price % 1 === 0 ? `£${price}` : `£${price.toFixed(2)}`;
}

const BADGE_STYLES: Record<Badge, string> = {
  cheapest:
    "bg-action-green/15 text-brand-charcoal border border-action-green/40",
  "most-popular":
    "bg-compliance-blue/10 text-compliance-blue border border-compliance-blue/30",
};

const BADGE_LABELS: Record<Badge, string> = {
  cheapest: "Cheapest",
  "most-popular": "Most popular",
};

/**
 * Full pricing table used on every service page.
 *
 * @example
 * <PriceTable
 *   title="EICR Pricing"
 *   rows={DOMESTIC_EICR_TABLE}
 *   highlightCheapest
 * />
 */
export function PriceTable({
  title,
  rows,
  highlightCheapest = false,
  className,
}: PriceTableProps) {
  const lowestPrice = highlightCheapest
    ? Math.min(...rows.map((r) => r.price))
    : null;

  const resolvedRows: PriceTableRow[] = rows.map((row) => ({
    ...row,
    badge:
      row.badge ??
      (highlightCheapest && row.price === lowestPrice ? "cheapest" : undefined),
  }));

  return (
    <div className={cn("w-full overflow-hidden rounded-xl border border-border shadow-sm", className)}>
      {/* Table title */}
      <div className="bg-compliance-blue px-5 py-4">
        <h3 className="text-base font-semibold text-white">{title}</h3>
      </div>

      <table className="w-full border-collapse">
        {/* Column headers */}
        <thead>
          <tr className="hidden md:table-row border-b border-border bg-compliance-blue/8">
            <th
              scope="col"
              className="px-5 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-brand-grey"
            >
              Description
            </th>
            <th
              scope="col"
              className="px-5 py-2.5 text-right text-xs font-semibold uppercase tracking-wider text-brand-grey"
            >
              Price
            </th>
          </tr>
        </thead>

        <tbody>
          {resolvedRows.map((row, i) => {
            const isEven = i % 2 === 0;
            return (
              <tr
                key={i}
                className={cn(
                  "block border-b border-border last:border-0 md:table-row",
                  isEven ? "bg-warm-white" : "bg-white",
                )}
              >
                {/* Label cell */}
                <td
                  scope="row"
                  className="block px-5 pt-4 pb-1 md:table-cell md:py-4 md:w-full"
                >
                  <span className="flex flex-wrap items-center gap-2 text-sm text-brand-charcoal">
                    {row.label}
                    {row.badge && (
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                          BADGE_STYLES[row.badge],
                        )}
                      >
                        {BADGE_LABELS[row.badge]}
                      </span>
                    )}
                  </span>
                </td>

                {/* Price cell */}
                <td className="block px-5 pb-4 pt-1 text-left md:table-cell md:py-4 md:text-right md:whitespace-nowrap">
                  <span className="text-base font-bold text-brand-charcoal">
                    {formatPrice(row.price)}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
