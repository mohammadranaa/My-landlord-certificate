import type { Review } from "@/data/reviews";
import { ReviewCard } from "@/components/marketing/review-card";

interface ReviewsSectionProps {
  reviews: readonly Review[];
  heading?: string;
  className?: string;
}

/**
 * Renders real, verbatim customer reviews passed in by the caller (see
 * src/data/reviews.ts helpers: featuredReviews, reviewsForService,
 * allReviewsNewestFirst). Deliberately does not link to or badge any review
 * platform (owner decision): plain text only. Renders nothing if `reviews`
 * is empty.
 */
export function ReviewsSection({
  reviews,
  heading = "What London landlords say",
  className,
}: ReviewsSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section aria-labelledby="reviews-section-heading" className={className}>
      <h2 id="reviews-section-heading" className="text-2xl font-bold text-brand-charcoal mb-8 text-center">
        {heading}
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
