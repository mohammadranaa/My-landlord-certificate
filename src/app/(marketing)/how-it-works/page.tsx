import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { Heading } from "@/components/ui/heading";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "How It Works — Book a Landlord Certificate in 3 Steps | My Landlord Certificate",
  description:
    "Book your EICR, Gas Safety Certificate, EPC or Fire Risk Assessment in under 3 minutes. An accredited engineer visits your property. Certificate emailed the same day.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/how-it-works" },
  openGraph: {
    title: "How It Works — Book a Landlord Certificate in 3 Steps | My Landlord Certificate",
    description:
      "Book your EICR, Gas Safety Certificate, EPC or Fire Risk Assessment in under 3 minutes. An accredited engineer visits your property. Certificate emailed the same day.",
    url: "https://mylandlordcertificate.co.uk/how-it-works",
  },
  twitter: {
    title: "How It Works — Book a Landlord Certificate in 3 Steps",
    description:
      "Book online in under 3 minutes. Engineer visits. Certificate emailed same day. No hidden charges.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to book a landlord compliance certificate",
  description:
    "Book your EICR, Gas Safety Certificate, EPC or Fire Risk Assessment online in three steps. An accredited engineer visits your property and your certificate is emailed the same day.",
  totalTime: "PT3M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Book online",
      text: "Choose your service, select your property size, pick a date and pay securely online. The booking takes under 3 minutes and you receive a confirmation email immediately.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Engineer visits your property",
      text: "An accredited engineer arrives at your agreed appointment slot. You or your tenant can provide access. The engineer carries out the full inspection and explains any findings on the day.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Certificate emailed same day",
      text: "Your certificate is issued digitally and emailed to you on the same day as the visit. Forward it to your tenants, letting agent or local authority, or store it in your account.",
    },
  ],
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
      name: "How It Works",
      item: "https://mylandlordcertificate.co.uk/how-it-works",
    },
  ],
};

// ── Step data ─────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "1",
    title: "Book online",
    subtitle: "Under 3 minutes",
    body: "Choose your service, select your property type and size, pick a date and pay securely. You receive a booking confirmation immediately with your appointment details.",
    detail: [
      "Select from EICR, Gas Safety, EPC, Fire Risk Assessment, PAT Testing or a bundle",
      "Fixed pricing displayed before you pay — no call-out charges added later",
      "Morning, afternoon and evening slots available across London",
      "Confirmation email sent immediately with engineer contact details",
    ],
  },
  {
    number: "2",
    title: "Engineer visits",
    subtitle: "You don't need to be there",
    body: "An accredited engineer arrives at your property at the agreed time. Your tenant or a keyholder can provide access — you do not need to be present. The engineer carries out the full inspection.",
    detail: [
      "NICEIC approved or NAPIT certified electricians for EICR",
      "Gas Safe registered engineers for Gas Safety Certificates",
      "Accredited DEA assessors for EPC",
      "NEBOSH qualified assessors for Fire Risk Assessments",
      "Engineer explains any findings clearly on the day",
    ],
  },
  {
    number: "3",
    title: "Certificate emailed same day",
    subtitle: "Ready to share immediately",
    body: "Your certificate is issued digitally and emailed to you on the same day as the visit. It is a fully compliant document — suitable for tenants, letting agents, mortgage lenders and local authorities.",
    detail: [
      "Emailed as a PDF on the day of the inspection",
      "Fully compliant — accepted by all local authorities and letting agents",
      "Forward directly to your tenant within 28 days as required by law",
      "EPC certificates lodged on the national register automatically",
    ],
  },
];

