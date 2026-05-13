import { cn } from "@/lib/utils";

interface TrustBadgesProps {
  /** "dark" = white text on coloured bg. "light" = dark text on white/warm-white. */
  variant?: "dark" | "light";
  rating?: number;
  reviewCount?: number;
  className?: string;
}

/**
 * NICEIC + Gas Safe + Trustpilot trust strip. Place above the fold on service pages.
 * @example
 *   <TrustBadges variant="dark" rating={4.9} reviewCount={1200} />
 */
export function TrustBadges({
  variant = "dark",
  rating = 4.9,
  reviewCount = 1000,
  className,
}: TrustBadgesProps) {
  const isDark = variant === "dark";
  const textPrimary = isDark ? "text-white" : "text-brand-charcoal";
  const textSecondary = isDark ? "text-blue-200" : "text-brand-grey";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-6 gap-y-3",
        className,
      )}
    >
      {/* NICEIC */}
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "w-8 h-8 rounded-md flex items-center justify-center text-xs font-black shrink-0",
            isDark ? "bg-white text-compliance-blue" : "bg-compliance-blue text-white",
          )}
          aria-hidden="true"
        >
          N
        </div>
        <span className={cn("text-sm font-medium", textPrimary)}>
          NICEIC Approved
        </span>
      </div>

      {/* Gas Safe */}
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-black shrink-0",
            isDark
              ? "bg-white text-action-green"
              : "bg-action-green text-brand-charcoal",
          )}
          aria-hidden="true"
        >
          GS
        </div>
        <span className={cn("text-sm font-medium", textPrimary)}>
          Gas Safe Registered
        </span>
      </div>

      {/* Trustpilot */}
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5" aria-label={`${rating} stars on Trustpilot`}>
          {[1, 2, 3, 4, 5].map((i) => (
            <svg
              key={i}
              className="w-4 h-4 text-[#00B67A]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className={cn("text-sm", textPrimary)}>
          <strong>{rating}</strong>
          <span className={textSecondary}> on Trustpilot</span>
        </span>
        <span className={cn("text-sm", textSecondary)}>
          ({reviewCount.toLocaleString()}+ reviews)
        </span>
      </div>
    </div>
  );
}
