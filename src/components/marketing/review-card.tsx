import { cn } from "@/lib/utils";

export interface Review {
  content: string;
  author: string;
  location: string;
  service?: string;
  rating?: number;
}

interface ReviewCardProps {
  review: Review;
  className?: string;
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-[#00B67A]" : "text-gray-200"
          )}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  const { content, author, location, service, rating = 5 } = review;

  return (
    <article
      className={cn(
        "bg-white rounded-xl border border-border p-6 flex flex-col gap-4",
        className
      )}
    >
      <StarRating rating={rating} />

      <blockquote className="text-brand-charcoal/80 leading-relaxed text-sm flex-1">
        &ldquo;{content}&rdquo;
      </blockquote>

      <footer className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-brand-charcoal">{author}</p>
          <p className="text-xs text-brand-grey">{location}</p>
        </div>
        {service && (
          <span className="text-xs bg-brand-blue/10 text-brand-blue font-medium px-2 py-1 rounded-full">
            {service}
          </span>
        )}
      </footer>
    </article>
  );
}
