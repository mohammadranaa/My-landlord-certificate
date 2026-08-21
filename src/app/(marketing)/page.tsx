import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTABanner } from "@/components/ui/cta-banner";
import { Heading } from "@/components/ui/heading";
import { JsonLd } from "@/components/shared/json-ld";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";
import { ReviewsBlock } from "@/components/marketing/reviews-block";
import { MapSection } from "@/components/ui/map-section";
import { cn } from "@/lib/utils";
import {
  LazyFAQAccordion as FAQAccordion,
  LazyStickyMobileCTA as StickyMobileCTA,
} from "@/components/lazy";
import { getPriceForGasSafety } from "@/lib/pricing";
import { PHONE_NUMBER, EMAIL } from "@/lib/constants";

const ServicesSection = dynamic(
  () => import("@/components/marketing/services-section").then((m) => m.ServicesSection),
);

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "Landlord Certificates London — EICR, Gas Safety & EPC | MLC",
  },
  description:
    "Book your EICR, Gas Safety Certificate (CP12), EPC, Fire Risk Assessment or PAT testing online. NICEIC approved and Gas Safe registered engineers. From £50 — no hidden charges. Next-day appointments available across London.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk" },
  openGraph: {
    title: "Your Property Certificates. Sorted. | My Landlord Certificate",
    description:
      "Landlord compliance certificates from £50 — no hidden charges. EICR from £67.99. Gas Safety from £50. EPC from £89.99. Next-day appointments across London. Certificate emailed within 24 hours.",
    url: "https://www.mylandlordcertificate.co.uk",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Property Certificates. Sorted. | My Landlord Certificate",
    description:
      "Landlord compliance certificates for UK landlords — no hidden charges. NICEIC approved. Gas Safe registered. Next-day appointments. Certificate emailed within 24 hours.",
  },
};

// ── Schema data ───────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "My Landlord Certificate",
  url: "https://www.mylandlordcertificate.co.uk",
  logo: "https://www.mylandlordcertificate.co.uk/logo.svg",
  email: "hello@mylandlordcertificate.co.uk",
  sameAs: [
    "https://uk.trustpilot.com/review/mylandlordcertificate.co.uk",
    "https://share.google/Mv45RjwKpz36PD8Uk",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
    addressRegion: "London",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.mylandlordcertificate.co.uk/#business",
  name: "My Landlord Certificate",
  url: "https://www.mylandlordcertificate.co.uk",
  telephone: PHONE_NUMBER,
  email: EMAIL,
  description:
    "UK landlord compliance certificates — EICR, Gas Safety Certificate (CP12), EPC, Fire Risk Assessment and PAT testing. NICEIC approved and Gas Safe registered engineers. No hidden charges, next-day appointments across London.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "134 Merton High Street",
    addressLocality: "London",
    addressRegion: "Greater London",
    postalCode: "SW19 1BA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.415969,
    longitude: -0.187741,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: ["London", "the M25 area"],
  currenciesAccepted: "GBP",
  paymentAccepted: "Credit Card, Debit Card",
  priceRange: "££",
  sameAs: [
    "https://share.google/Mv45RjwKpz36PD8Uk",
    "https://uk.trustpilot.com/review/mylandlordcertificate.co.uk",
    "https://www.facebook.com/profile.php?id=61589410869490",
    "https://www.instagram.com/mylandlordcertificate",
    "https://www.linkedin.com/company/my-landlord-certificate/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "847",
  },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "LocalBusiness",
    name: "My Landlord Certificate",
    url: "https://www.mylandlordcertificate.co.uk",
  },
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "847",
  reviewCount: "847",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.mylandlordcertificate.co.uk",
    },
  ],
};

// ── Prices from module ────────────────────────────────────────────────────────

const GAS_FROM = getPriceForGasSafety(1);

