import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { LettingAgentForm } from "@/components/ui/letting-agent-form";
import { cn } from "@/lib/utils";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Letting Agents — Landlord Certificate Partner | My Landlord Certificate",
  description:
    "Compliance certificates for letting agents and property management companies. EICR, Gas Safety, EPC and Fire Risk Assessment. Fixed prices, accredited engineers, certificates within 24 hours for your landlords.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/letting-agents" },
  openGraph: {
    title: "Letting Agents — Landlord Certificate Partner | My Landlord Certificate",
    description:
      "Compliance certificates for letting agents and property management companies. EICR, Gas Safety, EPC and Fire Risk Assessment. Fixed prices, accredited engineers, certificates within 24 hours for your landlords.",
    url: "https://www.mylandlordcertificate.co.uk/letting-agents",
  },
  twitter: {
    title: "Letting Agents — Landlord Certificate Partner",
    description:
      "One provider for every certificate type. Fixed prices. Within 24 hours. Accredited engineers only.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Letting Agents", item: "https://www.mylandlordcertificate.co.uk/letting-agents" },
  ],
};

// ── Benefits data ─────────────────────────────────────────────────────────────

const benefits = [
  {
    title: "One provider. Every certificate.",
    body: "EICR, Gas Safety (CP12), EPC, Fire Risk Assessment and PAT Testing — all booked through one platform, dispatched by one accredited network. No more managing separate suppliers for each certificate type.",
  },
  {
    title: "Accredited engineers — no exceptions.",
    body: "Every engineer in our network holds the correct accreditation: NICEIC approved or NAPIT certified for electrical work, Gas Safe Registered for gas, accredited DEAs for EPC, NEBOSH qualified for fire. Your client's certificate will be accepted by any local authority, mortgage lender or insurance provider.",
  },
  {
    title: "Certificate within 24 hours.",
    body: "Every certificate is emailed on the day of the inspection. You can forward it to your landlord client the same afternoon — no chasing, no delays to tenancy start dates, no awkward calls explaining why it hasn't arrived yet.",
  },
  {
    title: "Fixed prices. No surprises.",
    body: "The price displayed before payment is the price on the invoice. No call-out charges added after the visit, no day-rate adjustments for older properties. Your landlords know what they're paying before the engineer arrives — and so do you.",
  },
  {
    title: "Tenant access works. You don't need to attend.",
    body: "Your tenant or a keyholder can let the engineer in. You don't need to arrange agent attendance for every inspection — which matters when you're managing dozens of properties across multiple boroughs.",
  },
  {
    title: "Next-day appointments across London.",
    body: "We cover all 33 London boroughs. Next-day slots are available subject to engineer availability. For agencies managing portfolios across multiple boroughs, a single booking flow works for every postcode we serve.",
  },
];

