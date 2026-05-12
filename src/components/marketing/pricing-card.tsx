import Link from "next/link";
import { cn } from "@/lib/utils";

export interface PricingCardProps {
  name: string;
  price: number;
  unit?: string;
  description: string;
  included: string[];
  href: string;
  featured?: boolean;
  badge?: string;
}

export function PricingCard({
  name,
  price,
  unit = "fixed",
  description,
  included,
  href,
  featured = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border p-6 flex flex-col",
        featured
          ? "border-brand-blue bg-brand-blue text-white shadow-xl"
          : "border-border bg-white"
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-brand-amber text-brand-charcoal text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {badge}
          </span>
        </div>
      )}

      <div className="mb-5">
        <h3
          className={cn(
            "font-semibold text-lg mb-1",
            featured ? "text-white" : "text-brand-charcoal"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "text-sm mb-4 leading-relaxed",
            featured ? "text-blue-200" : "text-brand-grey"
          )}
        >
          {description}
        </p>
        <div className="flex items-baseline gap-1">
          <span
            className={cn(
              "text-4xl font-bold",
              featured ? "text-white" : "text-brand-charcoal"
            )}
          >
            £{price}
          </span>
          <span
            className={cn(
              "text-sm",
              featured ? "text-blue-300" : "text-brand-grey"
            )}
          >
            {unit}
          </span>
        </div>
      </div>

      <ul className="flex-1 space-y-2 mb-6">
        {included.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm">
            <svg
              className={cn(
                "w-4 h-4 mt-0.5 shrink-0",
                featured ? "text-brand-green" : "text-brand-green"
              )}
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <circle
                cx="8"
                cy="8"
                r="7"
                fill={featured ? "rgba(255,255,255,0.15)" : "#16A34A"}
                fillOpacity={featured ? 1 : 0.1}
              />
              <path
                d="M5 8l2 2 4-4"
                stroke={featured ? "#4ade80" : "#16A34A"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={featured ? "text-blue-100" : "text-brand-charcoal/80"}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={cn(
          "block text-center font-semibold px-6 py-3 rounded-lg text-sm transition-colors",
          featured
            ? "bg-brand-green hover:bg-brand-green-dark text-white"
            : "bg-brand-blue hover:bg-brand-blue-dark text-white"
        )}
      >
        Book from £{price}
      </Link>
    </div>
  );
}
