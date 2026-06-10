import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, FIRE_ALARM_INSTALLATION_PER_ALARM } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fire Alarm Installation London — £209.99/alarm, Mains-Wired | My Landlord Certificate",
  description:
    "Mains-wired interlinked smoke and heat alarm installation from £209.99 per alarm. Grade D LD2, BS 5839-6 compliant. Free survey. All 33 London boroughs. Commissioning certificate included.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/fire-alarm-installation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Alarm Installation — Mains-Wired Interlinked Alarms",
  url: "https://www.mylandlordcertificate.co.uk/fire-alarm-installation",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
  offers: {
    "@type": "Offer",
    price: `${FIRE_ALARM_INSTALLATION_PER_ALARM}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Fire Safety", item: "https://www.mylandlordcertificate.co.uk/fire-safety" },
    { "@type": "ListItem", position: 3, name: "Fire Alarm Installation", item: "https://www.mylandlordcertificate.co.uk/fire-alarm-installation" },
  ],
};

const faqs = [
  {
    question: "What type of fire alarm system do you install?",
    answer:
      "We install Grade D, LD2 mains-wired interlinked smoke and heat detectors — the standard required for most HMOs and rental properties across London. All alarms are interconnected so that activating one triggers all others in the property. We use market-leading brands including Aico and FireAngel, compliant with BS 5839-6.",
  },
  {
    question: "Are battery alarms acceptable for rental properties?",
    answer:
      "Long-life sealed battery alarms (10-year battery life) are acceptable in some circumstances for existing properties, but mains-wired interlinked alarms are required for all new HMO licences and any new build or major renovation. Most London boroughs now require mains-wired systems for HMO licence renewals. We can advise on the most appropriate solution for your property.",
  },
  {
    question: "How many alarms do I need?",
    answer:
      "BS 5839-6 LD2 typically requires smoke alarms in all principal habitable rooms (living rooms, bedrooms), heat alarms in kitchens, and smoke alarms in corridors and stairways on escape routes. An average 3-bedroom HMO typically requires 5–7 alarms. Our engineer will survey your property and specify the exact number and positions required.",
  },
  {
    question: "Does installation include a certificate?",
    answer:
      "Yes. Every installation includes a commissioning certificate confirming the system meets BS 5839-6. This can be provided to your local authority or HMO licensing body as evidence of compliance.",
  },
  {
    question: "Can you retrofit alarms without major rewiring?",
    answer:
      "In many properties we can install mains-wired alarms by running concealed cables through ceiling voids and wall cavities, minimising the need for major decorative repairs. The feasibility depends on the property's construction — our engineer will assess this during the free pre-installation survey.",
  },
  {
    question: "Which brands do you use?",
    answer:
      "We primarily install Aico and FireAngel mains-wired interlinked alarms — market-leading brands with 10-year sensor life and sealed backup batteries. Both brands offer wireless interlink modules for situations where cable runs are not feasible. We use the same brand throughout each property to ensure full interlink compatibility.",
  },
  {
    question: "How long does installation take?",
    answer:
      "A typical 3-bedroom HMO with 5–6 alarms takes a full day. Larger HMOs and blocks with communal areas may take 2 days. We will confirm the expected duration after the free survey.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 33 London boroughs including Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Brent, Ealing, Hammersmith & Fulham, Camden, Westminster, Barnet, Haringey, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function FireAlarmInstallationPage() {
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
              <li><Link href="/fire-safety" className="hover:text-compliance-blue transition-colors">Fire Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Fire Alarm Installation</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Fire Alarm Installation London from £{FIRE_ALARM_INSTALLATION_PER_ALARM}/alarm
          </h1>
          <PriceDisplay price={FIRE_ALARM_INSTALLATION_PER_ALARM} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Mains-wired interlinked · BS 5839-6 compliant · Free survey · Commissioning certificate included
          </p>
          <TrustBadges serviceKey="fire-alarm-installation" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fire-alarm-installation"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — £{FIRE_ALARM_INSTALLATION_PER_ALARM}/alarm
            </Link>
            <a
              href="mailto:info@mylandlordcertificate.co.uk"
              className="inline-flex items-center border border-border hover:border-compliance-blue text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
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
              <p className="text-xs text-white/50 mb-0.5">Per alarm</p>
              <p className="font-bold text-white">£{FIRE_ALARM_INSTALLATION_PER_ALARM}</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">System type</p>
              <p className="font-bold text-white">Grade D LD2</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Included</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Standard</p>
              <p className="font-bold text-white">BS 5839-6</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Mains-wired fire alarm installation for London HMOs
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            New HMO licences across all London boroughs require mains-wired interlinked smoke
            and heat alarms throughout the property. When any one alarm is triggered, all
            alarms sound simultaneously — giving occupants maximum warning time regardless
            of where the fire starts. Battery-only alarms are no longer acceptable for new
            HMO licence applications in most London councils.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            We install Grade D, LD2 mains-wired systems using Aico and FireAngel — market-leading
            brands with 10-year sensor life and sealed backup batteries. Each alarm draws power
            from the mains and has a sealed backup battery, ensuring it continues to function
            even during a power cut.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            Pricing is per alarm including supply, installation, interconnection wiring, and
            commissioning. We provide a free pre-installation survey to determine the exact
            number and specification of alarms required for your property.
          </p>
        </section>

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Free survey",
                body: "Our engineer visits your property, identifies the number and positions of alarms required under BS 5839-6, and assesses cable routes. You receive a fixed-price quote for the full installation.",
              },
              {
                step: "2",
                title: "Installation (1–2 days)",
                body: "We install and wire all mains-wired alarms, interconnect them, and test each alarm including the full interlink — any alarm activated should trigger every other alarm in the system.",
              },
              {
                step: "3",
                title: "Commissioning certificate",
                body: "You receive a BS 5839-6 commissioning certificate confirming the system is installed and fully functional. Suitable for HMO licence applications and local authority inspection.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col gap-3">
                <span className="w-9 h-9 rounded-full bg-compliance-blue text-white flex items-center justify-center font-bold text-sm shrink-0">
                  {step}
                </span>
                <h3 className="font-semibold text-brand-charcoal">{title}</h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Pricing</h2>
          <div className="bg-warm-white border border-border rounded-xl p-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-compliance-blue">
                £{FIRE_ALARM_INSTALLATION_PER_ALARM}
              </span>
              <span className="text-brand-grey">per alarm (supply &amp; install)</span>
            </div>
            <p className="text-sm text-brand-grey mt-2 mb-4">
              Most 1–3 bedroom properties require 4–6 alarms. A free survey confirms the exact
              number needed for your property type and layout. Final price is agreed before
              installation begins.
            </p>
            <ul className="text-sm text-brand-grey flex flex-col gap-1">
              <li>· Supply and installation per mains-wired alarm</li>
              <li>· All alarms interconnected (hard-wired or RF)</li>
              <li>· BS 5839-6 commissioning certificate included</li>
              <li>
                · Additional charges: Congestion Zone +£{ADDITIONAL_CHARGES.congestionZone} · Parking +£{ADDITIONAL_CHARGES.parking}
              </li>
            </ul>
          </div>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What&apos;s included per alarm</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Mains-wired Grade D alarm (Aico or FireAngel)",
              "Sealed backup battery",
              "Interlinked with all other alarms on circuit",
              "Correct positioning per BS 5839-6",
              "Full commissioning and interlink test",
              "BS 5839-6 commissioning certificate",
              "Suitable for HMO licence submission",
              "Free pre-installation survey",
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
        <section className="below-fold py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Fire Safety Certificate",
                href: "/fire-safety-certificate",
                desc: "Annual smoke alarm testing and certification from £54.99. Required for HMO licences.",
              },
              {
                name: "Fire Risk Assessment",
                href: "/fire-risk-assessment",
                desc: "Written fire risk assessment from £74.99. Compulsory for all HMOs.",
              },
              {
                name: "Emergency Lights Certificate",
                href: "/emergency-lights-certificate",
                desc: "Annual emergency lighting test from £54.99. BS 5266-1 compliant.",
              },
            ].map(({ name, href, desc }) => (
              <Link
                key={href}
                href={href}
                className="border border-border rounded-xl p-4 hover:border-compliance-blue transition-colors group"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors mb-1">
                  {name}
                </p>
                <p className="text-sm text-brand-grey">{desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your fire alarm installation
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              £{FIRE_ALARM_INSTALLATION_PER_ALARM} per alarm installed. Free survey to confirm
              how many alarms you need. Certificate included. All 33 London boroughs covered.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=fire-alarm-installation"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online
              </Link>
              <a
                href="mailto:info@mylandlordcertificate.co.uk"
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                
              </a>
            </div>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=fire-alarm-installation"
        label="Book Now"
        price={FIRE_ALARM_INSTALLATION_PER_ALARM}
        serviceName="Fire Alarm Installation"
      />
    </>
  );
}