const faqItems = [
  {
    question: "Which landlord certificates do I legally need in the UK?",
    answer:
      "Most rental properties in England need at minimum an EICR (every 5 years), a Gas Safety Certificate — CP12 — (every 12 months) and a valid EPC (every 10 years, minimum E rating). HMOs also require a Fire Risk Assessment under the Regulatory Reform (Fire Safety) Order 2005. PAT testing is required for all electrical appliances supplied with a furnished tenancy.",
  },
  {
    question: "How quickly can I get my landlord certificate?",
    answer:
      "Most appointments are available the next day across London and the M25 area, with nearly all confirmed within 1–3 days. Priority slots are available in many areas — email us to check availability.",
  },
  {
    question: "Do I need to be at the property during the inspection?",
    answer:
      "No. You just need to ensure the engineer can access the property — a tenant, keyholder or letting agent can provide access. We confirm the engineer's arrival window by text in advance.",
  },
  {
    question: "Are there any hidden charges?",
    answer:
      "No. The price shown for each certificate is what you pay. No call-out fees, no surcharges for older properties, no pressure to buy remedial work. The only additional charges are £10 for parking (where no free on-site parking is available) and £20 for properties in the London Congestion Charge Zone.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We cover all 33 London boroughs and the wider M25 area, including Surrey, Kent, Essex and Hertfordshire. Our NICEIC approved and Gas Safe registered engineers operate seven days a week across all areas.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={aggregateRatingSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-[#EEF8FD] md:bg-white"
      >
        {/* Desktop — full-bleed background photo with soft light-blue wash */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/hero/home-hero.png"
            alt="London landlords reviewing their property compliance certificates online at home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#E6F4FC_0%,#EEF8FD_50%,rgba(255,255,255,0)_76%)]" />
        </div>
        {/* Mobile — photo as a soft hero background: light-blue field up top, couple revealed from under the CTAs */}
        <div className="absolute inset-0 md:hidden">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#E6F4FC_0%,#EEF8FD_45%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[650px]">
            <Image
              src="/hero/home-hero-mobile.webp"
              alt="London landlords reviewing their property compliance certificates on a tablet at home"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#EEF8FD_0%,rgba(238,248,253,0.5)_14%,rgba(238,248,253,0)_30%)]" />
          </div>
        </div>

        <Container className="relative">
          {/* Copy + trust card */}
          <div className="relative pt-12 pb-0 md:py-12 lg:py-24">
            <div className="max-w-xl lg:max-w-[54%]">
              <Heading level={1} id="hero-heading" className="mb-5">
                Landlord Certificates in London. EICR, Gas Safety &amp; EPC from{" "}
                <span className="text-action-green">£49.99</span>
              </Heading>

              <p className="mb-2 text-lg leading-relaxed text-brand-charcoal/80">
                Book your EICR, Gas Safety Certificate (CP12), Gas Safety
                Certificate (CP42), EPC, Fire Risk Assessment, Fire Safety
                Certificate, PAT Testing, Emergency Lights Certificate, Asbestos
                Survey and more. Online in minutes.
              </p>
              <p className="mb-7 text-lg leading-relaxed text-brand-charcoal/80">
                Next-day appointments across London.
              </p>

              {/* Trust points */}
              <ul className="mb-8 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Accredited Engineers",
                  "Competitive Prices",
                  "Certificates Within 24 Hours",
                  "Trusted by Landlords",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white/85 px-4 py-3 shadow-sm ring-1 ring-black/[0.02] backdrop-blur-sm transition-shadow hover:shadow-md"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-action-green text-white shadow-sm">
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm font-semibold leading-tight text-brand-charcoal">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/book" className={cn(buttonVariants({ variant: "cta", size: "lg" }))}>
                  Book your certificate
                </Link>
                <Link
                  href="/pricing"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "border-2 border-compliance-blue bg-white/90 text-compliance-blue backdrop-blur-sm hover:bg-white",
                  )}
                >
                  See all prices
                </Link>
              </div>
            </div>

            {/* Glass trust card */}
            <div className="absolute -right-2 top-[64%] hidden w-[220px] -translate-y-1/2 rounded-2xl bg-white/85 p-5 shadow-xl ring-1 ring-black/5 backdrop-blur-md lg:block">
              <div className="flex items-center gap-2.5">
                <svg className="h-6 w-6 shrink-0 text-compliance-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-sm font-bold leading-tight text-brand-charcoal">
                  Certificates
                  <br />
                  Within 24 Hours
                </span>
              </div>
              <div className="mt-4 border-t border-border pt-4">
                <div className="mb-1.5 flex gap-0.5" role="img" aria-label="Rated 5 out of 5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5 text-[#FFCB45]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg font-bold leading-tight text-brand-charcoal">Rated 5.0/5</p>
                <p className="text-xs text-brand-grey">by London landlords</p>
              </div>
            </div>

            {/* Mobile — reveal space so the couple appears under the CTAs, then the key-points strip */}
            <div aria-hidden="true" className="h-[400px] md:hidden" />
            <div className="-mx-4 sm:-mx-6 md:hidden">
              <div className="bg-compliance-blue text-white">
                <ul className="grid grid-cols-3 divide-x divide-white/15">
                  {[
                    {
                      l1: "Fully Accredited",
                      l2: "Engineers",
                      icon: (
                        <>
                          <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
                          <path d="M9 12l2 2 4-4" />
                        </>
                      ),
                    },
                    {
                      l1: "Certificates",
                      l2: "Within 24 Hours",
                      icon: (
                        <>
                          <circle cx="12" cy="12" r="9" />
                          <path d="M12 7v5l3 2" />
                        </>
                      ),
                    },
                    {
                      l1: "Next-Day",
                      l2: "Appointments",
                      icon: (
                        <>
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </>
                      ),
                    },
                  ].map((item) => (
                    <li key={item.l1} className="flex flex-col items-center gap-1.5 px-2 py-3 text-center">
                      <svg className="h-5 w-5 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {item.icon}
                      </svg>
                      <span className="leading-tight">
                        <span className="block text-[10px] font-semibold">{item.l1}</span>
                        <span className="block text-[9px] text-white/70">{item.l2}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ── Contained feature bar ─────────────────────────────────────── */}
          <div className="hidden pb-8 md:block lg:pb-12">
            <div className="overflow-hidden rounded-2xl bg-compliance-blue text-white shadow-xl ring-1 ring-black/5">
              <ul className="grid grid-cols-5 divide-x divide-white/15">
                {[
                  {
                    l1: "Fully Accredited",
                    l2: "Engineers",
                    icon: (
                      <>
                        <path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z" />
                        <path d="M9 12l2 2 4-4" />
                      </>
                    ),
                  },
                  {
                    l1: "Certificates",
                    l2: "Within 24 Hours",
                    icon: (
                      <>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </>
                    ),
                  },
                  {
                    l1: "Next-Day",
                    l2: "Appointments",
                    icon: (
                      <>
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </>
                    ),
                  },
                  {
                    l1: "Transparent",
                    l2: "Pricing",
                    icon: (
                      <>
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <path d="M7 7h.01" />
                      </>
                    ),
                  },
                  {
                    l1: "Expert Support",
                    l2: "7 Days a Week",
                    icon: (
                      <>
                        <path d="M4 14v-3a8 8 0 0 1 16 0v3" />
                        <path d="M18 19a2 2 0 0 1-2 2h-3" />
                        <rect x="2" y="14" width="4" height="6" rx="1" />
                        <rect x="18" y="14" width="4" height="6" rx="1" />
                      </>
                    ),
                  },
                ].map((item) => (
                  <li
                    key={item.l1}
                    className="flex items-center justify-center gap-3 px-3 py-6 lg:px-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
                      <svg
                        className="h-6 w-6 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.85"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {item.icon}
                      </svg>
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[15px] font-bold text-white">{item.l1}</span>
                      <span className="block text-xs font-medium text-white/85">{item.l2}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* HIDDEN — uncomment when accreditation registrations confirmed
      <section
        aria-label="Professional accreditations and memberships"
        className="py-10 bg-white border-y border-border"
      >
        <Container>
          <AccreditationSlider
            logos={HOMEPAGE_ACCREDITATIONS}
            variant="light"
            heading="Accredited by the UK's leading professional bodies"
          />
        </Container>
      </section>
      */}

      {/* ── 3. Services grid ─────────────────────────────────────────────── */}
      <Section spacing="lg" className="relative overflow-hidden bg-white">
        {/* Ambient decoration */}
        <div aria-hidden="true" className="mesh-soft pointer-events-none absolute inset-0" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-compliance-blue/5 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-action-green/5 blur-3xl"
        />
        <Container className="relative">
          <SectionHeading
            eyebrow="Our Services"
            title="Every certificate you need, residential or commercial"
            className="mb-10"
          >
            Fixed prices, no hidden charges, next-day appointments — digital certificate
            emailed on the day of the inspection.
          </SectionHeading>

          <Reveal delay={80}>
            <ServicesSection />
          </Reveal>
        </Container>
      </Section>

      {/* ── 4. How it works ──────────────────────────────────────────────── */}
      <Section id="how-it-works" spacing="lg" className="relative overflow-hidden bg-warm-white">
        <div aria-hidden="true" className="bg-grid mask-fade pointer-events-none absolute inset-0 opacity-70" />
        <Container className="relative">
          <SectionHeading
            eyebrow="Simple Process"
            title="Book your landlord certificate in 3 steps"
            className="mb-16"
          >
            Getting your property compliance certificate has never been easier.
            Most bookings take under 3 minutes.
          </SectionHeading>

          <div className="relative">
            {/* Connector line joining the three step badges (desktop) */}
            <div
              aria-hidden="true"
              className="absolute left-[16.67%] right-[16.67%] top-7 hidden h-0.5 bg-gradient-to-r from-compliance-blue/30 via-compliance-blue/30 to-action-green/40 md:block"
            />

            <ol className="grid gap-8 md:grid-cols-3" role="list">
              {[
                {
                  step: "01",
                  title: "Book online",
                  body: "Choose your certificate, select your property size, pick a date and pay securely. Next-day slots available across London and the M25 area.",
                  bullets: [
                    "EICR, Gas Safety, EPC, FRA, PAT or a bundle",
                    "Fixed price shown before you pay — no hidden extras",
                    "Morning, afternoon and evening slots available",
                    "Confirmation email sent immediately",
                  ],
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.75"/>
                      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                      <path d="M7 13h4M7 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "Engineer visits your property",
                  body: "A fully accredited engineer arrives at your agreed time. You don't need to be present — your tenant or a keyholder can provide access.",
                  bullets: [
                    "NICEIC approved electricians for EICR",
                    "Gas Safe registered engineers for CP12",
                    "Accredited DEA assessors for EPC",
                    "ID-verified, insured and background-checked",
                  ],
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" stroke="currentColor" strokeWidth="1.75"/>
                      <path d="M3 21c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                      <path d="M16 10l1.5 1.5L21 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "Certificate emailed within 24 hours",
                  body: "Your certificate arrives by email on the day of the inspection — fully compliant, ready to forward to your tenant, letting agent or local authority.",
                  bullets: [
                    "PDF certificate emailed within 24 hours as the visit",
                    "Accepted by all local authorities and letting agents",
                    "Forward to tenant within 28 days as required by law",
                    "EPC lodged on the national register automatically",
                  ],
                  icon: (
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.75"/>
                      <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"/>
                    </svg>
                  ),
                },
              ].map(({ step, title, body, bullets, icon }, i) => (
                <Reveal as="li" key={step} delay={i * 140} className="group">
                  <div className="card-lift relative h-full overflow-hidden rounded-2xl border border-border bg-white p-7 transition-colors hover:border-compliance-blue/40 hover:shadow-xl hover:shadow-compliance-blue/5">
                    {/* Ghosted step number as a design element */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-2 -top-4 select-none text-[7rem] font-black leading-none text-compliance-blue/[0.05] transition-colors duration-300 group-hover:text-compliance-blue/[0.08]"
                    >
                      {step}
                    </span>
                    {/* Numbered icon badge */}
                    <div className="relative mb-5 inline-flex">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-compliance-blue/10 text-compliance-blue ring-4 ring-white transition-all duration-300 group-hover:bg-compliance-blue group-hover:text-white">
                        {icon}
                      </div>
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-action-green text-[11px] font-bold text-white shadow-sm">
                        {step.replace(/^0/, "")}
                      </span>
                    </div>

                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-compliance-blue">
                      Step {step}
                    </p>
                    <h3 className="mb-2 text-lg font-semibold text-brand-charcoal">{title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-brand-grey">{body}</p>
                    <ul className="space-y-2">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-brand-charcoal/70">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-action-green" fill="none" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal className="mt-14 flex flex-wrap justify-center gap-4">
            <Link href="/book" className={cn(buttonVariants({ variant: "cta", size: "lg" }))}>
              Book now
            </Link>
            <Link href="/pricing" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              See all prices
            </Link>
          </Reveal>
        </Container>
      </Section>

      {/* ── 4b. London coverage map ─────────────────────────────────────── */}
      <section aria-label="London coverage areas" className="border-y border-border bg-white py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="London & the M25"
            title="Covering all 33 London boroughs"
            className="mb-10"
          >
            Click any borough to see local EICR pricing and availability. Our accredited
            engineers cover every London borough and the wider M25 area.
          </SectionHeading>
          <Reveal delay={80} className="mx-auto max-w-4xl">
            <MapSection />
          </Reveal>
          <p className="mt-6 text-center text-sm text-brand-grey">
            <Link href="/coverage-areas" className="text-compliance-blue underline hover:no-underline">
              View all coverage areas →
            </Link>
          </p>
        </Container>
      </section>

      {/* ── 4c. Why us — editorial split ──────────────────────────────────── */}
      <Section spacing="lg" className="relative overflow-hidden bg-warm-white">
        <div aria-hidden="true" className="mesh-soft pointer-events-none absolute inset-0" />
        <Container className="relative">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            {/* Sticky heading */}
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeading
                eyebrow="Why Choose Us"
                title="Why landlords choose My Landlord Certificate"
                align="left"
              >
                Property compliance is non-negotiable. We make staying on top of
                every landlord certificate simple, affordable and fast — so you can
                get on with managing your rental portfolio.
              </SectionHeading>
              <Reveal delay={120} className="mt-8">
                <Link
                  href="/letting-agents"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-compliance-blue px-5 py-2.5 text-sm font-semibold text-compliance-blue transition-colors hover:bg-compliance-blue hover:text-white"
                >
                  For letting agents &amp; portfolio landlords →
                </Link>
              </Reveal>
            </div>

            {/* Feature rows */}
            <ul
              className="overflow-hidden rounded-3xl border border-border bg-white/70 shadow-sm backdrop-blur-sm"
              role="list"
            >
              {[
                {
                  title: "No hidden charges",
                  body: "The price shown is what you pay — no call-out fees, no surcharges for older properties, no pressure to buy unnecessary remedial work. You'll always see the exact amount before you confirm your booking.",
                  icon: (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
                      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.75" />
                      <path d="M6 9v6M18 9v6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                  ),
                },
                {
                  title: "NICEIC approved and Gas Safe registered engineers",
                  body: "Every engineer holds the correct accreditation for the job. Your EICR is carried out by a NICEIC approved electrician. Your Gas Safety Certificate is issued by a Gas Safe registered engineer. Every certificate stands up to scrutiny from tenants, letting agents and local authority inspectors.",
                  icon: (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 3l8 3v6c0 5-4 9-8 11-4-2-8-6-8-11V6l8-3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  title: "Next-day appointments across London",
                  body: "Book today and your inspection is typically confirmed for the next day. Nearly all appointments are scheduled within 1–3 days across all 33 London boroughs and the M25 area, seven days a week. Priority slots available in many areas — email us.",
                  icon: (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M13 2L3 14h8l-1 8 11-13h-8l0-7z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                    </svg>
                  ),
                },
                {
                  title: "Certificate emailed within 24 hours",
                  body: "No waiting weeks for paperwork through the post. Your landlord compliance certificate is processed and emailed on the day of the inspection. Store it, forward it to your tenant, or share it with your local council — it arrives fast.",
                  icon: (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
                      <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                },
              ].map(({ icon, title, body }, i) => (
                <Reveal
                  as="li"
                  key={title}
                  delay={i * 90}
                  className="group border-b border-border last:border-b-0"
                >
                  <div className="flex gap-5 p-6 transition-colors group-hover:bg-warm-white md:p-7">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-compliance-blue/10 text-compliance-blue transition-all duration-300 group-hover:scale-105 group-hover:bg-compliance-blue group-hover:text-white"
                      aria-hidden="true"
                    >
                      {icon}
                    </div>
                    <div>
                      <p className="mb-2 text-base font-semibold text-brand-charcoal">
                        {title}
                      </p>
                      <p className="text-sm leading-relaxed text-brand-grey">{body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ── 5. Trust indicators ───────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden border-y border-border bg-[#EAF4FB] py-16 md:py-24"
        aria-label="Trust indicators"
      >
        <div aria-hidden="true" className="mesh-soft pointer-events-none absolute inset-0" />
        <Container className="relative">
          <Reveal className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-compliance-blue/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-compliance-blue">
              <span className="h-1.5 w-1.5 rounded-full bg-action-green" />
              Trusted across London
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-snug text-brand-charcoal md:text-4xl">
              The numbers landlords rely on
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {([
              { numeric: 500, suffix: "+", label: "Certificates issued" },
              { text: "24 hrs", label: "Certificate delivery" },
              { text: "Fixed", label: "No hidden charges" },
              { numeric: 33, suffix: "", label: "London boroughs covered" },
            ] as { numeric?: number; suffix?: string; text?: string; label: string }[]).map((stat, i) => (
              <Reveal as="div" key={stat.label} delay={i * 90} className="group">
                <div className="card-lift h-full rounded-2xl border border-border bg-white px-4 py-8 text-center shadow-sm transition-all hover:border-compliance-blue/40 hover:shadow-lg hover:shadow-compliance-blue/5">
                  <p className="text-4xl font-bold tracking-tight md:text-5xl">
                    {typeof stat.numeric === "number" ? (
                      <CountUp end={stat.numeric} suffix={stat.suffix} className="text-gradient-brand" />
                    ) : (
                      <span className="text-gradient-brand">{stat.text}</span>
                    )}
                  </p>
                  <p className="mt-2.5 text-sm font-medium text-brand-grey">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────────── */}
      <ReviewsBlock />

      {/* ── 6. Letting agents teaser ─────────────────────────────────────── */}
      <Section spacing="md" className="below-fold relative overflow-hidden bg-compliance-blue">
        {/* Ambient depth */}
        <div aria-hidden="true" className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-action-green/10 blur-3xl"
        />
        <Container className="relative">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            {/* Left — copy + CTA below description */}
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-action-green" />
                For letting agents &amp; portfolio landlords
              </p>
              <Heading level={2} inverted className="mt-4">
                Managing multiple rental properties?
              </Heading>
              <p className="mt-4 text-base leading-relaxed text-blue-100">
                My Landlord Certificate works with letting agencies and HMO landlords
                managing multiple properties. A dedicated account manager, volume
                pricing, a renewal reminder dashboard and coordinated multi-property
                scheduling keeps every property compliant — with far less admin.{" "}
                <Link
                  href="/contact"
                  className="text-white underline underline-offset-2 transition-colors hover:text-blue-100"
                >
                  Get in touch.
                </Link>
              </p>
              <Link
                href="/letting-agents"
                className={cn(buttonVariants({ variant: "cta", size: "lg" }), "mt-8")}
              >
                Request a portfolio quote
              </Link>
            </Reveal>

            {/* Right — image */}
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/20">
                <Image
                  src="/eicr/eicr-landlord-reviewing-certificate.png"
                  alt="Portfolio landlord reviewing multiple property compliance certificates online"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ── 7. FAQ preview ───────────────────────────────────────────────── */}
      <Section spacing="lg" className="below-fold bg-warm-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading
              eyebrow="FAQ"
              title="Common landlord compliance questions"
              className="mb-12"
            >
              Plain-English answers to the questions every UK landlord asks
              about their property certificates.
            </SectionHeading>

            <Reveal delay={80}>
              <FAQAccordion items={faqItems} includeSchema={false} />
            </Reveal>

            <p className="mt-8 text-center text-sm text-brand-grey">
              More questions?{" "}
              <Link
                href="/faq"
                className="font-medium text-compliance-blue hover:underline"
              >
                See our full FAQ →
              </Link>
            </p>
          </div>
        </Container>
      </Section>

      {/* ── 8. Final CTA ─────────────────────────────────────────────────── */}
      <Section spacing="lg" className="bg-white">
        <Container>
          <Reveal>
            <CTABanner
              heading="Ready to get your landlord certificates sorted?"
              subheading="Book online in under 3 minutes. No hidden charges. Next-day appointments across London and the M25 area. All certificates emailed within 24 hours."
              primaryHref="/book"
              primaryLabel="Book your certificate now"
              secondaryHref="/pricing"
              secondaryLabel="View all prices"
              showTrustBadges
              variant="blue"
            />
          </Reveal>
        </Container>
      </Section>

      {/* Sticky mobile CTA — hidden on desktop */}
      <StickyMobileCTA
        href="/book"
        label="Book Now"
        price={GAS_FROM}
        serviceName="Certificates from"
      />
    </>
  );
}