const faqItems = [
  {
    question: "Do I need to be present for the inspection?",
    answer:
      "No — your tenant or any keyholder can provide access to the property. The engineer will carry out the inspection, apply any labels (for PAT testing), and complete all necessary paperwork without you being there. The certificate is emailed directly to you.",
  },
  {
    question: "How quickly can I get an appointment?",
    answer:
      "Next-day appointments are available across London and South East England, subject to engineer availability in your area. Book before 5pm and we will aim to schedule your visit for the following working day.",
  },
  {
    question: "What happens if the inspection finds a problem?",
    answer:
      "For EICRs, any observations are graded C1 (immediate danger), C2 (potentially dangerous) or C3 (improvement recommended). The engineer will explain each observation clearly. C1 and C2 items require remedial work before the property can be let — our engineers can quote for this on the day. For Gas Safety, any unsafe appliances are made safe before the engineer leaves.",
  },
  {
    question: "Can I book multiple certificates in one visit?",
    answer:
      "Yes — our bundle options combine two or more certificates in a single engineer visit. The Essential Bundle (EICR + Gas Safety) starts from £130, saving £14.99. The Full Compliance Bundle adds an EPC for £230. Bundles save money and eliminate multiple access appointments.",
  },
  {
    question: "How do I share the certificate with my tenant?",
    answer:
      "You receive the certificate by email on the same day as the inspection. Forward it directly to your tenant — you are required by law to provide a copy of the Gas Safety Certificate within 28 days of issue and the EICR before any new tenancy begins. EPC certificates are lodged on the public national register automatically.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="hiw-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-16 md:py-20 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Simple · Fast · Compliant
          </p>
          <Heading level={1} id="hiw-heading" inverted className="mb-4 max-w-2xl mx-auto">
            From booking to certificate in 3 steps
          </Heading>
          <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Book your landlord compliance certificate online in under 3 minutes.
            An accredited engineer visits your property. Certificate emailed the
            same day — no hidden charges, no hassle.
          </p>
          <TrustBadges variant="dark" className="justify-center" />
        </Container>
      </section>

      {/* ── 3 Steps ── */}
      <section aria-labelledby="steps-heading" className="py-16 md:py-24 bg-warm-white">
        <Container>
          <Heading level={2} id="steps-heading" className="sr-only">
            The 3-step process
          </Heading>

          {/* Step cards with connector line on desktop */}
          <ol className="relative grid md:grid-cols-3 gap-8 md:gap-6" role="list">
            {/* Connector line — desktop only */}
            <li aria-hidden="true" className="hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 bg-compliance-blue/20 pointer-events-none" />

            {steps.map((step, i) => (
              <li key={step.number} className="relative flex flex-col">
                {/* Mobile connector */}
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="md:hidden absolute left-6 top-12 bottom-[-2rem] w-0.5 bg-compliance-blue/20"
                  />
                )}

                <div className="flex items-start gap-5 md:flex-col md:items-center md:text-center">
                  {/* Step number circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-compliance-blue text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-md shadow-compliance-blue/30">
                    {step.number}
                  </div>

                  <div className="md:mt-4">
                    <p className="text-xs font-semibold text-compliance-blue uppercase tracking-wider mb-1">
                      {step.subtitle}
                    </p>
                    <Heading level={3} className="mb-2">
                      {step.title}
                    </Heading>
                    <p className="text-brand-charcoal/70 leading-relaxed text-sm">
                      {step.body}
                    </p>
                  </div>
                </div>

                {/* Detail bullets */}
                <ul className="mt-5 md:mt-6 space-y-2 md:text-left pl-0">
                  {step.detail.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-brand-charcoal/70">
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
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book now
            </Link>
            <Link
              href="/pricing"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              See all prices
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Why us ── */}
      <section aria-labelledby="why-heading" className="py-16 bg-white">
        <Container>
          <Heading level={2} id="why-heading" className="mb-10 text-center">
            Why landlords book with us
          </Heading>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Fixed prices",
                body: "The price shown before you pay is the price on your invoice. No call-out charges, no day-rate adjustments, no surprises.",
              },
              {
                title: "No-fuss access",
                body: "You don't need to be present. Your tenant or any keyholder can let the engineer in — ideal for landlords who live or work away from the property.",
              },
              {
                title: "Same-day certificate",
                body: "Every certificate is issued digitally and emailed on the day of the inspection — not posted days later, not delayed pending admin.",
              },
              {
                title: "Accredited engineers",
                body: "NICEIC or NAPIT for electrical, Gas Safe for gas, accredited DEAs for EPC, NEBOSH qualified for fire risk. No unregistered subcontractors.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-warm-white p-5">
                <dt className="font-semibold text-brand-charcoal mb-2">{title}</dt>
                <dd className="text-sm text-brand-grey leading-relaxed">{body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Services quick links ── */}
      <section aria-labelledby="services-heading" className="py-16 bg-warm-white">
        <Container>
          <Heading level={2} id="services-heading" className="mb-2 text-center">
            What can we certify for you?
          </Heading>
          <p className="text-brand-grey text-center mb-8">
            All services follow the same simple 3-step process.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "EICR Certificate", price: "from £67.99", href: "/eicr", validity: "Valid 5 years" },
              { label: "Gas Safety Certificate", price: "from £50", href: "/gas-safety-certificate", validity: "Valid 12 months" },
              { label: "EPC Certificate", price: "from £89.99", href: "/epc", validity: "Valid 10 years" },
              { label: "Fire Risk Assessment", price: "from £74", href: "/fire-risk-assessment", validity: "Review annually" },
              { label: "PAT Testing", price: "from £59.99", href: "/pat-testing", validity: "Review annually" },
              { label: "Certificate Bundles", price: "from £130", href: "/landlord-certificates-bundle", validity: "Save up to £44.97" },
            ].map(({ label, price, href, validity }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-white p-5 hover:border-compliance-blue transition-colors group block"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors mb-1">
                  {label}
                </p>
                <p className="text-compliance-blue font-medium text-sm mb-0.5">{price}</p>
                <p className="text-xs text-brand-grey">{validity}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQs ── */}
      <section aria-labelledby="faq-heading" className="py-16 bg-white">
        <Container className="max-w-3xl">
          <Heading level={2} id="faq-heading" className="mb-6 text-center">
            Questions about the booking process
          </Heading>
          <FAQAccordion items={faqItems} includeSchema={false} />
        </Container>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="cta-heading"
        className="py-16 bg-compliance-blue text-white text-center"
      >
        <Container className="max-w-xl">
          <Heading level={2} id="cta-heading" inverted className="mb-3">
            Ready to get compliant?
          </Heading>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Book online in under 3 minutes. Next-day appointments available
            across London. Certificate emailed the same day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book now
            </Link>
            <Link
              href="/landlord-certificates-bundle"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              View bundle deals
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
