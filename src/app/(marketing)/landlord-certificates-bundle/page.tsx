import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Heading } from "@/components/ui/heading";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";
import {
  DOMESTIC_EICR_TABLE,
  DOMESTIC_EPC_TABLE,
  FRA_RESIDENTIAL_TABLE,
  GAS_SAFETY_CP12_TABLE,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Landlord Certificate Bundle — Save up to £44.97 | My Landlord Certificate",
  description:
    "Bundle your EICR, Gas Safety Certificate, EPC and Fire Risk Assessment in one visit and save. Essential Bundle from £130. Full Compliance £230. HMO Complete £450. All certificates emailed same day.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/landlord-certificates-bundle",
  },
  openGraph: {
    title: "Landlord Certificate Bundle — Save up to £44.97",
    description:
      "Combine your landlord compliance certificates in one engineer visit. Essential Bundle £130, Full Compliance £230, HMO Complete £450. No hidden charges. Certificates emailed same day.",
    url: "https://www.mylandlordcertificate.co.uk/landlord-certificates-bundle",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landlord Certificate Bundle",
  url: "https://www.mylandlordcertificate.co.uk/landlord-certificates-bundle",
  description:
    "Bundle your landlord compliance certificates — EICR, Gas Safety Certificate (CP12), EPC and Fire Risk Assessment — into a single engineer visit. Save up to £44.97 versus booking each certificate separately.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Landlord Certificate Bundles",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Essential Bundle (EICR + Gas Safety)",
        price: "130",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Full Compliance Bundle (EICR + Gas Safety + EPC)",
        price: "230",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "HMO Complete Bundle (EICR + Gas Safety + EPC + FRA)",
        price: "450",
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  offers: {
    "@type": "Offer",
    price: "130",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/landlord-certificates-bundle",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Landlord Certificate Bundle",
  description:
    "Bundled landlord compliance certificates completed in a single engineer visit. EICR, Gas Safety Certificate, EPC and Fire Risk Assessment available as bundles.",
  brand: {
    "@type": "Brand",
    name: "My Landlord Certificate",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "130",
    highPrice: "450",
    priceCurrency: "GBP",
    offerCount: "3",
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "203",
    bestRating: "5",
    worstRating: "1",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.mylandlordcertificate.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Landlord Certificate Bundle",
      item: "https://www.mylandlordcertificate.co.uk/landlord-certificates-bundle",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does the landlord certificate bundle cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Essential Bundle (EICR + Gas Safety Certificate) costs £130, saving £14.99 versus booking separately. The Full Compliance Bundle (EICR + Gas Safety + EPC) costs £230, saving £24.98. The HMO Complete Bundle (EICR + Gas Safety + EPC + Fire Risk Assessment) costs £450, saving £44.97.",
      },
    },
    {
      "@type": "Question",
      name: "Will all certificates be completed in one visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our engineers are qualified across all disciplines, so your EICR, Gas Safety Certificate, EPC and Fire Risk Assessment can all be completed in a single visit. This saves time and minimises disruption to your tenants.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customise a bundle for my property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — call us on 0330 133 0066 and we can put together a custom bundle combining any of our services at a discounted price.",
      },
    },
    {
      "@type": "Question",
      name: "Do I get separate certificates for each service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each service produces its own certificate — a separate EICR, CP12, EPC and FRA report. All are emailed on the same day of the visit and are fully compliant documents suitable for tenants and local authorities.",
      },
    },
    {
      "@type": "Question",
      name: "Which bundle is right for an HMO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The HMO Complete Bundle covers EICR, Gas Safety Certificate, EPC and Fire Risk Assessment — the four certificates most commonly required by local authorities as HMO licence conditions. It uses 4-bedroom pricing as its base. For larger HMOs call us for a bespoke quote.",
      },
    },
  ],
};

// ── Bundle data ───────────────────────────────────────────────────────────────

