import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, ELECTRICAL_DIAGNOSTIC_HOURLY_RATE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Electrical Diagnostic from £89.99/hr | My Landlord Certificate",
  description:
    "Electrical fault finding from £89.99/hr. Trace tripping circuits, intermittent faults, and wiring issues. NICEIC approved electricians across London. No call-out fee.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/electrical-safety/electrical-diagnostic",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Diagnostic & Fault Finding",
  url: "https://mylandlordcertificate.co.uk/electrical-safety/electrical-diagnostic",
  offers: {
    "@type": "Offer",
    price: `${ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://mylandlordcertificate.co.uk/electrical-safety" },
    { "@type": "ListItem", position: 3, name: "Electrical Diagnostic", item: "https://mylandlordcertificate.co.uk/electrical-safety/electrical-diagnostic" },
  ],
};

const faqs = [
  {
    question: "What faults can an electrical diagnostic identify?",
    answer:
      "Our electricians can trace a wide range of issues including: circuit breakers tripping repeatedly, RCDs failing without obvious cause, intermittent power loss, flickering lights, overloaded circuits, earth faults, and wiring defects not visible during an EICR.",
  },
  {
    question: "How is electrical diagnostic charged?",
    answer: `The diagnostic service is charged at £${ELECTRICAL_DIAGNOSTIC_HOURLY_RATE} per hour with no call-out fee. We will provide an estimated duration when you describe the issue at booking. Any remedial work identified is quoted separately.`,
  },
  {
    question: "Will I need an EICR after a diagnostic?",
    answer:
      "If the fault indicates wider issues with the electrical installation, we may recommend a full EICR. However, a diagnostic does not replace an EICR and vice versa — they serve different purposes.",
  },
  {
    question: "Can you repair the fault during the diagnostic visit?",
    answer:
      "Minor repairs can often be completed during the same visit. For more complex work (such as rewiring a circuit or replacing a consumer unit), we will provide a separate fixed quote.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ElectricalDiagnosticPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="bg-white border-b border-border py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-brand-grey flex-wrap">
              <li><Link href="/" className="hover:text-compliance-blue transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/electrical-safety" className="hover:text-compliance-blue transition-colors">Electrical Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Electrical Diagnostic</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Electrical Diagnostic from £{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}/hr
          </h1>
          <PriceDisplay price={ELECTRICAL_DIAGNOSTIC_HOURLY_RATE} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            NICEIC approved · No call-out fee · Fault traced and reported same visit
          </p>
          <TrustBadges variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=electrical-diagnostic"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — £{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}/hr
            </Link>
            <a
              href="tel:03301330066"
              className="inline-flex items-center border border-border hover:border-compliance-blue text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Call 0330 133 0066
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            <div className="pl-0">
              <p className="text-xs text-white/50 mb-0.5">Hourly rate</p>
              <p className="font-bold text-white">£{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}/hr</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Call-out fee</p>
              <p className="font-bold text-white">None</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Report</p>
              <p className="font-bold text-white">Same visit</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Accreditation</p>
              <p className="font-bold text-white">NICEIC</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Electrical fault finding for landlords
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR tells you the condition of your electrical installation — but if a specific
            fault develops between inspections (a breaker that keeps tripping, a socket that
            stops working, or lights that flicker intermittently), you need a diagnostic rather
            than a full inspection.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our NICEIC approved electricians use specialist test equipment to isolate and identify
            the fault, explain the cause in plain English, and advise on the most cost-effective
            remedy. Minor repairs can often be completed during the same visit.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            Charged at £{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}/hr with no call-out fee. We will
            estimate the likely duration when you describe the issue at booking — most diagnostic
            visits take 1–2 hours.
          </p>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Pricing</h2>
          <div className="bg-warm-white border border-border rounded-xl p-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-compliance-blue">
                £{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}
              </span>
              <span className="text-brand-grey">per hour</span>
            </div>
            <ul className="text-sm text-brand-grey flex flex-col gap-1 mt-3">
              <li>· No call-out fee</li>
              <li>· Most visits 1–2 hours</li>
              <li>· Remedial work quoted separately</li>
              <li>
                · Congestion Zone +£{ADDITIONAL_CHARGES.congestionZone} ·
                Parking restrictions +£{ADDITIONAL_CHARGES.parking}
              </li>
            </ul>
          </div>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What&apos;s included</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Systematic fault tracing by NICEIC approved electrician",
              "Testing of affected circuits and connections",
              "Written summary of fault and recommended action",
              "Minor repairs where possible in same visit",
              "No call-out fee — hourly rate only",
              "Advice on preventing recurrence",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-action-green/20 text-brand-charcoal flex items-center justify-center shrink-0 text-xs font-bold">
                  ✓
                </span>
                <span className="text-sm text-brand-charcoal/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQs */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book an electrical diagnostic
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              £{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}/hr, no call-out fee. NICEIC approved
              electricians available same week across London.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=electrical-diagnostic"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online
              </Link>
              <a
                href="tel:03301330066"
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                0330 133 0066
              </a>
            </div>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=electrical-diagnostic"
        label="Book Now"
        price={ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}
        serviceName="Electrical Diagnostic"
      />
    </>
  );
}
