import { GoogleReviews } from "@/components/marketing/google-reviews";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { GOOGLE_BUSINESS_URL } from "@/lib/constants";

interface Review {
  content: string;
  author: string;
  location: string;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    content:
      "Booked online in a couple of minutes, the engineer arrived on time and the certificate landed in my inbox the next day. Exactly what a busy landlord needs.",
    author: "Sarah M.",
    location: "Hackney",
  },
  {
    content:
      "Fixed price, no surprises, and it was all sorted without me having to take a day off work — my tenant let them in. I'll be using them for all my properties.",
    author: "James T.",
    location: "Croydon",
  },
  {
    content:
      "Professional from start to finish. Clear communication, a proper inspection, and paperwork my letting agent accepted straight away.",
    author: "Priya K.",
    location: "Ealing",
  },
];

interface ReviewsBlockProps {
  heading?: string;
  /** Certificate/service label shown on each card. */
  service?: string;
  /** Override the fallback testimonials. */
  reviews?: readonly Review[];
}

/**
 * Self-contained "What London landlords say" reviews band. Drops onto any page
 * (typically just before the final CTA). Pulls live Google reviews when a
 * Places API key is configured, otherwise shows curated testimonials. No
 * review count is displayed.
 */
export function ReviewsBlock({
  heading = "What London landlords say",
  service,
  reviews = DEFAULT_REVIEWS,
}: ReviewsBlockProps) {
  return (
    <section aria-labelledby="reviews-block-heading" className="bg-warm-white border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 id="reviews-block-heading" className="text-2xl font-bold text-brand-charcoal mb-2">
            {heading}
          </h2>
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-compliance-blue hover:underline"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
              <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
              <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
              <path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.18 29.93 1 24 1 15.4 1 7.96 5.93 4.34 13.12l7.35 5.7C13.42 13.62 18.27 9.75 24 9.75z" />
            </svg>
            Read our reviews on Google
          </a>
        </div>
        <GoogleReviews
          fallback={
            <div className="grid md:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <TestimonialCard
                  key={r.author}
                  content={r.content}
                  author={r.author}
                  location={r.location}
                  service={service}
                />
              ))}
            </div>
          }
        />
      </div>
    </section>
  );
}
