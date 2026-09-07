import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { PriceTable } from "@/components/ui/price-table";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { GoogleReviews } from "@/components/marketing/google-reviews";
import { MapSection } from "@/components/ui/map-section";
import { ImageSlider } from "@/components/ui/image-slider";
import { TEL, PHONE_DISPLAY, GOOGLE_BUSINESS_URL } from "@/lib/constants";
import { FRA_RESIDENTIAL_TABLE, getPriceForFRA } from "@/lib/pricing";

const entryPrice = getPriceForFRA("studio");
const BOOK = "/book?service=fra-residential";

// Dedicated Google Ads landing page. Unlinked, noindex (kept separate from the
// indexed SEO page at /fire-risk-assessment). Stripped navigation, one goal.
export const metadata: Metadata = {
  title: `Fire Risk Assessment London from £${entryPrice} | Book Online`,
  description:
    "Fire Risk Assessment for landlords, HMOs and blocks of flats across London. Competent assessors, written report and action plan within 48 hours. Book online or call.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/fire-risk-assessment" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Risk Assessment",
  description:
    "Fire risk assessment for HMOs, blocks of flats and commercial premises, as required by the Regulatory Reform (Fire Safety) Order 2005. Written report and prioritised action plan by a competent assessor.",
  provider: { "@type": "LocalBusiness", name: "My Landlord Certificate" },
  areaServed: ["London", "the M25 area"],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: `${entryPrice}`,
    highPrice: "349.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const reviews = [
  {
    content:
      "Detailed FRA for my 5-bed HMO. The assessor flagged issues with the fire door seals but was clear about which were urgent and which could wait. The written report was professional and accepted by the council first time.",
    author: "Mohammed A.",
    location: "Newham",
  },
  {
    content:
      "Needed a Fire Risk Assessment for my HMO licence renewal. The assessor was NEBOSH qualified and the report covered everything the council required. No follow-up queries from the licensing team.",
    author: "Emma C.",
    location: "Brent",
  },
];

const benefits = [
  {
    title: "A legal requirement",
    body: "Under the Regulatory Reform (Fire Safety) Order 2005, the responsible person must have a suitable fire risk assessment for HMOs and the communal areas of blocks of flats.",
  },
  {
    title: "Competent assessors",
    body: "Every assessment is carried out by an experienced, qualified fire risk assessor, so your report is accepted by councils, insurers and licensing teams.",
  },
  {
    title: "Report + action plan in 48h",
    body: "You receive a clear written report with a prioritised action plan, ready for your records, your council and your HMO licence.",
  },
  {
    title: "Fixed price, all boroughs",
    body: "The price you see is the price you pay. No call-out charges. Same-week appointments across all 33 London boroughs.",
  },
];

const steps = [
  { n: "1", title: "Book online or call", body: "Tell us the property type and pick a date. Same-week slots across all 33 London boroughs." },
  { n: "2", title: "Assessor visits", body: "A competent assessor inspects fire doors, alarms, extinguishers, emergency lighting, escape routes and hazards." },
  { n: "3", title: "Report in 48 hours", body: "We email your written fire risk assessment and prioritised action plan, ready to act on and share." },
];

const stepIcons = [
  <svg key="1" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
  <svg key="2" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M9 21v-6h6v6" /></svg>,
  <svg key="3" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5" /><path d="M9 14l2 2 4-4" /></svg>,
];

const benefitIcons = [
  <svg key="b1" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  <svg key="b2" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5L7 22l5-3 5 3-1.5-9.5" /></svg>,
  <svg key="b3" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  <svg key="b4" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><circle cx="7" cy="7" r="1.5" /></svg>,
];

const faqs = [
  {
    q: "Is a fire risk assessment a legal requirement?",
    a: "Yes. The Regulatory Reform (Fire Safety) Order 2005 requires the responsible person (usually the landlord or managing agent) to have a suitable and sufficient fire risk assessment for HMOs, the communal areas of blocks of flats, and commercial premises.",
  },
  {
    q: "What does the assessment cover?",
    a: "Fire doors, detection and alarm systems, emergency lighting, extinguishers and signage, escape routes, electrical and storage hazards, and management procedures — with a risk rating and action plan for each.",
  },
  {
    q: "How quickly do I get the report?",
    a: "We email your written fire risk assessment and prioritised action plan within 48 hours of the visit, ready for your records, your council and any HMO licence application.",
  },
  {
    q: "Do you cover HMOs and blocks of flats?",
    a: "Yes — HMOs, blocks of flats and their communal areas are our core work, across all 33 London boroughs and the surrounding M25 area. Commercial premises are covered too; call us for a quote.",
  },
];

