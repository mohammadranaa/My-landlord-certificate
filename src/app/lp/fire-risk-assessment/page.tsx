import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";
import { JsonLd } from "@/components/shared/json-ld";
import { ReviewCard } from "@/components/marketing/review-card";
import { TEL, PHONE_DISPLAY, EMAIL, MAILTO, WHATSAPP_URL, GOOGLE_MAPS_REVIEWS_URL } from "@/lib/constants";
import {
  ADDITIONAL_CHARGES,
  FRA_COMMERCIAL_TABLE,
  FRA_RESIDENTIAL_TABLE,
  getPriceForFRA,
} from "@/lib/pricing";
import { GOOGLE_RATING, reviewsForService } from "@/data/reviews";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const J = "font-[family-name:var(--font-jakarta)]";

const entryPrice = getPriceForFRA("studio");
const popularPrice = getPriceForFRA("1-3bed");
const communalFrom = getPriceForFRA("communal-1-3floors");
const commercialFrom = FRA_COMMERCIAL_TABLE[0].price;
const rating = GOOGLE_RATING.rating.toFixed(1);
const BOOK = "/book?service=fra-residential";
const BOOK_COMMERCIAL = "/book?service=fra-commercial&type=commercial";

// Dedicated Google Ads landing page. Unlinked, noindex (kept separate from the
// indexed SEO page at /fire-risk-assessment).
export const metadata: Metadata = {
  title: `Fire Risk Assessment London from £${entryPrice} | Book Online`,
  description:
    "Fire Risk Assessment for landlords, HMOs and blocks of flats across London. Written report and prioritised action plan emailed within 24-48 hours.",
  robots: { index: false, follow: false },
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/fire-risk-assessment" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fire Risk Assessment",
  description:
    "Fire Risk Assessment for landlords, HMOs and blocks of flats across London. Written report and action plan emailed within 24-48 hours.",
  provider: { "@type": "LocalBusiness", name: "My Landlord Certificate" },
  areaServed: ["London", "the M25 area"],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: `${entryPrice}`,
    highPrice: `${FRA_RESIDENTIAL_TABLE[FRA_RESIDENTIAL_TABLE.length - 1].price}`,
    priceCurrency: "GBP",
    availability: "https://schema.org/InStock",
  },
};

const nav = [
  { href: "#why", label: "Why Us" },
  { href: "#checks", label: "What's Checked" },
  { href: "#pricing", label: "Pricing" },
  { href: "#how", label: "How It Works" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQs" },
];

function Icon({ d, className }: { d: ReactNode; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d}
    </svg>
  );
}

const why = [
  {
    icon: <><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" /><circle cx="7.5" cy="7.5" r="1.5" /></>,
    big: `£${entryPrice}`,
    title: "Fixed price, by property size",
    body: "Transparent pricing. No call-out charges and no surprise fees. The price you see is what you pay.",
  },
  {
    icon: <><circle cx="12" cy="8" r="6" /><path d="M8.2 13.2 7 22l5-3 5 3-1.2-8.8" /></>,
    big: "IFSM",
    title: "IFSM & NEBOSH certified",
    body: "Assessments by genuinely competent assessors, the standard councils, insurers and courts recognise.",
  },
  {
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    big: "24-48h",
    title: "Report in 24-48 hours",
    body: "A formal written report with a risk-rated, prioritised action plan, accepted by every London borough.",
  },
  {
    icon: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />,
    big: "1 team",
    title: "We fix it too",
    body: "Fire doors, alarms, emergency lighting and extinguishers. The same team can carry out any remedial works.",
  },
];

