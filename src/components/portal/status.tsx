import type { CertStatus } from "@/lib/portal/properties";

interface StatusConfig {
  bg: string;
  text: string;
  dot: string;
  ring: string;
  label: string;
}

export const STATUS_CONFIG: Record<CertStatus, StatusConfig> = {
  valid: { bg: "rgba(128,209,0,0.14)", text: "#4f8a00", dot: "#80D100", ring: "#6aae00", label: "Valid" },
  expiring: { bg: "rgba(245,158,11,0.16)", text: "#96620a", dot: "#F59E0B", ring: "#d98806", label: "Expiring" },
  expired: { bg: "rgba(209,67,67,0.12)", text: "#a52222", dot: "#D14343", ring: "#b02f2f", label: "Expired" },
  awaiting: { bg: "rgba(109,91,208,0.12)", text: "#5a48b8", dot: "#8b7be0", ring: "#5a48b8", label: "Awaiting PDF" },
  booked: { bg: "rgba(0,147,219,0.12)", text: "#0078b8", dot: "#0093DB", ring: "#0078b8", label: "Booked in" },
  missing: { bg: "rgba(75,85,99,0.09)", text: "#4B5563", dot: "#E5E7EB", ring: "#9CA3AF", label: "Not available" },
  na: { bg: "rgba(75,85,99,0.07)", text: "#6B7280", dot: "#F3F4F6", ring: "#CBD1D8", label: "N/A" },
};

/** Pill badge with dot + label. */
export function StatusBadge({ status, className = "" }: { status: CertStatus; className?: string }) {
  const c = STATUS_CONFIG[status];
  return (
    <span
      style={{ background: c.bg, color: c.text }}
      className={`inline-flex items-center gap-1.5 whitespace-nowrap px-2 py-0.5 text-xs font-semibold ${className}`}
    >
      <span style={{ background: c.dot, borderColor: c.ring }} className="h-1.5 w-1.5 shrink-0 border" />
      {c.label}
    </span>
  );
}

/** Matrix cell — a 13×13 square. Labelled for screen readers and on hover. */
export function StatusCell({ status }: { status: CertStatus }) {
  const c = STATUS_CONFIG[status];
  return (
    <span
      role="img"
      aria-label={c.label}
      title={c.label}
      style={{ background: c.dot, borderColor: c.ring }}
      className="inline-block h-[13px] w-[13px] border"
    />
  );
}