function Stars() {
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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function FireRiskAssessmentLandingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Header: logo + phone + CTA, NO navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <Image src="/header-logo.svg" alt="My Landlord Certificate" width={180} height={36} className="h-8 w-auto" priority />
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={TEL} className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-compliance-blue text-sm">
              <PhoneIcon className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <Link href={BOOK} className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
              Book now
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-hero-blue text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
                Competent Assessors · All 33 London Boroughs · 48-Hour Report
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
                Fire Risk Assessment in London from £{entryPrice}
              </h1>
              <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-5 hover:underline">
                <Stars />
                <span className="text-sm text-blue-100">Rated <strong className="text-white">5.0</strong> on Google</span>
              </a>
              <p className="text-blue-100 text-lg leading-relaxed mb-6 max-w-xl">
                The fire risk assessment landlords, HMOs and blocks of flats need under the Fire
                Safety Order. Written report and action plan within 48 hours. Fixed price, no hidden fees.
              </p>
              <div className="flex flex-wrap gap-3 mb-3">
                <Link href={BOOK} className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors">
                  Book my assessment, from £{entryPrice}
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
                  src="/fire-risk-assessment/fire-risk-assessment-hero-assessor.png"
                  alt="Fire risk assessor inspecting the communal area of a London apartment block"
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

      {/* Trust bar */}
      <div className="bg-spec-bar text-white border-t-2 border-action-green">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
          <div><span className="font-bold">From £{entryPrice}</span><br /><span className="text-white/60 text-[11px] uppercase tracking-wider">Fixed price</span></div>
          <div><span className="font-bold">48 hours</span><br /><span className="text-white/60 text-[11px] uppercase tracking-wider">Written report</span></div>
          <div><span className="font-bold">All 33 boroughs</span><br /><span className="text-white/60 text-[11px] uppercase tracking-wider">+ M25 area</span></div>
          <div><span className="font-bold">HMO &amp; blocks</span><br /><span className="text-white/60 text-[11px] uppercase tracking-wider">council-accepted</span></div>
        </div>
      </div>

      {/* Accreditation logos */}
      <section className="bg-warm-white border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-grey mb-6">
            Our engineers are fire-safety accredited
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { src: "/accreditations/bafe.png", alt: "BAFE registered" },
              { src: "/accreditations/ife.png", alt: "Institution of Fire Engineers" },
              { src: "/accreditations/ifsm.png", alt: "Institute of Fire Safety Managers" },
            ].map((logo) => (
              <div key={logo.src} className="bg-white rounded-2xl border border-border shadow-sm flex items-center justify-center w-36 h-24 sm:w-44 sm:h-28 p-4">
                <Image src={logo.src} alt={logo.alt} width={220} height={220} className="max-h-full w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">Why landlords choose us</p>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-10 text-center">Compliant, thorough and council-accepted</h2>
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

      {/* Thorough assessment */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/fire-risk-assessment/fire-risk-assessment-fire-door-inspection.png"
            alt="Assessor checking a fire door's intumescent seals and self-closer"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl shadow-md w-full h-auto"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">A proper inspection</p>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Every fire-safety measure, checked</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-5">
              Your assessor works methodically through the building and its communal areas,
              rating each hazard and setting out exactly what needs to happen.
            </p>
            <ul className="space-y-2.5">
              {[
                "Fire doors, seals and self-closers",
                "Detection, alarms and emergency lighting",
                "Extinguishers, signage and escape routes",
                "Electrical, storage and housekeeping hazards",
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

      {/* Inspection gallery */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">From a recent London fire risk assessment</h2>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">Real photos from a job in a London block. Click any image to enlarge.</p>
          <ImageSlider
            images={[
              { src: "/fire-risk-assessment/jobs/fra-job-communal-escape.jpg", alt: "Communal stairwell and escape route inspected during a fire risk assessment", title: "Communal areas & escape routes", caption: "Stairwells, corridors and escape routes checked and kept clear.", badge: "FRA" },
              { src: "/fire-risk-assessment/jobs/fra-job-fire-door.jpg", alt: "Fire door being measured and inspected during a fire risk assessment", title: "Fire door inspection", caption: "Seals, closers, gaps and glazing checked and measured.", badge: "FRA" },
              { src: "/fire-risk-assessment/jobs/fra-job-corridor-exit.jpg", alt: "Communal corridor leading to the final exit", title: "Escape route & final exit", caption: "Clear routes and a compliant final exit to open air.", badge: "FRA" },
              { src: "/fire-risk-assessment/jobs/fra-job-smoke-alarm.jpg", alt: "Ceiling-mounted smoke and heat alarm checked during the assessment", title: "Smoke & heat alarm check", caption: "Detection coverage and alarm placement assessed.", badge: "FRA" },
              { src: "/fire-risk-assessment/jobs/fra-job-extinguisher.jpg", alt: "Fire extinguisher checked during the fire risk assessment", title: "Firefighting equipment", caption: "Extinguishers, signage and servicing checked.", badge: "FRA" },
              { src: "/fire-risk-assessment/jobs/fra-job-electrical-intake.jpg", alt: "Electrical intake and consumer unit reviewed for fire hazards", title: "Electrical intake safety", caption: "Meters, consumer units and ignition sources reviewed.", badge: "FRA" },
            ]}
          />
        </div>
      </section>

      {/* What you get */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/fire-risk-assessment/fire-risk-assessment-report-sample.png"
            alt="Example of a completed written fire risk assessment report with risk ratings and action plan"
            width={1200}
            height={1500}
            sizes="(max-width: 768px) 100vw, 340px"
            className="rounded-2xl border border-border shadow-md w-full max-w-[340px] mx-auto"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">What you get</p>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">A clear, council-ready report</h2>
            <ul className="space-y-2.5">
              {[
                "Written fire risk assessment report",
                "Risk rating for every hazard area",
                "Prioritised action plan with timescales",
                "Responsible-person guidance",
                "Recommended review date",
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

      {/* Pricing */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">Fixed fire risk assessment pricing</h2>
          <p className="text-brand-grey mb-6 text-center">By property size. Includes the on-site inspection and the written report and action plan.</p>
          <PriceTable title="Fire Risk Assessment (Residential)" rows={FRA_RESIDENTIAL_TABLE} highlightCheapest />
          <p className="text-sm text-brand-grey mt-4 text-center">
            Commercial premises or larger blocks? Call {PHONE_DISPLAY} for a fixed quote.
          </p>
          <div className="text-center mt-8">
            <Link href={BOOK} className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors">
              Book my assessment, from £{entryPrice}
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">Simple, fast, online</p>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-10 text-center">How it works</h2>
          <div className="relative grid md:grid-cols-3 gap-6">
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

      {/* Coverage map (display-only, no exits) */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">We cover every London borough</h2>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">
            Fire risk assessors across all 33 London boroughs and the surrounding M25 area,
            with same-week appointments available.
          </p>
          <MapSection interactive={false} />
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-2xl font-bold text-brand-charcoal mb-2">What London landlords say</h2>
            <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-compliance-blue hover:underline">
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
              <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
                {reviews.map((r) => (
                  <TestimonialCard key={r.author} content={r.content} author={r.author} location={r.location} service="Fire Risk Assessment" />
                ))}
              </div>
            }
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
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

      {/* Find us / map */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">Find us</h2>
          <p className="text-brand-grey text-center mb-6 max-w-xl mx-auto">
            134 Merton High St, London SW19 1BA. Fire risk assessors covering all 33 London
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

      {/* Final CTA */}
      <section className="bg-hero-blue text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Book your fire risk assessment today, from £{entryPrice}</h2>
          <p className="text-blue-100 mb-7 max-w-lg mx-auto">
            Competent assessors across all 33 London boroughs. Written report and action plan
            within 48 hours. Fixed price, no hidden fees.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={BOOK} className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors">
              Book online now
            </Link>
            <a href={TEL} className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              <PhoneIcon className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-brand-charcoal text-white/70 text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-24 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© My Landlord Certificate · 134 Merton High St, London SW19 1BA · {PHONE_DISPLAY}</p>
          <p className="flex gap-4">
            <Link href="/privacy" target="_blank" rel="noopener" className="hover:text-white">Privacy</Link>
            <Link href="/terms" target="_blank" rel="noopener" className="hover:text-white">Terms</Link>
          </p>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden flex gap-2 bg-white border-t border-border p-3 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
        <a href={TEL} className="flex-1 inline-flex items-center justify-center gap-2 border border-compliance-blue text-compliance-blue font-semibold py-2.5 rounded-xl">
          <PhoneIcon className="w-4 h-4" /> Call
        </a>
        <Link href={BOOK} className="flex-1 inline-flex items-center justify-center bg-action-green text-brand-charcoal font-semibold py-2.5 rounded-xl">
          Book, from £{entryPrice}
        </Link>
      </div>
    </>
  );
}