const services = [
  { label: "EICR Certificate", price: "from £67.99", href: "/eicr", validity: "Valid 5 years" },
  { label: "Gas Safety Certificate", price: "from £50", href: "/gas-safety-certificate", validity: "Annual" },
  { label: "EPC Certificate", price: "from £89.99", href: "/epc", validity: "Valid 10 years" },
  { label: "Fire Risk Assessment", price: "from £74", href: "/fire-risk-assessment", validity: "Review annually" },
  { label: "PAT Testing", price: "from £59.99", href: "/pat-testing", validity: "Review annually" },
  { label: "Certificate Bundles", price: "from £130", href: "/landlord-certificates-bundle", validity: "Save up to £44.97" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function LettingAgentsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="la-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
              For letting agents &amp; property managers
            </p>
            <Heading level={1} id="la-heading" inverted className="mb-5">
              The compliance partner your landlords expect
            </Heading>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              When a landlord asks you to arrange their EICR or Gas Safety Certificate,
              your reputation goes with it. We give you a partner you can recommend
              confidently: accredited engineers, fixed prices, certificates within 24 hours.
              Every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
              >
                Request agency account
              </a>
              <a
                href="tel:03301330066"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white/10 border border-white/30 text-white hover:bg-white/20",
                )}
              >
                Call 0330 133 0066
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats bar ── */}
      <section aria-label="Key figures" className="bg-brand-charcoal text-white">
        <Container>
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { label: "London boroughs covered", value: "All 33" },
              { label: "Certificate types", value: "5 + bundles" },
              { label: "Appointment availability", value: "Next day" },
              { label: "Certificate delivery", value: "Within 24 hours" },
            ].map(({ label, value }) => (
              <div key={label} className="px-6 py-5 text-center">
                <dt className="text-blue-200 text-xs font-medium uppercase tracking-wider mb-1">{label}</dt>
                <dd className="text-white font-bold text-xl">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── The problem ── */}
      <section aria-labelledby="problem-heading" className="py-16 md:py-20 bg-warm-white">
        <Container className="max-w-3xl">
          <Heading level={2} id="problem-heading" className="mb-6">
            Why compliance certificates matter to your agency — not just your landlords
          </Heading>
          <div className="space-y-5 text-brand-charcoal/80 leading-relaxed">
            <p>
              A delayed Gas Safety Certificate pushes back a tenancy start date. A
              missing EICR puts a landlord in breach of the 2020 Electrical Safety
              Standards — and if you recommended the property as compliant, your
              agency's advice is on record. A certificate issued by an unaccredited
              engineer is worthless: a local authority will not accept it, an insurer
              will not recognise it, and a landlord who relied on your recommendation
              will hold you responsible.
            </p>
            <p>
              The simplest way to manage compliance risk across a portfolio is to use
              one reliable partner for every certificate type — one booking flow, one
              set of fixed prices, one source of certificates within 24 hours that your team
              can forward on immediately. That is what My Landlord Certificate provides.
            </p>
            <p>
              We work directly with letting agencies and property management companies
              across London. Whether your team books on behalf of landlords or you
              direct landlords to book themselves using a dedicated agency code, we
              handle the inspection, the paperwork and the certificate — and it arrives
              within 24 hours, every time.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Benefits ── */}
      <section aria-labelledby="benefits-heading" className="py-16 bg-white">
        <Container>
          <Heading level={2} id="benefits-heading" className="mb-3 text-center">
            What you get when you work with us
          </Heading>
          <p className="text-brand-grey text-center mb-10 max-w-xl mx-auto">
            Built for agencies managing multiple landlords and properties across London.
          </p>
          <dl className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-warm-white p-6">
                <dt className="font-semibold text-brand-charcoal mb-2 flex items-start gap-2">
                  <svg
                    className="w-4 h-4 text-action-green shrink-0 mt-0.5"
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
                <dd className="text-sm text-brand-grey leading-relaxed pl-6">{body}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── Services ── */}
      <section aria-labelledby="services-heading" className="py-16 bg-warm-white">
        <Container>
          <Heading level={2} id="services-heading" className="mb-2 text-center">
            Services for your managed portfolio
          </Heading>
          <p className="text-brand-grey text-center mb-10 max-w-xl mx-auto">
            All certificates are available individually or as bundles. Fixed prices
            apply across every booking — no agency markup required.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ label, price, href, validity }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-white p-5 hover:border-compliance-blue transition-colors group block"
              >
                <p className="font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors mb-1">
                  {label}
                </p>
                <p className="text-compliance-blue font-medium text-sm mb-0.5">{price}</p>
                <p className="text-xs text-brand-grey">{validity}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-brand-grey">
            Bundle pricing saves landlords up to £44.97 per visit — a straightforward
            talking point when discussing compliance costs.{" "}
            <Link href="/pricing" className="text-compliance-blue font-medium hover:underline">
              View full pricing →
            </Link>
          </p>
        </Container>
      </section>

      {/* ── How it works for agents ── */}
      <section aria-labelledby="how-heading" className="py-16 bg-white">
        <Container className="max-w-3xl">
          <Heading level={2} id="how-heading" className="mb-8 text-center">
            How it works for letting agencies
          </Heading>
          <ol className="space-y-6" role="list">
            {[
              {
                step: "1",
                title: "Book on behalf of your landlord — or send them the link",
                body: "Your team can book directly through the website, or you can pass the booking link to your landlord. Either way, all pricing is fixed and transparent before payment. No quotes, no negotiations, no callbacks.",
              },
              {
                step: "2",
                title: "Your tenant provides access",
                body: "The engineer attends at the agreed time. Your tenant lets them in — no agent attendance required, no need to arrange key collection. The engineer carries out the inspection and explains any findings on the day.",
              },
              {
                step: "3",
                title: "Certificate emailed within 24 hours",
                body: "The certificate is emailed to the booking email address on the day of the inspection. If your agency email is used for the booking, you receive it directly and can forward to the landlord immediately — ahead of any new tenancy start date.",
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
        </Container>
      </section>

      {/* ── Testimonial placeholder ── */}
      <section aria-label="Agency testimonial" className="py-12 bg-warm-white">
        <Container className="max-w-2xl">
          <figure className="rounded-2xl border border-border bg-white p-8">
            <div className="flex gap-1 mb-4" role="img" aria-label="5 out of 5 stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-5 h-5 text-[#00B67A]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-brand-charcoal/80 leading-relaxed mb-5">
              &ldquo;We manage 140 properties across South London. Before switching, we were
              juggling four different contractors and certificates were sometimes arriving
              a week after the inspection. With My Landlord Certificate, everything
              arrives within 24 hours and the prices are the same every time. Our landlords
              stopped asking questions about compliance costs because there's nothing
              to question.&rdquo;
            </blockquote>
            <figcaption>
              <p className="font-semibold text-brand-charcoal text-sm">Marcus D.</p>
              <p className="text-xs text-brand-grey">Director, property management company — South London</p>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* ── Lead capture form ── */}
      <section
        id="contact"
        aria-labelledby="form-heading"
        className="py-16 md:py-20 bg-white scroll-mt-16"
      >
        <Container className="max-w-2xl">
          <Heading level={2} id="form-heading" className="mb-2 text-center">
            Set up an agency account
          </Heading>
          <p className="text-brand-grey text-center mb-10">
            Tell us about your portfolio. We'll be in touch within one working day
            to discuss how we can support your agency — including volume pricing for
            larger portfolios.
          </p>
          <div className="rounded-2xl border border-border bg-warm-white p-6 md:p-8">
            <LettingAgentForm />
          </div>
          <p className="mt-6 text-center text-sm text-brand-grey">
            Prefer to speak first?{" "}
            <a href="tel:03301330066" className="text-compliance-blue font-medium hover:underline">
              Call 0330 133 0066
            </a>{" "}
            — we'll discuss your portfolio and answer any questions before you commit
            to anything.
          </p>
        </Container>
      </section>

      {/* ── Services overview ── */}
      <section aria-labelledby="la-services-heading" className="py-14 bg-warm-white">
        <Container>
          <Heading level={2} id="la-services-heading" className="mb-3 text-center">
            Certificates we manage for letting agents
          </Heading>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">
            Fixed prices across all services — the same pricing for every property
            in your portfolio regardless of volume.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "EICR Certificate", href: "/eicr", price: "from £67.99" },
              { label: "Gas Safety Certificate", href: "/gas-safety-certificate", price: "from £50" },
              { label: "EPC Certificate", href: "/epc", price: "from £89.99" },
              { label: "Fire Risk Assessment", href: "/fire-risk-assessment", price: "from £74" },
              { label: "PAT Testing", href: "/pat-testing", price: "from £59.99" },
              { label: "Bundle & Save", href: "/landlord-certificates-bundle", price: "from £130" },
            ].map(({ label, href, price }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-white p-4 hover:border-compliance-blue transition-colors block"
              >
                <p className="font-semibold text-brand-charcoal text-sm mb-1">{label}</p>
                <p className="text-compliance-blue text-sm font-medium">{price}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Final CTA ── */}
      <section
        aria-labelledby="la-cta-heading"
        className="py-16 bg-compliance-blue text-white text-center"
      >
        <Container className="max-w-xl">
          <Heading level={2} id="la-cta-heading" inverted className="mb-3">
            Start with one booking — no commitment required
          </Heading>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Book a single certificate for any property in your portfolio. See how the
            process works. If the engineer, certificate and experience meet your
            standard, we'll talk about the rest of your portfolio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "cta", size: "lg" }))}
            >
              Book a certificate
            </Link>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white/10 border border-white/30 text-white hover:bg-white/20",
              )}
            >
              Request a Portfolio Quote
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
