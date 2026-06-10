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
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/contact" },
  openGraph: {
    title: "Contact Us — My Landlord Certificate",
    description:
      "Get in touch with the My Landlord Certificate team. Call, email, WhatsApp or use our contact form. We respond to all enquiries within one working day.",
    url: "https://www.mylandlordcertificate.co.uk/contact",
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
  url: "https://www.mylandlordcertificate.co.uk",
  email: "info@mylandlordcertificate.co.uk",
  areaServed: "London and the M25 area",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.mylandlordcertificate.co.uk/contact" },
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
                        href="mailto:info@mylandlordcertificate.co.uk"
                        className="font-semibold text-brand-charcoal hover:text-compliance-blue transition-colors text-sm"
                      >
                       
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

                {/* Google Business */}
                <div className="rounded-2xl border border-border bg-white p-5">
                  <p className="text-xs font-semibold text-brand-grey uppercase tracking-wider mb-3">Google</p>
                  <div className="space-y-2">
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-brand-charcoal hover:text-compliance-blue transition-colors"
                      aria-label="Find us on Google (link to be added)"
                    >
                      {/* Google "G" icon */}
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Find us on Google
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-brand-charcoal hover:text-compliance-blue transition-colors"
                      aria-label="Leave a review on Google (link to be added)"
                    >
                      <svg className="w-4 h-4 text-brand-amber shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      Leave us a review on Google
                    </a>
                  </div>
                  <p className="mt-3 text-xs text-brand-grey">Google Business Profile link coming soon.</p>
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
            We cover all 33 London boroughs and the surrounding M25 corridor counties.
            Next-day appointments available across the entire area.
          </p>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="My Landlord Certificate service area — Greater London and the M25 area"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158857.71754584453!2d-0.24168154989423!3d51.52877184853843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map of Greater London showing My Landlord Certificate service area"
            />
          </div>
          <p className="mt-4 text-center text-sm text-brand-grey">
            Not sure if we cover your postcode?{" "}
            <a href="mailto:info@mylandlordcertificate.co.uk" className="text-compliance-blue font-medium hover:underline">
              Email us
            </a>{" "}
            and we&apos;ll confirm availability.
          </p>
        </Container>
      </section>
    </>
  );
}
