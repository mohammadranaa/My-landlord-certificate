import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { PriceTable } from "@/components/ui/price-table";
import { ReviewsSection } from "@/components/marketing/reviews-section";
import { MapSection } from "@/components/ui/map-section";
import { ImageSlider } from "@/components/ui/image-slider";
import { cn } from "@/lib/utils";
import { TEL, PHONE_DISPLAY } from "@/lib/constants";
import { DOMESTIC_EPC_TABLE, getPriceForEPC } from "@/lib/pricing";
import { REVIEWS } from "@/data/reviews";

const entryPrice = getPriceForEPC("studio");

// Dedicated Google Ads landing page. Unlinked, noindex (kept separate from the
// indexed SEO page at /epc to avoid duplicate content). Stripped navigation,
// one goal: book or call.
export const metadata: Metadata = {
  title: "EPC Certificate London from £89.99 | Book Online",
  description:
    "Energy Performance Certificate from £89.99. Accredited DEA assessors across all 33 London boroughs, valid 10 years. Book online today.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/epc" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Domestic Energy Performance Certificate (EPC)",
  description:
    "EPC from £89.99, valid 10 years. Accredited DEA assessors across all 33 London boroughs. Book online today.",
  provider: { "@type": "LocalBusiness", name: "My Landlord Certificate" },
  areaServed: ["London", "the M25 area"],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: `${entryPrice}`,
    highPrice: "149.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const benefits = [
  {
    title: "Legally required to let",
    body: "No valid EPC means you cannot market a property to let, and rating F or G is unlawful. Penalties reach £5,000.",
  },
  {
    title: "Accredited DEA assessors",
    body: "Every assessment is carried out by an accredited Domestic Energy Assessor and lodged on the official government register.",
  },
  {
    title: "On the register in 24 hours",
    body: "Your certificate is lodged on the national EPC register within 24 hours, ready to send to tenants, agents or lenders.",
  },
  {
    title: "Fixed price, no hidden fees",
    body: "The price you see is the price you pay. No call-out charges, no surprises. Book online in under 2 minutes.",
  },
];

const steps = [
  { n: "1", title: "Book online or call", body: "Pick your property size and a date, or call us. Same-week slots across all 33 London boroughs." },
  { n: "2", title: "Assessor visits", body: "An accredited DEA carries out a 30 to 60 minute survey of construction, heating, insulation and windows." },
  { n: "3", title: "Certificate in 24 hours", body: "We lodge your EPC on the national register and email you the certificate and recommendations report." },
];

const stepIcons = [
  // Book / calendar
  <svg key="1" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
  // Assessor visit / home
  <svg key="2" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" /></svg>,
  // Certificate / document check
  <svg key="3" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 14l2 2 4-4" /></svg>,
];

const benefitIcons = [
  // shield check (legal)
  <svg key="b1" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  // award (accredited)
  <svg key="b2" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5L7 22l5-3 5 3-1.5-9.5" /></svg>,
  // clock (24h)
  <svg key="b3" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  // tag (fixed price)
  <svg key="b4" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><circle cx="7" cy="7" r="1.5" /></svg>,
];

