import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Footer } from "@/components/ui/footer";
import { Heading } from "@/components/ui/heading";
import { NavBar } from "@/components/ui/nav-bar";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { PriceTag } from "@/components/ui/price-tag";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/ui/service-card";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TrustBadges } from "@/components/ui/trust-badges";
import {
  DOMESTIC_EICR_TABLE,
  DOMESTIC_EPC_TABLE,
  GAS_SAFETY_CP12_TABLE,
  PAT_TABLE,
} from "@/lib/pricing";

export const metadata = {
  title: "Design System Demo",
  robots: { index: false, follow: false },
};

const faqItems = [
  {
    question: "How long does an EICR take?",
    answer:
      "Typically 2–4 hours depending on the size of the property and the age of the wiring. Our engineers always call ahead to confirm timing.",
  },
  {
    question: "Do I need to be present during the inspection?",
    answer:
      "No — you simply need to ensure the engineer has access to the property. A keyholder or tenant can let them in.",
  },
  {
    question: "When will I receive my certificate?",
    answer:
      "All certificates are emailed within 24 hours of the inspection, usually within a few hours of completion.",
  },
];

const EicrIcon = () => (
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

const GasIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
      fill="currentColor"
    />
  </svg>
);

export default function DemoPage() {
  return (
    <>
      <NavBar />

      <main className="bg-warm-white pb-24">
        {/* ── Page header ───────────────────────────────────── */}
        <Section spacing="md" className="bg-compliance-blue text-white">
          <Container>
            <Heading level={1} inverted className="mb-4">
              Design System Demo
            </Heading>
            <p className="text-blue-100 text-lg max-w-2xl">
              A visual showcase of every component in{" "}
              <code className="bg-white/20 px-1.5 py-0.5 rounded text-sm">
                src/components/ui/
              </code>
              . Not a production page.
            </p>
          </Container>
        </Section>

        {/* ── Heading scale ────────────────────────────────── */}
        <Section spacing="md">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              Heading Component
            </p>
            <div className="flex flex-col gap-4">
              <Heading level={1}>H1 — Property Compliance Made Simple</Heading>
              <Heading level={2}>H2 — Our Landlord Certificates</Heading>
              <Heading level={3}>H3 — EICR Certificate London</Heading>
              <Heading level={4}>H4 — Included in every inspection</Heading>
            </div>

            <div className="mt-8 rounded-2xl bg-compliance-blue p-8">
              <Heading level={2} inverted>
                H2 Inverted — on blue background
              </Heading>
            </div>
          </Container>
        </Section>

        {/* ── Button variants ───────────────────────────────── */}
        <Section spacing="md" className="bg-white">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              Button Component
            </p>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="primary" size="sm">Primary sm</Button>
                <Button variant="primary" size="md">Primary md</Button>
                <Button variant="primary" size="lg">Primary lg</Button>
                <Button variant="primary" size="xl">Primary xl</Button>
              </div>
              <div className="flex flex-wrap gap-3 items-center">
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
                <Button variant="cta" size="lg">Book Now — CTA (dark text)</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* ── PriceTag ─────────────────────────────────────── */}
        <Section spacing="md">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              PriceTag Component
            </p>
            <div className="flex flex-wrap gap-10 items-end">
              <PriceTag price={99} size="sm" from />
              <PriceTag price={99} size="md" from />
              <PriceTag price={199} size="lg" from />
              <PriceTag price={59} size="md" />
            </div>
          </Container>
        </Section>

        {/* ── TrustBadges ─────────────────────────────────── */}
        <Section spacing="md" className="bg-white">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              TrustBadges Component
            </p>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-sm text-brand-grey mb-4">Light variant (on white)</p>
                <TrustBadges variant="light" />
              </div>
              <div className="bg-compliance-blue rounded-2xl px-8 py-6">
                <p className="text-sm text-blue-100 mb-4">Dark variant (on blue)</p>
                <TrustBadges variant="dark" />
              </div>
            </div>
          </Container>
        </Section>

        {/* ── ServiceCard ──────────────────────────────────── */}
        <Section spacing="md">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              ServiceCard Component
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                href="/services/eicr"
                icon={<EicrIcon />}
                name="EICR Certificate"
                description="Mandatory for all rental properties since 2020. Fixed-price inspections with certificates within 24 hours."
                price={99}
                turnaroundDays={2}
              />
              <ServiceCard
                href="/services/gas-safety"
                icon={<GasIcon />}
                name="Gas Safety Certificate"
                description="Annual CP12 by a Gas Safe Registered engineer. Protect your tenants and stay compliant."
                price={59}
                turnaroundDays={1}
              />
              <ServiceCard
                href="/services/epc"
                icon={<EicrIcon />}
                name="EPC Certificate"
                description="Required before marketing any rental property. A–G energy rating by an accredited assessor."
                price={69}
                turnaroundDays={2}
              />
            </div>
          </Container>
        </Section>

        {/* ── TestimonialCard ───────────────────────────────── */}
        <Section spacing="md" className="bg-white">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              TestimonialCard Component
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                content="Booked online at 9pm, engineer arrived next morning at 8am. Certificate in my inbox by noon. Couldn't be simpler."
                author="James T."
                location="Islington, London"
                service="EICR Certificate"
                showTrustpilot
              />
              <TestimonialCard
                content="Have 12 properties and use My Landlord Certificate for all of them. The reminder system means I've never missed a renewal."
                author="Sandra K."
                location="Manchester"
                service="Gas Safety Certificate"
              />
              <TestimonialCard
                content="Extremely professional. The engineer explained everything clearly and the price was exactly as quoted online."
                author="David M."
                location="Bristol"
                service="EPC Certificate"
                showTrustpilot
              />
            </div>
          </Container>
        </Section>

        {/* ── FAQAccordion ─────────────────────────────────── */}
        <Section spacing="md">
          <Container className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              FAQAccordion Component
            </p>
            <FAQAccordion items={faqItems} includeSchema={false} />
          </Container>
        </Section>

        {/* ── CTABanner ────────────────────────────────────── */}
        <Section spacing="md" className="bg-white">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              CTABanner Component — Blue variant
            </p>
            <CTABanner
              heading="Ready to book your EICR?"
              subheading="Book online in under 3 minutes. Same-week appointments across London."
              primaryHref="/book?service=eicr"
              primaryLabel="Book my EICR — from £99"
              secondaryHref="/services/eicr"
              secondaryLabel="Learn more"
              showTrustBadges
              variant="blue"
            />

            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
                CTABanner Component — White variant
              </p>
              <CTABanner
                heading="Bundle and save up to £60"
                subheading="Combine your EICR, Gas Safety and EPC in one engineer visit."
                primaryHref="/services/bundle"
                primaryLabel="See bundle pricing"
                variant="white"
              />
            </div>
          </Container>
        </Section>

        {/* ── PriceDisplay ─────────────────────────────────── */}
        <Section spacing="md">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              PriceDisplay Component
            </p>
            <div className="flex flex-wrap gap-10 items-end">
              <div>
                <p className="text-xs text-brand-grey mb-3">size="sm" from</p>
                <PriceDisplay price={67.99} from size="sm" />
              </div>
              <div>
                <p className="text-xs text-brand-grey mb-3">size="md" from</p>
                <PriceDisplay price={94.99} from size="md" />
              </div>
              <div>
                <p className="text-xs text-brand-grey mb-3">size="lg" from</p>
                <PriceDisplay price={50} from size="lg" />
              </div>
              <div>
                <p className="text-xs text-brand-grey mb-3">size="md" no prefix</p>
                <PriceDisplay price={104.99} size="md" />
              </div>
            </div>
          </Container>
        </Section>

        {/* ── PriceTable ───────────────────────────────────── */}
        <Section spacing="md" className="bg-white">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey mb-8">
              PriceTable Component
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* EICR — with highlightCheapest */}
              <PriceTable
                title="Domestic EICR Pricing"
                rows={DOMESTIC_EICR_TABLE}
                highlightCheapest
              />

              {/* Gas Safety — with manual badge */}
              <PriceTable
                title="Gas Safety Certificate (CP12)"
                rows={[
                  ...GAS_SAFETY_CP12_TABLE.map((r, i) =>
                    i === 2 ? { ...r, badge: "most-popular" as const } : r
                  ),
                ]}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {/* EPC */}
              <PriceTable
                title="Domestic EPC Pricing"
                rows={DOMESTIC_EPC_TABLE}
                highlightCheapest
              />

              {/* PAT — longer list */}
              <PriceTable
                title="PAT Testing"
                rows={PAT_TABLE}
                highlightCheapest
              />
            </div>
          </Container>
        </Section>

        {/* ── Footer ───────────────────────────────────────── */}
        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-grey text-center mb-4">
            Footer Component (below)
          </p>
        </div>
      </main>

      <Footer />

      {/* StickyMobileCTA — visible on mobile only */}
      <StickyMobileCTA
        href="/book?service=eicr"
        label="Book Now"
        price={99}
        serviceName="EICR Certificate"
      />
    </>
  );
}
