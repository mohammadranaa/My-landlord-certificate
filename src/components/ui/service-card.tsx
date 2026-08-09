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
        "group flex flex-col gap-4 bg-white rounded-2xl border border-border p-6",
        "hover:border-compliance-blue hover:shadow-lg",
        "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
        className,
      )}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-compliance-blue/10 text-compliance-blue flex items-center justify-center shrink-0">
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="font-semibold text-brand-charcoal text-lg mb-1 group-hover:text-compliance-blue transition-colors">
          {name}
        </h3>
        <p className="text-sm text-brand-grey leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border">
        <span className="text-lg font-bold text-brand-charcoal">
          from £{price}
        </span>
        <span className="text-xs text-brand-grey">
          {turnaroundLabel
            ? turnaroundLabel
            : turnaroundDays === 1
              ? "Within 24 hrs"
              : turnaroundDays
                ? "Within 24 hours"
                : "Fast turnaround"}
        </span>
      </div>
    </Link>
  );
}
