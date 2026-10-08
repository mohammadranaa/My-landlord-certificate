function toDate(value: string): Date {
  // Plain dates ("2026-09-19") are treated as UK calendar dates, not UTC
  // midnight, so they never display as the previous day.
  return new Date(value.length === 10 ? `${value}T12:00:00Z` : value);
}

/** "19 Sep 2026" */
export function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  const d = toDate(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Europe/London",
  });
}

/** "19 Sep, 14:05" */
export function formatDateTime(value: string | null | undefined): string {
  if (!value) return "—";
  const d = toDate(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/London",
  });
}

/** "£1,250.00" */
export function formatGbp(amount: number | null | undefined): string {
  if (amount === null || amount === undefined) return "—";
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(amount);
}
