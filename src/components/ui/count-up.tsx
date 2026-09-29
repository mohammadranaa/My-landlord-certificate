import { cn } from "@/lib/utils";

interface CountUpProps {
  /** Final value to display. */
  end: number;
  /** Appended after the number, e.g. "+". */
  suffix?: string;
  className?: string;
}

/**
 * Renders `end` directly — identical on the server, on first client paint,
 * and after hydration, so crawlers, no-JS visitors and the initial paint
 * never see a "0". The entrance animation lives in the parent `Reveal`
 * wrapper (fade + slide), so the number itself never counts up from zero.
 */
export function CountUp({ end, suffix = "", className }: CountUpProps) {
  return (
    <span className={cn("tabular-nums", className)}>
      {end.toLocaleString("en-GB")}
      {suffix}
    </span>
  );
}
