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
        "rounded-3xl px-8 py-14 text-center",
        isBlue ? "bg-compliance-blue" : "bg-white border border-border",
        className,
      )}
    >
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold mb-4",
          isBlue ? "text-white" : "text-brand-charcoal",
        )}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={cn(
            "text-lg mb-8 max-w-2xl mx-auto leading-relaxed",
            isBlue ? "text-blue-100" : "text-brand-grey",
          )}
        >
          {subheading}
        </p>
      )}

      <div className="flex flex-wrap gap-4 justify-center">
        {/* Primary CTA — Action Green with dark text (contrast-safe) */}
        <Link
          href={primaryHref}
          className="inline-flex items-center justify-center bg-action-green hover:bg-brand-green-dark text-brand-charcoal font-semibold px-8 py-3 rounded-xl text-base transition-colors"
        >
          {primaryLabel}
        </Link>

        {secondaryHref && secondaryLabel && (
          <Link
            href={secondaryHref}
            className={cn(
              "inline-flex items-center justify-center font-medium px-8 py-3 rounded-xl text-base transition-colors",
              isBlue
                ? "border border-white/40 text-white hover:bg-white/10"
                : "border border-brand-charcoal/30 text-brand-charcoal hover:bg-brand-charcoal/5",
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
  );
}
