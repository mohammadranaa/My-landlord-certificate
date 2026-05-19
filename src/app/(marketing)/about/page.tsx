import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { TrustBadges } from "@/components/ui/trust-badges";
import { cn } from "@/lib/utils";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "About Us — My Landlord Certificate",
  description:
    "We help London landlords get EICR, Gas Safety, EPC and Fire Risk Assessment certificates quickly, affordably and without hassle. Fixed prices. Accredited engineers. Same-day certificates.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/about" },
  openGraph: {
    title: "About Us — My Landlord Certificate",
    description:
      "We help London landlords get EICR, Gas Safety, EPC and Fire Risk Assessment certificates quickly, affordably and without hassle. Fixed prices. Accredited engineers. Same-day certificates.",
    url: "https://mylandlordcertificate.co.uk/about",
  },
  twitter: {
    title: "About Us — My Landlord Certificate",
    description:
      "Fixed prices. Accredited engineers. Same-day certificates. Landlord compliance made straightforward.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "My Landlord Certificate",
  url: "https://www.mylandlordcertificate.co.uk",
  telephone: "+443301330066",
  description:
    "UK landlord compliance certificate booking platform. EICR, Gas Safety, EPC, Fire Risk Assessment and PAT Testing across London and the South East. Fixed prices, accredited engineers, same-day certificates.",
  areaServed: "London and South East England",
  knowsAbout: [
    "EICR — Electrical Installation Condition Report",
    "Gas Safety Certificate (CP12)",
    "Energy Performance Certificate (EPC)",
    "Fire Risk Assessment",
    "PAT Testing",
    "Landlord compliance certificates",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://mylandlordcertificate.co.uk/about" },
  ],
};

// ── Accreditations data ───────────────────────────────────────────────────────

const accreditations = [
  {
    name: "NICEIC Approved",
    scope: "Electrical — EICR",
    detail:
      "Every EICR is carried out by a NICEIC Approved Contractor or NAPIT certified electrician. Both bodies require annual inspection of completed work and strict adherence to BS 7671 wiring regulations.",
  },
  {
    name: "Gas Safe Registered",
    scope: "Gas — CP12",
    detail:
      "Our Gas Safety Certificates are issued only by Gas Safe Registered engineers. It is illegal for anyone not on the Gas Safe Register to carry out gas work on a property in Great Britain.",
  },
  {
    name: "Accredited DEA",
    scope: "Energy — EPC",
    detail:
      "Energy Performance Certificates require an accredited Domestic Energy Assessor (DEA). Our assessors are registered with a government-approved accreditation scheme and lodge every EPC on the national register.",
  },
  {
    name: "NEBOSH Qualified",
    scope: "Fire — FRA",
    detail:
      "Fire Risk Assessments are conducted by NEBOSH qualified assessors with specific experience in residential and HMO properties. Assessments are compliant with the Regulatory Reform (Fire Safety) Order 2005.",
  },
];

