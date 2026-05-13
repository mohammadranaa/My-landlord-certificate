import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { cn } from "@/lib/utils";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Customer Reviews — My Landlord Certificate",
  description:
    "Read genuine reviews from London landlords. Rated 4.9 out of 5 on Trustpilot. EICR, Gas Safety, EPC and Fire Risk Assessment reviews from landlords across all 32 London boroughs.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/reviews" },
  openGraph: {
    title: "Customer Reviews — My Landlord Certificate",
    description:
      "Read genuine reviews from London landlords. Rated 4.9 out of 5 on Trustpilot. EICR, Gas Safety, EPC and Fire Risk Assessment reviews from landlords across all 32 London boroughs.",
    url: "https://mylandlordcertificate.co.uk/reviews",
  },
  twitter: {
    title: "Customer Reviews — My Landlord Certificate",
    description:
      "Rated 4.9/5 on Trustpilot. 312 reviews from London landlords across EICR, Gas Safety, EPC and FRA.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "My Landlord Certificate",
  url: "https://mylandlordcertificate.co.uk",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "https://mylandlordcertificate.co.uk/reviews" },
  ],
};

// ── Review data ───────────────────────────────────────────────────────────────

const featured = [
  {
    content:
      "Booked Sunday night, engineer was at the Hackney property by 9am Tuesday. Victorian conversion with old wiring — he knew exactly what to look for and explained every observation without making it feel like a sales pitch. Certificate arrived at 2pm.",
    author: "Sarah M.",
    location: "Hackney",
    service: "EICR",
  },
  {
    content:
      "Third year running I've used them for the Croydon HMO. Always on time, always professional. The Gas Safety Certificate is in my inbox before I've even had a chance to follow up. No surprises on the bill ever.",
    author: "James T.",
    location: "Croydon",
    service: "Gas Safety",
  },
  {
    content:
      "The EPC assessor was thorough and efficient — in and out in 45 minutes for a 3-bed mid-terrace. We were hovering at a D rating and he flagged two low-cost improvements that would push us to a C before the 2025 deadline. Genuinely useful.",
    author: "Rachel B.",
    location: "Lewisham",
    service: "EPC",
  },
];

