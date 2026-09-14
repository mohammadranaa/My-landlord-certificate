/**
 * UK time = Europe/London timezone. Using Intl.DateTimeFormat (rather than
 * re-parsing a toLocaleString() output back into a Date) avoids depending on
 * the runtime's own local timezone — this must work identically on a UK
 * browser and on a server running in UTC (e.g. Vercel).
 * Automatically handles GMT (winter) and BST/GMT+1 (summer).
 * 5pm UK = 17:00 Europe/London.
 */
function getUkTimeParts(date: Date): { hour: number; minute: number } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(date);
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  return { hour, minute };
}

/** True once it's after 5:00pm UK time — exactly 17:00:00 still counts as before the cutoff. */
export function isPastUkBookingCutoff(now: Date = new Date()): boolean {
  const { hour, minute } = getUkTimeParts(now);
  return hour > 17 || (hour === 17 && minute > 0);
}

/**
 * Earliest bookable date: tomorrow if it's before 5pm UK time today, otherwise
 * the day after tomorrow. Same-day booking is never available.
 */
export function getEarliestBookingDate(now: Date = new Date()): Date {
  const earliest = new Date(now);
  earliest.setDate(earliest.getDate() + 1);
  earliest.setHours(0, 0, 0, 0);
  if (isPastUkBookingCutoff(now)) {
    earliest.setDate(earliest.getDate() + 1);
  }
  return earliest;
}
