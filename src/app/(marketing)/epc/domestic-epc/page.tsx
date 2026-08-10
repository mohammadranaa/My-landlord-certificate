import type { Metadata } from "next";
import Image from "next/image";
import { LazyFAQAccordion as FAQAccordion, LazyStickyMobileCTA as StickyMobileCTA } from "@/components/lazy";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceDisplay } from "@/components/ui/price-display";
import { PriceTable } from "@/components/ui/price-table";
import { TrustBadges } from "@/components/ui/trust-badges";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { ImageSlider } from "@/components/ui/image-slider";
import { GoogleReviews } from "@/components/marketing/google-reviews";
import { GOOGLE_BUSINESS_URL } from "@/lib/constants";
import {
  ADDITIONAL_CHARGES,
  DOMESTIC_EPC_TABLE,
  getPriceForEPC,
} from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Domestic EPC Certificate from £89.99 | My Landlord Certificate",
  description:
    "Domestic Energy Performance Certificate from £89.99. Required by law before renting or selling. Accredited DEA assessors, certificate on national register within 24 hours. London-wide.",
  alternates: {
    canonical: "https://www.mylandlordcertificate.co.uk/epc",
  },
};

const entryPrice = getPriceForEPC("studio");

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Domestic Energy Performance Certificate (EPC)",
  url: "https://www.mylandlordcertificate.co.uk/epc/domestic-epc",
  description:
    "Legally required for all residential properties before renting or selling. Accredited DEA assessors provide an A–G energy efficiency rating valid for 10 years.",
  provider: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  areaServed: ["London", "the M25 area"],
  offers: {
    "@type": "Offer",
    price: `${entryPrice}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
    url: "https://www.mylandlordcertificate.co.uk/epc/domestic-epc",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "EPC", item: "https://www.mylandlordcertificate.co.uk/epc" },
    { "@type": "ListItem", position: 3, name: "Domestic EPC", item: "https://www.mylandlordcertificate.co.uk/epc/domestic-epc" },
  ],
};

const faqs = [
  {
    question: "Is an EPC required by law?",
    answer:
      "Yes. The Energy Performance of Buildings (England and Wales) Regulations 2012 require a valid EPC before a residential property is marketed for sale or rent. The EPC must be made available to prospective tenants or buyers free of charge. Landlords who fail to provide a valid EPC can be fined up to £5,000.",
  },
  {
    question: "How long is a domestic EPC valid for?",
    answer:
      "A domestic EPC is valid for 10 years from the date of assessment. If you have a valid EPC from a previous tenancy or sale, you do not need a new one until it expires — as long as no major energy-related improvements (new heating system, significant insulation) have been made to the property.",
  },
  {
    question: "What is the minimum EPC rating required to let a property?",
    answer:
      "Under the Minimum Energy Efficiency Standards (MEES), all privately rented properties in England must have a minimum EPC rating of E. Letting a property rated F or G on a new tenancy is unlawful and can result in a fine of up to £5,000. The government has proposed raising the minimum to C for new tenancies by 2028.",
  },
  {
    question: "What does the EPC assessment involve?",
    answer:
      "Our accredited DEA assessor visits the property and records information about the construction type, wall and loft insulation, windows, heating system, hot water cylinder, and any renewable energy systems. The data is entered into government-approved software (RdSAP) to calculate the energy efficiency rating. The assessment takes 30–60 minutes for a typical flat or house.",
  },
  {
    question: "How can I improve my EPC rating?",
    answer:
      "The EPC certificate includes a Recommendations Report listing the most cost-effective improvements for your property. Common improvements include loft insulation (typically raises rating by 5–10 points), cavity wall insulation, upgrading to an A-rated condensing boiler, installing a room thermostat, and switching to LED lighting. Our assessors can advise on the impact of specific improvements.",
  },
  {
    question: "Do furnished or unfurnished properties need an EPC?",
    answer:
      "Yes. The EPC requirement applies regardless of whether the property is furnished or unfurnished. It relates to the building itself — its fabric, construction, and fixed building services — not the contents.",
  },
  {
    question: "Can I use an existing EPC from a previous tenant?",
    answer:
      "Yes, if the existing EPC is still valid (less than 10 years old) and no significant structural or energy-related changes have been made to the property, it can be used for a new tenancy. The EPC can be retrieved from the national register using the property address.",
  },
  {
    question: "How quickly will I receive the certificate?",
    answer:
      "We register the EPC on the national EPC register within 24 hours of the assessment. You will receive your certificate number and a link to the register entry by email. You can provide this to letting agents and prospective tenants immediately.",
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
    title: "Book online or call us",
    description:
      "Select your property size, pick a date that suits you, and confirm. We cover all 33 London boroughs with same-week appointments.",
  },
  {
    step: "2",
    title: "Assessor visits your property",
    description:
      "Our accredited DEA assessor carries out a 30–60 minute survey of the property's construction, heating, insulation, and energy systems.",
  },
  {
    step: "3",
    title: "Certificate registered within 24 hours",
    description:
      "Your EPC is lodged on the government's national register. You receive the certificate number and a full recommendations report by email.",
  },
];

const reviews = [
  {
    content:
      "The EPC assessor was thorough and efficient, in and out in 45 minutes for a 3-bed mid-terrace. He flagged two low-cost improvements that would push us from a D to a C. Genuinely useful.",
    author: "Rachel B.",
    location: "Lewisham",
  },
  {
    content:
      "Assessor arrived on time, was polite with my tenant and completed the EPC quickly. The certificate was on the national register within hours. Straightforward from start to finish.",
    author: "Tom H.",
    location: "Southwark",
  },
  {
    content:
      "Needed the EPC for a remortgage. The assessor knew exactly what the lender would need and made sure everything was in order. Certificate arrived within 24 hours of the visit.",
    author: "Anna C.",
    location: "Merton",
  },
];

function GoogleStars() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="Rated 5 out of 5 on Google">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-5 h-5 text-[#FFCB45]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function DomesticEPCPage() {
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
              <li className="text-brand-charcoal font-medium">Domestic EPC</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-brand-charcoal mb-3 leading-tight">
                Domestic EPC from £{entryPrice}
              </h1>
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mb-4 hover:underline"
              >
                <GoogleStars />
                <span className="text-sm text-brand-grey">
                  Rated <strong className="text-brand-charcoal">5.0</strong> on Google
                </span>
              </a>
              <p className="text-brand-charcoal/80 leading-relaxed mb-4 max-w-xl">
                The Energy Performance Certificate landlords and homeowners need to let or sell,
                by accredited DEA assessors. On the national EPC register within 24 hours.
              </p>
              <PriceDisplay price={entryPrice} from size="lg" className="mb-4" />
              <p className="text-brand-grey mb-4">
                Accredited DEA assessors · Certificate on national register within 24 hours · Valid 10 years
              </p>
              <TrustBadges serviceKey="epc" variant="light" className="mb-6" />
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book?service=epc"
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
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
                <Image
                  src="/epc/epc-energy-assessor-measuring-room.png"
                  alt="Accredited domestic energy assessor carrying out an EPC assessment in a London flat"
                  width={1600}
                  height={1000}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
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
            What is a domestic EPC?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            An Energy Performance Certificate (EPC) rates the energy efficiency of a
            residential property on a scale from A (most efficient, lowest bills) to G
            (least efficient, highest bills). It also shows the property&apos;s current energy
            costs and what they could be after recommended improvements.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            EPCs are produced by accredited Domestic Energy Assessors (DEAs) using
            government-approved RdSAP (Reduced Data Standard Assessment Procedure) software.
            The assessment considers the property&apos;s construction type, insulation levels,
            heating system, hot water cylinder, and any renewable energy systems.
          </p>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">
            Every EPC comes with a Recommendations Report — a list of cost-effective
            improvements that would improve the rating, along with estimated costs and
            potential savings. This is useful for landlords planning to improve their
            properties ahead of the proposed 2028 MEES changes.
          </p>

          <div className="bg-brand-amber/10 border border-brand-amber/30 rounded-xl p-4 mb-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-brand-amber">Legal requirement:</span>{" "}
              The Energy Performance of Buildings (England and Wales) Regulations 2012
              require a valid EPC to be provided before any residential property is rented
              or sold. Under MEES regulations, properties must achieve a minimum E rating —
              failure to comply can result in a fine of up to £5,000.
            </p>
          </div>

          <div className="bg-compliance-blue/5 border border-compliance-blue/20 rounded-xl p-4">
            <p className="text-sm text-brand-charcoal">
              <span className="font-semibold text-compliance-blue">Coming 2028:</span>{" "}
              The government has proposed raising the minimum EPC rating for new tenancies
              to C by 2028. If your property is currently rated D or E, now is the time
              to commission an EPC assessment and plan any necessary improvements.
            </p>
          </div>
        </section>

        {/* EPC ratings explained */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            EPC ratings A–G explained
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-6">
            The EPC rating is based on the estimated annual energy cost per square metre
            of floor area. The lower the cost, the higher the rating.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { rating: "A", range: "92–100", colour: "bg-green-600", text: "text-white" },
              { rating: "B", range: "81–91", colour: "bg-green-500", text: "text-white" },
              { rating: "C", range: "69–80", colour: "bg-lime-500", text: "text-white" },
              { rating: "D", range: "55–68", colour: "bg-yellow-400", text: "text-brand-charcoal" },
              { rating: "E", range: "39–54", colour: "bg-orange-400", text: "text-white" },
              { rating: "F", range: "21–38", colour: "bg-orange-600", text: "text-white" },
              { rating: "G", range: "1–20", colour: "bg-red-600", text: "text-white" },
              { rating: "Min", range: "E required", colour: "bg-compliance-blue", text: "text-white" },
            ].map((r) => (
              <div
                key={r.rating}
                className={`${r.colour} ${r.text} rounded-xl p-3 text-center`}
              >
                <p className="text-2xl font-bold">{r.rating}</p>
                <p className="text-xs mt-1 opacity-80">{r.range}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-grey mt-4">
            Properties rated F or G cannot legally be let on a new tenancy. The legal
            minimum is E. The proposed minimum from 2028 is C.
          </p>
        </section>

        {/* Your A to G rating, explained (chart) */}
        <section className="py-10 border-b border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Image
              src="/epc/epc-rating-chart-a-to-g.png"
              alt="EPC energy efficiency rating chart from A (most efficient) to G (least efficient)"
              width={1080}
              height={1080}
              sizes="(max-width: 768px) 100vw, 460px"
              className="rounded-xl border border-border shadow-sm w-full"
            />
            <div>
              <h2 className="text-2xl font-bold text-brand-charcoal mb-3">
                Your A to G rating, explained
              </h2>
              <p className="text-brand-charcoal/80 leading-relaxed mb-3">
                Every EPC rates your property from A (most efficient) to G (least efficient). To let a
                property in England it must be rated E or above, with a minimum of C proposed for new
                tenancies from 2028.
              </p>
              <p className="text-brand-charcoal/80 leading-relaxed">
                Your certificate includes a free recommendations report showing the cheapest ways to
                improve your rating, specific to your property.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">Pricing</h2>
          <p className="text-brand-grey mb-6">
            Fixed price by property size. Includes on-site assessment and lodgement on the national EPC register.
          </p>
          <PriceTable
            title="Domestic EPC"
            rows={DOMESTIC_EPC_TABLE}
            highlightCheapest
            bookHref="/book?service=epc"
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
            For commercial properties, see{" "}
            <Link href="/commercial-epc" className="text-compliance-blue hover:underline">
              commercial EPC pricing →
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
              "30–60 min on-site assessment",
              "Construction type and insulation survey",
              "Heating system and hot water assessment",
              "A–G energy efficiency rating",
              "Estimated annual energy cost",
              "Recommendations Report with improvement costs",
              "Lodgement on national EPC register within 24 hours",
              "Certificate emailed to you directly",
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

        {/* Your official EPC, ready to use */}
        <section className="py-10 border-b border-border">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Image
              src="/epc/epc-sample-certificate.png"
              alt="Example of a domestic Energy Performance Certificate showing the A to G rating"
              width={1200}
              height={1500}
              sizes="(max-width: 768px) 100vw, 340px"
              className="rounded-2xl border border-border shadow-md w-full max-w-[340px] mx-auto"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">
                What you get
              </p>
              <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
                Your official EPC, ready to use
              </h2>
              <ul className="space-y-2.5">
                {[
                  "A to G energy efficiency rating",
                  "Estimated energy costs and potential savings",
                  "Free recommendations report",
                  "Lodged on the national EPC register",
                  "Emailed to you, valid for 10 years",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-action-green/15 text-action-green flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* See what our assessors actually check (gallery) */}
        <section className="py-10 border-b border-border overflow-hidden">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">
            From a recent assessment
          </p>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-3 text-center">
            See what our assessors actually check
          </h2>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">
            Every EPC involves a thorough room-by-room survey of your property. Here is what a
            typical visit looks like — real photos from a recent assessment.
          </p>
          <ImageSlider
            images={[
              { src: "/epc/epc-boiler-inspection.png", alt: "Assessor inspecting the boiler and heating system to record type, age and efficiency" },
              { src: "/epc/epc-boiler-controls-thermostat.png", alt: "Assessor recording boiler controls, thermostat settings and heating efficiency" },
              { src: "/epc/epc-window-glazing-assessment.png", alt: "Assessor checking window glazing type — single, double or triple — which affects the energy rating" },
              { src: "/epc/epc-radiator-heating-controls.png", alt: "Assessor checking radiators and heating distribution for type and efficiency" },
              { src: "/epc/epc-wall-floor-insulation.png", alt: "Assessor inspecting wall and floor construction to determine insulation levels" },
              { src: "/epc/epc-meter-energy-supply.png", alt: "Assessor recording the electricity and gas meter type as part of the energy assessment" },
            ]}
          />
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

        {/* Cross-sell */}
        <section className="py-10 border-b border-border">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/eicr", label: "Domestic EICR", desc: "Legally required every 5 years." },
              { href: "/gas-safety-certificate", label: "Gas Safety (CP12)", desc: "Required annually for gas properties." },
              { href: "/commercial-epc", label: "Commercial EPC", desc: "For offices, retail, and commercial lets." },
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

        {/* Reviews */}
        <section className="py-10 border-b border-border">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-2">What London landlords say</h2>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-compliance-blue hover:underline"
            >
              <svg className="w-5 h-5" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
                <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
                <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34A21.99 21.99 0 0 0 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" />
                <path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.18 29.93 1 24 1 15.4 1 7.96 5.93 4.34 13.12l7.35 5.7C13.42 13.62 18.27 9.75 24 9.75z" />
              </svg>
              Read our reviews on Google
            </a>
          </div>
          <GoogleReviews
            fallback={
              <div className="grid sm:grid-cols-3 gap-5">
                {reviews.map((r) => (
                  <TestimonialCard
                    key={r.author}
                    content={r.content}
                    author={r.author}
                    location={r.location}
                    service="EPC"
                  />
                ))}
              </div>
            }
          />
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
              Book your domestic EPC assessment
            </h2>
            <p className="text-white/80 mb-6 max-w-lg mx-auto">
              Fixed price from £{entryPrice}. Accredited DEA assessors, certificate
              registered on the national EPC register within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/book?service=epc"
                className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Book Online — from £{entryPrice}
              </Link>
              <a
                href="mailto:info@mylandlordcertificate.co.uk"
                className="inline-flex items-center border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </section>
      </div>

      <StickyMobileCTA
        href="/book?service=epc"
        label="Book Now"
        price={entryPrice}
        serviceName="Domestic EPC"
      />
    </>
  );
}
