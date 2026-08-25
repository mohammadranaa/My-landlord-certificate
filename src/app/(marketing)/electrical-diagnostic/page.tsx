import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { PHONE_DISPLAY, TEL } from "@/lib/constants";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { TrustBadges } from "@/components/ui/trust-badges";
import { HeroRating } from "@/components/ui/hero-rating";
import { ReviewsBlock } from "@/components/marketing/reviews-block";
import { ADDITIONAL_CHARGES, ELECTRICAL_DIAGNOSTIC_HOURLY_RATE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Electrical Diagnostic London — £99.99/hr, No Call-Out Fee",
  description:
    "Electrical fault finding from £99.99/hr with no call-out fee. Trace tripping circuits, intermittent faults, RCD failures, and wiring defects. NICEIC approved electricians across all 33 London boroughs. Minor repairs same visit.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/electrical-diagnostic",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Diagnostic & Fault Finding",
  url: "https://www.mylandlordcertificate.co.uk/electrical-diagnostic",
  description:
    "NICEIC approved electricians trace and identify electrical faults in rental properties. Hourly rate, no call-out fee. Minor repairs completed same visit.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "the M25 area"],
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://www.mylandlordcertificate.co.uk/electrical-safety" },
    { "@type": "ListItem", position: 3, name: "Electrical Diagnostic", item: "https://www.mylandlordcertificate.co.uk/electrical-diagnostic" },
  ],
};