const bundles: {
  name: string;
  tagline: string;
  services: { label: string; price: number; href: string }[];
  subtotal: number;
  bundlePrice: number;
  saving: number;
  href: string;
  badge: string | null;
  bestFor: string;
}[] = [
  {
    name: "Essential Bundle",
    tagline: "The two annual must-haves, sorted in one visit.",
    services: [
      { label: "EICR (1–3 bed)", price: 94.99, href: "/eicr" },
      { label: "Gas Safety Certificate — 1 appliance", price: 50, href: "/gas-safety-certificate" },
    ],
    subtotal: 144.99,
    bundlePrice: 130,
    saving: 14.99,
    href: "/book?bundle=essential",
    badge: null,
    bestFor:
      "Single lets with one gas boiler. Covers the two annual legal requirements for most landlords.",
  },
  {
    name: "Full Compliance Bundle",
    tagline: "Everything most landlords need — sorted in one day.",
    services: [
      { label: "EICR (1–3 bed)", price: 94.99, href: "/eicr" },
      { label: "Gas Safety Certificate — 1 appliance", price: 50, href: "/gas-safety-certificate" },
      { label: "EPC (1–3 bed)", price: 109.99, href: "/epc" },
    ],
    subtotal: 254.98,
    bundlePrice: 230,
    saving: 24.98,
    href: "/book?bundle=full-compliance",
    badge: "Most popular",
    bestFor:
      "New lets, new landlords, or properties whose EPC is expiring. Covers all three primary compliance requirements.",
  },
  {
    name: "HMO Complete Bundle",
    tagline: "Full compliance for HMOs and larger properties.",
    services: [
      { label: "EICR (4 bed)", price: 104.99, href: "/eicr" },
      { label: "Gas Safety Certificate — 2 appliances", price: 60, href: "/gas-safety-certificate" },
      { label: "EPC (5 bed)", price: 149.99, href: "/epc" },
      { label: "Fire Risk Assessment (4 bed)", price: 179.99, href: "/fire-risk-assessment" },
    ],
    subtotal: 494.97,
    bundlePrice: 450,
    saving: 44.97,
    href: "/book?bundle=hmo-complete",
    badge: null,
    bestFor:
      "HMOs and larger properties that need all four certificates as a condition of their HMO licence.",
  },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How much does the landlord certificate bundle cost?",
    answer:
      "The Essential Bundle (EICR + Gas Safety Certificate) costs £130, saving £14.99 versus booking separately. The Full Compliance Bundle (EICR + Gas Safety + EPC) costs £230, saving £24.98. The HMO Complete Bundle (EICR + Gas Safety + EPC + Fire Risk Assessment) costs £450, saving £44.97 on four certificates.",
  },
  {
    question: "Will all certificates be completed in one visit?",
    answer:
      "Yes — our engineers are qualified across all disciplines, so your EICR, Gas Safety Certificate, EPC and Fire Risk Assessment can all be completed in a single visit. This eliminates the need to arrange multiple access appointments with your tenants.",
  },
  {
    question: "Can I customise a bundle for my property?",
    answer:
      "Yes — call us on 0330 133 0066 or use the booking notes to tell us what you need. We can bundle any combination of our services at a discounted price, including properties larger than those covered by the standard tiers.",
  },
  {
    question: "Do I get separate certificates for each service?",
    answer:
      "Yes. Each service produces its own certificate — a separate EICR, CP12, EPC and FRA report. All are emailed to you on the same day as the visit and are fully compliant, stand-alone documents suitable for providing to tenants, letting agents and local authorities.",
  },
  {
    question: "Which bundle is right for my HMO?",
    answer:
      "The HMO Complete Bundle covers the four certificates most commonly required as HMO licence conditions — EICR, Gas Safety Certificate, EPC and Fire Risk Assessment. It uses 4-bedroom property pricing as its base. For larger HMOs or properties with more than 2 gas appliances, call us for a bespoke bundle quote.",
  },
  {
    question: "What if my property only needs some of the certificates?",
    answer:
      "Each certificate can also be booked individually. Use the bundle when two or more certificates fall due at the same time — that is when the saving and the single-visit convenience are most valuable.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BundlePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="bundle-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">Landlord Certificate Bundle</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            One Visit · All Certificates · Save up to £44.97
          </p>

          <Heading level={1} id="bundle-heading" inverted className="mb-4 max-w-2xl">
            All your landlord certificates — bundled &amp; discounted
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-8">
            Book your EICR, Gas Safety Certificate, EPC and Fire Risk Assessment
            together and save versus booking each one separately. One engineer
            visit. One booking. All certificates emailed the same day.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/book?bundle=full-compliance"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book a bundle — from £130
            </Link>
            <a
              href="#bundles"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              Compare bundles
            </a>
          </div>

          <TrustBadges variant="dark" />
        </Container>
      </section>

      {/* ── Quick stats bar ── */}
      <div className="bg-brand-charcoal text-sm py-3">
        <Container>
          <dl className="flex flex-wrap gap-x-8 gap-y-1 text-brand-grey">
            <div className="flex gap-1.5">
              <dt>Bundles from</dt>
              <dd className="text-white font-semibold">£130</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Save up to</dt>
              <dd className="text-white font-semibold">£44.97</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Certificates</dt>
              <dd className="text-white font-semibold">emailed same day</dd>
            </div>
            <div className="flex gap-1.5">
              <dt>Appointments</dt>
              <dd className="text-white font-semibold">next-day available</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

        {/* ── Why bundle ── */}
        <section aria-labelledby="why-bundle-heading">
          <Heading level={2} id="why-bundle-heading" className="mb-8">
            Why book a bundle?
          </Heading>
          <dl className="grid sm:grid-cols-3 gap-6">
            {[
              {
                abbr: "£",
                title: "Save money",
                body: "Bundled visits cost less than individual bookings. Save up to £44.97 on an HMO Complete bundle compared to booking each certificate separately at individual prices.",
              },
              {
                abbr: "1",
                title: "One appointment",
                body: "A single engineer visit for all your certificates — no juggling multiple booking slots, no multiple access requests to your tenants, no repeated disruption to occupants.",
              },
              {
                abbr: "All",
                title: "All certificates same day",
                body: "Every certificate from the bundle is emailed on the day of the visit. EICR, CP12, EPC and FRA arrive together as one complete digital compliance pack.",
              },
            ].map(({ abbr, title, body }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-compliance-blue/10 text-compliance-blue font-bold text-xl flex items-center justify-center">
                  {abbr}
                </div>
                <div>
                  <dt className="font-semibold text-brand-charcoal mb-1">{title}</dt>
                  <dd className="text-sm text-brand-grey leading-relaxed">{body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Bundle cards ── */}
        <section id="bundles" aria-labelledby="bundles-heading">
          <Heading level={2} id="bundles-heading" className="mb-2">
            Choose your bundle
          </Heading>
          <p className="text-brand-grey mb-10">
            All bundles are completed in a single visit. All certificates are
            emailed on the same day.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {bundles.map((bundle) => (
              <div
                key={bundle.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border bg-white overflow-hidden",
                  bundle.badge
                    ? "border-compliance-blue shadow-md shadow-compliance-blue/10"
                    : "border-border",
                )}
              >
                {bundle.badge && (
                  <div className="bg-compliance-blue text-white text-xs font-semibold text-center py-1.5 tracking-wide">
                    {bundle.badge}
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-brand-charcoal mb-1">
                    {bundle.name}
                  </h3>
                  <p className="text-sm text-brand-grey mb-5">{bundle.tagline}</p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {bundle.services.map((svc) => (
                      <li
                        key={svc.label}
                        className="flex items-start justify-between gap-3 text-sm"
                      >
                        <span className="flex items-start gap-2 text-brand-charcoal/80">
                          <svg
                            className="w-4 h-4 text-action-green mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path
                              d="M3 8l3.5 3.5L13 4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <Link
                            href={svc.href}
                            className="hover:text-compliance-blue hover:underline"
                          >
                            {svc.label}
                          </Link>
                        </span>
                        <span className="text-brand-grey shrink-0">
                          £{svc.price.toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border pt-5 space-y-2">
                    <div className="flex items-center justify-between text-sm text-brand-grey">
                      <span>If booked separately</span>
                      <span className="line-through">£{bundle.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-brand-charcoal">
                        Bundle price
                      </span>
                      <span className="text-2xl font-bold text-brand-charcoal">
                        £{bundle.bundlePrice}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-brand-grey">You save</span>
                      <span className="inline-flex items-center rounded-full bg-action-green/15 border border-action-green/30 px-2.5 py-0.5 text-sm font-semibold text-brand-charcoal">
                        £{bundle.saving.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={bundle.href}
                    className={cn(
                      buttonVariants({
                        variant: bundle.badge ? "primary" : "secondary",
                        size: "md",
                      }),
                      "mt-6 w-full",
                    )}
                  >
                    Book {bundle.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-center text-brand-grey">
            Need a different combination?{" "}
            <a
              href="tel:03301330066"
              className="text-compliance-blue hover:underline font-medium"
            >
              Call 0330 133 0066
            </a>{" "}
            for a custom bundle quote.
          </p>
        </section>

        {/* ── Which bundle guide ── */}
        <section aria-labelledby="which-bundle-heading">
          <Heading level={2} id="which-bundle-heading" className="mb-4">
            Which bundle is right for you?
          </Heading>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The right bundle depends on your property type and which certificates
            are coming up for renewal at the same time. Here is a quick guide.
          </p>

          <div className="space-y-4">
            {bundles.map((bundle) => (
              <div
                key={bundle.name}
                className="rounded-xl border border-border bg-warm-white p-5 flex flex-col sm:flex-row sm:items-start gap-4"
              >
                <div className="sm:w-48 shrink-0">
                  <p className="font-semibold text-brand-charcoal text-sm">
                    {bundle.name}
                  </p>
                  <p className="text-compliance-blue font-bold">
                    £{bundle.bundlePrice}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-brand-charcoal/80 leading-relaxed">
                    <strong className="text-brand-charcoal">Best for: </strong>
                    {bundle.bestFor}
                  </p>
                  <p className="text-xs text-brand-grey mt-1">
                    Includes:{" "}
                    {bundle.services.map((s) => s.label).join(" + ")}
                  </p>
                </div>
                <Link
                  href={bundle.href}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "shrink-0 self-start",
                  )}
                >
                  Book
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── Individual pricing tables ── */}
        <section aria-labelledby="individual-pricing-heading">
          <Heading level={2} id="individual-pricing-heading" className="mb-2">
            Individual service pricing
          </Heading>
          <p className="text-brand-grey mb-8">
            Prices vary by property size and appliance count. Browse the full
            tiers below before booking so you know exactly which band your
            property falls into.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <PriceTable
              title="EICR — by property size"
              rows={DOMESTIC_EICR_TABLE}
              highlightCheapest
            />
            <PriceTable
              title="Gas Safety Certificate (CP12)"
              rows={GAS_SAFETY_CP12_TABLE}
            />
            <PriceTable
              title="EPC — by property size"
              rows={DOMESTIC_EPC_TABLE}
              highlightCheapest
            />
            <PriceTable
              title="Fire Risk Assessment — residential"
              rows={FRA_RESIDENTIAL_TABLE}
              highlightCheapest
            />
          </div>

          <p className="mt-6 text-sm text-center text-brand-grey">
            See every service in one place on our{" "}
            <Link
              href="/pricing"
              className="text-compliance-blue hover:underline font-medium"
            >
              complete pricing page →
            </Link>
          </p>
        </section>

        {/* ── Individual service links ── */}
        <section aria-labelledby="individual-services-heading">
          <Heading level={2} id="individual-services-heading" className="mb-4">
            Book certificates individually
          </Heading>
          <p className="text-brand-charcoal/80 mb-5 text-sm leading-relaxed">
            Prefer to book one certificate at a time? Each service is available
            separately at a fixed price with the same next-day appointments and
            same-day certificate delivery.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "EICR Certificate", href: "/eicr", price: "from £67.99" },
              { label: "Gas Safety Certificate", href: "/gas-safety-certificate", price: "from £50" },
              { label: "EPC Certificate", href: "/epc", price: "from £89.99" },
              { label: "Fire Risk Assessment", href: "/fire-risk-assessment", price: "from £74" },
              { label: "PAT Testing", href: "/pat-testing", price: "from £59.99" },
              { label: "All Services & Prices", href: "/pricing", price: "Full price list" },
            ].map(({ label, href, price }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-warm-white p-4 hover:border-compliance-blue transition-colors block"
              >
                <p className="font-semibold text-brand-charcoal text-sm mb-1">{label}</p>
                <p className="text-compliance-blue text-sm font-medium">{price}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading">
          <Heading level={2} id="faq-heading" className="mb-6">
            Bundle — frequently asked questions
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </section>

        {/* ── CTA ── */}
        <section
          aria-labelledby="cta-heading"
          className="rounded-2xl bg-compliance-blue px-8 py-10 text-center text-white"
        >
          <Heading level={2} id="cta-heading" inverted className="mb-2">
            Ready to sort all your certificates in one visit?
          </Heading>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Book online in under 3 minutes. Our team will confirm your
            appointment and coordinate the right qualified engineers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book?bundle=full-compliance"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Full Compliance Bundle — £230
            </Link>
            <Link
              href="/book?bundle=essential"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              Essential Bundle — £130
            </Link>
          </div>
          <p className="mt-4 text-xs text-blue-300">
            No hidden charges. All certificates emailed same day.
          </p>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?bundle=essential"
        label="Book Bundle"
        price={130}
        serviceName="Bundle from"
      />
    </>
  );
}