const faqs = [
  {
    q: "How much does an EPC cost?",
    a: `A domestic EPC starts from £${entryPrice} for a studio, with fixed prices by property size. No call-out charges or hidden fees.`,
  },
  {
    q: "How quickly will I get my certificate?",
    a: "We lodge your EPC on the government's national register within 24 hours of the assessment and email you the certificate and reference number.",
  },
  {
    q: "Do you cover my area?",
    a: "We cover all 33 London boroughs and the surrounding M25 area, with same-week appointments available across the whole region.",
  },
  {
    q: "Is the assessor accredited?",
    a: "Yes. Every EPC is carried out by an accredited Domestic Energy Assessor (DEA) and lodged on the official government register, so it is accepted by tenants, letting agents and mortgage lenders.",
  },
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function EpcLandingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* ── Minimal header: logo + phone + CTA only, NO navigation ── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <Image src="/header-logo.svg" alt="My Landlord Certificate" width={180} height={36} className="h-8 w-auto" priority />
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={TEL} className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-compliance-blue text-sm">
              <PhoneIcon className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <Link href="/book?service=epc" className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
              Book now
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-hero-blue text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
                Elmhurst Accredited · All 33 London Boroughs · 24-Hour Turnaround
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
                EPC Certificate in London from £{entryPrice}
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-6 max-w-xl">
                The Energy Performance Certificate landlords need to let or sell, by accredited
                DEA assessors. On the national register within 24 hours. Fixed price, no hidden fees.
              </p>
              <div className="flex flex-wrap gap-3 mb-3">
                <Link href="/book?service=epc" className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors">
                  Book my EPC, from £{entryPrice}
                </Link>
                <a href={TEL} className="inline-flex items-center gap-2 bg-white/10 border border-white/30 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
                  <PhoneIcon className="w-5 h-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
              <p className="text-blue-300 text-sm">Fixed price · No hidden fees · Book in under 2 minutes</p>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
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

      {/* ── Trust bar ── */}
      <div className="bg-spec-bar text-white border-t-2 border-action-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
          <div><span className="font-bold">From £{entryPrice}</span><br /><span className="text-white/60 text-[11px] uppercase tracking-wider">Fixed price</span></div>
          <div><span className="font-bold">24 hours</span><br /><span className="text-white/60 text-[11px] uppercase tracking-wider">On the register</span></div>
          <div><span className="font-bold">All 33 boroughs</span><br /><span className="text-white/60 text-[11px] uppercase tracking-wider">+ M25 area</span></div>
          <div><span className="font-bold">Accredited DEA</span><br /><span className="text-white/60 text-[11px] uppercase tracking-wider">Elmhurst</span></div>
        </div>
      </div>

      {/* ── Accreditation logos ── */}
      <section className="bg-warm-white border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-grey mb-6">
            Our engineers are accredited &amp; registered with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { src: "/accreditations/elmhurst.png", alt: "Elmhurst Energy approved energy assessor" },
              { src: "/accreditations/stroma.png", alt: "Stroma Certification" },
              { src: "/accreditations/cibse.png", alt: "CIBSE" },
            ].map((logo) => (
              <div
                key={logo.src}
                className="bg-white rounded-2xl border border-border shadow-sm flex items-center justify-center w-36 h-24 sm:w-44 sm:h-28 p-4"
              >
                <Image src={logo.src} alt={logo.alt} width={220} height={220} className="max-h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">Why landlords choose us</p>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-10 text-center">Compliant, fast and fully accredited</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div key={b.title} className="rounded-2xl border border-border bg-white shadow-sm p-6 flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-compliance-blue/10 text-compliance-blue flex items-center justify-center shrink-0">
                  {benefitIcons[i]}
                </span>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{b.title}</p>
                  <p className="text-sm text-brand-charcoal/75 leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Thorough assessment (imagery) ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">Thorough &amp; accredited</p>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">A proper assessment, by an accredited DEA</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-5">
              Your assessor inspects the construction, insulation, glazing, heating system and
              controls, then lodges your A to G rating on the national register with a free
              recommendations report showing how to improve it.
            </p>
            <ul className="space-y-2.5">
              {[
                "Walls, loft and floor insulation",
                "Boiler, heating system and controls",
                "Window glazing and renewables",
                "Lodged on the national register within 24 hours",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-action-green/15 text-action-green flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/epc/epc-assessor-checking-boiler.png"
            alt="Accredited domestic energy assessor inspecting a boiler and heating controls"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl shadow-md w-full h-auto"
          />
        </div>
      </section>

      {/* ── A to G rating ── */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/epc/epc-rating-chart-a-to-g.png"
            alt="EPC energy efficiency rating chart from A (most efficient) to G (least efficient)"
            width={1080}
            height={1080}
            sizes="(max-width: 768px) 100vw, 460px"
            className="rounded-xl border border-border shadow-sm w-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-3">Your A to G rating, explained</h2>
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

      {/* ── What you get (imagery) ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/epc/epc-sample-certificate.webp"
            alt="Example of a domestic Energy Performance Certificate showing the A to G rating"
            width={1200}
            height={1500}
            sizes="(max-width: 768px) 100vw, 340px"
            className="rounded-2xl border border-border shadow-md w-full max-w-[340px] mx-auto"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">What you get</p>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Your official EPC, ready to use</h2>
            <ul className="space-y-2.5">
              {[
                "A to G energy efficiency rating",
                "Estimated energy costs and potential savings",
                "Free recommendations report",
                "Lodged on the national EPC register",
                "Emailed to you, valid for 10 years",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-action-green/15 text-action-green flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Our work on-site ── */}
      <section className="bg-warm-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">From a recent assessment in Chelmsford</p>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-3 text-center">See what our assessors actually check</h2>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">
            Every EPC involves a thorough room-by-room survey of your property. Here is what a typical visit looks like — real photos from a recent assessment.
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
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">Fixed EPC pricing</h2>
        <p className="text-brand-grey mb-6 text-center">By property size. Includes the on-site assessment and lodgement on the national register.</p>
        <PriceTable title="Domestic EPC" rows={DOMESTIC_EPC_TABLE} highlightCheapest />
        <div className="text-center mt-8">
          <Link href="/book?service=epc" className={cn(buttonVariants({ variant: "cta", size: "lg" }))}>
            Book my EPC, from £{entryPrice}
          </Link>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">Simple, fast, online</p>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-10 text-center">How it works</h2>
          <div className="relative grid md:grid-cols-3 gap-6">
            {/* connector line behind the icons (desktop) */}
            <div className="hidden md:block absolute top-[52px] left-[16.66%] right-[16.66%] h-0.5 bg-compliance-blue/20" aria-hidden="true" />
            {steps.map((s, i) => (
              <div key={s.n} className="relative bg-white rounded-2xl border border-border shadow-sm p-6 text-center">
                <div className="relative z-10 w-14 h-14 rounded-2xl bg-compliance-blue text-white flex items-center justify-center mx-auto mb-4 ring-4 ring-warm-white">
                  {stepIcons[i]}
                </div>
                <p className="text-xs font-bold text-compliance-blue uppercase tracking-widest mb-1">Step {s.n}</p>
                <p className="font-semibold text-brand-charcoal mb-2">{s.title}</p>
                <p className="text-sm text-brand-grey leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage map (display-only, no exits) ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">We cover every London borough</h2>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">
            Accredited assessors across all 33 London boroughs and the surrounding M25 area,
            with same-week appointments available.
          </p>
          <MapSection interactive={false} />
        </div>
      </section>

      {/* ── Reviews ── */}
      {REVIEWS.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <ReviewsSection limit={3} />
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="bg-warm-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6 text-center">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-white">
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-4 font-semibold text-brand-charcoal text-sm select-none [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <span className="shrink-0 w-5 h-5 rounded-full bg-compliance-blue/10 text-compliance-blue flex items-center justify-center text-base font-bold leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 pt-1 text-sm text-brand-charcoal/80 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Find us / map ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">Find us</h2>
          <p className="text-brand-grey text-center mb-6 max-w-xl mx-auto">
            134 Merton High St, London SW19 1BA. Accredited DEA assessors covering all 33 London
            boroughs and the surrounding M25 area.
          </p>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="My Landlord Certificate, 134 Merton High St, London SW19 1BA"
              src="https://maps.google.com/maps?q=My%20Landlord%20Certificate%2C%20134%20Merton%20High%20St%2C%20London%20SW19%201BA&z=15&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google map showing My Landlord Certificate at 134 Merton High St, London SW19 1BA"
            />
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-hero-blue text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Book your EPC today, from £{entryPrice}</h2>
          <p className="text-blue-100 mb-7 max-w-lg mx-auto">
            Accredited DEA assessors across all 33 London boroughs. On the national register within
            24 hours. Fixed price, no hidden fees.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book?service=epc" className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors">
              Book my EPC, from £{entryPrice}
            </Link>
            <a href={TEL} className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              <PhoneIcon className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── Minimal footer: trust + legal only, no navigation ── */}
      <footer className="bg-brand-charcoal text-white/70 text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-24 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© My Landlord Certificate · 134 Merton High St, London SW19 1BA · {PHONE_DISPLAY}</p>
          <p className="flex gap-4">
            <Link href="/privacy" target="_blank" rel="noopener" className="hover:text-white">Privacy</Link>
            <Link href="/terms" target="_blank" rel="noopener" className="hover:text-white">Terms</Link>
          </p>
        </div>
      </footer>

      {/* ── Sticky mobile CTA: Call + Book (single goal, always reachable) ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden flex gap-2 bg-white border-t border-border p-3 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
        <a href={TEL} className="flex-1 inline-flex items-center justify-center gap-2 border border-compliance-blue text-compliance-blue font-semibold py-2.5 rounded-xl">
          <PhoneIcon className="w-4 h-4" /> Call
        </a>
        <Link href="/book?service=epc" className="flex-1 inline-flex items-center justify-center bg-action-green text-brand-charcoal font-semibold py-2.5 rounded-xl">
          Book, from £{entryPrice}
        </Link>
      </div>
    </>
  );
}