const faqs = [
  {
    question: "When do I need an electrical diagnostic rather than an EICR?",
    answer:
      "An EICR is a scheduled periodic inspection of the whole installation. An electrical diagnostic is what you need when a specific fault develops between inspections — a circuit breaker that keeps tripping, an RCD that won't reset, lights that flicker or go dead, a socket that has stopped working, or any unusual electrical behaviour. A diagnostic traces the exact cause so you know what needs to be repaired.",
  },
  {
    question: "What faults can an electrical diagnostic identify?",
    answer:
      "Our electricians can trace: MCB or RCD tripping without apparent cause, intermittent power loss to circuits or sockets, flickering or dim lights, dead sockets or lighting circuits, earth faults, insulation breakdown, overloaded circuits, loose connections at junction boxes or accessories, and faults in the consumer unit itself.",
  },
  {
    question: "How is the service charged?",
    answer:
      `The diagnostic service is charged at £${ELECTRICAL_DIAGNOSTIC_HOURLY_RATE} per hour with no call-out fee. Most diagnostic visits take 1–2 hours. When you describe the issue at booking, we'll estimate the likely duration. Any remedial work identified beyond minor repairs is quoted separately before any work is carried out.`,
  },
  {
    question: "Can you carry out repairs during the diagnostic visit?",
    answer:
      "Yes. Minor repairs — such as replacing a faulty socket, tightening connections, replacing a failed MCB, or resetting and testing an RCD — can often be completed during the same visit at no additional charge beyond the hourly rate. For larger work (rewiring a circuit, replacing a consumer unit, resolving widespread insulation failure), we will provide a separate fixed quote.",
  },
  {
    question: "Will I need an EICR after the diagnostic?",
    answer:
      "Not necessarily. If the fault is isolated and the wider installation is satisfactory, a diagnostic and repair is sufficient. However, if the fault indicates wider problems with the installation — such as deteriorating wiring or lack of RCD protection — we may recommend a full EICR. We'll advise you honestly after the visit.",
  },
  {
    question: "What if the fault can't be found during the visit?",
    answer:
      "Intermittent faults can sometimes be difficult to replicate during a visit. If this happens, we'll document what we tested and ruled out, and discuss next steps — which may include leaving test equipment in place, returning at a different time of day, or investigating further with an EICR.",
  },
  {
    question: "Is electrical fault finding covered by landlord insurance?",
    answer:
      "Some landlord building insurance policies cover emergency electrical call-outs. Check your policy before booking — if you have cover, your insurer may require you to use their approved contractor. However, if the fault is causing a safety risk to your tenants (a tripping RCD, a spark from a socket), you have a duty to act promptly regardless of insurance.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 33 London boroughs for electrical diagnostic work. Same-week appointments available across Greater London. Book online.",
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

const steps = [
  {
    step: "1",
    title: "Describe the fault — book online or call",
    description:
      "Tell us what's happening: which circuit, how often it trips, any smells or visible damage. We'll estimate the likely duration and book the nearest available slot.",
  },
  {
    step: "2",
    title: "NICEIC electrician traces the fault",
    description:
      "Using specialist test equipment, our electrician systematically isolates the fault. Minor repairs are completed on the spot. Larger work is quoted before anything is touched.",
  },
  {
    step: "3",
    title: "Written fault report same visit",
    description:
      "You receive a written summary of the fault found, the cause, the action taken, and any recommended follow-up. Useful for your records and insurance.",
  },
];

export default function ElectricalDiagnosticPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* ── Hero ── */}
      <section className="bg-compliance-blue text-white py-10 lg:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/electrical-safety" className="hover:text-white transition-colors">Electrical Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium">Electrical Diagnostic</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Electrical Diagnostic — £{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}/hr, No Call-Out Fee
          </h1>
          <HeroRating theme="dark" className="mb-5" />
          <PriceDisplay price={ELECTRICAL_DIAGNOSTIC_HOURLY_RATE} from={false} size="lg" className="mb-4 [&>span:first-child]:text-blue-100 [&>span:last-child]:text-white" />
          <p className="text-blue-100 mb-4">
            NICEIC & NAPIT approved · No call-out fee · Fault traced same visit · Minor repairs included
          </p>
          <TrustBadges serviceKey="electrical-diagnostic" variant="dark" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=electrical-diagnostic"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — £{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}/hr
            </Link>
            <a
              href="mailto:info@mylandlordcertificate.co.uk"
              className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Email us
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
              <p className="font-bold text-white">NICEIC & NAPIT</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Electrical fault finding for landlords — what it covers
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR tells you the condition of your electrical installation at a point in
            time — but electrical faults can develop at any point between inspections.
            A circuit breaker that keeps tripping, an RCD that trips and won&apos;t reset,
            lights that flicker or go dead, or a socket that sparks — these need immediate
            investigation, not a full 5-year inspection.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our NICEIC approved electricians use specialist test equipment — insulation
            resistance testers, loop impedance meters, and RCD testers — to systematically
            isolate the fault without guesswork. We explain the cause in plain English and
            complete any minor repairs during the same visit. If larger remedial work is
            needed, we quote before starting.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            As a landlord, you have a duty under the Housing Act 2004 and the Landlord and
            Tenant Act 1985 to keep electrical installations in safe working order. Acting
            quickly on tenant reports of electrical faults protects both your tenants and
            your legal position.
          </p>
        </section>

        {/* Common faults we find */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Common faults we trace and fix</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "MCB (circuit breaker) tripping repeatedly",
              "RCD failing to reset or nuisance tripping",
              "Dead sockets or socket circuits",
              "Flickering or intermittently dead lights",
              "Burning smell from sockets or consumer unit",
              "Partial power loss after a fault or surge",
              "Earth fault on a specific circuit",
              "Overloaded circuits causing nuisance trips",
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

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Pricing</h2>
          <div className="bg-warm-white border border-border rounded-xl p-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-compliance-blue">
                £{ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}
              </span>
              <span className="text-brand-grey">per hour (no call-out fee)</span>
            </div>
            <ul className="text-sm text-brand-grey flex flex-col gap-1 mt-3">
              <li>· Most visits 1–2 hours</li>
              <li>· Minor repairs included in hourly rate</li>
              <li>· Larger remedial work quoted separately before starting</li>
              <li>· Written fault report included</li>
              <li>
                · Congestion Zone +£{ADDITIONAL_CHARGES.congestionZone} ·
                Parking +£{ADDITIONAL_CHARGES.parking}
              </li>
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">How it works</h2>
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-compliance-blue text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{s.title}</p>
                  <p className="text-sm text-brand-grey leading-relaxed">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Related services</h2>
          <p className="text-brand-grey mb-5 text-sm">The diagnostic may reveal a need for these.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/eicr", label: "Domestic EICR", desc: "Full 5-yearly inspection of the entire installation. From £67.99." },
              { href: "/fuse-box-installation", label: "Fuse Box Installation", desc: "Replace an old consumer unit with modern RCD protection. From £599.99." },
              { href: "/commercial-eicr", label: "Commercial EICR", desc: "For offices, HMOs, and multi-unit premises. From £149.99." },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-warm-white border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors text-sm mb-1">
                  {s.label}
                </p>
                <p className="text-xs text-brand-grey">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* What does an electrical diagnostic involve */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What does an electrical diagnostic involve?</h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An electrical diagnostic is a targeted, test-driven process of identifying the specific cause
            of an active fault in a rental property. Unlike a periodic EICR — which assesses the condition
            of the whole installation — a diagnostic focuses on a known problem that has developed between
            inspections.
          </p>

          <h3 className="text-lg font-semibold text-brand-charcoal mb-3">Common reasons landlords call for a diagnostic</h3>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {[
              "RCD has tripped and won't reset",
              "Circuit breaker keeps tripping with no apparent cause",
              "Sockets on a ring main have gone dead after a surge",
              "Lights flicker intermittently or fail entirely",
              "Burning or melting smell from consumer unit or accessories",
              "Power loss following damp ingress or a water leak near fittings",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal/80">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-action-green/20 text-brand-charcoal flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-brand-charcoal mb-3">Diagnostic tools and methods</h3>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our electricians use professional-grade test instruments to trace faults systematically —
            insulation resistance testers to identify degraded cable insulation, earth loop impedance
            meters to check the fault path back to supply, RCD trip-time testers to identify delayed
            or failed residual current devices, and clamp meters to measure live current across circuits.
            Where useful, thermal imaging can detect hot spots in accessories or inside the consumer unit.
          </p>

          <h3 className="text-lg font-semibold text-brand-charcoal mb-3">Electrical diagnostic vs EICR — which do you need?</h3>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An EICR is the right choice when you are approaching the 5-year periodic inspection cycle,
            starting a new tenancy without a recent EICR, or complying with the Electrical Safety
            Standards in the Private Rented Sector (England) Regulations 2020.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            An electrical diagnostic is the right choice when a specific fault has developed between
            inspections. A full EICR records the condition of the whole installation but will not
            pinpoint an active intermittent fault — a targeted diagnostic does that faster and at
            lower cost. In some cases the diagnostic reveals that the underlying cause is widespread
            deterioration, in which case the engineer will advise on a full EICR and remediation options.
          </p>
        </section>

        {/* FAQs */}
        <section className="below-fold py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Frequently Asked Questions</h2>
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
              electricians. Fault traced and minor repairs completed same visit.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=electrical-diagnostic"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online
              </Link>
              <a
                href={TEL}
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </div>

      <ReviewsBlock />

      <StickyMobileCTA
        href="/book?service=electrical-diagnostic"
        label="Book Now"
        price={ELECTRICAL_DIAGNOSTIC_HOURLY_RATE}
        serviceName="Electrical Diagnostic"
      />
    </>
  );
}
