import { GOOGLE_BUSINESS_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface HeroRatingProps {
  /** "dark" for coloured/blue hero backgrounds (light text), "light" for white/pale hero backgrounds (dark text). */
  theme?: "dark" | "light";
  className?: string;
}

/**
 * "Rated 5.0 on Google" hero rating — five gold stars linking to the Google
 * Business Profile. Sits directly beneath the page H1. No review count shown.
 */
export function HeroRating({ theme = "dark", className }: HeroRatingProps) {
  const textClass = theme === "dark" ? "text-blue-100" : "text-brand-grey";
  const strongClass = theme === "dark" ? "text-white" : "text-brand-charcoal";
  return (
    <a
      href={GOOGLE_BUSINESS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-2 hover:underline", className)}
    >
      <span className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5 on Google">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className="w-5 h-5 text-[#FFCB45]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </span>
      <span className={cn("text-sm", textClass)}>
        Rated <strong className={strongClass}>5.0</strong> on Google
      </span>
    </a>
  );
}
