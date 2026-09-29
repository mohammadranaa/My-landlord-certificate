import { REVIEWS } from "@/data/reviews";
import { ReviewsSection } from "@/components/marketing/reviews-section";

interface ReviewsBlockProps {
  heading?: string;
}

/**
 * "What London landlords say" band. Drops onto any page (typically just
 * before the final CTA). Shows real, verbatim reviews from
 * src/data/reviews.ts — no Google/Trustpilot links or badges (owner
 * decision). Renders nothing while that list is empty.
 */
export function ReviewsBlock({ heading }: ReviewsBlockProps) {
  if (REVIEWS.length === 0) return null;

  return (
    <section aria-label="Customer reviews" className="bg-warm-white border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <ReviewsSection heading={heading} limit={6} />
      </div>
    </section>
  );
}
