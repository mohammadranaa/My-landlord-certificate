import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { ReviewsSection } from "@/components/marketing/reviews-section";
import { REVIEWS } from "@/data/reviews";
import { cn } from "@/lib/utils";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Reviews — London Landlords",
  description:
    "Read My Landlord Certificate reviews from real London landlords. See what landlords say about our EICR, Gas Safety, EPC and Fire Risk Assessment services.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/reviews" },
  openGraph: {
    title: "My Landlord Certificate Reviews — London Landlords",
    description:
      "Read My Landlord Certificate reviews from real London landlords. EICR, Gas Safety, EPC and Fire Risk Assessment.",
    url: "https://www.mylandlordcertificate.co.uk/reviews",
  },
  twitter: {
    title: "My Landlord Certificate Reviews",
    description:
      "Reviews from London landlords — EICR, Gas Safety, EPC and Fire Risk Assessment.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "My Landlord Certificate",
  url: "https://www.mylandlordcertificate.co.uk",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "https://www.mylandlordcertificate.co.uk/reviews" },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={aggregateRatingSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="reviews-heading"
        className="bg-hero-blue text-white"
      >
        <Container className="py-16 md:py-20 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            My Landlord Certificate Reviews
          </p>
          <Heading level={1} id="reviews-heading" inverted className="mb-6 max-w-2xl mx-auto">
            Rated 5.0 out of 5 by London landlords
          </Heading>

          {/* Prominent rating block */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/10 border border-white/20 rounded-2xl px-8 py-6 mb-8">
            <div className="text-center sm:text-left">
              <p className="text-6xl font-bold text-white leading-none mb-1">5.0</p>
              <div className="flex gap-1 justify-center sm:justify-start mb-1" role="img" aria-label="5.0 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#00B67A]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-blue-200 text-xs">out of 5 stars</p>
            </div>
            <div className="w-px h-14 bg-white/20 hidden sm:block" aria-hidden="true" />
            <div className="text-center sm:text-left">
              <p className="text-4xl font-bold text-white leading-none mb-1">312</p>
              <p className="text-blue-200 text-sm">verified reviews</p>
              <p className="text-blue-100 text-xs mt-0.5">verified reviews from London landlords</p>
            </div>
          </div>

          <p className="text-blue-100 text-base leading-relaxed max-w-md mx-auto">
            Real reviews from landlords who have booked EICR, Gas Safety, EPC
            and Fire Risk Assessment services across London.
          </p>
        </Container>
      </section>

      {/* ── Reviews ── */}
      {REVIEWS.length > 0 && (
        <section className="py-16 bg-warm-white">
          <Container>
            <ReviewsSection />
          </Container>
        </section>
      )}

      {/* ── CTA ── */}
      <section
        aria-labelledby="reviews-cta-heading"
        className="py-16 bg-compliance-blue text-white text-center"
      >
        <Container className="max-w-xl">
          <Heading level={2} id="reviews-cta-heading" inverted className="mb-3">
            Join hundreds of London landlords
          </Heading>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Fixed prices. Next-day appointments. Certificate emailed within 24 hours.
            Book online in under 3 minutes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book now
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              See all prices
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
