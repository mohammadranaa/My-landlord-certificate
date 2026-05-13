"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface StickyMobileCTAProps {
  href: string;
  /** Button label shown on the right. */
  label: string;
  price: number;
  /** Short descriptor shown above the price. */
  serviceName?: string;
  className?: string;
}

/**
 * Fixed bottom CTA bar, visible on mobile only (hidden on md+).
 * Place once per service page — it sticks to the bottom of the viewport.
 *
 * @example
 *   <StickyMobileCTA
 *     href="/book?service=eicr"
 *     label="Book Now"
 *     price={99}
 *     serviceName="EICR Certificate"
 *   />
 */
export function StickyMobileCTA({
  href,
  label,
  price,
  serviceName,
  className,
}: StickyMobileCTAProps) {
  return (
    <div
      className={cn(
        // Hidden on desktop — md screens don't need this
        "fixed bottom-0 inset-x-0 z-40 md:hidden",
        "bg-white border-t border-border shadow-xl",
        "px-4 py-3 flex items-center gap-3",
        className,
      )}
    >
      <div className="flex-1 min-w-0">
        {serviceName && (
          <p className="text-xs text-brand-grey truncate">{serviceName}</p>
        )}
        <p className="text-base font-bold text-brand-charcoal">
          from £{price}
        </p>
      </div>

      <Link
        href={href}
        className={cn(
          "shrink-0 bg-compliance-blue hover:bg-brand-blue-dark",
          "text-white font-semibold",
          "px-5 py-2.5 rounded-lg text-sm transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2",
        )}
      >
        {label}
      </Link>
    </div>
  );
}
