import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/ui/cta-banner";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TrustBadges } from "@/components/ui/trust-badges";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ── Page metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Landlord Certificates — EICR, Gas Safety & EPC | My Landlord Certificate",
  description:
    "Book your EICR, Gas Safety Certificate, EPC, Fire Risk Assessment or PAT testing online. NICEIC approved and Gas Safe registered engineers. Fixed prices. Same-week appointments across London.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk" },
  openGraph: {
    title: "Your Landlord Certificates. Sorted. | My Landlord Certificate",
    description:
      "Fixed-price property compliance certificates for UK landlords. EICR from £99. Gas Safety from £59. EPC from £69. Same-week appointments. Certificate emailed same day.",
    url: "https://mylandlordcertificate.co.uk",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    title: "Your Landlord Certificates. Sorted. | My Landlord Certificate",
    description:
      "Fixed-price property compliance certificates for UK landlords. Same-week appointments. Certificate emailed same day.",
  },
};

// ── Schema markup ─────────────────────────────────────────────────────────────

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
    "UK landlord compliance certificates — EICR, Gas Safety Certificate (CP12), EPC, Fire Risk Assessment and PAT testing. NICEIC approved and Gas Safe registered engineers.",
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
      <path
        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2c0 0-6 5-6 11a6 6 0 0 0 12 0c0-3-2-6-2-6s-1 3-3 4c0 0 1-6-1-9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 2c0 0-8 1-12 8s-2 12-2 12 5-3 9-7c0 0-1 4-5 6 0 0 10-1 13-10s-3-9-3-9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l8 3v6c0 5-4 9-8 11C8 20 4 16 4 11V5l8-3z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlugIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 2v4M17 2v4M5 10h14M5 10a2 2 0 0 0-2 2v2a7 7 0 0 0 14 0v-2a2 2 0 0 0-2-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PackageIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22V12h6v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    href: "/eicr",
    icon: <EicrIcon />,
    name: "EICR Certificate",
    description:
      "Electrical Installation Condition Report — legally required for all rental properties in England since 2020. Valid for 5 years. NICEIC approved engineer.",
    price: 99,
    turnaroundDays: 2,
  },
  {
    href: "/gas-safety-certificate",
    icon: <FlameIcon />,
    name: "Gas Safety Certificate",
    description:
      "Annual CP12 inspection of all gas appliances, flues and pipework by a Gas Safe registered engineer. Certificate issued same day.",
    price: 59,
    turnaroundDays: 1,
  },
  {
    href: "/epc",
    icon: <LeafIcon />,
    name: "EPC Certificate",
    description:
      "Energy Performance Certificate — required before marketing any rental property. A–G rating by an accredited DEA assessor. Valid for 10 years.",
    price: 69,
    turnaroundDays: 2,
  },
  {
    href: "/fire-risk-assessment",
    icon: <ShieldIcon />,
    name: "Fire Risk Assessment",
    description:
      "Compulsory for HMOs under the Regulatory Reform (Fire Safety) Order 2005. Written report with prioritised action plan included.",
    price: 89,
    turnaroundDays: 2,
  },
  {
    href: "/pat-testing",
    icon: <PlugIcon />,
    name: "PAT Testing",
    description:
      "Portable Appliance Testing for furnished rental properties. Pass/fail label on every appliance, full asset register emailed same day.",
    price: 79,
    turnaroundDays: 1,
  },
  {
    href: "/landlord-certificates-bundle",
    icon: <PackageIcon />,
    name: "Bundle & Save",
    description:
      "Combine your EICR, Gas Safety Certificate and EPC in one visit. One appointment, one fixed price, one digital folder of all certificates.",
    price: 199,
    turnaroundDays: 2,
  },
];

