import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, ELC_INSTALLATION_PER_LIGHT, ELC_TABLE } from "@/lib/pricing";
import { TEL, PHONE_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emergency Lights Certificate London from £54.99 — NICEIC Approved | My Landlord Certificate",
  description:
    "Annual emergency lighting testing and certification from £54.99 (up to 3 lights). BS 5266-1 compliant. NICEIC approved engineers across all 33 London boroughs. Certificate within 24 hours.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/emergency-lights-certificate",
  },
};

const entryPrice = ELC_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Lights Certificate — Annual Testing",
  url: "https://www.mylandlordcertificate.co.uk/emergency-lights-certificate",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://www.mylandlordcertificate.co.uk/electrical-safety" },
    { "@type": "ListItem", position: 3, name: "Emergency Lights Certificate", item: "https://www.mylandlordcertificate.co.uk/emergency-lights-certificate" },
  ],
};

const faqs = [
  {
    question: "Who needs an Emergency Lights Certificate?",
    answer:
      "Any property with emergency lighting is required to have it tested and certified annually. This includes HMOs, blocks of flats with communal areas, commercial properties, offices, and hotels. The Regulatory Reform (Fire Safety) Order 2005 and BS EN 62034 require functional emergency lighting in all non-domestic escape routes.",
  },
  {
    question: "What does the annual test involve?",
    answer:
      "The annual test includes a full 3-hour discharge test of each emergency luminaire to confirm it operates for the minimum required duration. We also carry out a visual inspection of each fitting, check central battery systems if applicable, and confirm exit signs are illuminated correctly.",
  },
  {
    question: "How often should emergency lights be tested?",
    answer:
      "Annual full testing is the minimum requirement under BS 5266-1. Additionally, monthly brief functional tests should be carried out by the building manager or responsible person — we can train you or your staff to do this during our annual visit.",
  },
  {
    question: "What happens if a light fails the test?",
    answer:
      "Failed luminaires are identified in the certificate and must be repaired or replaced. We carry common replacement parts and can often remediate minor failures during the same visit. Replacement luminaires are quoted separately.",
  },
  {
    question: "Can I carry out monthly tests myself?",
    answer:
      "Yes. Monthly functional tests — a brief activation test to confirm each luminaire illuminates — can be performed by the responsible person. You should record the result in a logbook. We recommend our engineer demonstrates the correct procedure during the annual visit.",
  },
  {
    question: "Do you test central battery systems?",
    answer:
      "Yes. We test self-contained emergency luminaires (with individual batteries) and central battery systems. For central battery systems, we test the battery capacity, charger output, and the end-of-line load. We document the results for each circuit on the written certificate.",
  },
  {
    question: "What documentation will I receive?",
    answer:
      "You will receive a written Emergency Lights Certificate recording each luminaire tested, the duration achieved, pass/fail status, and any remediation required. The certificate is suitable for submission to your local authority, fire authority, or HMO licensing body.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 33 London boroughs including Westminster, Camden, Islington, Hackney, Southwark, Lambeth, Tower Hamlets, Wandsworth, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function EmergencyLightsCertificatePage() {
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
              <li className="text-white font-medium">Emergency Lights Certificate</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
            Emergency Lights Certificate London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4 [&>span:last-child]:text-white" />
          <p className="text-blue-100 mb-4">
            NICEIC approved · Annual testing to BS 5266-1 · Certificate issued within 24 hours
          </p>
          <TrustBadges serviceKey="emergency-lights" variant="dark" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=elc"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
            <a
              href="#pricing"
              className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
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
              <p className="text-xs text-white/50 mb-0.5">Required</p>
              <p className="font-bold text-white">Annually</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Within 24 hours</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Standard</p>
              <p className="font-bold text-white">BS 5266-1</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Emergency lighting testing for London landlords
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Emergency lighting provides illumination of escape routes when the normal power
            supply fails. In HMOs, communal areas of blocks of flats, and any commercial
            premises across London, it is a legal requirement under the Regulatory Reform
            (Fire Safety) Order 2005. Annual testing and certification to BS 5266-1
            demonstrates compliance to your local authority and HMO licensing body.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our NICEIC approved engineers carry out a full 3-hour discharge test of each
            emergency luminaire, visually inspect all fittings and exit signage, and issue
            a written certificate within 24 hours. The certificate records each fitting&apos;s
            pass/fail status and any remediation required.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Regulatory Reform (Fire Safety) Order 2005 requires responsible persons
              to maintain and test emergency lighting in all non-domestic premises. Annual
              full testing to BS 5266-1 is the accepted method of compliance.
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
                title: "Book with your luminaire count",
                body: "Tell us how many emergency lights and exit signs are installed. We confirm the price, agree a date, and arrive with the correct equipment for your system.",
              },
              {
                step: "2",
                title: "Full 3-hour discharge test",
                body: "Our engineer activates each luminaire in turn, recording the duration it remains lit. Exit signs and central battery systems are also checked. Any failed fittings are documented.",
              },
              {
                step: "3",
                title: "Certificate emailed within 24 hours",
                body: "You receive a written Emergency Lights Certificate listing every luminaire with its test result. Suitable for your HMO licence, local authority, or fire authority inspection.",
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
            Fixed price by number of emergency lights. Includes testing and written certificate.
          </p>
          <PriceTable
            title="Emergency Lights Certificate"
            rows={ELC_TABLE}
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

        {/* Emergency light installation */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
            Emergency light installation
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Need new or replacement emergency lighting fitted? We supply and install
            maintained and non-maintained emergency luminaires to BS 5266-1. Each fitting
            is positioned for maximum coverage and immediately added to your test register.
          </p>
          <div className="bg-warm-white border border-border rounded-xl p-6 mb-4">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-compliance-blue">
                £{ELC_INSTALLATION_PER_LIGHT}
              </span>
              <span className="text-brand-grey">per light (supply &amp; install)</span>
            </div>
            <ul className="text-sm text-brand-grey flex flex-col gap-1 mt-3">
              <li>· Supply and installation per luminaire or exit sign</li>
              <li>· BS 5266-1 compliant positioning</li>
              <li>· 3-hour rated maintained or non-maintained fittings available</li>
              <li>· Certificate issued for all newly installed fittings</li>
            </ul>
          </div>
          <p className="text-sm text-brand-charcoal/70">
            For large installations or bespoke HMO layouts, call{" "}
            <a href={`tel:${TEL}`} className="text-compliance-blue hover:underline">{PHONE_DISPLAY}</a>{" "}
            for a site-specific quote.
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What&apos;s included</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Full 3-hour discharge test of each luminaire",
              "Visual inspection of all fittings and exit signs",
              "Pass/fail recorded for each individual light",
              "Written certificate issued within 24 hours",
              "Monthly test guidance for your records",
              "Fault reporting with recommended action",
              "NICEIC approved electrician",
              "Compliant with BS 5266-1",
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

        {/* Where is emergency lighting required */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Where is emergency lighting required?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Emergency lighting — luminaires that automatically switch on when the main power supply
            fails — is required wherever an interruption to the normal supply creates a risk to
            occupants. Under the Regulatory Reform (Fire Safety) Order 2005 and BS 5266-1:2016,
            responsible persons must install, maintain, and test emergency lighting in all
            non-domestic premises.
          </p>

          <h3 className="text-lg font-semibold text-brand-charcoal mb-3">Properties that typically require emergency lighting</h3>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {[
              "HMOs — all escape routes, stairwells, and communal corridors",
              "Blocks of flats — communal areas and shared escape routes",
              "Commercial premises — offices, retail units, restaurants, warehouses",
              "Hotels and guesthouses — corridors, stairwells, exit routes",
              "Care homes and schools — all areas, with stricter maintenance requirements",
              "Mixed-use buildings — non-domestic communal areas even where flats sit above",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-charcoal/80">
                <span className="mt-0.5 w-4 h-4 rounded-full bg-action-green/20 text-brand-charcoal flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold text-brand-charcoal mb-3">Types of emergency lighting</h3>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            <strong className="text-brand-charcoal">Maintained luminaires</strong> remain lit
            continuously during normal operation and switch to battery backup during a power failure —
            typically used for escape route signage. <strong className="text-brand-charcoal">Non-maintained
            luminaires</strong> only illuminate during a power failure, which is the standard for
            stairwells and corridors. <strong className="text-brand-charcoal">Central battery
            systems</strong> use a central battery bank to power all emergency luminaires, with
            monitoring of each circuit from a single point.
          </p>

          <h3 className="text-lg font-semibold text-brand-charcoal mb-3">Annual test vs monthly test</h3>
          <p className="text-brand-charcoal/80 leading-relaxed">
            BS 5266-1 requires an annual full-duration discharge test — each luminaire is activated
            for its full rated duration (typically 3 hours) to confirm the battery has retained
            sufficient charge under a simulated mains failure. Monthly brief functional tests (15-second
            activations) are the responsibility of the building manager or responsible person and
            should be logged in the fire safety logbook. Our engineer can demonstrate the correct
            monthly test procedure during the annual visit.
          </p>
        </section>

        {/* FAQs */}
        <section className="below-fold py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqs} />
        </section>

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Fire Alarm Installation",
                href: "/fire-alarm-installation",
                desc: "Mains-wired interlinked smoke and heat alarms from £209.99/alarm.",
              },
              {
                name: "Fire Risk Assessment",
                href: "/fire-risk-assessment",
                desc: "Written fire risk assessment from £74.99. Required for all HMOs.",
              },
              {
                name: "Fire Safety Certificate",
                href: "/fire-safety-certificate",
                desc: "Smoke and CO alarm testing and certification from £54.99.",
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
              Book your emergency lights certificate
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Same-week appointments across all 33 London boroughs.
              Certificate issued within 24 hours.
            </p>
            <Link
              href="/book?service=elc"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=elc"
        label="Book Now"
        price={entryPrice}
        serviceName="Emergency Lights Certificate"
      />
    </>
  );
}
