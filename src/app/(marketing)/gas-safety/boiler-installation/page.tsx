import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, BOILER_INSTALLATION_FROM } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Boiler Installation London from £2,499 — Gas Safe Registered | My Landlord Certificate",
  description:
    "Boiler replacement from £2,499. Worcester Bosch and Vaillant A-rated combi and system boilers. Gas Safe Registered engineers across all London boroughs. CP12 and 10-year warranty included.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/gas-safety/boiler-installation",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Boiler Installation & Replacement",
  url: "https://mylandlordcertificate.co.uk/gas-safety/boiler-installation",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://mylandlordcertificate.co.uk",
  },
  areaServed: { "@type": "City", name: "London" },
  offers: {
    "@type": "Offer",
    price: `${BOILER_INSTALLATION_FROM}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Gas Safety", item: "https://mylandlordcertificate.co.uk/gas-safety" },
    { "@type": "ListItem", position: 3, name: "Boiler Installation", item: "https://mylandlordcertificate.co.uk/gas-safety/boiler-installation" },
  ],
};

const faqs = [
  {
    question: "What is included in the boiler installation price?",
    answer:
      "Our fixed-price boiler installation includes supply and fitting of a new boiler (A-rated Worcester Bosch or Vaillant), flue installation or relocation, full system flush and inhibitor treatment, commissioning, a first-year gas safety certificate (CP12), and manufacturer's warranty registration. Removal and disposal of the old boiler is included.",
  },
  {
    question: "How long does a boiler installation take?",
    answer:
      "A standard like-for-like replacement typically takes 6–8 hours and is completed in a single day. More complex installations (changing boiler location, new flue routes, system upgrades) may require two days. We confirm the expected duration during the pre-installation survey.",
  },
  {
    question: "Do I need a survey before booking?",
    answer:
      "For a standard like-for-like replacement, we can often quote over the phone or online based on your property size and current boiler type. For more complex installations — relocation, system conversion, or larger properties — we carry out a free pre-installation survey to confirm the correct specification and issue a fixed written quote.",
  },
  {
    question: "What brands of boiler do you install?",
    answer:
      "We typically install Worcester Bosch and Vaillant combi and system boilers, which come with 10-year warranties when installed by accredited engineers. We can also install Ideal, Baxi, and other leading brands on request — call us to discuss your requirements.",
  },
  {
    question: "Can you install a system boiler instead of a combi?",
    answer:
      "Yes. We install combi boilers, system boilers with cylinders, and regular (conventional) boilers. If your property has multiple bathrooms or high hot water demand, a system boiler with a pressurised cylinder may be a better solution than a combi. Our engineer will advise during the survey.",
  },
  {
    question: "What happens to the old boiler?",
    answer:
      "Removal and safe disposal of the old boiler is included in the fixed price. We drain down the system, disconnect and remove the old boiler and any associated pipework, and dispose of it in accordance with waste regulations. There is no extra charge for this.",
  },
  {
    question: "Do you offer finance for boiler installations?",
    answer:
      "Yes, we can arrange interest-free and low-APR finance options for boiler installations. Call us on 0330 133 0066 to discuss the available plans — finance is subject to status and eligibility.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 32 London boroughs including Westminster, Islington, Hackney, Southwark, Wandsworth, Hammersmith & Fulham, Ealing, Brent, Camden, Tower Hamlets, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function BoilerInstallationPage() {
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
              <li><Link href="/gas-safety" className="hover:text-compliance-blue transition-colors">Gas Safety</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Boiler Installation</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Boiler Installation London from £{BOILER_INSTALLATION_FROM.toLocaleString()}
          </h1>
          <PriceDisplay price={BOILER_INSTALLATION_FROM} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Gas Safe Registered · Supply &amp; install · CP12 included · 10-year warranty
          </p>
          <TrustBadges variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:03301330066"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Call for a Quote — 0330 133 0066
            </a>
            <Link
              href="/book?service=boiler-installation"
              className="inline-flex items-center border border-border hover:border-compliance-blue text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Request a Survey
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
            <div className="pl-0">
              <p className="text-xs text-white/50 mb-0.5">From</p>
              <p className="font-bold text-white">£{BOILER_INSTALLATION_FROM.toLocaleString()}</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Duration</p>
              <p className="font-bold text-white">1 day</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Includes</p>
              <p className="font-bold text-white">CP12 + warranty</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Accreditation</p>
              <p className="font-bold text-white">Gas Safe</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Boiler replacement for London rental properties
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An aging boiler is one of the most common sources of tenant complaints and void
            periods for landlords across London. If your boiler is over 10 years old, regularly
            breaking down, or has been flagged as unsafe on a gas safety inspection, replacing
            it is often more cost-effective than continuing to repair it.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our Gas Safe Registered engineers carry out a free survey before recommending the
            right boiler for your property. We typically install Worcester Bosch or Vaillant
            A-rated combi and system boilers, which come with 10-year manufacturer warranties
            when fitted by accredited installers — protecting your investment and giving tenants
            confidence.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            Every installation includes removal and disposal of the old boiler, flue installation,
            a full system flush and inhibitor treatment, commissioning, and a first-year CP12
            gas safety certificate — so your legal compliance is taken care of from day one.
          </p>
        </section>

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Free survey and fixed quote",
                body: "Call or book online. We carry out a free survey of your property and issue a fixed written quote — no surprises on the day. Simple replacements can often be quoted by phone.",
              },
              {
                step: "2",
                title: "Installation day (6–8 hours)",
                body: "Our Gas Safe engineer removes and disposes of the old boiler, installs and connects the new unit, flushes and treats the system, and commissions the boiler. Power and hot water are restored the same day.",
              },
              {
                step: "3",
                title: "CP12 and warranty registration",
                body: "We issue the first-year CP12 gas safety certificate on completion and register the manufacturer's warranty for you. Your tenants benefit from a reliable, efficient boiler from day one.",
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
                from £{BOILER_INSTALLATION_FROM.toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-brand-grey mt-2 mb-4">
              Exact price depends on boiler model, property size, flue route, and any system
              upgrades required. We provide a fixed written quote after a free survey —
              no surprises.
            </p>
            <ul className="text-sm text-brand-grey flex flex-col gap-1">
              <li>· Removal and disposal of old boiler included</li>
              <li>· Flue installation included</li>
              <li>· System flush and inhibitor treatment included</li>
              <li>· First-year CP12 gas safety certificate included</li>
              <li>· 10-year manufacturer warranty (Worcester Bosch / Vaillant)</li>
              <li>
                · Additional charges:{" "}
                Congestion Zone +£{ADDITIONAL_CHARGES.congestionZone} ·
                Parking +£{ADDITIONAL_CHARGES.parking}
              </li>
            </ul>
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Call <a href="tel:03301330066" className="text-compliance-blue hover:underline">0330 133 0066</a> for large-volume or commercial boiler replacements.
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What&apos;s included</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Free pre-installation survey",
              "Supply of A-rated Worcester Bosch or Vaillant boiler",
              "Removal and disposal of old boiler",
              "Flue installation or relocation",
              "Full system flush and inhibitor treatment",
              "Commissioning and pressure test",
              "First-year CP12 gas safety certificate",
              "10-year manufacturer warranty registration",
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

        {/* Related services */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                name: "Gas Safety Certificate (CP12)",
                href: "/gas-safety-certificate",
                desc: "Annual domestic gas safety inspection from £49.99. Required by law for all rental properties.",
              },
              {
                name: "Commercial Gas Safety (CP42)",
                href: "/commercial-gas-safety-certificate",
                desc: "Commercial gas safety inspection from £159.99. For offices, restaurants, and HMOs.",
              },
              {
                name: "Domestic EICR",
                href: "/eicr",
                desc: "Electrical condition report from £67.99. Combine with your gas safety for a single visit.",
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
              Get a fixed quote for your boiler installation
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Free survey, fixed written quote, Gas Safe Registered engineers.
              Installed in one day with CP12 included. London-wide.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:03301330066"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Call 0330 133 0066
              </a>
              <Link
                href="/book?service=boiler-installation"
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Request Online Survey
              </Link>
            </div>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="tel:03301330066"
        label="Call Us"
        price={BOILER_INSTALLATION_FROM}
        serviceName="Boiler Installation"
      />
    </>
  );
}
