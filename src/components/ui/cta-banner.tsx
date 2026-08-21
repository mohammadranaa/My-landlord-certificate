import Link from "next/link";
import { cn } from "@/lib/utils";
import { TrustBadges } from "./trust-badges";

interface CTABannerProps {
  heading: string;
  subheading?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  /** Renders NICEIC + Gas Safe + Trustpilot strip below the buttons. */
  showTrustBadges?: boolean;
  /** "blue" = Compliance Blue background. "white" = white card. Defaults to "blue". */
  variant?: "blue" | "white";
  className?: string;
}

/**
 * Full-width call-to-action section. Place at the bottom of service pages.
 * @example
 *   <CTABanner
 *     heading="Ready to book your EICR?"
 *     subheading="Book online in under 3 minutes."
 *     primaryHref="/book?service=eicr"
 *     primaryLabel="Book my EICR — £99"
 *     showTrustBadges
 *   />
 */
export function CTABanner({
  heading,
  subheading,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  showTrustBadges = false,
  variant = "blue",
  className,
}: CTABannerProps) {
  const isBlue = variant === "blue";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl px-8 py-16 text-center",
        isBlue
          ? "bg-gradient-to-br from-compliance-blue via-compliance-blue to-brand-blue-dark shadow-xl shadow-compliance-blue/20 ring-1 ring-white/10"
          : "border border-border bg-white",
        className,
      )}
    >
      {/* Decorative depth for the blue variant */}
      {isBlue && (
        <>
          <div
            aria-hidden="true"
            className="bg-grid-dark mask-fade pointer-events-none absolute inset-0 opacity-40"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-slow"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-action-green/20 blur-3xl"
          />
        </>
      )}

      <div className="relative">
        <h2
          className={cn(
            "mb-4 text-3xl font-bold md:text-4xl",
            isBlue ? "text-white" : "text-brand-charcoal",
          )}
        >
          {heading}
        </h2>

        {subheading && (
          <p
            className={cn(
              "mx-auto mb-8 max-w-2xl text-lg leading-relaxed",
              isBlue ? "text-blue-100" : "text-brand-grey",
            )}
          >
            {subheading}
          </p>
        )}

        <div className="flex flex-wrap justify-center gap-4">
          {/* Primary CTA — Action Green with dark text (contrast-safe) */}
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-xl bg-action-green px-8 py-3.5 text-base font-semibold text-brand-charcoal shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-xl hover:shadow-black/15"
          >
            {primaryLabel}
          </Link>

          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className={cn(
                "inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-base font-medium transition-colors",
                isBlue
                  ? "border-2 border-white/50 text-white hover:bg-white/10"
                  : "border-2 border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal/5",
              )}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>

        {showTrustBadges && (
          <div className="mt-10 flex justify-center">
            <TrustBadges variant={isBlue ? "dark" : "light"} />
          </div>
        )}
      </div>
    </div>
  );
}
