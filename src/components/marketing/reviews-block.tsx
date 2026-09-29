import { reviewsForService, type ServiceTag } from "@/data/reviews";
import { ReviewsSection } from "@/components/marketing/reviews-section";

interface ReviewsBlockProps {
  /** Which service's reviews to show (see ServiceTag in src/data/reviews.ts). Defaults to "general". */
  tag?: ServiceTag;
  heading?: string;
}

/**
 * "What London landlords say" band. Drops onto any page (typically just
 * before the final CTA). Shows up to 3 real, verbatim reviews tagged for
 * `tag`. Renders nothing while there are none.
 */
export function ReviewsBlock({ tag = "general", heading }: ReviewsBlockProps) {
  const reviews = reviewsForService(tag, 3);
  if (reviews.length === 0) return null;

  return (
    <section aria-label="Customer reviews" className="bg-warm-white border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <ReviewsSection reviews={reviews} heading={heading} />
      </div>
    </section>
  );
}