const reviews = [
  {
    content:
      "Booked my EICR online at 9pm. Engineer arrived the next morning, certificate in my inbox by 1pm. Exactly what a landlord needs — fast, professional, no fuss.",
    author: "James T.",
    location: "Islington, London",
    service: "EICR Certificate",
    showTrustpilot: true as const,
  },
  {
    content:
      "I manage 12 properties and use My Landlord Certificate for all of them. The renewal reminders mean I've never missed a gas safety check. Wouldn't use anyone else.",
    author: "Sandra K.",
    location: "Manchester",
    service: "Gas Safety Certificate",
    showTrustpilot: false as const,
  },
  {
    content:
      "The engineer explained everything clearly. Fixed price as advertised — no hidden charges. Certificate arrived within a few hours of the inspection. Genuinely impressed.",
    author: "David M.",
    location: "Bristol",
    service: "EPC Certificate",
    showTrustpilot: true as const,
  },
];

const faqItems = [
  {
    question: "What landlord certificates do I legally need in the UK?",
    answer:
      "Most rental properties need at minimum an EICR (every 5 years), a Gas Safety Certificate (every 12 months) and a valid EPC (every 10 years, minimum E rating). HMOs also require a Fire Risk Assessment under the Regulatory Reform (Fire Safety) Order 2005. PAT testing is required for any electrical appliances supplied with a furnished let.",
  },
  {
    question: "How quickly can I get my landlord certificate?",
    answer:
      "Most appointments are available within 3–5 working days across London and the South East. Emergency same-day or next-day slots are available in many areas — call us on 0330 133 0066 to check availability.",
  },
  {
    question: "Do I need to be at the property during the inspection?",
    answer:
      "No. You just need to make sure the engineer can access the property. A tenant, keyholder or your letting agent can let them in. We'll confirm arrival time by text in advance.",
  },
  {
    question: "Is your pricing really fixed — no hidden fees?",
    answer:
      "Yes. The price shown on our website is the price you pay. No call-out charges, no surcharges for older properties, no pressure to buy unnecessary remedial work. Fixed pricing is our guarantee to every landlord.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover all 32 London boroughs and the wider South East — including Surrey, Kent, Essex and Hertfordshire. Check our coverage areas page for a full list of areas and postcodes served.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Schema markup */}
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={aggregateRatingSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── 1. Hero ── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-compliance-blue"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-compliance-blue via-compliance-blue to-brand-blue-dark pointer-events-none" />

        <Container className="relative py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
              NICEIC Approved · Gas Safe Registered · Trustpilot 4.8★
            </p>

            <Heading level={1} id="hero-heading" inverted className="mb-6">
              Your landlord certificates.{" "}
              <span className="text-action-green">Sorted.</span>
            </Heading>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
              Book your{" "}
              <strong className="text-white font-semibold">EICR</strong>,{" "}
              <strong className="text-white font-semibold">
                Gas Safety Certificate
              </strong>
              ,{" "}
              <strong className="text-white font-semibold">EPC</strong>, Fire
              Risk Assessment or PAT testing online in minutes. Fixed pricing,
              same-week appointments across London, certificate emailed the same
              day. Property compliance made simple.
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
                See our pricing
              </Link>
            </div>

            <TrustBadges variant="dark" />
          </div>
        </Container>
      </section>

      {/* ── 2. Services grid ── */}
      <Section spacing="lg" className="bg-warm-white">
        <Container>
          <div className="text-center mb-14">
            <Heading level={2} className="mb-4">
              Every certificate every UK landlord needs
            </Heading>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              All six property compliance certificates under one roof. Fixed
              prices. Same-week appointments. Digital certificate emailed on the
              day.
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
              href="/landlord-certificates"
              className="text-compliance-blue hover:underline font-medium"
            >
              Read our complete UK landlord certificates guide →
            </Link>
          </p>
        </Container>
      </Section>

      {/* ── 3. How it works ── */}
      <Section spacing="lg" className="bg-white">
        <Container>
          <div className="text-center mb-14">
            <Heading level={2} className="mb-4">
              How it works — 3 simple steps
            </Heading>
            <p className="text-brand-grey text-lg max-w-xl mx-auto">
              Getting your landlord certificate has never been easier. Most
              bookings take under 3 minutes.
            </p>
          </div>

          <ol className="grid md:grid-cols-3 gap-10" role="list">
            {[
              {
                step: "01",
                title: "Book online",
                body: "Choose your property compliance certificate, pick a date that suits you, and pay securely online. Same-week slots available across London and the South East. No phone calls, no waiting on hold.",
              },
              {
                step: "02",
                title: "Engineer visits your property",
                body: "A NICEIC approved or Gas Safe registered engineer arrives at your agreed time. You don't need to be there — a tenant, keyholder or letting agent can provide access. Professional, punctual, ID-verified.",
              },
              {
                step: "03",
                title: "Certificate emailed same day",
                body: "Once the inspection is complete, your landlord certificate is processed and emailed within a few hours. Download it, forward it to your tenant, or share it with your local authority — it's ready immediately.",
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
                  <p className="text-brand-grey leading-relaxed text-sm">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="text-compliance-blue hover:underline font-medium text-sm"
            >
              Learn more about how My Landlord Certificate works →
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── 4. Why us ── */}
      <Section spacing="lg" className="bg-warm-white">
        <Container>
          <div className="text-center mb-14">
            <Heading level={2} className="mb-4">
              Why landlords choose My Landlord Certificate
            </Heading>
            <p className="text-brand-grey text-lg max-w-2xl mx-auto">
              UK landlord compliance is non-negotiable. We make staying on top
              of every certificate simple, affordable and genuinely fast — no
              chasing, no surprises.
            </p>
          </div>

          <dl className="grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: "£",
                title: "Fixed pricing — no surprises",
                body: "Every price you see is the price you pay. No call-out charges, no hidden fees, no pressure to buy unnecessary remedial work. Your EICR is £99. Your gas safety check is £59. That's it. Transparent fixed pricing on every certificate.",
              },
              {
                icon: "✓",
                title: "NICEIC approved and Gas Safe registered engineers",
                body: "Every engineer holds the correct accreditation for the job. Your landlord certificate is signed by a qualified professional and stands up to scrutiny from tenants, letting agents and local authority inspectors.",
              },
              {
                icon: "⚡",
                title: "Same-week appointments across London",
                body: "We carry open slots across all 32 London boroughs seven days a week. In most cases you can book today and have your rental property inspection completed within 3–5 working days.",
              },
              {
                icon: "📄",
                title: "Digital certificate emailed same day",
                body: "No waiting weeks for paperwork. Your property compliance certificate is processed and emailed on the day of the inspection. Store it digitally, forward it, share it — it arrives before you've even made a cup of tea.",
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
                  <dd className="text-sm text-brand-grey leading-relaxed">
                    {body}
                  </dd>
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

      {/* ── 5. Reviews ── */}
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
              Real reviews from real landlords and letting agents. We
              don&apos;t cherry-pick — every Trustpilot review is independently
              verified.
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

      {/* ── 6. Letting agents teaser ── */}
      <Section spacing="md" className="bg-compliance-blue">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-3">
                For letting agents
              </p>
              <Heading level={2} inverted className="mb-4">
                Managing multiple rental properties?
              </Heading>
              <p className="text-blue-100 text-base leading-relaxed">
                My Landlord Certificate works with letting agencies managing
                10–50 properties. A single account manager, volume pricing, a
                renewal reminder dashboard and coordinated multi-property
                scheduling. Less admin. Every property always compliant.{" "}
                <Link
                  href="/about"
                  className="text-white underline underline-offset-2 hover:text-blue-100 transition-colors"
                >
                  Learn more about us
                </Link>
                .
              </p>
            </div>
            <Link
              href="/letting-agents"
              className={cn(
                buttonVariants({ variant: "cta", size: "lg" }),
                "shrink-0",
              )}
            >
              Request a portfolio quote
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── 7. FAQ preview ── */}
      <Section spacing="lg" className="bg-warm-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">
                Common landlord compliance questions
              </Heading>
              <p className="text-brand-grey text-lg">
                Plain English answers to the questions every UK landlord asks.
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

      {/* ── 8. Final CTA ── */}
      <Section spacing="lg" className="bg-white">
        <Container>
          <CTABanner
            heading="Ready to get your landlord certificate sorted?"
            subheading="Book online in under 3 minutes. Same-week appointments. Fixed pricing. Certificate emailed same day."
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
        price={59}
        serviceName="Certificates from"
      />
    </>
  );
}
