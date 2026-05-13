import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";
import {
  getPriceForEICR,
  getPriceForEPC,
  getPriceForFRA,
  getPriceForGasSafety,
  getPriceForPAT,
} from "@/lib/pricing";

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

// ── Service icons ─────────────────────────────────────────────────────────────

function EicrIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2c0 0-6 5-6 11a6 6 0 0 0 12 0c0-3-2-6-2-6s-1 3-3 4c0 0 1-6-1-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 2c0 0-8 1-12 8s-2 12-2 12 5-3 9-7c0 0-1 4-5 6 0 0 10-1 13-10s-3-9-3-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2l8 3v6c0 5-4 9-8 11C8 20 4 16 4 11V5l8-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 2v4M17 2v4M5 10h14M5 10a2 2 0 0 0-2 2v2a7 7 0 0 0 14 0v-2a2 2 0 0 0-2-2M12 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Prices from module ────────────────────────────────────────────────────────

const EICR_FROM   = getPriceForEICR("studio");       // 67.99
const GAS_FROM    = getPriceForGasSafety(1);          // 50
const EPC_FROM    = getPriceForEPC("studio");         // 89.99
const FRA_FROM    = getPriceForFRA("studio");         // 74
const PAT_FROM    = getPriceForPAT(1);                // 59.99
const BUNDLE_FROM = 130;

// ── Static data ───────────────────────────────────────────────────────────────

const services = [
  {
    href: "/eicr",
    icon: <EicrIcon />,
    name: "EICR Certificate",
    description:
      "Electrical Installation Condition Report — legally required for all private rental properties in England since 2020. Valid 5 years. NICEIC approved engineer.",
    price: EICR_FROM,
    turnaroundDays: 2,
  },
  {
    href: "/gas-safety-certificate",
    icon: <FlameIcon />,
    name: "Gas Safety Certificate (CP12)",
    description:
      "Annual CP12 inspection of all gas appliances, flues and pipework by a Gas Safe registered engineer. Certificate issued same day.",
    price: GAS_FROM,
    turnaroundDays: 1,
  },
  {
    href: "/epc",
    icon: <LeafIcon />,
    name: "EPC Certificate",
    description:
      "Energy Performance Certificate — required before marketing any rental property. A–G rating by an accredited DEA assessor. Valid 10 years.",
    price: EPC_FROM,
    turnaroundDays: 2,
  },
  {
    href: "/fire-risk-assessment",
    icon: <ShieldIcon />,
    name: "Fire Risk Assessment",
    description:
      "Compulsory for all HMOs under the Regulatory Reform (Fire Safety) Order 2005. Written report with prioritised action plan included.",
    price: FRA_FROM,
    turnaroundDays: 2,
  },
  {
    href: "/pat-testing",
    icon: <PlugIcon />,
    name: "PAT Testing",
    description:
      "Portable Appliance Testing for furnished rental properties. Pass/fail label on every appliance, full asset register emailed same day.",
    price: PAT_FROM,
    turnaroundDays: 1,
  },
  {
    href: "/landlord-certificates-bundle",
    icon: <PackageIcon />,
    name: "Bundle & Save",
    description:
      "Combine your EICR, Gas Safety Certificate and EPC in one engineer visit. One fixed price, all certificates emailed the same day. Save up to £44.97.",
    price: BUNDLE_FROM,
    turnaroundDays: 2,
  },
];

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
      {/* Schema markup — using next/script as required */}
      <Script id="schema-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Script id="schema-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Script id="schema-aggregate-rating" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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

      {/* ── 2. Services grid ─────────────────────────────────────────────── */}
      <Section spacing="lg" className="bg-warm-white">
        <Container>
          <div className="text-center mb-14">
            <Heading level={2} className="mb-4">
              Every landlord certificate UK law requires
            </Heading>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              All your landlord compliance certificates in one place. No hidden charges,
              next-day appointments available, digital certificate emailed on the day of the
              inspection — no waiting, no chasing.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>

          <p className="text-center mt-10 text-brand-grey text-sm">
            Not sure which certificates your rental property needs?{" "}
            <Link
              href="/pricing"
              className="text-compliance-blue hover:underline font-medium"
            >
              View our full pricing →
            </Link>
          </p>
        </Container>
      </Section>

      {/* ── 3. How it works ──────────────────────────────────────────────── */}
      <Section spacing="lg" className="bg-white">
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
                body: "Choose your landlord certificate, pick a date and pay securely online. Next-day slots available across all 32 London boroughs and the South East — most inspections confirmed within 1–3 days. No phone calls, no waiting on hold.",
              },
              {
                step: "02",
                title: "Engineer visits your property",
                body: "A NICEIC approved or Gas Safe registered engineer arrives at your agreed time. You don't need to be present — a tenant, keyholder or letting agent can provide access. Every engineer is ID-verified, fully accredited and insured.",
              },
              {
                step: "03",
                title: "Certificate emailed same day",
                body: "Your landlord certificate is processed and emailed within a few hours of the inspection completing. Download it, forward it to your tenant, share it with your local authority — it arrives before you've left for your next appointment.",
              },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex flex-col gap-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-compliance-blue/10 text-compliance-blue font-bold text-xl shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-charcoal mb-2">
                    {title}
                  </h3>
                  <p className="text-brand-grey leading-relaxed text-sm">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="text-compliance-blue hover:underline font-medium text-sm"
            >
              Learn more about how it works →
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

          <dl className="grid sm:grid-cols-2 gap-8">
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
              <div
                key={title}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-compliance-blue/10 text-compliance-blue font-bold text-xl flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <dt className="font-semibold text-brand-charcoal mb-2 text-base">
                    {title}
                  </dt>
                  <dd className="text-sm text-brand-grey leading-relaxed">{body}</dd>
                </div>
              </div>
            ))}
          </dl>

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
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-3">
              Trustpilot · 4.8 out of 5 · 847 reviews
            </p>
            <Heading level={2} className="mb-4">
              What UK landlords say about us
            </Heading>
            <p className="text-brand-grey text-lg max-w-xl mx-auto">
              Real reviews from real landlords and letting agents. Independently
              verified on Trustpilot — we don&apos;t cherry-pick.
            </p>
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
              See all 847 reviews on Trustpilot →
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
