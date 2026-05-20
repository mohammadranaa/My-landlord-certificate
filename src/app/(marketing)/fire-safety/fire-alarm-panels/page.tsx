import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import dynamic from "next/dynamic";
const FAQAccordion = dynamic(
  () => import("@/components/ui/faq-accordion").then(m => m.FAQAccordion),
  {
    ssr: true,
    loading: () => (
      <div className="space-y-3 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-14 rounded-xl bg-border/30 animate-pulse" />
        ))}
      </div>
    ),
  }
)
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
const StickyMobileCTA = dynamic(
  () => import("@/components/ui/sticky-mobile-cta").then(m => m.StickyMobileCTA),
  { ssr: true }
)
import { TrustBadges } from "@/components/ui/trust-badges";
import { ADDITIONAL_CHARGES, FIRE_ALARM_PANELS_TABLE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Fire Alarm Panel Servicing London from £74.99 — BS 5839-1 | My Landlord Certificate",
  description:
    "Fire alarm panel inspection, testing and servicing from £74.99. Conventional and addressable panels. BS 5839-1 compliant. Written certificate same day. All 32 London boroughs.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/fire-safety/fire-alarm-panels",
  },
};

const entryPrice = FIRE_ALARM_PANELS_TABLE[0].price;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Alarm Panel Servicing & Inspection",
  url: "https://www.mylandlordcertificate.co.uk/fire-safety/fire-alarm-panels",
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
    { "@type": "ListItem", position: 2, name: "Fire Safety", item: "https://www.mylandlordcertificate.co.uk/fire-safety" },
    { "@type": "ListItem", position: 3, name: "Fire Alarm Panels", item: "https://www.mylandlordcertificate.co.uk/fire-safety/fire-alarm-panels" },
  ],
};

