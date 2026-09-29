import { GOOGLE_RATING, SHOW_REVIEW_COUNT_FROM } from "@/data/reviews";
import { cn } from "@/lib/utils";

interface RatingBadgeProps {
  /** "dark" for coloured/blue backgrounds (light text), "light" for white/pale backgrounds (dark text). */
  theme?: "dark" | "light";
  className?: string;
}

/**
 * ★★★★★ Rated {GOOGLE_RATING.rating} on Google — reads the real, hand-updated
 * figures in src/data/reviews.ts. Appends "· N reviews" only once the count
 * reaches SHOW_REVIEW_COUNT_FROM. Not a link (owner decision: no linking out
 * to Google/Trustpilot from marketing pages).
 */
export function RatingBadge({ theme = "light", className }: RatingBadgeProps) {
  const textClass = theme === "dark" ? "text-blue-100" : "text-brand-grey";
  const strongClass = theme === "dark" ? "text-white" : "text-brand-charcoal";
  const showCount = GOOGLE_RATING.count >= SHOW_REVIEW_COUNT_FROM;

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className="flex gap-0.5"
        role="img"
        aria-label={`Rated ${GOOGLE_RATING.rating} out of 5 on Google`}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className="w-5 h-5 text-[#FFCB45]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </span>
      <span className={cn("text-sm", textClass)}>
        Rated <strong className={strongClass}>{GOOGLE_RATING.rating.toFixed(1)}</strong> on Google
        {showCount && ` · ${GOOGLE_RATING.count} reviews`}
      </span>
    </span>
  );
}