const values = [
  {
    title: "Fixed prices — always",
    body: "The price you see before you pay is the price on your invoice. No call-out charges added after the visit. No day-rate adjustments for older properties. No surprises.",
  },
  {
    title: "Only accredited engineers",
    body: "We work exclusively with NICEIC approved or NAPIT certified electricians, Gas Safe Registered engineers, accredited DEAs and NEBOSH qualified fire assessors. No unregistered subcontractors, ever.",
  },
  {
    title: "Certificates emailed the same day",
    body: "Every certificate is issued digitally on the day of the inspection — not posted days later, not delayed pending admin review. You receive it by email and can forward it immediately.",
  },
  {
    title: "You don't need to be present",
    body: "Your tenant or any keyholder can provide access. Ideal for landlords managing properties from outside London, or who simply cannot take time off work for every inspection.",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="about-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-16 md:py-20 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            About My Landlord Certificate
          </p>
          <Heading level={1} id="about-heading" inverted className="mb-4 max-w-3xl mx-auto">
            Landlord compliance made straightforward
          </Heading>
          <p className="text-blue-100 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            We help London landlords get their compliance certificates quickly,
            affordably and without the usual friction. Fixed prices, accredited
            engineers, certificates in your inbox the same day.
          </p>
          <TrustBadges variant="dark" className="justify-center" />
        </Container>
      </section>

      {/* ── Mission ── */}
      <section aria-labelledby="mission-heading" className="py-16 md:py-20 bg-warm-white">
        <Container className="max-w-3xl">
          <Heading level={2} id="mission-heading" className="mb-6 text-center">
            Why we exist
          </Heading>
          <div className="space-y-5 text-brand-charcoal/80 leading-relaxed text-base">
            <p>
              Getting a landlord compliance certificate used to mean calling around
              for quotes, waiting days for a callback, negotiating prices that shifted
              when the engineer arrived, and chasing a paper certificate that might
              take a week to arrive. For landlords managing multiple properties — or
              their first one — the process was needlessly opaque.
            </p>
            <p>
              My Landlord Certificate was built to fix that. We believe the
              administrative side of being a landlord should not take more time than
              the property itself. Book online in under three minutes. An accredited
              engineer visits at the agreed slot. Your certificate is in your inbox
              the same day. That is the entire process — and nothing should be added
              to complicate it.
            </p>
            <p>
              We cover every London borough and the surrounding South East counties,
              with fixed prices displayed before you pay. There are no call-out
              charges, no day-rate variations for tricky properties and no hidden
              administration fees. The price shown is the price charged.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Values ── */}
      <section aria-labelledby="values-heading" className="py-16 bg-white">
        <Container>
          <Heading level={2} id="values-heading" className="mb-3 text-center">
            What we stand for
          </Heading>
          <p className="text-brand-grey text-center mb-10 max-w-xl mx-auto">
            Four commitments we make to every landlord who books with us.
          </p>
          <dl className="grid sm:grid-cols-2 gap-6">
            {values.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-warm-white p-6"
              >
                <dt className="font-semibold text-brand-charcoal mb-2 flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-action-green shrink-0"
                    fill="none"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {title}
                </dt>
                <dd className="text-sm text-brand-grey leading-relaxed">{body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Accreditations ── */}
      <section aria-labelledby="accreditations-heading" className="py-16 bg-warm-white">
        <Container>
          <Heading level={2} id="accreditations-heading" className="mb-3 text-center">
            Accreditations and regulatory compliance
          </Heading>
          <p className="text-brand-grey text-center mb-10 max-w-2xl mx-auto">
            Every certificate we issue is signed off by an engineer who holds the
            correct accreditation for that discipline. These are not optional extras —
            they are legal requirements for the certificates to be valid.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {accreditations.map(({ name, scope, detail }) => (
              <div
                key={name}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <p className="font-semibold text-brand-charcoal">{name}</p>
                  <span className="text-xs font-medium text-compliance-blue bg-compliance-blue/10 px-2.5 py-1 rounded-full shrink-0">
                    {scope}
                  </span>
                </div>
                <p className="text-sm text-brand-grey leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-4 max-w-3xl mx-auto text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Important:</strong>{" "}
            Only a Gas Safe Registered engineer can legally carry out gas work or
            issue a Gas Safety Certificate in Great Britain. Only an accredited DEA
            can produce a valid EPC. If you receive a certificate from an engineer
            who cannot demonstrate the relevant accreditation, that certificate will
            not be accepted by local authorities, letting agents or mortgage lenders.
          </div>
        </Container>
      </section>

      {/* ── How we work ── */}
      <section aria-labelledby="how-heading" className="py-16 bg-white">
        <Container className="max-w-3xl">
          <Heading level={2} id="how-heading" className="mb-6 text-center">
            How the service works
          </Heading>
          <ol className="space-y-6" role="list">
            {[
              {
                step: "1",
                title: "Book online — under 3 minutes",
                body: "Choose your service, enter your property details, pick an appointment slot and pay securely. You receive a booking confirmation immediately. Morning, afternoon and evening slots are available.",
              },
              {
                step: "2",
                title: "An accredited engineer visits",
                body: "Your engineer arrives at the agreed time. You or your tenant can provide access — you do not need to be present. The engineer carries out the full inspection and explains any findings clearly on the day.",
              },
              {
                step: "3",
                title: "Certificate emailed the same day",
                body: "Your certificate is issued digitally and emailed to you on the day of the inspection. It is fully compliant and accepted by all local authorities, letting agents and mortgage lenders. EPC certificates are lodged on the national register automatically.",
              },
            ].map(({ step, title, body }) => (
              <li key={step} className="flex gap-5">
                <div className="w-9 h-9 rounded-full bg-compliance-blue text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {step}
                </div>
                <div>
                  <p className="font-semibold text-brand-charcoal mb-1">{title}</p>
                  <p className="text-sm text-brand-grey leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Link
              href="/#how-it-works"
              className="text-sm text-compliance-blue font-medium hover:underline"
            >
              Full how it works breakdown →
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Team ── */}
      <section aria-labelledby="team-heading" className="py-16 bg-warm-white">
        <Container className="max-w-3xl">
          <Heading level={2} id="team-heading" className="mb-6 text-center">
            The people behind the service
          </Heading>
          <div className="space-y-5 text-brand-charcoal/80 leading-relaxed text-base">
            <p>
              My Landlord Certificate is run by a small operations team based in
              London. We are not a directory, a lead generation site or a marketplace
              — we book, dispatch and quality-check every job ourselves, using a
              vetted network of accredited engineers who have met our standards for
              qualifications, punctuality and communication.
            </p>
            <p>
              Every engineer in our network holds the relevant accreditation for their
              discipline and has been assessed independently before they carry their
              first job for us. We check Gas Safe Register numbers, NICEIC or NAPIT
              membership and DEA scheme registration before each engineer is added to
              the network, and we remove anyone who fails our quality standards.
            </p>
            <p>
              Our customer service team is available by phone on{" "}
              <a
                href="tel:03301330066"
                className="text-compliance-blue font-medium hover:underline"
              >
                0330 133 0066
              </a>{" "}
              if you have questions about your booking, want to discuss a specific
              property or need a certificate explained. We aim to answer all calls
              within three rings during business hours.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section
        aria-labelledby="about-cta-heading"
        className="py-16 bg-compliance-blue text-white text-center"
      >
        <Container className="max-w-xl">
          <Heading level={2} id="about-cta-heading" inverted className="mb-3">
            Ready to book your certificate?
          </Heading>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Fixed prices. Next-day appointments across London and the South East.
            Certificate emailed the same day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book now
            </Link>
            <Link
              href="/pricing"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              See all prices
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
