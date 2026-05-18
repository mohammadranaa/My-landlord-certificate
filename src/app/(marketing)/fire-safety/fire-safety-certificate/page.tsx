import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import {
  ADDITIONAL_CHARGES,
  FIRE_SAFETY_CERT_TABLE,
  getPriceForFireSafetyCert,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fire Safety Certificate London from £54.99 — Smoke Alarm Testing | My Landlord Certificate",
  description:
    "Smoke and CO alarm testing and certification from £54.99. Required under the Smoke and Carbon Monoxide Alarm Regulations 2022. Accredited engineers across all 32 London boroughs. Same-day certificate.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/fire-safety/fire-safety-certificate",
  },
};

const entryPrice = getPriceForFireSafetyCert(1);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Safety Certificate — Smoke and Heat Alarm Testing",
  url: "https://mylandlordcertificate.co.uk/fire-safety/fire-safety-certificate",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
  offers: {
    "@type": "Offer",
    price: `${entryPrice}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Fire Safety", item: "https://mylandlordcertificate.co.uk/fire-safety" },
    { "@type": "ListItem", position: 3, name: "Fire Safety Certificate", item: "https://mylandlordcertificate.co.uk/fire-safety/fire-safety-certificate" },
  ],
};

const faqs = [
  {
    question: "Is a Fire Safety Certificate required by law?",
    answer:
      "The Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022 require landlords to install working smoke alarms on every floor and carbon monoxide alarms in every room with a fixed combustion appliance. Annual testing and certification is required for HMO licences and strongly recommended for all rental properties as evidence of compliance.",
  },
  {
    question: "What is tested during the inspection?",
    answer:
      "Our engineers test each smoke and heat alarm using a calibrated aerosol test spray — not just a button press — which confirms the sensor chamber is actually responding to particles. We also check the battery condition, inspect for damage, check the manufacture date, and confirm the alarm is correctly positioned per BS 5839-6.",
  },
  {
    question: "Does this cover carbon monoxide detectors?",
    answer:
      "Yes. If you have carbon monoxide detectors, we test them during the same visit at no extra charge. CO detectors are required in all rooms with a fixed combustion appliance (gas boiler, gas fire, solid fuel burning appliance) under the Smoke and Carbon Monoxide Alarm Regulations 2022.",
  },
  {
    question: "What if an alarm fails the test?",
    answer:
      "Failed alarms are recorded in the certificate and must be replaced. Alarms that are over 10 years old (smoke) or 5 years old (CO) should typically be replaced regardless of test result. We can supply and fit replacement alarms during the same visit — mention this when booking.",
  },
  {
    question: "How many alarms does my rental property need?",
    answer:
      "The Smoke and Carbon Monoxide Alarm Regulations 2022 require at least one smoke alarm on every storey of a residential property used as living accommodation. A CO alarm is required in every room with a combustion appliance. HMOs have additional requirements under BS 5839-6, including alarms in sleeping rooms and all corridors on escape routes.",
  },
  {
    question: "Can you install new alarms as well as test existing ones?",
    answer:
      "Yes. If your property is missing alarms or existing alarms need replacing, we can supply and install them during the same visit. Battery alarms are typically £35–£55 per alarm installed. Mains-wired interlinked alarms are quoted separately — see our Fire Alarm Installation page.",
  },
  {
    question: "Do you test wireless interconnected alarms?",
    answer:
      "Yes. We test both hard-wired interlinked and wireless RF-interlinked alarm systems. For wireless systems, we test that triggering one alarm activates all linked alarms in the system and record the result for each alarm on the certificate.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 32 London boroughs including Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Brent, Ealing, Hammersmith & Fulham, Camden, Westminster, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function FireSafetyCertificatePage() {
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
              <li className="text-brand-charcoal font-medium">Fire Safety Certificate</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Fire Safety Certificate London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Accredited engineers · Annual testing to BS 5839-6 · Certificate issued same day
          </p>
          <TrustBadges serviceKey="fire-safety-certificate" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fire-safety-cert"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center border border-border hover:border-compliance-blue text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              View All Prices
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            <div className="pl-0">
              <p className="text-xs text-white/50 mb-0.5">Entry price</p>
              <p className="font-bold text-white">from £{entryPrice}</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Recommended</p>
              <p className="font-bold text-white">Annually</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Same day</p>
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
            Smoke and heat alarm testing for London landlords
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A Fire Safety Certificate confirms that all smoke alarms, heat alarms, and carbon
            monoxide detectors in your London rental property have been tested and are functioning
            correctly. It is required as part of HMO licence conditions across all London boroughs,
            and strongly recommended for all landlords as evidence of ongoing compliance.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Our accredited engineers test every alarm using a calibrated aerosol test spray —
            not just a button press — which confirms the optical or ionisation sensor is
            responding correctly to simulated smoke particles. We check battery condition,
            manufacture dates, and positioning compliance against BS 5839-6. The written
            certificate lists every alarm with its test result.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022 require all
              private landlords to install smoke alarms on every storey and CO alarms in every
              room with a combustion appliance. Annual testing is required for HMO licences
              and as evidence of due diligence.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Book with your alarm count",
                body: "Tell us how many smoke, heat, and CO alarms you have. We confirm the price, book your appointment, and arrive at the agreed time — no need for you to be present if a tenant can provide access.",
              },
              {
                step: "2",
                title: "Aerosol test of every alarm",
                body: "Our engineer tests each alarm using calibrated aerosol spray, checks battery condition and manufacture date, and confirms correct positioning per BS 5839-6. CO detectors are also tested at no extra charge.",
              },
              {
                step: "3",
                title: "Certificate emailed same day",
                body: "You receive the written Fire Safety Certificate listing every alarm with its test result. Keep it with your compliance file and submit it to your local authority or HMO licensing body if requested.",
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Pricing</h2>
          <p className="text-brand-grey mb-6">
            Fixed price by number of smoke and heat alarms. CO detectors included in same visit.
          </p>
          <PriceTable
            title="Fire Safety Certificate"
            rows={FIRE_SAFETY_CERT_TABLE}
            highlightCheapest
          />
          <p className="text-sm text-brand-grey mt-4">
            Additional charges may apply:{" "}
            <span className="text-brand-charcoal font-medium">
              Congestion Zone +£{ADDITIONAL_CHARGES.congestionZone}
            </span>{" "}
            ·{" "}
            <span className="text-brand-charcoal font-medium">
              Parking restrictions +£{ADDITIONAL_CHARGES.parking}
            </span>
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included for £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Aerosol test of each smoke and heat alarm",
              "Battery condition check",
              "Manufacture date and replacement advice",
              "Positioning check per BS 5839-6",
              "CO detector testing if present",
              "Written Fire Safety Certificate",
              "Pass/fail for each individual alarm",
              "Certificate emailed same day",
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Fire Risk Assessment",
                href: "/fire-safety/fire-risk-assessment",
                desc: "Written fire risk assessment from £74.99. Required for HMOs and blocks of flats.",
              },
              {
                name: "Fire Alarm Installation",
                href: "/fire-safety/fire-alarm-installation",
                desc: "Mains-wired interlinked alarms from £209.99/alarm. Required for new HMO licences.",
              },
              {
                name: "Emergency Lights Certificate",
                href: "/electrical-safety/emergency-lights-certificate",
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
              Book your Fire Safety Certificate
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Accredited engineers, certificate same day.
              Same-week appointments across all 32 London boroughs.
            </p>
            <Link
              href="/book?service=fire-safety-cert"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=fire-safety-cert"
        label="Book Now"
        price={entryPrice}
        serviceName="Fire Safety Certificate"
      />
    </>
  );
}
