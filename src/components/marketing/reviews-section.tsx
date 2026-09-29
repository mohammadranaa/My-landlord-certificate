import { REVIEWS } from "@/data/reviews";

interface ReviewsSectionProps {
  heading?: string;
  /** Cap the number of reviews shown (newest first). Omit to show all. */
  limit?: number;
  className?: string;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

/**
 * Renders real, verbatim customer reviews from src/data/reviews.ts — newest
 * first. Deliberately does not link to or badge any review platform (owner
 * decision): plain text only. Renders nothing while REVIEWS is empty.
 */
export function ReviewsSection({
  heading = "What London landlords say",
  limit,
  className,
}: ReviewsSectionProps) {
  if (REVIEWS.length === 0) return null;

  const sorted = [...REVIEWS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const shown = typeof limit === "number" ? sorted.slice(0, limit) : sorted;

  return (
    <section aria-labelledby="reviews-section-heading" className={className}>
      <h2 id="reviews-section-heading" className="text-2xl font-bold text-brand-charcoal mb-8 text-center">
        {heading}
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        {shown.map((review) => (
          <article
            key={`${review.name}-${review.date}`}
            className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-4"
          >
            <div className="flex gap-1" role="img" aria-label={`${review.rating} out of 5 stars`}>
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i <= review.rating ? "text-[#00B67A]" : "text-gray-200"}`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="flex-1 text-brand-charcoal/80 leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </blockquote>
            <footer className="pt-2 border-t border-border">
              <p className="font-semibold text-brand-charcoal text-sm">{review.name}</p>
              <p className="text-xs text-brand-grey mt-0.5">
                {formatDate(review.date)} · via {review.source}
              </p>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
