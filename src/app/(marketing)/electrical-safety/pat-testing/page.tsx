import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { StickyMobileCTA } from "@/components/ui/sticky-mobile-cta";
import { TrustBadges } from "@/components/ui/trust-badges";
import { TrustpilotWidget } from "@/components/ui/trustpilot-widget";
import { ADDITIONAL_CHARGES, PAT_TABLE, getPriceForPAT } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "PAT Testing London from £59.99 — Same-Day Report | My Landlord Certificate",
  description:
    "Portable Appliance Testing from £59.99 (up to 10 appliances). Pass/fail labels on every appliance, written report emailed same day. Covers all 32 London boroughs. Furnished rentals and HMOs.",
  alternates: {
    canonical: "https://mylandlordcertificate.co.uk/electrical-safety/pat-testing",
  },
};

const entryPrice = getPriceForPAT(1);

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "PAT Testing — Portable Appliance Testing",
  url: "https://mylandlordcertificate.co.uk/electrical-safety/pat-testing",
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
    { "@type": "ListItem", position: 2, name: "Electrical Safety", item: "https://mylandlordcertificate.co.uk/electrical-safety" },
    { "@type": "ListItem", position: 3, name: "PAT Testing", item: "https://mylandlordcertificate.co.uk/electrical-safety/pat-testing" },
  ],
};

