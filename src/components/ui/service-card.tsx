import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ServiceCardProps {
  href: string;
  /** Icon element — wrap a Lucide icon or SVG in a fragment. */
  icon: ReactNode;
  name: string;
  /** Short two-line description shown on the card. */
  description: string;
  price: number;
  turnaroundDays?: number;
  /** Overrides the computed turnaround badge text (e.g. "Within 48 hours" for Fire Risk Assessment). */
  turnaroundLabel?: string;
  className?: string;
}

/**
 * Service offering card with icon, price, and description.
 * Used in homepage service grid and /services page.
 * @example
 *   <ServiceCard
 *     href="/eicr"
 *     icon={<Zap className="w-6 h-6" />}
 *     name="EICR Certificate"
 *     description="Mandatory for all rental properties since 2020."
 *     price={99}
 *     turnaroundDays={2}
 *   />
 */
export function ServiceCard({
  href,
  icon,
  name,
  description,
  price,
  turnaroundDays,
  turnaroundLabel,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "card-lift group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-compliance-blue/25 bg-white p-6 shadow-sm",
        "hover:border-compliance-blue hover:bg-compliance-blue/[0.02] hover:shadow-xl hover:shadow-compliance-blue/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
        className,
      )}
    >
      {/* Top accent bar — always visible, thickens on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-compliance-blue to-action-green transition-all duration-300 group-hover:h-1.5"
      />

      {/* Icon */}
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-compliance-blue/10 text-compliance-blue transition-all duration-300 group-hover:bg-compliance-blue group-hover:text-white group-hover:scale-105">
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="mb-1 text-lg font-semibold text-brand-charcoal transition-colors group-hover:text-compliance-blue">
          {name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-brand-grey">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-border pt-3">
        <span className="text-lg font-bold text-brand-charcoal">
          from £{price}
        </span>
        {/* Turnaround by default, "View details" on hover (cross-fade) */}
        <span className="relative inline-grid text-xs font-medium">
          <span className="col-start-1 row-start-1 whitespace-nowrap text-brand-grey transition-all duration-300 group-hover:-translate-y-1 group-hover:opacity-0">
            {turnaroundLabel
              ? turnaroundLabel
              : turnaroundDays === 1
                ? "Within 24 hrs"
                : turnaroundDays
                  ? "Within 24 hours"
                  : "Fast turnaround"}
          </span>
          <span className="col-start-1 row-start-1 flex translate-y-1 items-center gap-1 justify-self-end whitespace-nowrap font-semibold text-compliance-blue opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View details →
          </span>
        </span>
      </div>
    </Link>
  );
}
