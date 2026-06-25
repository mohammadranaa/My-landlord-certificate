import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { PriceTable } from "@/components/ui/price-table";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { GoogleReviews } from "@/components/marketing/google-reviews";
import { MapSection } from "@/components/ui/map-section";
import { ImageSlider } from "@/components/ui/image-slider";
import { cn } from "@/lib/utils";
import { TEL, PHONE_DISPLAY } from "@/lib/constants";
import { COMMERCIAL_EICR_TABLE } from "@/lib/pricing";

const entryPrice = 149.99;
const GOOGLE_PROFILE = "https://share.google/GvNZMXMAQqMafn3VH";

export const metadata: Metadata = {
  title: "Commercial EICR from £149.99 | NICEIC Approved | My Landlord Certificate",
  description:
    "Commercial Electrical Installation Condition Report from £149.99. NICEIC approved contractors across London and the M25 area. Certificate emailed within 24 hours. Book online or call.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/commercial-eicr" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial EICR (Electrical Installation Condition Report)",
  description:
    "Electrical Installation Condition Report for commercial properties. NICEIC approved contractors inspect all circuits, consumer units and fixed wiring. Certificate emailed within 24 hours.",
  provider: { "@type": "LocalBusiness", name: "My Landlord Certificate" },
  areaServed: ["London", "the M25 area"],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "149.99",
    highPrice: "1155.99",
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const reviews = [
  {
    content:
      "Needed an EICR for our office lease renewal. The electrician was thorough, tested every circuit and had the certificate back to us the same evening. Very professional.",
    author: "James M.",
    location: "City of London",
  },
  {
    content:
      "We manage six commercial units and use My Landlord Certificate for all our EICRs. Consistent pricing, reliable engineers and certificates always within 24 hours. No complaints.",
    author: "Sarah L.",
    location: "Croydon",
  },
  {
    content:
      "The engineer explained every C2 observation clearly and gave us a prioritised list of remedial works. Far more helpful than the last company we used. Highly recommend.",
    author: "David P.",
    location: "Islington",
  },
];

const benefits = [
  {
    title: "Legal compliance for commercial premises",
    body: "The Electricity at Work Regulations 1989 require commercial premises to maintain safe electrical installations. An EICR provides the evidence you need.",
  },
  {
    title: "NICEIC approved contractors",
    body: "Every inspection is carried out by an NICEIC approved contractor, the industry gold standard for electrical safety in the UK.",
  },
  {
    title: "Certificate within 24 hours",
    body: "Your EICR certificate and schedule of observations are emailed within 24 hours of the inspection, ready for landlords, insurers or local authorities.",
  },
  {
    title: "Fixed price per consumer unit",
    body: "Clear pricing by the number of consumer units. No call-out charges, no hourly rates, no surprises. Additional circuits at £10 each.",
  },
];

const steps = [
  { n: "1", title: "Book online or call", body: "Tell us how many consumer units your premises has and pick a date. Same-week slots across London and the M25." },
  { n: "2", title: "NICEIC engineer visits", body: "An approved contractor inspects every circuit, consumer unit, distribution board and fixed wiring installation." },
  { n: "3", title: "Certificate in 24 hours", body: "Your EICR certificate and schedule of observations are emailed within 24 hours, with any remedial recommendations." },
];

const stepIcons = [
  <svg key="1" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>,
  <svg key="2" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M13 2v7h7" /><path d="M10 13l-2 2 2 2" /><path d="M14 13l2 2-2 2" /></svg>,
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
    q: "How much does a commercial EICR cost?",
    a: `A commercial EICR starts from £${entryPrice} for one consumer unit (up to 12 circuits). Additional circuits are charged at £10 each. Prices increase with the number of consumer units — see our pricing table above.`,
  },
  {
    q: "How often does a commercial EICR need to be done?",
    a: "The recommended interval for commercial premises is every 5 years, or every 3 years for higher-risk environments such as restaurants, workshops or premises open to the public. Your EICR certificate will state the recommended retest date.",
  },
  {
    q: "What happens if my installation fails the EICR?",
    a: "The engineer will issue the certificate with C1 (danger present), C2 (potentially dangerous) or C3 (improvement recommended) observation codes. We can quote for any remedial work needed to bring your installation up to standard.",
  },
  {
    q: "Do you cover my area?",
    a: "We cover all 33 London boroughs and the surrounding M25 area, with same-week appointments available across the whole region.",
  },
  {
    q: "Will the inspection disrupt my business?",
    a: "Most commercial EICRs can be completed during normal business hours with minimal disruption. The engineer will briefly isolate individual circuits for testing but will coordinate with you to avoid affecting critical operations.",
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

export default function CommercialEicrLandingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          <Image src="/header-logo.svg" alt="My Landlord Certificate" width={180} height={36} className="h-8 w-auto" priority />
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={TEL} className="hidden sm:inline-flex items-center gap-1.5 font-semibold text-compliance-blue text-sm">
              <PhoneIcon className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
            <Link href="/book?service=commercial-eicr" className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
              Book now
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-compliance-blue to-blue-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
                NICEIC Approved · All 33 London Boroughs · 24-Hour Turnaround
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
                Commercial EICR from £{entryPrice}
              </h1>
              <a href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mb-5 hover:underline">
                <Stars />
                <span className="text-sm text-blue-100">
                  Rated <strong className="text-white">5.0</strong> on Google
                </span>
              </a>
              <p className="text-blue-100 text-lg leading-relaxed mb-6 max-w-xl">
                Electrical Installation Condition Report for commercial premises, by NICEIC approved
                contractors. Certificate emailed within 24 hours. Fixed price per consumer unit, no hidden fees.
              </p>
              <div className="flex flex-wrap gap-3 mb-3">
                <Link href="/book?service=commercial-eicr" className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-6 py-3 rounded-xl transition-colors">
                  Book my EICR, from £{entryPrice}
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
                  src="/commercial-eicr/commercial-eicr-hero-electrician.png"
                  alt="NICEIC approved electrician arriving at a commercial premises in London to carry out an EICR inspection"
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
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-center text-sm">
          <div><span className="font-bold">From £{entryPrice}</span><br /><span className="text-white/60 text-xs">Per consumer unit</span></div>
          <div><span className="font-bold">Within 24 hours</span><br /><span className="text-white/60 text-xs">Certificate emailed</span></div>
          <div><span className="font-bold">All 33 boroughs</span><br /><span className="text-white/60 text-xs">+ M25 area</span></div>
          <div><span className="font-bold">NICEIC approved</span><br /><span className="text-white/60 text-xs">Industry gold standard</span></div>
        </div>
      </div>

      {/* ── Accreditation logos ── */}
      <section className="bg-warm-white border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-grey mb-6">
            Accredited &amp; registered with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {[
              { src: "/accreditations/niceic.png", alt: "NICEIC approved contractor" },
              { src: "/accreditations/napit.png", alt: "NAPIT registered" },
              { src: "/accreditations/elecsa.png", alt: "ELECSA registered contractor" },
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
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">Why businesses choose us</p>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-10 text-center">Compliant, thorough and fully approved</h2>
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

      {/* ── Thorough inspection (imagery) ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">Thorough &amp; NICEIC approved</p>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Every circuit inspected and tested</h2>
            <p className="text-brand-charcoal/80 leading-relaxed mb-5">
              Your NICEIC approved contractor inspects every consumer unit, distribution board,
              circuit and fixed wiring installation in your commercial premises. You receive a
              detailed certificate with observation codes and a recommended retest date.
            </p>
            <ul className="space-y-2.5">
              {[
                "Consumer units and distribution boards",
                "All circuits, sockets and fixed wiring",
                "RCD and earth fault loop impedance testing",
                "Emergency lighting and fire alarm circuits",
                "Certificate emailed within 24 hours",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-action-green/15 text-action-green flex items-center justify-center shrink-0 text-xs font-bold">&check;</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/commercial-eicr/commercial-eicr-consumer-unit-inspection.png"
            alt="NICEIC approved electrician inspecting a commercial consumer unit and testing circuits"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl shadow-md w-full h-auto"
          />
        </div>
      </section>

      {/* ── What you get ── */}
      <section className="bg-warm-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="/commercial-eicr/commercial-eicr-distribution-board-wiring.png"
            alt="Electrician examining a three-phase distribution board in a commercial building"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-2xl shadow-md w-full h-auto"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">What you get</p>
            <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Your commercial EICR certificate</h2>
            <ul className="space-y-2.5">
              {[
                "Full Electrical Installation Condition Report",
                "Schedule of inspections and test results",
                "Observation codes (C1, C2, C3, FI) with explanations",
                "Recommended date of next inspection",
                "Remedial work quotation if needed",
                "Emailed within 24 hours, valid for up to 5 years",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-action-green/15 text-action-green flex items-center justify-center shrink-0 text-xs font-bold">&check;</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Our work on-site ── */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-compliance-blue mb-2">From a recent commercial inspection</p>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-3 text-center">See what our engineers actually inspect</h2>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">
            A commercial EICR covers every consumer unit, distribution board, circuit and piece of fixed wiring in your premises. Here is what a typical inspection looks like.
          </p>
          <ImageSlider
            images={[
              { src: "/commercial-eicr/commercial-eicr-consumer-unit-inspection.png", alt: "Engineer inspecting a commercial consumer unit and testing individual circuit breakers" },
              { src: "/commercial-eicr/commercial-eicr-socket-circuit-testing.png", alt: "Engineer testing sockets and circuits with a multifunction tester in a commercial premises" },
              { src: "/commercial-eicr/commercial-eicr-distribution-board-wiring.png", alt: "Engineer examining a three-phase distribution board and cable routing in a plant room" },
              { src: "/commercial-eicr/commercial-eicr-emergency-lighting-check.png", alt: "Engineer testing emergency exit lighting above a fire door in a commercial corridor" },
              { src: "/commercial-eicr/commercial-eicr-rcd-earth-fault-testing.png", alt: "Close-up of RCD trip testing on a commercial consumer unit with a calibrated tester" },
            ]}
          />
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">Fixed commercial EICR pricing</h2>
        <p className="text-brand-grey mb-6 text-center">By number of consumer units. Additional circuits above 12 per unit are £10 each.</p>
        <PriceTable title="Commercial EICR" rows={COMMERCIAL_EICR_TABLE} highlightCheapest />
        <p className="text-xs text-brand-grey text-center mt-4">
          Parking £5 &middot; Congestion zone surcharge £18 &middot; Prices include VAT
        </p>
        <div className="text-center mt-8">
          <Link href="/book?service=commercial-eicr" className={cn(buttonVariants({ variant: "cta", size: "lg" }))}>
            Book my EICR, from £{entryPrice}
          </Link>
        </div>
      </section>

      {/* ── How it works ── */}
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

      {/* ── Coverage map ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">We cover every London borough</h2>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">
            NICEIC approved contractors across all 33 London boroughs and the surrounding M25 area,
            with same-week appointments available.
          </p>
          <MapSection interactive={false} />
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2">What our commercial clients say</h2>
          <a href={GOOGLE_PROFILE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-compliance-blue hover:underline">
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
            <div className="grid md:grid-cols-3 gap-5">
              {reviews.map((r) => (
                <TestimonialCard key={r.author} content={r.content} author={r.author} location={r.location} service="Commercial EICR" />
              ))}
            </div>
          }
        />
      </section>

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

      {/* ── Find us ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-2 text-center">Find us</h2>
          <p className="text-brand-grey text-center mb-6 max-w-xl mx-auto">
            134 Merton High St, London SW19 1BA. NICEIC approved contractors covering all 33 London
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
      <section className="bg-gradient-to-br from-compliance-blue to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">Book your commercial EICR today, from £{entryPrice}</h2>
          <p className="text-blue-100 mb-7 max-w-lg mx-auto">
            NICEIC approved contractors across all 33 London boroughs. Certificate emailed within
            24 hours. Fixed price per consumer unit, no hidden fees.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/book?service=commercial-eicr" className="inline-flex items-center bg-action-green hover:bg-green-500 text-brand-charcoal font-semibold px-8 py-3 rounded-xl transition-colors">
              Book my EICR, from £{entryPrice}
            </Link>
            <a href={TEL} className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
              <PhoneIcon className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ── Minimal footer ── */}
      <footer className="bg-brand-charcoal text-white/70 text-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 pb-24 sm:pb-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>&copy; My Landlord Certificate &middot; 134 Merton High St, London SW19 1BA &middot; {PHONE_DISPLAY}</p>
          <p className="flex gap-4">
            <Link href="/privacy" target="_blank" rel="noopener" className="hover:text-white">Privacy</Link>
            <Link href="/terms" target="_blank" rel="noopener" className="hover:text-white">Terms</Link>
          </p>
        </div>
      </footer>

      {/* ── Sticky mobile CTA ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden flex gap-2 bg-white border-t border-border p-3 shadow-[0_-2px_12px_rgba(0,0,0,0.08)]">
        <a href={TEL} className="flex-1 inline-flex items-center justify-center gap-2 border border-compliance-blue text-compliance-blue font-semibold py-2.5 rounded-xl">
          <PhoneIcon className="w-4 h-4" /> Call
        </a>
        <Link href="/book?service=commercial-eicr" className="flex-1 inline-flex items-center justify-center bg-action-green text-brand-charcoal font-semibold py-2.5 rounded-xl">
          Book, from £{entryPrice}
        </Link>
      </div>
    </>
  );
}