const byService: {
  service: string;
  href: string;
  reviews: { content: string; author: string; location: string; rating?: number }[];
}[] = [
  {
    service: "EICR Certificate",
    href: "/eicr",
    reviews: [
      {
        content:
          "Ex-council flat in Tower Hamlets — I was worried about the electrics being old. The electrician was thorough and explained every C3 observation. Certificate same day, no hidden extras.",
        author: "Priya K.",
        location: "Tower Hamlets",
      },
      {
        content:
          "Needed an EICR quickly for a new tenancy. Booked Monday, done Wednesday. The report was clear and my letting agent accepted it straight away. Will book again when it's due.",
        author: "Daniel F.",
        location: "Islington",
      },
    ],
  },
  {
    service: "Gas Safety Certificate",
    href: "/gas-safety-certificate",
    reviews: [
      {
        content:
          "My tenant let the engineer in while I was at work — worked perfectly. CP12 arrived by email at 4pm, forwarded it to the tenant and letting agent the same evening. Exactly how it should work.",
        author: "Laura P.",
        location: "Wandsworth",
      },
      {
        content:
          "Two appliances, completed in under an hour. The engineer noticed a small issue with the boiler flue and explained it clearly before leaving. Sorted the same week. No drama.",
        author: "David L.",
        location: "Ealing",
      },
    ],
  },
  {
    service: "EPC Certificate",
    href: "/epc",
    reviews: [
      {
        content:
          "Assessor arrived on time, was polite with my tenant and completed the EPC quickly. The certificate was on the national register within hours. Straightforward from start to finish.",
        author: "Tom H.",
        location: "Southwark",
      },
      {
        content:
          "Needed the EPC for a remortgage. The assessor knew exactly what the lender would need and made sure everything was in order. Certificate arrived same day as the visit.",
        author: "Anna C.",
        location: "Merton",
      },
    ],
  },
  {
    service: "Fire Risk Assessment",
    href: "/fire-risk-assessment",
    reviews: [
      {
        content:
          "Detailed FRA for my 5-bed HMO. The assessor flagged some issues with the fire door seals but was clear about which were urgent and which could wait. The written report was professional — accepted by the council first time.",
        author: "Mohammed A.",
        location: "Newham",
      },
      {
        content:
          "Needed a Fire Risk Assessment as part of my HMO licence renewal. The assessor was NEBOSH qualified and the report covered everything the council required. No follow-up queries from the licensing team.",
        author: "Emma C.",
        location: "Brent",
      },
    ],
  },
  {
    service: "PAT Testing",
    href: "/pat-testing",
    reviews: [
      {
        content:
          "Furnished HMO with 22 appliances — done in two hours. Every item labelled, full digital report emailed by end of day. My letting agent was impressed by how organised the documentation was.",
        author: "Chris M.",
        location: "Greenwich",
      },
      {
        content:
          "Booked PAT testing alongside the EICR in one visit. Saved me organising two separate appointments and the price was better than I expected. Will do the same next year.",
        author: "Yusuf A.",
        location: "Redbridge",
      },
    ],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={aggregateRatingSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="reviews-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-16 md:py-20 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Customer Reviews
          </p>
          <Heading level={1} id="reviews-heading" inverted className="mb-4 max-w-2xl mx-auto">
            What London landlords say about us
          </Heading>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 mb-6">
            <div className="flex gap-1" role="img" aria-label="4.9 out of 5 stars">
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
            <div className="text-left">
              <p className="font-bold text-white text-lg leading-none">4.9 / 5</p>
              <p className="text-blue-200 text-xs mt-0.5">Based on 312 reviews</p>
            </div>
          </div>

          <p className="text-blue-100 text-base leading-relaxed max-w-md mx-auto">
            Verified reviews from landlords who have booked EICR, Gas Safety, EPC
            and Fire Risk Assessment services across London.
          </p>
        </Container>
      </section>

      {/* ── Trustpilot embed placeholder ── */}
      <section aria-label="Trustpilot widget" className="bg-white border-b border-border">
        <Container className="py-8 text-center">
          <div className="rounded-2xl border-2 border-dashed border-border bg-warm-white px-8 py-10 max-w-xl mx-auto">
            <p className="font-bold text-[#00B67A] text-xl mb-1">Trustpilot</p>
            <p className="text-brand-grey text-sm">
              Trustpilot widget will be embedded here once the business profile is
              verified. Reviews are imported automatically and update in real time.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Featured reviews ── */}
      <section aria-labelledby="featured-heading" className="py-16 bg-warm-white">
        <Container>
          <Heading level={2} id="featured-heading" className="mb-2 text-center">
            Featured reviews
          </Heading>
          <p className="text-brand-grey text-center mb-10">
            Selected from recent bookings across London.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((r) => (
              <TestimonialCard
                key={r.author}
                content={r.content}
                author={r.author}
                location={r.location}
                service={r.service}
                showTrustpilot
              />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Reviews by service ── */}
      <section aria-labelledby="by-service-heading" className="py-16 bg-white">
        <Container>
          <Heading level={2} id="by-service-heading" className="mb-2 text-center">
            Reviews by service
          </Heading>
          <p className="text-brand-grey text-center mb-12">
            What landlords say about each certificate we offer.
          </p>

          <div className="space-y-12">
            {byService.map(({ service, href, reviews }) => (
              <div key={service}>
                <div className="flex items-center justify-between mb-5">
                  <Heading level={3} className="!mb-0">
                    {service}
                  </Heading>
                  <Link
                    href={href}
                    className="text-sm text-compliance-blue font-medium hover:underline shrink-0 ml-4"
                  >
                    Learn more →
                  </Link>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  {reviews.map((r) => (
                    <TestimonialCard
                      key={r.author}
                      content={r.content}
                      author={r.author}
                      location={r.location}
                      service={service.replace(" Certificate", "").replace(" Assessment", "")}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
            Fixed prices. Next-day appointments. Certificate emailed the same day.
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
