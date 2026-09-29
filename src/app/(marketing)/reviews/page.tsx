import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { ReviewsSection } from "@/components/marketing/reviews-section";
import { RatingBadge } from "@/components/ui/rating-badge";
import { allReviewsNewestFirst } from "@/data/reviews";
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
  const allReviews = allReviewsNewestFirst();

  return (
    <>
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
            Real reviews from London landlords
          </Heading>

          <RatingBadge theme="dark" className="justify-center mb-8" />

          <p className="text-blue-100 text-base leading-relaxed max-w-md mx-auto">
            Real reviews from landlords who have booked EICR, Gas Safety, EPC
            and Fire Risk Assessment services across London.
          </p>
        </Container>
      </section>

      {/* ── Reviews ── */}
      {allReviews.length > 0 && (
        <section className="py-16 bg-warm-white">
          <Container>
            <ReviewsSection reviews={allReviews} />
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