const faqs = [
  {
    question: "How often should a fire alarm panel be serviced?",
    answer:
      "BS 5839-1 requires fire alarm systems in commercial and multi-occupancy premises to be inspected and tested at least every six months. HMO licence conditions across London typically require annual servicing as a minimum. We recommend six-monthly inspections for all premises with a panel-based system to catch developing faults early.",
  },
  {
    question: "What types of panel do you service?",
    answer:
      "We service conventional (zone-based) and addressable panels from all major manufacturers including Kentec, Advanced, Hochiki, Napco, and Morley. If you have a less common panel, call us to confirm compatibility before booking.",
  },
  {
    question: "Is fire alarm panel servicing a legal requirement?",
    answer:
      "The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person to ensure the fire detection and alarm system is maintained in efficient working order. BS 5839-1 is the accepted standard — regular servicing and an up-to-date service record are the expected method of demonstrating compliance. Many insurance policies also require a current service certificate.",
  },
  {
    question: "What is the difference between a panel service and a fire safety certificate?",
    answer:
      "A panel service (this service) covers the full fire alarm system — the control panel, all detectors, call points, sounders, and backup power. A fire safety certificate covers standalone battery or mains-wired detectors in residential properties not connected to a panel. If your property has a central fire alarm control panel, you need a panel service.",
  },
  {
    question: "What happens during a six-monthly and annual service?",
    answer:
      "A six-monthly service tests a sample of devices (typically 25% of detectors and all call points). An annual (full) service tests every detection device, call point, sounder, and the panel backup battery. Both services include a written certificate. We recommend booking the annual full service so every device is verified.",
  },
  {
    question: "What is included in the written service certificate?",
    answer:
      "The BS 5839-1 service certificate records the panel type and location, all devices tested and their results, any faults found and their status (remediated or outstanding), and the next service due date. It is suitable for submission to your local authority, HMO licensing body, or insurer.",
  },
  {
    question: "Can you repair faults found during the service?",
    answer:
      "Yes. Our engineers carry common spare parts for the panels and devices they service most frequently. Minor faults — such as failed detectors, damaged call points, or faulty sounders — can often be remediated during the same visit. Major faults and panel replacements are quoted separately.",
  },
  {
    question: "Which areas of London do you cover?",
    answer:
      "We cover all 32 London boroughs including Westminster, Islington, Hackney, Tower Hamlets, Southwark, Lambeth, Wandsworth, Brent, Ealing, Camden, Barnet, and all other boroughs. A congestion zone supplement of £18 applies for properties within the TfL congestion zone.",
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

export default function FireAlarmPanelsPage() {
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
              <li className="text-brand-charcoal font-medium">Fire Alarm Panels</li>
            </ol>
          </nav>

          <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
            Fire Alarm Panel Servicing London from £{entryPrice}
          </h1>
          <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
          <p className="text-brand-grey mb-4">
            Conventional &amp; addressable panels · BS 5839-1 compliant · Certificate same day
          </p>
          <TrustBadges serviceKey="fire-alarm-installation" variant="light" className="mb-6" />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/book?service=fire-alarm-panels"
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
              <p className="text-xs text-white/50 mb-0.5">Frequency</p>
              <p className="font-bold text-white">6-monthly</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Certificate</p>
              <p className="font-bold text-white">Same day</p>
            </div>
            <div className="pl-4">
              <p className="text-xs text-white/50 mb-0.5">Standard</p>
              <p className="font-bold text-white">BS 5839-1</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content well ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-10">

        {/* What is it */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            Fire alarm panel servicing for London HMOs and commercial premises
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Properties with a central fire alarm control panel — including HMOs with communal
            areas, blocks of flats, and commercial buildings across London — require regular
            panel servicing to BS 5839-1. This goes beyond a simple alarm test: our engineers
            inspect the control panel itself, all detection devices (smoke, heat, CO), manual
            call points, sounders, and the backup power supply.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            We service conventional (zone-based) and addressable panels from all major
            manufacturers including Kentec, Advanced, Hochiki, Napco, and Morley. Our
            engineers carry out a full functional test of every zone, check log entries and
            fault history, test the backup battery, and issue a written BS 5839-1 service
            certificate confirming the system&apos;s condition.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            Pricing is by number of detection devices on the system. Call us for tailored
            quotes on large or complex multi-zone systems.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person
              to maintain the fire detection and alarm system in efficient working order.
              BS 5839-1 recommends six-monthly servicing — many London HMO licences and
              insurance policies require an up-to-date service record.
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
                title: "Book with your detector count",
                body: "Tell us the panel manufacturer and the number of detection devices on your system. We confirm the price and book an engineer with the right expertise for your panel type.",
              },
              {
                step: "2",
                title: "Full system inspection",
                body: "Our engineer inspects the control panel, tests every detector zone, tests all call points and sounders, checks the backup battery, and reviews the fault log. Any issues are documented immediately.",
              },
              {
                step: "3",
                title: "BS 5839-1 certificate issued same day",
                body: "You receive a written service certificate recording every device tested, any faults found, and the next service due date. Suitable for your HMO licence, local authority, or insurance renewal.",
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
            Priced by number of detectors on the system. Includes full inspection, testing, and written certificate.
          </p>
          <PriceTable
            title="Fire Alarm Panel Servicing"
            rows={FIRE_ALARM_PANELS_TABLE}
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
            For large commercial systems, call{" "}
            <a href="tel:03301330066" className="text-compliance-blue hover:underline">
              0330 133 0066
            </a>{" "}
            for a tailored quote.
          </p>
        </section>

        {/* What's included */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">What&apos;s included</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Control panel inspection and log review",
              "Functional test of all detection zones",
              "Manual call point test",
              "Sounder and strobe test",
              "Backup battery condition check",
              "Detection device visual inspection",
              "Fault investigation and advisory report",
              "Written BS 5839-1 service certificate",
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
                name: "Fire Risk Assessment",
                href: "/fire-risk-assessment",
                desc: "Written fire risk assessment from £74.99. Identifies fire detection deficiencies.",
              },
              {
                name: "Fire Alarm Installation",
                href: "/fire-alarm-installation",
                desc: "Mains-wired interlinked alarms from £209.99/alarm. For properties without a panel system.",
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
              Book your fire alarm panel service
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Written BS 5839-1 certificate same day.
              Same-week appointments across all 32 London boroughs.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=fire-alarm-panels"
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
        href="/book?service=fire-alarm-panels"
        label="Book Now"
        price={entryPrice}
        serviceName="Fire Alarm Panel Servicing"
      />
    </>
  );
}
