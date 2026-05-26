import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  content: string;
  author: string;
  location: string;
  /** Certificate type, e.g. "EICR" or "Gas Safety". */
  service?: string;
  /** Out of 5. Defaults to 5. */
  rating?: number;
  /** Shows "Trustpilot" label in the card footer. */
  showTrustpilot?: boolean;
  className?: string;
}

/**
 * Customer review card with Trustpilot-style star rating.
 * Use in threes on service pages and the homepage.
 * @example
 *   <TestimonialCard
 *     content="Booked Sunday night, engineer came Tuesday morning."
 *     author="Sarah K."
 *     location="Croydon"
 *     service="EICR"
 *     showTrustpilot
 *   />
 */
export function TestimonialCard({
  content,
  author,
  location,
  service,
  rating = 5,
  showTrustpilot = false,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "bg-white rounded-2xl border border-border p-6 flex flex-col gap-4",
        className,
      )}
    >
      {/* Stars */}
      <div
        className="flex gap-1"
        role="img"
        aria-label={`${rating} out of 5 stars`}
      >
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className={cn(
              "w-5 h-5",
              i <= rating ? "text-[#00B67A]" : "text-gray-200",
            )}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Review text */}
      <blockquote className="flex-1 text-brand-charcoal/80 leading-relaxed">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* Footer */}
      <footer className="flex items-end justify-between gap-4 pt-2 border-t border-border">
        <div>
          <p className="font-semibold text-brand-charcoal text-sm">{author}</p>
          <p className="text-xs text-brand-grey mt-0.5">
            {location}
            {service ? ` · ${service}` : ""}
          </p>
        </div>
      </footer>
    </article>
  );
}