const checkGroups = [
  {
    label: "Building & escape",
    tone: "bg-[#e3f4fc] text-[#0077b3]",
    items: [
      { icon: <><path d="M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5" /><path d="M15 17l5-5-5-5" /><path d="M20 12H9" /></>, title: "Escape routes", body: "Corridors, stairwells and final exits: clear, unlocked and signed." },
      { icon: <><rect x="5" y="2" width="14" height="20" rx="1" /><circle cx="15" cy="12" r="1" /></>, title: "Fire doors", body: "Self-closers, gaps, intumescent & smoke seals inspected and measured." },
      { icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 12h18M12 3v18" /></>, title: "Compartmentation", body: "Fire-separating walls/floors and unsealed service penetrations." },
      { icon: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M12 2a7 7 0 0 0-4 12.7V16h8v-1.3A7 7 0 0 0 12 2z" /></>, title: "Emergency lighting", body: "Coverage, duration and discharge-test records on escape routes." },
    ],
  },
  {
    label: "Hazards & equipment",
    tone: "bg-[#eefbdc] text-[#4a7a00]",
    items: [
      { icon: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0" /></>, title: "Detection & alarms", body: "Smoke/heat alarms: correct type, interlinked, tested and in-service." },
      { icon: <><path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" /><path d="M18 3h-3" /><path d="M11 3a6 6 0 0 0-6 6v5" /><path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2z" /></>, title: "Extinguishers & signage", body: "Correct types, locations, servicing and fire-action notices." },
      { icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />, title: "Ignition sources", body: "Overloaded sockets, damaged cables and unsafe electrics flagged." },
      { icon: <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3.3.3 1.6 1.4 2.8 2.5 2.8z" />, title: "Combustible materials", body: "Rubbish, stored furniture and flammables near heat sources." },
    ],
  },
];

const types = [
  {
    title: "HMO Fire Risk Assessment",
    body: "A written FRA is legally required for HMOs under the Fire Safety Order 2005, and most London councils make it an HMO licence condition.",
    points: [
      <>Communal areas, rooms and fire separation between units</>,
      <>Council-ready report for your licence application or renewal</>,
      <>Priced by bedrooms, from <b>£{popularPrice}</b></>,
    ],
    cta: "See HMO prices →",
    green: true,
  },
  {
    title: "Fire Risk Assessment for Flats & Communal Areas",
    body: "Any building with shared hallways, staircases or landings falls under the Fire Safety Order, including converted houses split into flats.",
    points: [
      <>Stairwells, landings and final exits</>,
      <>Flat entrance doors and communal fire doors</>,
      <>Communal areas from <b>£{communalFrom}</b> (1-3 floors)</>,
    ],
    cta: "See flat & communal prices →",
    green: false,
  },
];

const gallery = [
  { src: "/fire-risk-assessment/jobs/fra-job-communal-escape.jpg", alt: "Communal escape route", title: "Communal areas & escape routes", body: "Stairwells and corridors checked and kept clear." },
  { src: "/fire-risk-assessment/jobs/fra-job-fire-door.jpg", alt: "Fire door inspection", title: "Fire door inspection", body: "Seals, closers, gaps and glazing measured." },
  { src: "/fire-risk-assessment/jobs/fra-job-smoke-alarm.jpg", alt: "Smoke alarm check", title: "Smoke & heat alarm check", body: "Detection coverage and placement assessed." },
];

const getList = [
  { title: "Written FRA report", body: "Formal document, not a ticked template — accepted first time by councils & the LFB." },
  { title: "Risk rating for every hazard", body: "Critical, significant, moderate or advisory — so nothing is ambiguous." },
  { title: "Prioritised action plan", body: "Ordered highest-to-lowest, with a recommended timescale for each item." },
  { title: "Responsible person & review date", body: "Who does what, by when — plus your recommended reassessment date." },
];

const steps = [
  { n: "1", title: "Book online", body: "Choose your property type, pick a date and pay securely. Under 3 minutes, instant confirmation." },
  { n: "2", title: "Assessor visits", body: "A NEBOSH-qualified assessor inspects methodically. You don't need to be present — tenant access is fine." },
  { n: "3", title: "Report in 24-48 hrs", body: "Your written report lands by email within 24-48 hours — findings, action plan and review date included." },
];

const after = [
  { title: "Report emailed in 24-48 hrs", body: "Formal written document referencing the applicable legislation for every finding." },
  { title: "Critical items first", body: "Every finding risk-rated and ordered so you know exactly what to fix first." },
  { title: "Recommended timescales", body: "Each action carries a realistic completion date based on the severity of the risk." },
  { title: "Responsible person named", body: "Landlord, agent, resident or contractor — no ambiguity over who acts." },
  { title: "We can do the works", body: "Fire doors, alarms, emergency lighting and compartmentation — same trusted team." },
  { title: "Review reminder set", body: "Typically 12 months for HMOs — we'll remind you when reassessment is due." },
];

const legal = [
  { title: "Fire Safety Order 2005", body: "The \"Responsible Person\" must carry out a suitable & sufficient FRA for all HMOs and properties with communal areas.", penalty: "Unlimited fine or up to 2 years' imprisonment" },
  { title: "Building Safety Act 2022", body: "Higher-risk buildings (18m+ or 7+ storeys) need an up-to-date FRA as part of the Building Safety Case." },
  { title: "HMO Licence Conditions", body: "Most councils require a current FRA as an explicit licence condition — no FRA can mean a revoked licence.", penalty: "Unlicensed HMO fine up to £30,000" },
  { title: "Smoke & CO Alarm Regs 2022", body: "A smoke alarm on every floor and CO alarms by fixed combustion appliances — checked and flagged in your report." },
];

const faqs = [
  { q: "How much does a Fire Risk Assessment cost?", a: `Fixed prices from £${entryPrice} for a studio, £${popularPrice} for a 1–3 bed. Commercial from £${commercialFrom}. No call-out charges or hidden fees — see the pricing tables above.` },
  { q: "What qualifications should my assessor hold?", a: "Our assessors are IFSM certified, IFE registered and hold NEBOSH Fire Safety & Risk Management certificates — the competence standard councils, insurers and courts recognise." },
  { q: "How quickly do I get the report?", a: "A full written report with a prioritised action plan is emailed within 24-48 hours of the inspection." },
  { q: "How often should an FRA be reviewed?", a: "Typically every 12 months for HMOs and blocks of flats, or sooner after significant building changes. We set a review date and remind you." },
  { q: "Do I need a separate assessment for communal areas?", a: "Yes — any building with shared hallways, staircases or landings needs a communal-area assessment in addition to individual flat assessments." },
  { q: "What happens if the assessment finds problems?", a: "Every issue is risk-rated with a recommended timescale. Where works are needed, our team can carry them out directly — from fire doors to alarms and emergency lighting." },
];

const btn = `inline-flex items-center justify-center gap-2 rounded-full px-[26px] py-[15px] text-[15.5px] font-bold whitespace-nowrap transition ${J}`;
const btnGreen = `${btn} bg-action-green text-[#14320a] shadow-[0_8px_20px_rgba(128,209,0,.32)] hover:bg-[#6cb400] hover:-translate-y-0.5`;
const btnBlue = `${btn} bg-compliance-blue text-white shadow-[0_8px_20px_rgba(0,147,219,.28)] hover:bg-[#0077b3] hover:-translate-y-0.5`;
const wrap = "max-w-[1160px] mx-auto px-[22px]";
const sec = "py-[66px]";
const eyebrow = "inline-block font-bold text-[12.5px] tracking-[.14em] uppercase text-compliance-blue mb-3";
const muted = "text-[#5b6675]";
const line = "border-[#E6EAEF]";
const shadowSm = "shadow-[0_4px_14px_rgba(16,42,67,.06)]";
const shadow = "shadow-[0_10px_30px_rgba(16,42,67,.08)]";
const h2 = `${J} font-extrabold leading-[1.15] tracking-[-.02em] text-[clamp(26px,3.4vw,38px)]`;
const gold = "text-[#F5A623]";

function SecHead({ eyebrowText, title, sub }: { eyebrowText: string; title: string; sub?: string }) {
  return (
    <div className="max-w-[720px] mx-auto mb-10 text-center">
      <span className={eyebrow}>{eyebrowText}</span>
      <h2 className={h2}>{title}</h2>
      {sub && <p className={`${muted} mt-3 text-[17px]`}>{sub}</p>}
    </div>
  );
}

function PriceCard({
  title,
  sub,
  rows,
  green,
  popularLabel,
  href,
  bookLabel,
}: {
  title: string;
  sub: string;
  rows: readonly { label: string; price: number }[];
  green?: boolean;
  popularLabel?: string;
  href: string;
  bookLabel: string;
}) {
  return (
    <div className={`bg-white border ${line} rounded-2xl overflow-hidden ${shadowSm} flex flex-col`}>
      <div
        className={
          green
            ? "px-6 py-[22px] bg-[linear-gradient(135deg,#7cc900,#6cb400)] text-[#14320a]"
            : "px-6 py-[22px] bg-[linear-gradient(135deg,#0093DB,#0077b3)] text-white"
        }
      >
        <h3 className={`${J} text-[19px] font-extrabold`}>{title}</h3>
        <div className="text-[13px] opacity-90 mt-[3px]">{sub}</div>
      </div>
      <table className="w-full border-collapse">
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className={`border-b ${line} last:border-b-0`}>
              <td className="px-6 py-3 text-[14.5px]">
                {r.label}
                {r.label === popularLabel && (
                  <span className="inline-block text-[10.5px] bg-[#eafce7] text-[#4a7a00] font-bold px-2 py-0.5 rounded-full ml-2 align-middle">
                    Most popular
                  </span>
                )}
              </td>
              <td className={`px-6 py-3 text-right font-extrabold whitespace-nowrap text-[14.5px] ${J}`}>£{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-auto px-6 pb-5 pt-2">
        <Link href={href} className="text-sm font-semibold text-compliance-blue hover:underline">
          {bookLabel}
        </Link>
      </div>
    </div>
  );
}

export default function FireRiskAssessmentLandingPage() {
  const fraReviews = reviewsForService("fire-risk-assessment", 2);

  return (
    <div className={`${jakarta.variable} bg-warm-white text-brand-charcoal leading-relaxed antialiased pb-[70px] min-[861px]:pb-0`}>
      <JsonLd data={serviceSchema} />

      {/* Announcement bar */}
      <div className="bg-brand-charcoal text-[#e9edf2] text-xs sm:text-[13px] font-medium">
        <div className="max-w-[1160px] mx-auto flex flex-nowrap items-center justify-start sm:justify-center gap-x-[14px] sm:gap-x-5 px-[22px] py-2.5 whitespace-nowrap overflow-x-auto [scrollbar-width:none]">
          <span className="shrink-0">✅ <b className="text-white">Fixed price from £{entryPrice}</b></span>
          <span className="w-[5px] h-[5px] rounded-full bg-gray-600 shrink-0" />
          <span className="shrink-0">⚡ <b className="text-white">Report in 24-48 hrs</b></span>
          <span className="w-[5px] h-[5px] rounded-full bg-gray-600 shrink-0" />
          <a href={GOOGLE_MAPS_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 hover:underline">⭐ <span className="text-action-green">{rating} on Google</span></a>
          <span className="w-[5px] h-[5px] rounded-full bg-gray-600 shrink-0" />
          <span className="shrink-0">📍 33 boroughs + M25</span>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-40 bg-white border-b ${line}`}>
        <div className={`${wrap} flex items-center justify-between gap-4 py-3`}>
          <Image src="/header-logo.svg" alt="My Landlord Certificate" width={190} height={46} className="h-[46px] w-auto" priority />
          <nav aria-label="Page sections" className="hidden min-[901px]:flex gap-[26px] font-semibold text-[14.5px] text-gray-700">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-compliance-blue">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3.5">
            <a href={TEL} className="hidden min-[901px]:inline font-bold text-[15px] whitespace-nowrap">{PHONE_DISPLAY}</a>
            <Link href={BOOK} className={`${btnGreen} px-5! py-[11px]! text-sm!`}>Book Now →</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden text-white bg-[linear-gradient(135deg,#0093DB_0%,#0077b3_55%,#00567f_100%)] before:content-[''] before:absolute before:-right-[120px] before:-top-[120px] before:w-[520px] before:h-[520px] before:rounded-full before:border-2 before:border-white/[.08] after:content-[''] after:absolute after:right-10 after:top-20 after:w-80 after:h-80 after:rounded-full after:border-2 after:border-white/[.07]">
        <div className={`${wrap} relative z-[2] grid grid-cols-1 min-[861px]:grid-cols-[1.05fr_.95fr] gap-[30px] min-[861px]:gap-11 items-center py-14`}>
          <div>
            <div className="text-[13px] text-white/75 mb-[18px]">Home › Fire Safety › Fire Risk Assessment</div>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-[7px] bg-action-green text-[#14320a] px-3.5 py-[7px] rounded-full text-[12.5px] font-semibold">IFSM Certified Assessors</span>
              <span className="inline-flex items-center gap-[7px] bg-white/[.14] border border-white/[.22] px-3.5 py-[7px] rounded-full text-[12.5px] font-semibold">IFE Registered</span>
              <span className="inline-flex items-center gap-[7px] bg-white/[.14] border border-white/[.22] px-3.5 py-[7px] rounded-full text-[12.5px] font-semibold">NEBOSH Qualified</span>
            </div>
            <h1 className={`${J} text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.15] tracking-[-.02em] mb-[18px]`}>
              Fire Risk Assessment London <span className="text-[#eaffc2]">from £{entryPrice}</span>
            </h1>
            <p className="text-[17.5px] text-white/[.92] max-w-[520px] mb-3.5">
              Compulsory for all HMOs and strongly recommended for every rental. A written report with a prioritised action plan, emailed within 24-48 hours.
            </p>
            <a href={GOOGLE_MAPS_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-2.5 mb-6 text-sm font-semibold hover:underline">
              <span className={`${gold} text-lg tracking-[1px]`}>★★★★★</span> Rated <b>{rating}</b> on Google
            </a>
            <div className="flex flex-wrap gap-3 mb-3.5">
              <Link href={BOOK} className={btnGreen}>Book my FRA, from £{entryPrice}</Link>
              <a href="#pricing" className={`${btn} border-[1.5px] border-white/55 text-white hover:bg-white/[.12]`}>See full pricing</a>
            </div>
            <p className="text-[13px] text-white/[.72]">Book online in under 3 minutes · No call-out charge · PI insured</p>
          </div>
          <div className="relative">
            <Image
              src="/fire-risk-assessment/fire-risk-assessment-hero-assessor.png"
              alt="Fire risk assessor inspecting a London apartment block"
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 860px) 100vw, 540px"
              className="rounded-[20px] shadow-[0_24px_60px_rgba(0,0,0,.28)] w-full h-[300px] min-[861px]:h-[420px] object-cover"
            />
            <div className={`hidden min-[861px]:flex absolute -left-3.5 bottom-[22px] bg-white text-brand-charcoal rounded-[14px] px-4 py-3.5 ${shadow} items-center gap-3 max-w-[250px]`}>
              <div className="w-10 h-10 rounded-[10px] bg-[#eafce7] flex items-center justify-center text-xl shrink-0" aria-hidden="true">📄</div>
              <div>
                <b className={`${J} text-[15px] block`}>Council-ready report</b>
                <span className={`text-xs ${muted}`}>Accepted by all London boroughs &amp; the LFB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-[2] bg-white/10 border-t border-white/15">
          <div className="max-w-[1160px] mx-auto px-[22px] grid grid-cols-2 min-[701px]:grid-cols-4 gap-0.5">
            {[
              { lab: "From", val: <>£{entryPrice} <small className="text-[13px] font-semibold text-[#eaffc2]">residential</small></> },
              { lab: "Report", val: "24-48 hrs" },
              { lab: "Assessors", val: "IFSM · NEBOSH" },
              { lab: "Coverage", val: <>33 Boroughs <small className="text-[13px] font-semibold text-[#eaffc2]">+ M25</small></> },
            ].map((c) => (
              <div key={c.lab} className="px-3.5 py-[22px] text-center border-t border-white/[.12] min-[701px]:border-t-0">
                <div className="text-xs tracking-[.08em] uppercase text-white/70 font-semibold">{c.lab}</div>
                <div className={`${J} font-extrabold text-xl mt-1`}>{c.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / accreditations */}
      <div className={`bg-warm-white border-b ${line} pt-12 pb-[52px]`}>
        <div className={wrap}>
          <a href={GOOGLE_MAPS_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className={`flex w-fit mx-auto items-center justify-center gap-[9px] font-bold ${J} text-[15px] mb-2 hover:underline`}>
            <span className={`${gold} text-[19px] tracking-[1px]`}>★★★★★</span> Rated {rating} on Google
          </a>
          <div className="text-center font-bold text-[13px] tracking-[.16em] uppercase text-compliance-blue mb-[26px]">
            Our engineers are fire-safety accredited
          </div>
          <div className="flex flex-wrap items-stretch justify-center gap-[22px] max-w-[820px] mx-auto">
            {[
              { src: "/accreditations/bafe.png", alt: "BAFE registered" },
              { src: "/accreditations/ife.png", alt: "Institution of Fire Engineers" },
              { src: "/accreditations/ifsm.png", alt: "Institute of Fire Safety Managers" },
            ].map((logo) => (
              <div key={logo.src} className={`bg-white border ${line} rounded-2xl ${shadowSm} flex-[1_1_140px] min-[701px]:flex-[1_1_220px] max-w-[250px] min-h-[110px] min-[701px]:min-h-[150px] flex items-center justify-center p-5 min-[701px]:px-[30px] min-[701px]:py-7`}>
                <Image src={logo.src} alt={logo.alt} width={220} height={220} className="max-h-16 min-[701px]:max-h-24 w-auto max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why us */}
      <section className={sec} id="why">
        <div className={wrap}>
          <SecHead eyebrowText="Why My Landlord Certificate" title="Fire Risk Assessment for Landlords, done properly" sub="Fixed prices, real qualifications and no runaround. Everything a London landlord needs to prove fire-safety compliance, booked online." />
          <div className="grid grid-cols-1 min-[521px]:grid-cols-2 min-[901px]:grid-cols-4 gap-5">
            {why.map((w) => (
              <div key={w.title} className={`bg-white border ${line} rounded-2xl px-[22px] py-[26px] ${shadowSm} transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,42,67,.08)]`}>
                <div className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center mb-[18px] text-white bg-[linear-gradient(135deg,#0093DB_0%,#2bb3c9_55%,#80D100_100%)] shadow-[0_8px_18px_rgba(0,147,219,.25)]">
                  <Icon d={w.icon} className="w-[26px] h-[26px]" />
                </div>
                <div className={`${J} font-extrabold text-[30px] leading-none text-[#00567f] tracking-[-.02em] mb-2.5`}>{w.big}</div>
                <h3 className={`${J} text-[16.5px] font-bold mb-2 leading-[1.15]`}>{w.title}</h3>
                <p className={`text-[14.5px] ${muted}`}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we check */}
      <section className={`${sec} bg-white`} id="checks">
        <div className={wrap}>
          <SecHead eyebrowText="A proper inspection" title="What your fire risk assessor checks" sub="Your IFSM assessor works methodically through HMOs, flats and communal areas, risk-rating every hazard." />
          {checkGroups.map((g, gi) => (
            <div key={g.label} className={gi > 0 ? "mt-[30px]" : undefined}>
              <div className="flex items-center gap-3.5 mb-3.5">
                <span className={`${J} font-bold text-[13px] tracking-[.12em] uppercase whitespace-nowrap`}>{g.label}</span>
                <i className="flex-1 h-px bg-[#E6EAEF]" />
              </div>
              <div className="grid grid-cols-1 min-[521px]:grid-cols-2 min-[901px]:grid-cols-4 gap-4">
                {g.items.map((c) => (
                  <div key={c.title} className={`relative overflow-hidden border ${line} rounded-[14px] px-[18px] pt-6 pb-5 bg-warm-white transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:bg-white hover:shadow-[0_4px_14px_rgba(16,42,67,.06)] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[linear-gradient(90deg,#0093DB,#80D100)]`}>
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-[11px] mb-3 ${g.tone}`}>
                      <Icon d={c.icon} className="w-[21px] h-[21px]" />
                    </span>
                    <h4 className={`${J} text-[15.5px] font-bold mb-[5px]`}>{c.title}</h4>
                    <p className={`text-[13.5px] ${muted}`}>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who it's for */}
      <section className={`${sec} bg-[#f2f9fd]`}>
        <div className={wrap}>
          <SecHead eyebrowText="Who it's for" title="HMO and flat fire risk assessments in London" sub="The Fire Safety Order applies wherever tenants share a building. These are the two jobs we do most." />
          <div className="grid grid-cols-1 min-[821px]:grid-cols-2 gap-[22px]">
            {types.map((t) => (
              <div key={t.title} className={`bg-white border ${line} rounded-2xl px-[26px] py-7 ${shadowSm} flex flex-col gap-3`}>
                <h3 className={`${J} text-[21px] font-extrabold leading-[1.15] tracking-[-.02em]`}>{t.title}</h3>
                <p className={`${muted} text-[15px]`}>{t.body}</p>
                <ul className="grid gap-2 mb-1.5">
                  {t.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-[14.5px]">
                      <Icon d={<path d="M20 6 9 17l-5-5" />} className="w-[18px] h-[18px] shrink-0 mt-[3px] text-[#6cb400]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a href="#pricing" className={`${t.green ? btnGreen : btnBlue} self-start mt-auto`}>{t.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className={sec} id="pricing">
        <div className={wrap}>
          <SecHead eyebrowText="Fixed pricing" title="Fire Risk Assessment pricing" sub="No call-out charges, no hidden fees. The price you see is the price you pay." />
          <div className="grid grid-cols-1 min-[821px]:grid-cols-2 gap-6">
            <PriceCard title="Residential & HMO Fire Risk Assessment" sub="Flats, HMOs & communal areas · report in 24-48 hrs" rows={FRA_RESIDENTIAL_TABLE} green popularLabel="1–3 Bedrooms" href={BOOK} bookLabel="Book a residential or HMO FRA →" />
            <PriceCard title="Commercial Fire Risk Assessment London" sub="Blocks of flats, offices & larger buildings" rows={FRA_COMMERCIAL_TABLE} href={BOOK_COMMERCIAL} bookLabel="Book a commercial FRA →" />
          </div>
          <p className={`text-center mt-[22px] ${muted} text-sm`}>
            Extras where applicable: <b className="text-brand-charcoal">£{ADDITIONAL_CHARGES.parking}</b> parking (if none free on-site) · <b className="text-brand-charcoal">£{ADDITIONAL_CHARGES.congestionZone}</b> Congestion Charge Zone. Bigger or complex premises? Call <a href={TEL} className="font-bold text-brand-charcoal">{PHONE_DISPLAY}</a> for a bespoke quote.
          </p>
          <div className="text-center mt-[22px]">
            <Link href={BOOK} className={btnGreen}>Book your assessment →</Link>
          </div>
        </div>
      </section>

      {/* Real job photos */}
      <section className={`${sec} bg-white`}>
        <div className={wrap}>
          <SecHead eyebrowText="From a recent London job" title="Real photos, real reports" sub="Not stock images — actual findings from a fire risk assessment in a London block." />
          <div className="grid grid-cols-1 min-[521px]:grid-cols-2 min-[821px]:grid-cols-3 gap-4">
            {gallery.map((g) => (
              <figure key={g.src} className={`relative rounded-[14px] overflow-hidden border ${line} bg-warm-white`}>
                <span className="absolute top-2.5 left-2.5 z-10 bg-brand-charcoal/85 text-white text-[11px] font-bold px-[9px] py-[3px] rounded-md">FRA</span>
                <Image src={g.src} alt={g.alt} width={800} height={600} sizes="(max-width: 520px) 100vw, (max-width: 820px) 50vw, 380px" className="h-[200px] w-full object-cover" />
                <figcaption className="px-4 py-3.5">
                  <b className={`${J} text-[14.5px] block`}>{g.title}</b>
                  <span className={`text-[13px] ${muted}`}>{g.body}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className={sec}>
        <div className={`${wrap} grid grid-cols-1 min-[821px]:grid-cols-2 gap-7 min-[821px]:gap-11 items-center`}>
          <Image
            src="/fire-risk-assessment/fire-risk-assessment-report-sample.png"
            alt="Sample council-ready fire risk assessment report"
            width={1200}
            height={1500}
            sizes="(max-width: 820px) 100vw, 560px"
            className={`rounded-2xl ${shadow} border ${line} w-full h-auto`}
          />
          <div>
            <span className={eyebrow}>What you get</span>
            <h2 className={`${J} text-[30px] font-extrabold leading-[1.15] tracking-[-.02em] mb-1.5`}>Your Fire Risk Assessment Certificate &amp; Report</h2>
            <p className={`${muted} mb-1.5`}>Often called an FRA certificate: a formal, council-ready written report.</p>
            <div className="grid gap-3 mt-2">
              {getList.map((g) => (
                <div key={g.title} className={`flex gap-3 items-start bg-white border ${line} rounded-xl px-4 py-3.5`}>
                  <span className="text-[#6cb400] font-extrabold shrink-0 text-base">✓</span>
                  <div>
                    <b className={`${J} text-[15px]`}>{g.title}</b>
                    <p className={`text-[13.5px] ${muted} mt-0.5`}>{g.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={`${sec} bg-white`} id="how">
        <div className={wrap}>
          <SecHead eyebrowText="Simple & fast" title="How it works" sub="From booking to a compliant report in three straightforward steps." />
          <div className="grid grid-cols-1 min-[821px]:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <div key={s.n} className={`bg-white border ${line} rounded-2xl px-6 py-7 ${shadowSm}`}>
                <div className={`w-[46px] h-[46px] rounded-xl ${J} font-extrabold text-xl flex items-center justify-center mb-4 ${i === 1 ? "bg-action-green text-[#14320a]" : "bg-compliance-blue text-white"}`}>{s.n}</div>
                <h3 className={`${J} text-[17px] font-bold mb-[7px]`}>{s.title}</h3>
                <p className={`text-sm ${muted}`}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After your assessment */}
      <section className={`${sec} bg-white`}>
        <div className={wrap}>
          <SecHead eyebrowText="After your assessment" title="What happens next" sub="The inspection is only half of it — here's the value you actually receive." />
          <div className="grid grid-cols-1 min-[821px]:grid-cols-3 gap-[18px]">
            {after.map((a, i) => (
              <div key={a.title} className={`border ${line} rounded-[14px] p-[22px] bg-warm-white`}>
                <div className="flex items-center gap-[11px] mb-[9px]">
                  <span className={`w-[30px] h-[30px] rounded-lg bg-[#e3f4fc] text-[#0077b3] font-extrabold ${J} flex items-center justify-center text-sm shrink-0`}>{i + 1}</span>
                  <h4 className={`${J} text-[15.5px] font-bold`}>{a.title}</h4>
                </div>
                <p className={`text-[13.5px] ${muted}`}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className={sec}>
        <div className={wrap}>
          <SecHead eyebrowText="Know your obligations" title="The legal framework for landlords" sub="A written FRA is how you demonstrate you've met your duty of care." />
          <div className="grid grid-cols-1 min-[701px]:grid-cols-2 gap-[18px]">
            {legal.map((l) => (
              <div key={l.title} className={`bg-white border ${line} border-l-4 border-l-compliance-blue rounded-xl px-6 py-[22px]`}>
                <h4 className={`${J} text-base font-bold mb-[7px]`}>{l.title}</h4>
                <p className={`text-sm ${muted}`}>{l.body}</p>
                {l.penalty && <span className="inline-block mt-2.5 text-xs font-bold text-[#b42318] bg-[#fdeceb] px-2.5 py-1 rounded-md">{l.penalty}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      {fraReviews.length > 0 && (
        <section className={`${sec} bg-[linear-gradient(135deg,#f2f9fd,#eafce7)]`} id="reviews">
          <div className={wrap}>
            <SecHead eyebrowText="Reviews" title="What London landlords say" sub={`Rated ${rating} by landlords and letting agents across the capital.`} />
            <a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Rated ${rating} on Google. Read our Google reviews`}
              className={`bg-white border ${line} rounded-[18px] ${shadow} max-w-[560px] mx-auto mb-[34px] p-[22px] min-[521px]:px-[30px] min-[521px]:py-[26px] flex items-center gap-3.5 min-[521px]:gap-[26px] flex-wrap justify-center text-center transition-transform hover:-translate-y-0.5`}
            >
              <div className={`${J} font-extrabold text-[42px] min-[521px]:text-[52px] leading-none`}>{rating}</div>
              <div>
                <div className={`font-bold ${J} text-base mb-1`}>
                  <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span> Reviews
                </div>
                <div className={`${gold} text-[22px] tracking-[2px]`}>★★★★★</div>
                <div className={`text-[13px] ${muted} mt-1`}>Verified Google reviews</div>
              </div>
              <span className={`${btnBlue} px-[22px]! py-3! text-sm!`}>Read reviews →</span>
            </a>
            <div className="grid grid-cols-1 min-[701px]:grid-cols-2 gap-5 mt-2">
              {fraReviews.map((r) => (
                <ReviewCard key={r.id} review={r} />
              ))}
            </div>
            <p className="text-center mt-6">
              <a href={GOOGLE_MAPS_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-compliance-blue hover:underline">
                See all our reviews on Google →
              </a>
            </p>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className={`${sec} bg-white`} id="faq">
        <div className={wrap}>
          <SecHead eyebrowText="FAQs" title="Fire Risk Assessment questions" />
          <div className="max-w-[820px] mx-auto grid gap-3">
            {faqs.map((f) => (
              <details key={f.q} className={`group bg-white border ${line} rounded-xl overflow-hidden`}>
                <summary className={`flex justify-between items-center gap-4 px-[22px] py-[18px] font-bold ${J} text-[15.5px] cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
                  {f.q}
                  <span className="text-[22px] text-compliance-blue font-normal shrink-0 group-open:hidden" aria-hidden="true">+</span>
                  <span className="text-[22px] text-compliance-blue font-normal shrink-0 hidden group-open:inline" aria-hidden="true">–</span>
                </summary>
                <div className={`px-[22px] pb-5 text-[14.5px] ${muted}`}>{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${sec} bg-[linear-gradient(135deg,#0093DB,#00567f)] text-white text-center`}>
        <div className={wrap}>
          <h2 className={`${J} text-[clamp(26px,3.6vw,40px)] font-extrabold leading-[1.15] tracking-[-.02em] mb-3.5`}>Ready to book your Fire Risk Assessment?</h2>
          <p className="text-[17px] text-white/90 mb-[26px] max-w-[560px] mx-auto">
            Fixed price from £{entryPrice}. Book online in under 3 minutes — a NEBOSH-qualified assessor confirms your appointment.
          </p>
          <div className="flex gap-3.5 justify-center flex-wrap">
            <Link href={BOOK} className={btnGreen}>Book my FRA, from £{entryPrice}</Link>
            <a href={TEL} className={`${btn} bg-white text-[#0077b3] border-[1.5px] border-white/60`}>Call {PHONE_DISPLAY}</a>
          </div>
          <p className="mt-[18px] text-[13px] text-white/[.72]">No hidden charges · IFSM &amp; NEBOSH qualified assessors · Report emailed within 24-48 hours</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-charcoal text-[#aeb6c1] text-sm">
        <div className="max-w-[1160px] mx-auto px-[22px] pt-12 pb-[26px] grid grid-cols-2 min-[821px]:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[34px]">
          <div>
            <p className={`text-white ${J} font-extrabold text-[17px]`}>My Landlord Certificate</p>
            <p className="text-[#7a8494] mt-3 max-w-[280px] text-[13.5px]">NICEIC &amp; Gas Safe accredited property compliance across London and the M25. Fixed prices, next-day appointments, no hidden fees.</p>
          </div>
          {[
            { h: "Services", links: [["Electrical Safety", "/eicr"], ["Gas Safety", "/gas-safety-certificate"], ["Fire Safety", "/fire-risk-assessment"], ["EPC Certificates", "/epc"]] },
            { h: "Company", links: [["About Us", "/about"], ["Reviews", "/reviews"], ["Letting Agents", "/letting-agents"], ["Contact", "/contact"]] },
          ].map((col) => (
            <div key={col.h}>
              <h5 className={`text-white ${J} text-sm mb-3.5 tracking-[.04em] uppercase`}>{col.h}</h5>
              {col.links.map(([label, href]) => (
                <Link key={href} href={href} className="block py-[5px] hover:text-action-green">{label}</Link>
              ))}
            </div>
          ))}
          <div>
            <h5 className={`text-white ${J} text-sm mb-3.5 tracking-[.04em] uppercase`}>Contact</h5>
            <a href={TEL} className="block py-[5px] hover:text-action-green">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block py-[5px] hover:text-action-green">WhatsApp Us</a>
            <a href={MAILTO} className="block py-[5px] hover:text-action-green break-all">{EMAIL}</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-3 px-[22px] py-[18px] text-center text-[#7a8494] text-[13px]">
          © 2026 My Landlord Certificate Ltd. All rights reserved. · <Link href="/privacy" className="hover:text-white">Privacy</Link> · <Link href="/terms" className="hover:text-white">Terms</Link>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className={`min-[861px]:hidden fixed bottom-0 inset-x-0 z-40 flex gap-2.5 bg-white border-t ${line} pl-3.5 pr-[88px] py-2.5 shadow-[0_-6px_20px_rgba(0,0,0,.08)]`}>
        <a href={TEL} className={`${btnBlue} flex-1 p-[13px]!`}>Call</a>
        <Link href={BOOK} className={`${btnGreen} flex-1 p-[13px]!`}>Book from £{entryPrice}</Link>
      </div>
    </div>
  );
}
