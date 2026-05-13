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
  GAS_SAFETY_CP12_TABLE,
  FRA_RESIDENTIAL_TABLE,
} from "@/lib/pricing";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Landlord Certificate Bundle — Save up to £44.97 | My Landlord Certificate",
  description:
    "Bundle your EICR, Gas Safety Certificate, EPC and Fire Risk Assessment in one visit. Essential Bundle from £130. Full Compliance from £230. HMO Complete from £450.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/landlord-certificates-bundle",
  },
  openGraph: {
    title: "Landlord Certificate Bundle — Save up to £44.97 | My Landlord Certificate",
    description:
      "Combine your landlord compliance certificates in one engineer visit. Essential Bundle £130, Full Compliance £230, HMO Complete £450. Fixed pricing, same-day certificates.",
    url: "https://mylandlordcertificate.co.uk/landlord-certificates-bundle",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Landlord Certificate Bundle",
  url: "https://mylandlordcertificate.co.uk/landlord-certificates-bundle",
  description:
    "Bundle your landlord compliance certificates — EICR, Gas Safety Certificate, EPC and Fire Risk Assessment — in a single engineer visit and save versus booking separately.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "South East England"],
  offers: {
    "@type": "Offer",
    price: "130",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://mylandlordcertificate.co.uk/landlord-certificates-bundle",
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
      item: "https://mylandlordcertificate.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Landlord Certificate Bundle",
      item: "https://mylandlordcertificate.co.uk/landlord-certificates-bundle",
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
        text: "Our Essential Bundle (EICR + Gas Safety) costs £130, saving £14.99 versus booking separately. The Full Compliance Bundle (EICR + Gas Safety + EPC) costs £230, saving £24.98. The HMO Complete Bundle (EICR + Gas Safety + EPC + Fire Risk Assessment) costs £450, saving £44.97.",
      },
    },
    {
      "@type": "Question",
      name: "Can I customise the bundle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — call us on 0330 133 0066 to discuss a custom bundle. We can combine any of our services into a single visit at a discounted price.",
      },
    },
    {
      "@type": "Question",
      name: "Will all certificates be completed in one visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — our engineers are qualified across all disciplines, so your EICR, Gas Safety Certificate, EPC and Fire Risk Assessment can all be completed in a single visit, saving you time and disruption to your tenants.",
      },
    },
  ],
};

// ── Bundle data ───────────────────────────────────────────────────────────────

