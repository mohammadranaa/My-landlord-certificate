import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { Heading } from "@/components/ui/heading";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/ui/section";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TrustBadges } from "@/components/ui/trust-badges";
import { HOMEPAGE_ACCREDITATIONS } from "@/lib/accreditations";
import { TrustpilotWidget } from "@/components/ui/trustpilot-widget";
import { cn } from "@/lib/utils";

const FAQAccordion = dynamic(
  () => import("@/components/ui/faq-accordion").then((m) => m.FAQAccordion),
  { ssr: true },
);
const StickyMobileCTA = dynamic(
  () => import("@/components/ui/sticky-mobile-cta").then((m) => m.StickyMobileCTA),
);
const AccreditationSlider = dynamic(
  () => import("@/components/ui/accreditation-slider").then((m) => m.AccreditationSlider),
);
const ServicesSection = dynamic(
  () => import("@/components/marketing/services-section").then((m) => m.ServicesSection),
);
import { getPriceForGasSafety } from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Landlord Certificates — EICR, Gas Safety & EPC | My Landlord Certificate",
  description:
    "Book your EICR, Gas Safety Certificate (CP12), EPC, Fire Risk Assessment or PAT testing online. NICEIC approved and Gas Safe registered engineers. From £50 — no hidden charges. Next-day appointments available across London.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk" },
  openGraph: {
    title: "Your Property Certificates. Sorted. | My Landlord Certificate",
    description:
      "Landlord compliance certificates from £50 — no hidden charges. EICR from £67.99. Gas Safety from £50. EPC from £89.99. Next-day appointments across London. Certificate emailed same day.",
    url: "https://mylandlordcertificate.co.uk",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Property Certificates. Sorted. | My Landlord Certificate",
    description:
      "Landlord compliance certificates for UK landlords — no hidden charges. NICEIC approved. Gas Safe registered. Next-day appointments. Certificate emailed same day.",
  },
};

// ── Schema data ───────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "My Landlord Certificate",
  url: "https://mylandlordcertificate.co.uk",
  logo: "https://mylandlordcertificate.co.uk/logo.svg",
  telephone: "+443301330066",
  email: "hello@mylandlordcertificate.co.uk",
  sameAs: ["https://uk.trustpilot.com/review/mylandlordcertificate.co.uk"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressRegion: "London",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "My Landlord Certificate",
  url: "https://mylandlordcertificate.co.uk",
  telephone: "+443301330066",
  email: "hello@mylandlordcertificate.co.uk",
  description:
    "UK landlord compliance certificates — EICR, Gas Safety Certificate (CP12), EPC, Fire Risk Assessment and PAT testing. NICEIC approved and Gas Safe registered engineers. No hidden charges, next-day appointments across London.",
  areaServed: ["London", "South East England"],
  currenciesAccepted: "GBP",
  paymentAccepted: "Credit Card, Debit Card",
  priceRange: "££",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "847",
  },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  ratingValue: "4.8",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "847",
  reviewCount: "847",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://mylandlordcertificate.co.uk",
    },
  ],
};

// ── Prices from module ────────────────────────────────────────────────────────

const GAS_FROM = getPriceForGasSafety(1);

const reviews = [
  {
    content:
      "Booked my EICR online at 9pm on a Sunday. Engineer arrived Monday morning, certificate in my inbox by 1pm. Exactly what a busy landlord needs — fast, fixed price, no fuss.",
    author: "James T.",
    location: "Islington, London",
    service: "EICR Certificate",
    showTrustpilot: true as const,
  },
  {
    content:
      "I manage 12 rental properties and use My Landlord Certificate for every gas safety check and EICR. The renewal reminders mean I've never missed a deadline. Wouldn't use anyone else.",
    author: "Sandra K.",
    location: "Manchester",
    service: "Gas Safety Certificate",
    showTrustpilot: false as const,
  },
  {
    content:
      "The engineer explained every C3 code clearly and the price was exactly as quoted. No pressure for unnecessary work. Certificate arrived within hours. Genuinely impressed.",
    author: "David M.",
    location: "Bristol",
    service: "EPC Certificate",
    showTrustpilot: true as const,
  },
];

