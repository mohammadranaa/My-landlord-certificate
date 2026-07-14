import type { Metadata } from "next";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, COMMERCIAL_EPC_TABLE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Commercial EPC London from £249.99 — Accredited DEA Assessors | My Landlord Certificate",
  description:
    "Commercial Energy Performance Certificate from £249.99 (up to 50m²). SBEM methodology. Required before selling or letting any commercial property. All 33 London boroughs. Registered on national database.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/commercial-epc",
  },
};

const entryPrice = COMMERCIAL_EPC_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Energy Performance Certificate (EPC)",
  url: "https://www.mylandlordcertificate.co.uk/epc/commercial-epc",
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
    { "@type": "ListItem", position: 2, name: "EPC", item: "https://www.mylandlordcertificate.co.uk/epc" },
    { "@type": "ListItem", position: 3, name: "Commercial EPC", item: "https://www.mylandlordcertificate.co.uk/epc/commercial-epc" },
  ],
};

const faqs = [
  {
    question: "When is a commercial EPC required?",
    answer:
      "A commercial EPC is required whenever a commercial property is sold, rented, or constructed. Under the Energy Performance of Buildings (England and Wales) Regulations 2012, the EPC must be made available to prospective buyers or tenants before the property is marketed. Failure to provide a valid EPC can result in a fine of up to £5,000.",
  },
  {
    question: "What is the minimum EPC rating for commercial lettings?",
    answer:
      "The Minimum Energy Efficiency Standards (MEES) require commercial properties to have a minimum EPC rating of E before they can be let. Enforcement of MEES for commercial properties began in April 2023 for new lettings and renewals. Properties with an EPC rating of F or G cannot be let unless a valid exemption is registered on the PRS Exemptions Register.",
  },
  {
    question: "How long is a commercial EPC valid for?",
    answer:
      "A commercial EPC is valid for 10 years from the date of assessment, unless material changes are made to the building's energy performance (e.g. new heating system, significant insulation works, or change of use). After any such change, a new assessment is recommended.",
  },
  {
    question: "What does a commercial EPC assessment involve?",
    answer:
      "A commercial EPC is produced using the Simplified Building Energy Model (SBEM) or Dynamic Simulation Modelling (DSM) for larger or more complex buildings. Our assessors visit the property to record building fabric, orientation, heating, cooling, ventilation, and lighting systems. The data is entered into government-approved software to produce an A–G energy rating.",
  },
  {
    question: "Do you cover all types of commercial premises?",
    answer:
      "Yes. We cover offices, retail units, restaurants, warehouses, light industrial units, and mixed-use premises across all 33 London boroughs. For very large or technically complex buildings (above 2,000m²), contact us to discuss the scope and timeline of the assessment.",
  },
  {
    question: "How long does the assessment take?",
    answer:
      "For smaller premises up to 500m², the on-site assessment typically takes 1–2 hours. Larger premises take proportionally longer. The EPC certificate is usually lodged on the national register within 1–2 business days of the assessment.",
  },
  {
    question: "Can you advise on improving a low commercial EPC rating?",
    answer:
      "Yes. If your property is rated F or G (or close to the MEES threshold), our assessors can run modelling to identify the most cost-effective improvements — such as upgrading heating controls, improving lighting efficiency, or improving insulation — and show the projected impact on the EPC rating before works are carried out.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 33 London boroughs including the City of London, Westminster, Camden, Islington, Tower Hamlets, Southwark, Lambeth, Hackney, Wandsworth, Hammersmith & Fulham, Ealing, Brent, and all other boroughs. A congestion zone supplement of £20 applies for properties within the TfL congestion zone.",
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

export default function CommercialEPCPage() {
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
              <li><Link href="/epc" className="hover:text-compliance-blue transition-colors">EPC</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brand-charcoal font-medium">Commercial EPC</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Commercial EPC London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Accredited DEA assessors · SBEM methodology · Registered on national database
          </p>
          <TrustBadges serviceKey="commercial-epc" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=commercial-epc&type=commercial"
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
              <p className="text-xs text-white/50 mb-0.5">Valid for</p>
              <p className="font-bold text-white">10 years</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Minimum rating</p>
              <p className="font-bold text-white">E (MEES)</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Accreditation</p>
              <p className="font-bold text-white">DEA accredited</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Commercial EPC — what it covers
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            A commercial Energy Performance Certificate (EPC) rates the energy efficiency
            of a non-domestic building on a scale from A (most efficient) to G (least efficient).
            It is required before selling or letting any commercial property across London and
            must be made available to prospective buyers or tenants before the property is
            marketed. Failure to provide a valid EPC can result in fines of up to £5,000.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Commercial EPCs are produced using the Simplified Building Energy Model (SBEM) —
            a government-approved calculation methodology that accounts for the building&apos;s
            fabric, orientation, heating, cooling, ventilation, lighting, and renewable energy
            systems. Our accredited DEA assessors collect all necessary data on-site and lodge
            the certificate on the government&apos;s national EPC register within 1–2 business days.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Properties with an EPC rating of F or G cannot be let commercially under the
            Minimum Energy Efficiency Standards (MEES). If your property is at risk of failing
            MEES, our assessors can model cost-effective improvements before you commit to
            remediation works.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Energy Performance of Buildings (England and Wales) Regulations 2012
              require a valid EPC before any commercial property is sold, let, or constructed.
              Under MEES regulations, commercial properties must achieve a minimum rating of
              E — failure to comply can result in fines of up to £150,000 for larger premises.
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
                title: "Book with your floor area",
                body: "Tell us the gross internal floor area of the premises and its use type (office, retail, restaurant, warehouse). We confirm the price and arrange an accredited DEA assessor.",
              },
              {
                step: "2",
                title: "On-site assessment (1–2 hrs)",
                body: "Our assessor records building fabric, heating and cooling systems, ventilation, and lighting. No need to prepare anything — just provide access to all areas of the property.",
              },
              {
                step: "3",
                title: "EPC lodged on national register",
                body: "We enter the data into SBEM software, produce the A–G energy rating with improvement recommendations, and lodge the certificate on the national EPC register within 1–2 business days.",
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">
            Commercial EPC Pricing
          </h2>
          <p className="text-brand-grey mb-6">
            Priced by gross internal floor area. Includes on-site assessment and lodgement on the national EPC register.
          </p>
          <PriceTable
            title="Commercial EPC"
            rows={COMMERCIAL_EPC_TABLE}
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
          <p className="text-sm text-brand-grey mt-2">
            For domestic EPCs, see{" "}
            <Link href="/epc" className="text-compliance-blue hover:underline">
              residential EPC pricing →
            </Link>
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included from £{entryPrice}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "On-site assessment by accredited DEA assessor",
              "Building fabric data collection",
              "Heating, cooling, and ventilation survey",
              "Lighting and control system assessment",
              "SBEM energy calculation",
              "A–G energy efficiency rating",
              "Recommendations for improvement",
              "Lodgement on government EPC register",
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
                name: "Domestic EPC",
                href: "/epc",
                desc: "Residential Energy Performance Certificate from £89.99. Valid for 10 years.",
              },
              {
                name: "Commercial EICR",
                href: "/commercial-eicr",
                desc: "Commercial electrical condition report from £149.99. Required for commercial premises.",
              },
              {
                name: "Commercial Gas Safety (CP42)",
                href: "/commercial-gas-safety-certificate",
                desc: "Annual commercial gas safety inspection from £159.99. Gas Safe certified engineers.",
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
              Book your commercial EPC
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Accredited DEA assessors, certificate
              lodged on the national register. Same-week appointments across all 33 London boroughs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=commercial-epc&type=commercial"
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
        href="/book?service=commercial-epc&type=commercial"
        label="Book Now"
        price={entryPrice}
        serviceName="Commercial EPC"
      />
    </>
  );
}
