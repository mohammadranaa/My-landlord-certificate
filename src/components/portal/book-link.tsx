"use client";

import Link from "next/link";

export type BookClickLocation =
  | "needs_attention"
  | "property"
  | "properties_list"
  | "documents"
  | "job"
  | "sidebar"
  | "header";

const VARIANTS = {
  primary: "bg-[#0093DB] text-[#FAFAF7] hover:bg-[#0078b8]",
  secondary: "border border-[#0093DB] bg-[rgba(0,147,219,.08)] text-[#0078b8] hover:bg-[#0093DB] hover:text-[#FAFAF7]",
  green: "bg-[#80D100] text-[#1F2937] hover:opacity-90",
} as const;

const SIZES = {
  md: "px-[18px] py-[11px] text-[16px] tracking-[.06em]",
  sm: "px-3 py-1.5 text-[13.5px] tracking-[.05em]",
} as const;

/**
 * A real link into /book (no toast, nothing pretends to happen). Fires the
 * GA4 `portal_book_click` event when gtag is present — gtag only loads after
 * cookie consent, so nothing is sent otherwise. No personal data is sent.
 */
export function BookLink({
  href,
  label,
  location,
  certCode = "",
  variant = "primary",
  size = "sm",
  className = "",
}: {
  href: string;
  label: string;
  location: BookClickLocation;
  certCode?: string;
  variant?: keyof typeof VARIANTS;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  function handleClick() {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === "function") {
      w.gtag("event", "portal_book_click", { cert_code: certCode, location });
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      style={{ fontFamily: "var(--font-barlow-condensed)" }}
      className={`inline-flex items-center justify-center whitespace-nowrap font-semibold uppercase transition-colors max-md:min-h-[44px] max-md:w-full ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
    >
      {label}
    </Link>
  );
}
