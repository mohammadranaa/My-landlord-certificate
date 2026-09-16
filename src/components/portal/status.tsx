import type { CertStatus } from "@/lib/portal/properties";

interface StatusConfig {
  bg: string;
  text: string;
  dot: string;
  ring: string;
  label: string;
  shortLabel: string;
}

export const STATUS_CONFIG: Record<CertStatus, StatusConfig> = {
  valid: { bg: "rgba(128,209,0,0.14)", text: "#4f8a00", dot: "#80D100", ring: "#6aae00", label: "Valid", shortLabel: "Valid" },
  expiring: { bg: "rgba(245,158,11,0.16)", text: "#96620a", dot: "#F59E0B", ring: "#d98806", label: "Expiring", shortLabel: "30d" },
  expired: { bg: "rgba(209,67,67,0.12)", text: "#a52222", dot: "#D14343", ring: "#b02f2f", label: "Expired", shortLabel: "Exp." },
  booked: { bg: "rgba(0,147,219,0.12)", text: "#0078b8", dot: "#0093DB", ring: "#0078b8", label: "Booked in", shortLabel: "Bkd" },
  missing: { bg: "rgba(75,85,99,0.09)", text: "#4B5563", dot: "#9CA3AF", ring: "#6B7280", label: "Missing", shortLabel: "—" },
  na: { bg: "rgba(75,85,99,0.07)", text: "#6B7280", dot: "#E5E7EB", ring: "#CBD1D8", label: "N/A", shortLabel: "n/a" },
};

/** Pill badge with dot + label — used in row detail, headers, card corners. */
export function StatusBadge({ status, className = "" }: { status: CertStatus; className?: string }) {
  const c = STATUS_CONFIG[status];
  return (
    <span
      style={{ background: c.bg, color: c.text }}
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-semibold ${className}`}
    >
      <span style={{ background: c.dot }} className="h-1.5 w-1.5 shrink-0" />
      {c.label}
    </span>
  );
}

/**
 * Matrix cell rendering — "dots" (13x13 square, no text, default) or
 * "words" (short padded badge). Toggleable per the design's matrixStyle
 * preference.
 */
export function StatusCell({
  status,
  variant = "dots",
}: {
  status: CertStatus;
  variant?: "dots" | "words";
}) {
  const c = STATUS_CONFIG[status];
  if (variant === "words") {
    return (
      <span
        style={{ background: c.bg, color: c.text }}
        className="inline-block px-1.5 py-0.5 text-[11px] font-semibold"
      >
        {c.shortLabel}
      </span>
    );
  }
  return (
    <span
      title={c.label}
      style={{ background: c.dot, borderColor: c.ring }}
      className="inline-block h-[13px] w-[13px] border"
    />
  );
}
