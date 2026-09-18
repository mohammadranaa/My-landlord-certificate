"use client";

import { toast } from "sonner";

/**
 * Generic button that fires a toast rather than a real action. Used for
 * "Download pack" and the header's bulk "Request renewals" — both are
 * specced as queuing a background job (ZIP generation, bulk renewal
 * requests) that doesn't exist yet in this codebase. Wire up for real once
 * that backend work is scoped.
 */
export function ToastStubButton({
  label,
  message,
  variant = "secondary",
  className = "",
}: {
  label: string;
  message: string;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "px-[18px] py-[11px] text-[16px] font-semibold uppercase tracking-[.06em] transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[#0093DB] text-[#FAFAF7] hover:bg-[#0078b8]"
      : "border border-[#cfd6de] bg-white text-[#4B5563] hover:border-[#0093DB] hover:text-[#0078b8]";

  return (
    <button
      onClick={() => toast.success(message)}
      style={{ fontFamily: "var(--font-barlow-condensed)" }}
      className={`${base} ${styles} ${className}`}
    >
      {label}
    </button>
  );
}
