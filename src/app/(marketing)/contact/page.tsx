import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/ui/contact-form";
import { Heading } from "@/components/ui/heading";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Contact Us — My Landlord Certificate",
  description:
    "Get in touch with the My Landlord Certificate team. Call, email, WhatsApp or use our contact form. We respond to all enquiries within one working day.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/contact" },
  openGraph: {
    title: "Contact Us — My Landlord Certificate",
    description:
      "Get in touch with the My Landlord Certificate team. Call, email, WhatsApp or use our contact form. We respond to all enquiries within one working day.",
    url: "https://mylandlordcertificate.co.uk/contact",
  },
  twitter: {
    title: "Contact Us — My Landlord Certificate",
    description:
      "Call, email, WhatsApp or use our contact form. Mon–Fri 8am–7pm, Sat 9am–5pm.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "My Landlord Certificate",
  url: "https://mylandlordcertificate.co.uk",
  telephone: "+442000000000",
  email: "info@mylandlordcertificate.co.uk",
  areaServed: "London and South East England",
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
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://mylandlordcertificate.co.uk/contact" },
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────────

const hours = [
  { day: "Monday – Friday", time: "8:00am – 7:00pm" },
  { day: "Saturday",        time: "9:00am – 5:00pm" },
  { day: "Sunday",          time: "Closed" },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section
        aria-labelledby="contact-heading"
        className="bg-compliance-blue text-white"
      >
        <Container className="py-14 md:py-16 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">
            Get in touch
          </p>
          <Heading level={1} id="contact-heading" inverted className="mb-3 max-w-xl mx-auto">
            We&apos;re here to help
          </Heading>
          <p className="text-blue-100 text-lg leading-relaxed max-w-md mx-auto">
            Questions about a booking, a certificate or our services — call, email
            or use the form below. We respond to all enquiries within one working day.
          </p>
        </Container>
      </section>

      {/* ── Main content: form + sidebar ── */}
      <section aria-label="Contact form and details" className="py-14 md:py-20 bg-warm-white">
        <Container>
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-14 items-start">

            {/* ── Form ── */}
            <div className="lg:col-span-2">
              <Heading level={2} className="mb-6">
                Send us a message
              </Heading>
              <div className="rounded-2xl border border-border bg-white p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            {/* ── Sidebar ── */}
            <aside aria-label="Contact details">
              <Heading level={2} className="mb-6">
                Other ways to reach us
              </Heading>

              <div className="space-y-4">
                {/* Phone */}
                <div className="rounded-2xl border border-border bg-white p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-compliance-blue/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-compliance-blue" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M2 3a1 1 0 011-1h2.5a1 1 0 011 1v1.586a1 1 0 01-.293.707l-1 1a8.001 8.001 0 004.5 4.5l1-1a1 1 0 01.707-.293H14a1 1 0 011 1V13a1 1 0 01-1 1h-1C6.268 14 2 9.732 2 4.5V3z"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-grey uppercase tracking-wider mb-0.5">Phone</p>
                      <a
                        href="tel:02000000000"
                        className="font-semibold text-brand-charcoal hover:text-compliance-blue transition-colors text-sm"
                      >
                        020 XXXX XXXX
                      </a>
                      <p className="text-xs text-brand-grey mt-0.5">Mon–Fri 8am–7pm · Sat 9am–5pm</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="rounded-2xl border border-border bg-white p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-compliance-blue/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-compliance-blue" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path
                          d="M2 3h12a1 1 0 011 1v8a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1z"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 4l7 5 7-5"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-grey uppercase tracking-wider mb-0.5">Email</p>
                      <a
                        href="mailto:info@mylandlordcertificate.co.uk"
                        className="font-semibold text-brand-charcoal hover:text-compliance-blue transition-colors text-sm break-all"
                      >
                        info@mylandlordcertificate.co.uk
                      </a>
                      <p className="text-xs text-brand-grey mt-0.5">Reply within one working day</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="rounded-2xl border border-border bg-white p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M8 0C3.582 0 0 3.582 0 8c0 1.41.37 2.73 1.016 3.877L0 16l4.242-1.004A7.954 7.954 0 008 16c4.418 0 8-3.582 8-8s-3.582-8-8-8zm3.93 11.07c-.163.46-.948.88-1.302.93-.353.05-.814.07-1.312-.083-.303-.092-.692-.215-1.19-.423-2.09-.9-3.452-2.993-3.554-3.132-.103-.138-.836-1.113-.836-2.123 0-1.01.526-1.507.713-1.714.187-.207.408-.259.544-.259l.39.007c.126.006.294-.048.46.35.17.41.576 1.413.626 1.516.05.102.083.222.016.358-.067.136-.1.22-.2.339-.1.12-.21.267-.3.358-.1.1-.204.21-.088.411.117.2.518.856 1.112 1.386.764.683 1.408.894 1.608.994.2.1.317.083.433-.05.117-.133.5-.583.633-.783.133-.2.267-.167.45-.1.183.067 1.164.549 1.364.649.2.1.333.15.383.233.05.083.05.483-.113.943z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-grey uppercase tracking-wider mb-0.5">WhatsApp</p>
                      <a
                        href="https://wa.me/447000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-brand-charcoal hover:text-[#25D366] transition-colors text-sm"
                      >
                        Message us on WhatsApp
                      </a>
                      <p className="text-xs text-brand-grey mt-0.5">Quick questions and booking help</p>
                    </div>
                  </div>
                </div>

                {/* Business hours */}
                <div className="rounded-2xl border border-border bg-white p-5">
                  <p className="text-xs font-semibold text-brand-grey uppercase tracking-wider mb-3">Business hours</p>
                  <dl className="space-y-2">
                    {hours.map(({ day, time }) => (
                      <div key={day} className="flex justify-between gap-4 text-sm">
                        <dt className="text-brand-charcoal/70">{day}</dt>
                        <dd className={time === "Closed" ? "text-brand-grey" : "font-medium text-brand-charcoal"}>
                          {time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs text-brand-grey">
                    For out-of-hours enquiries, use the form or WhatsApp and we&apos;ll
                    respond first thing the next working day.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ── Service area map ── */}
      <section aria-labelledby="map-heading" className="bg-white pb-16">
        <Container>
          <Heading level={2} id="map-heading" className="mb-2 text-center">
            Our service area
          </Heading>
          <p className="text-brand-grey text-center mb-8 max-w-xl mx-auto">
            We cover all 32 London boroughs and the surrounding South East counties.
            Next-day appointments available across the entire area.
          </p>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-video max-h-[480px]">
            <iframe
              title="My Landlord Certificate service area — Greater London"
              src="https://maps.google.com/maps?q=Greater+London,+UK&z=10&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map of Greater London showing our service area"
            />
          </div>
          <p className="mt-4 text-center text-sm text-brand-grey">
            Not sure if we cover your postcode?{" "}
            <a href="tel:02000000000" className="text-compliance-blue font-medium hover:underline">
              Call 020 XXXX XXXX
            </a>{" "}
            and we&apos;ll confirm availability.
          </p>
        </Container>
      </section>
    </>
  );
}
