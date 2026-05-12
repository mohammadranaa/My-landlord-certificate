import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  href: string;
  name: string;
  shortName: string;
  tagline: string;
  priceFrom: number;
  turnaroundDays: number;
  className?: string;
}

export function ServiceCard({
  href,
  name,
  shortName,
  tagline,
  priceFrom,
  turnaroundDays,
  className,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block bg-white rounded-xl border border-border p-6 hover:border-brand-blue hover:shadow-md transition-all duration-200",
        className
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-brand-charcoal group-hover:text-brand-blue transition-colors text-lg leading-tight">
          {shortName}
        </h3>
        <span className="text-brand-green font-bold text-lg shrink-0 ml-3">
          from £{priceFrom}
        </span>
      </div>

      <p className="text-brand-grey text-sm leading-relaxed mb-4">{tagline}</p>

      <div className="flex items-center justify-between">
        <span className="text-xs text-brand-grey">
          {turnaroundDays === 1 ? "Same-day certificate" : `Certificate in ${turnaroundDays} days`}
        </span>
        <span className="text-brand-blue text-sm font-medium group-hover:underline">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