const bundles = [
  {
    name: "Essential Bundle",
    tagline: "The two annual must-haves in one visit.",
    services: [
      { label: "EICR (1–3 bed property)", price: 94.99, href: "/eicr" },
      { label: "Gas Safety Certificate (1 appliance)", price: 50, href: "/gas-safety-certificate" },
    ],
    subtotal: 144.99,
    bundlePrice: 130,
    saving: 14.99,
    href: "/book?bundle=essential",
    badge: null,
  },
  {
    name: "Full Compliance Bundle",
    tagline: "Everything most landlords need — sorted in one day.",
    services: [
      { label: "EICR (1–3 bed property)", price: 94.99, href: "/eicr" },
      { label: "Gas Safety Certificate (1 appliance)", price: 50, href: "/gas-safety-certificate" },
      { label: "EPC (1–3 bed property)", price: 109.99, href: "/epc" },
    ],
    subtotal: 254.98,
    bundlePrice: 230,
    saving: 24.98,
    href: "/book?bundle=full-compliance",
    badge: "Most popular" as const,
  },
  {
    name: "HMO Complete Bundle",
    tagline: "Full compliance for larger and multi-let properties.",
    services: [
      { label: "EICR (4 bed property)", price: 104.99, href: "/eicr" },
      { label: "Gas Safety Certificate (2 appliances)", price: 60, href: "/gas-safety-certificate" },
      { label: "EPC (5 bed property)", price: 149.99, href: "/epc" },
      { label: "Fire Risk Assessment (up to 4 bed)", price: 179.99, href: "/fire-risk-assessment" },
    ],
    subtotal: 494.97,
    bundlePrice: 450,
    saving: 44.97,
    href: "/book?bundle=hmo-complete",
    badge: null,
  },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────

const faqItems = [
  {
    question: "How much does the landlord certificate bundle cost?",
    answer:
      "Our Essential Bundle (EICR + Gas Safety) costs £130, saving £14.99 versus booking separately. The Full Compliance Bundle (EICR + Gas Safety + EPC) costs £230, saving £24.98. The HMO Complete Bundle costs £450, saving £44.97 on four certificates.",
  },
  {
    question: "Will all certificates be completed in one visit?",
    answer:
      "Yes — our engineers hold qualifications across all disciplines. Your EICR, Gas Safety Certificate, EPC and Fire Risk Assessment can all be completed in a single visit, minimising disruption to your tenants and saving you time.",
  },
  {
    question: "Can I customise a bundle for my property?",
    answer:
      "Yes — call us on 0330 133 0066 or use the booking form to tell us what you need. We can bundle any combination of our services at a discounted price.",
  },
  {
    question: "What if my property is larger than a 4 bedroom?",
    answer:
      "Our bundles use 1–4 bedroom pricing as a base. For larger properties or HMOs, call us for a bespoke quote — we can combine the right price tiers for your specific property into a single discounted visit.",
  },
  {
    question: "Do I get separate certificates for each service?",
    answer:
      "Yes — each service produces its own certificate. You receive a separate EICR, CP12, EPC and FRA report, all emailed on the same day. Each certificate is fully compliant and suitable for providing to tenants and local authorities.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BundlePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
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
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li aria-hidden="true" className="text-blue-400">›</li>
              <li className="text-white font-medium">Landlord Certificate Bundle</li>
            </ol>
          </nav>

          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            One Visit · All Certificates · Fixed Pricing
          </p>

          <Heading level={1} id="bundle-heading" inverted className="mb-4 max-w-2xl">
            All the certificates you need. One visit. One price.
          </Heading>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mb-8">
            Bundle your EICR, Gas Safety Certificate, EPC and Fire Risk
            Assessment into a single engineer visit. Save up to{" "}
            <strong className="text-action-green">£44.97</strong> versus booking
            each separately — and eliminate the hassle of multiple appointments.
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
              <dd className="text-white font-semibold">same week</dd>
            </div>
          </dl>
        </Container>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-20">

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
                {/* Popular badge */}
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

                  {/* Services list */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {bundle.services.map((svc) => (
                      <li key={svc.label} className="flex items-start justify-between gap-3 text-sm">
                        <span className="flex items-start gap-2 text-brand-charcoal/80">
                          <svg className="w-4 h-4 text-action-green mt-0.5 shrink-0" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <Link href={svc.href} className="hover:text-compliance-blue hover:underline">
                            {svc.label}
                          </Link>
                        </span>
                        <span className="text-brand-grey shrink-0">£{svc.price.toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="border-t border-border pt-5 space-y-2">
                    <div className="flex items-center justify-between text-sm text-brand-grey">
                      <span>If booked separately</span>
                      <span className="line-through">£{bundle.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-brand-charcoal">Bundle price</span>
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
            <a href="tel:03301330066" className="text-compliance-blue hover:underline font-medium">
              Call us on 0330 133 0066
            </a>{" "}
            for a custom bundle quote.
          </p>
        </section>

        {/* ── Individual pricing tables ── */}
        <section aria-labelledby="individual-pricing-heading">
          <Heading level={2} id="individual-pricing-heading" className="mb-2">
            Individual service pricing
          </Heading>
          <p className="text-brand-grey mb-8">
            Not sure which bundle fits? Browse the full price tiers for each
            service below — prices vary by property size and appliance count.
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
            Want a full overview of every service?{" "}
            <Link href="/pricing" className="text-compliance-blue hover:underline font-medium">
              See our complete pricing page →
            </Link>
          </p>
        </section>

        {/* ── Why bundle ── */}
        <section aria-labelledby="why-bundle-heading">
          <Heading level={2} id="why-bundle-heading" className="mb-8">
            Why book a bundle?
          </Heading>
          <dl className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "£",
                title: "Save money",
                body: "Bundled visits cost less than individual bookings. Save up to £44.97 on an HMO Complete bundle versus booking each certificate separately.",
              },
              {
                icon: "📅",
                title: "One appointment",
                body: "A single engineer visit for all certificates. No juggling multiple booking slots, no multiple access requests to tenants.",
              },
              {
                icon: "📄",
                title: "All certificates same day",
                body: "Every certificate from the bundle is emailed to you on the day of the visit — EICR, CP12, EPC and FRA all in one digital folder.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-6">
                <div className="w-12 h-12 rounded-xl bg-compliance-blue/10 text-compliance-blue font-bold text-xl flex items-center justify-center">
                  {icon}
                </div>
                <div>
                  <dt className="font-semibold text-brand-charcoal mb-1">{title}</dt>
                  <dd className="text-sm text-brand-grey leading-relaxed">{body}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* ── FAQs ── */}
        <section aria-labelledby="faq-heading">
          <Heading level={2} id="faq-heading" className="mb-6">
            Bundle frequently asked questions
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
            appointment and match you with the right qualified engineers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book?bundle=full-compliance"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book Full Compliance — £230
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
            Fixed pricing. All certificates emailed same day. No hidden fees.
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