const faqs = [
  {
    question: "Is PAT testing a legal requirement for landlords?",
    answer:
      "There is no law that specifically requires annual PAT testing for residential landlords, but the Landlord and Tenant Act 1985 and the Housing Act 2004 (HHSRS) require landlords to ensure all electrical appliances are safe. PAT testing is the accepted method of demonstrating this. HMO licences often explicitly require it, and failure to maintain safe appliances can result in prosecution.",
  },
  {
    question: "Which appliances need PAT testing?",
    answer:
      "Any portable electrical appliance with a plug should be tested: washing machines, fridges, dishwashers, televisions, kettles, toasters, lamps, extension leads, and any other appliance you provide with the tenancy. Fixed appliances wired directly into the consumer unit are covered by the EICR rather than PAT testing.",
  },
  {
    question: "How often should PAT testing be carried out?",
    answer:
      "For rental properties, annual PAT testing is recommended and often required by HMO licences. The Health and Safety Executive (HSE) guidance suggests that lower-risk environments (offices, hotels) may be tested less frequently, but rental properties — particularly HMOs — warrant annual testing due to higher turnover of occupants.",
  },
  {
    question: "What happens to appliances that fail?",
    answer:
      "Failed appliances are labelled with a red FAIL sticker and recorded in the written report. They must not be used and should be repaired or replaced. We will not remove appliances — this is the landlord's responsibility. We will advise on common failure causes so you can make an informed decision on repair vs replacement.",
  },
  {
    question: "Do I need to be present during PAT testing?",
    answer:
      "No. You just need to provide access to the property. If a tenant is in residence, we can liaise directly with them. We work around the tenant's schedule and complete the testing efficiently — most properties take under 2 hours.",
  },
  {
    question: "Can I combine PAT testing with an EICR visit?",
    answer:
      "Yes. Booking PAT testing on the same day as an EICR is a popular option with landlords looking to minimise disruption to their tenants. Mention this when booking and we will schedule both services with the same engineer on the same visit.",
  },
  {
    question: "How long does a PAT testing visit take?",
    answer:
      "Testing up to 10 appliances typically takes 45–90 minutes. Larger volumes take proportionally longer — around 3–5 minutes per appliance including labelling and recording. We work quickly to minimise disruption.",
  },
  {
    question: "What is the difference between PAT testing and an EICR?",
    answer:
      "An EICR assesses the fixed electrical installation — wiring, consumer unit, sockets, and light fittings — and does not cover portable appliances. PAT testing covers appliances with plugs (white goods, TVs, kettles, lamps, etc.). Both are needed for a fully compliant furnished rental property.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 32 London boroughs including Hackney, Islington, Tower Hamlets, Southwark, Lambeth, Wandsworth, Brent, Ealing, Hammersmith & Fulham, Camden, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function PATTestingPage() {
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
              <li className="text-brand-charcoal font-medium">PAT Testing</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            PAT Testing London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Fast on-site testing · Pass/fail labels on every appliance · Written report same day
          </p>
          <TrustBadges serviceKey="pat-testing" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=pat"
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
              <p className="text-xs text-white/50 mb-0.5">Report</p>
              <p className="font-bold text-white">Same day</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Appliances</p>
              <p className="font-bold text-white">Up to 50</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            PAT testing for furnished rental properties in London
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            PAT (Portable Appliance Testing) checks the safety of any electrical appliance
            with a plug. For landlords who let furnished properties across London, this covers
            white goods, televisions, lamps, kettles, toasters, and any other appliances
            provided with the tenancy. HMO licences commonly require annual PAT testing as a
            licence condition.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Our engineers test each appliance using calibrated PAT testers, carrying out both
            a visual inspection and an earth continuity and insulation resistance test. A
            colour-coded pass/fail label is applied to every appliance, and a full written
            report listing each item is emailed to you the same day.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed">
            Pricing is based on the total number of appliances. We can test up to 50 appliances
            per visit and can combine PAT testing with an EICR or gas safety inspection on the
            same day to minimise disruption to your tenants.
          </p>
        </section>

        {/* How it works */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-8">How it works</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Book with your appliance count",
                body: "Tell us roughly how many appliances need testing and confirm the address. We book you in and arrive at the agreed time — tenant presence optional.",
              },
              {
                step: "2",
                title: "On-site testing (same visit)",
                body: "Our engineer tests each appliance — visual check, earth continuity, insulation resistance — and applies a pass/fail label. Failed appliances are recorded and reported clearly.",
              },
              {
                step: "3",
                title: "Report emailed same day",
                body: "You receive a full written PAT report listing every appliance with its test result. Keep it in your compliance file and share it with tenants or your local authority if requested.",
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
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">PAT Testing Pricing</h2>
          <p className="text-brand-grey mb-6">
            Fixed price by total number of appliances. No extra charge per appliance within each bracket.
          </p>
          <PriceTable
            title="PAT Testing"
            rows={PAT_TABLE}
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
              "Visual inspection of each appliance and lead",
              "Earth continuity and insulation resistance test",
              "Pass/fail label applied to every appliance",
              "Full written report listing each appliance",
              "Appliance description and asset reference",
              "Failed appliances clearly identified",
              "Report emailed same day",
              "Up to 10 appliances included",
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
                name: "Domestic EICR",
                href: "/eicr",
                desc: "Electrical installation condition report from £67.99. Required every 5 years for rented properties.",
              },
              {
                name: "Fuse Box Installation",
                href: "/electrical-safety/fuse-box-installation",
                desc: "Consumer unit replacement from £599.99. Includes completion EICR.",
              },
              {
                name: "Landlord Certificates Bundle",
                href: "/landlord-certificates-bundle",
                desc: "EICR + Gas Safety from £130. Save on combining your annual checks.",
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

        {/* Trustpilot micro strip */}
        <section aria-label="Trustpilot rating" className="py-6 border-b border-border flex justify-center">
          <TrustpilotWidget
            businessUnitId={process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID}
            variant="micro"
          />
        </section>

        {/* CTA block */}
        <section className="py-10">
          <div className="bg-compliance-blue rounded-2xl px-6 py-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Book your PAT testing today
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice} (up to 10 appliances). Same-week appointments
              across all 32 London boroughs. Written report emailed same day.
            </p>
            <Link
              href="/book?service=pat"
              className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Book Now — from £{entryPrice}
            </Link>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=pat"
        label="Book Now"
        price={entryPrice}
        serviceName="PAT Testing"
      />
    </>
  );
}