const faqItems = [
  {
    question: "Which landlord certificates do I legally need in the UK?",
    answer:
      "Most rental properties in England need at minimum an EICR (every 5 years), a Gas Safety Certificate — CP12 — (every 12 months) and a valid EPC (every 10 years, minimum E rating). HMOs also require a Fire Risk Assessment under the Regulatory Reform (Fire Safety) Order 2005. PAT testing is required for all electrical appliances supplied with a furnished tenancy.",
  },
  {
    question: "How quickly can I get my landlord certificate?",
    answer:
      "Most appointments are available the next day across London and the South East, with nearly all confirmed within 1–3 days. Same-day slots are available in many areas — call us on 0330 133 0066 to check availability.",
  },
  {
    question: "Do I need to be at the property during the inspection?",
    answer:
      "No. You just need to ensure the engineer can access the property — a tenant, keyholder or letting agent can provide access. We confirm the engineer's arrival window by text in advance.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. The price shown for each certificate is what you pay. No call-out fees, no surcharges for older properties, no pressure to buy remedial work. The only additional charges are £5 for parking (where no free on-site parking is available) and £18 for properties in the London Congestion Charge Zone.",
  },
  {
    question: "Which areas of London and the South East do you cover?",
    answer:
      "We cover all 32 London boroughs and the wider South East, including Surrey, Kent, Essex and Hertfordshire. Our NICEIC approved and Gas Safe registered engineers operate seven days a week across all areas.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={aggregateRatingSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-compliance-blue"
      >
        {/* Gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-compliance-blue via-compliance-blue to-brand-blue-dark pointer-events-none" aria-hidden="true" />

        <Container className="relative py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
              NICEIC Approved · Gas Safe Registered · Trustpilot 4.8★
            </p>

            <Heading level={1} id="hero-heading" inverted className="mb-6">
              Your property certificates.{" "}
              <span className="text-action-green">Sorted.</span>
            </Heading>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-4 max-w-2xl">
              Book your{" "}
              <strong className="text-white font-semibold">EICR</strong>,{" "}
              <strong className="text-white font-semibold">Gas Safety Certificate (CP12)</strong>,{" "}
              <strong className="text-white font-semibold">EPC</strong>, Fire Risk
              Assessment or PAT testing online in minutes. Next-day appointments
              available across London — no hidden charges, certificate emailed the same day.
            </p>

            <p className="text-blue-200 text-base mb-10 max-w-2xl">
              Landlord compliance doesn&apos;t have to be complicated. Every property
              certificate your rental property needs, under one roof, with no surprises on the invoice.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/book"
                className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
              >
                Book your certificate
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

            <TrustBadges variant="dark" />
          </div>
        </Container>
      </section>

      {/* ── 2. Accreditation slider ──────────────────────────────────────── */}
      <section
        aria-label="Professional accreditations and memberships"
        className="py-10 bg-white border-y border-border"
      >
        <Container>
          <AccreditationSlider
            logos={HOMEPAGE_ACCREDITATIONS}
            variant="light"
            heading="Accredited by the UK's leading professional bodies"
          />
        </Container>
      </section>

      {/* ── 3. Services grid ─────────────────────────────────────────────── */}
      <Section spacing="lg" className="bg-warm-white">
        <Container>
          <div className="text-center mb-10">
            <Heading level={2} className="mb-4">
              Every certificate you need, residential or commercial
            </Heading>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              Fixed prices, no hidden charges, next-day appointments — digital certificate
              emailed on the day of the inspection.
            </p>
          </div>

          <ServicesSection />
        </Container>
      </Section>

      {/* ── 4. How it works ──────────────────────────────────────────────── */}
      <Section id="how-it-works" spacing="lg" className="bg-white">
        <Container>
          <div className="text-center mb-14">
            <Heading level={2} className="mb-4">
              Book your landlord certificate in 3 steps
            </Heading>
            <p className="text-brand-grey text-lg max-w-xl mx-auto">
              Getting your property compliance certificate has never been easier.
              Most bookings take under 3 minutes.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-10" role="list">
            {[
              {
                step: "01",
                title: "Book online",
                body: "Choose your certificate, select your property size, pick a date and pay securely. Next-day slots available across London and the South East.",
                bullets: [
                  "EICR, Gas Safety, EPC, FRA, PAT or a bundle",
                  "Fixed price shown before you pay — no hidden extras",
                  "Morning, afternoon and evening slots available",
                  "Confirmation email sent immediately",
                ],
                icon: (
                  <svg className="w-7 h-7 text-compliance-blue" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                    <path d="M7 13h4M7 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Engineer visits your property",
                body: "A fully accredited engineer arrives at your agreed time. You don't need to be present — your tenant or a keyholder can provide access.",
                bullets: [
                  "NICEIC approved electricians for EICR",
                  "Gas Safe registered engineers for CP12",
                  "Accredited DEA assessors for EPC",
                  "ID-verified, insured and background-checked",
                ],
                icon: (
                  <svg className="w-7 h-7 text-compliance-blue" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M3 21c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                    <path d="M16 10l1.5 1.5L21 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Certificate emailed same day",
                body: "Your certificate arrives by email on the day of the inspection — fully compliant, ready to forward to your tenant, letting agent or local authority.",
                bullets: [
                  "PDF certificate emailed same day as the visit",
                  "Accepted by all local authorities and letting agents",
                  "Forward to tenant within 28 days as required by law",
                  "EPC lodged on the national register automatically",
                ],
                icon: (
                  <svg className="w-7 h-7 text-compliance-blue" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map(({ step, title, body, bullets, icon }) => (
              <li key={step} className="flex flex-col gap-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-compliance-blue/10 shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-compliance-blue uppercase tracking-wider mb-1">Step {step}</p>
                  <h3 className="text-lg font-semibold text-brand-charcoal mb-2">{title}</h3>
                  <p className="text-brand-grey leading-relaxed text-sm mb-4">{body}</p>
                  <ul className="space-y-2">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-brand-charcoal/70">
                        <svg className="w-4 h-4 text-action-green mt-0.5 shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                          <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-wrap gap-4 justify-center mt-14">
            <Link href="/book" className={cn(buttonVariants({ variant: "cta", size: "lg" }))}>
              Book now
            </Link>
            <Link href="/pricing" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              See all prices
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── 4. Why us ────────────────────────────────────────────────────── */}
      <Section spacing="lg" className="bg-warm-white">
        <Container>
          <div className="text-center mb-14">
            <Heading level={2} className="mb-4">
              Why landlords choose My Landlord Certificate
            </Heading>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              Property compliance is non-negotiable. We make staying on top of
              every landlord certificate simple, affordable and fast — so you can
              get on with managing your rental portfolio.
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-8" role="list">
            {[
              {
                icon: "£",
                title: "No hidden charges",
                body: "The price shown is what you pay — no call-out fees, no surcharges for older properties, no pressure to buy unnecessary remedial work. You'll always see the exact amount before you confirm your booking.",
              },
              {
                icon: "✓",
                title: "NICEIC approved and Gas Safe registered engineers",
                body: "Every engineer holds the correct accreditation for the job. Your EICR is carried out by a NICEIC approved electrician. Your Gas Safety Certificate is issued by a Gas Safe registered engineer. Every certificate stands up to scrutiny from tenants, letting agents and local authority inspectors.",
              },
              {
                icon: "⚡",
                title: "Next-day appointments across London",
                body: "Book today and your inspection is typically confirmed for the next day. Nearly all appointments are scheduled within 1–3 days across all 32 London boroughs, seven days a week. Same-day slots available in many areas — call 0330 133 0066.",
              },
              {
                icon: "📄",
                title: "Certificate emailed the same day",
                body: "No waiting weeks for paperwork through the post. Your landlord compliance certificate is processed and emailed on the day of the inspection. Store it, forward it to your tenant, or share it with your local council — it arrives fast.",
              },
            ].map(({ icon, title, body }) => (
              <li
                key={title}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-compliance-blue/10 text-compliance-blue font-bold text-xl flex items-center justify-center shrink-0" aria-hidden="true">
                  {icon}
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-2 text-base">
                    {title}
                  </p>
                  <p className="text-sm text-brand-grey leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="text-center mt-10">
            <Link
              href="/about"
              className="text-compliance-blue hover:underline font-medium text-sm"
            >
              About My Landlord Certificate →
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── 5. Reviews ───────────────────────────────────────────────────── */}
      <Section spacing="lg" className="bg-white">
        <Container>
          <div className="text-center mb-10">
            <Heading level={2} className="mb-4">
              What UK landlords say about us
            </Heading>
            <p className="text-brand-grey text-lg max-w-xl mx-auto mb-8">
              Real reviews from real landlords and letting agents. Independently
              verified on Trustpilot — we don&apos;t cherry-pick.
            </p>
            <TrustpilotWidget
              businessUnitId={process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID}
              variant="mini"
              className="flex justify-center"
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <TestimonialCard
                key={review.author}
                content={review.content}
                author={review.author}
                location={review.location}
                service={review.service}
                showTrustpilot={review.showTrustpilot}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="text-compliance-blue hover:underline font-medium text-sm"
            >
              Read all reviews →
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── 6. Letting agents teaser ─────────────────────────────────────── */}
      <Section spacing="md" className="bg-compliance-blue">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">
                For letting agents &amp; portfolio landlords
              </p>
              <Heading level={2} inverted className="mb-4">
                Managing multiple rental properties?
              </Heading>
              <p className="text-blue-100 text-base leading-relaxed">
                My Landlord Certificate works with letting agencies and HMO landlords
                managing multiple properties. A dedicated account manager, volume
                pricing, a renewal reminder dashboard and coordinated multi-property
                scheduling keeps every property compliant — with far less admin.{" "}
                <Link
                  href="/about"
                  className="text-white underline underline-offset-2 hover:text-blue-100 transition-colors"
                >
                  Learn more about us.
                </Link>
              </p>
            </div>
            <Link
              href="/letting-agents"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }), "shrink-0")}
            >
              Request a portfolio quote
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── 7. FAQ preview ───────────────────────────────────────────────── */}
      <Section spacing="lg" className="bg-warm-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Common landlord compliance questions
              </Heading>
              <p className="text-brand-grey text-lg">
                Plain-English answers to the questions every UK landlord asks
                about their property certificates.
              </p>
            </div>

            <FAQAccordion items={faqItems} includeSchema={false} />

            <p className="text-center mt-8 text-sm text-brand-grey">
              More questions?{" "}
              <Link
                href="/faq"
                className="text-compliance-blue hover:underline font-medium"
              >
                See our full FAQ →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 8. Final CTA ─────────────────────────────────────────────────── */}
      <Section spacing="lg" className="bg-white">
        <Container>
          <CTABanner
            heading="Ready to get your landlord certificates sorted?"
            subheading="Book online in under 3 minutes. No hidden charges. Next-day appointments across London and the South East. All certificates emailed same day."
            primaryHref="/book"
            primaryLabel="Book your certificate now"
            secondaryHref="/pricing"
            secondaryLabel="View all prices"
            showTrustBadges
            variant="blue"
          />
        </Container>
      </Section>

      {/* Sticky mobile CTA — hidden on desktop */}
      <StickyMobileCTA
        href="/book"
        label="Book Now"
        price={GAS_FROM}
        serviceName="Certificates from"
      />
    </>
  );
}
