import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How My Landlord Certificate collects, uses and protects your personal data. UK GDPR compliant privacy policy.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/privacy" },
  robots: { index: false },
  openGraph: {
    title: "Privacy Policy — My Landlord Certificate",
    description:
      "How My Landlord Certificate collects, uses and protects your personal data. UK GDPR compliant.",
    url: "https://www.mylandlordcertificate.co.uk/privacy",
  },
  twitter: {
    title: "Privacy Policy — My Landlord Certificate",
    description: "UK GDPR compliant privacy policy for My Landlord Certificate.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.mylandlordcertificate.co.uk/privacy" },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className="bg-hero-blue text-white">
        <Container className="py-12 md:py-14">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <Heading level={1} inverted className="mb-2">
            Privacy Policy
          </Heading>
          <p className="text-blue-200 text-sm">Last updated: 14 May 2026</p>
        </Container>
      </section>

      {/* ── Content ── */}
      <div className="py-14 bg-warm-white">
        <Container className="max-w-3xl">
          <div className="prose-container space-y-10 text-brand-charcoal/80 leading-relaxed">

            {/* 1 */}
            <section aria-labelledby="p-intro">
              <Heading level={2} id="p-intro" className="mb-4">
                1. Who we are
              </Heading>
              <p>
                My Landlord Certificate (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is the data
                controller responsible for the personal data collected through this
                website and our booking service. We are registered with the
                Information Commissioner&apos;s Office (ICO) in the United Kingdom.
              </p>
              <p className="mt-3">
                <strong className="text-brand-charcoal">Contact:</strong>{" "}
                <a href="mailto:privacy@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline">
                  privacy@mylandlordcertificate.co.uk
                </a>
              </p>
              <p className="mt-1">
                <strong className="text-brand-charcoal">Website:</strong>{" "}
                mylandlordcertificate.co.uk
              </p>
              <p className="mt-3 text-sm">
                This policy applies to personal data processed in connection with our
                website, booking platform, email communications and service delivery.
                It should be read alongside our{" "}
                <a href="/terms" className="text-compliance-blue hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </section>

            {/* 2 */}
            <section aria-labelledby="p-collect">
              <Heading level={2} id="p-collect" className="mb-4">
                2. What personal data we collect
              </Heading>
              <p className="mb-3">
                We collect personal data in the following categories depending on
                how you interact with us:
              </p>

              <Heading level={3} className="mb-2 text-base">
                2.1 Booking and account data
              </Heading>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                <li>Full name</li>
                <li>Email address</li>
                <li>Telephone number</li>
                <li>Property address (the address where the inspection takes place)</li>
                <li>Property type and size (used to determine pricing)</li>
                <li>Preferred appointment date and time</li>
                <li>Booking reference and payment confirmation</li>
              </ul>

              <Heading level={3} className="mb-2 text-base">
                2.2 Payment data
              </Heading>
              <p className="text-sm mb-4">
                Payment card details are processed directly by our third-party
                payment processor. We do not store full card numbers, CVV codes or
                bank account details on our systems. We receive only a payment
                confirmation token and the last four digits of the card used.
              </p>

              <Heading level={3} className="mb-2 text-base">
                2.3 Communications data
              </Heading>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                <li>Messages sent via our contact form or email</li>
                <li>Records of telephone calls (where recorded for training purposes)</li>
                <li>WhatsApp messages sent to our business number</li>
              </ul>

              <Heading level={3} className="mb-2 text-base">
                2.4 Technical and usage data
              </Heading>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website</li>
                <li>Cookie identifiers (see Section 8)</li>
              </ul>
            </section>

            {/* 3 */}
            <section aria-labelledby="p-basis">
              <Heading level={2} id="p-basis" className="mb-4">
                3. Lawful basis for processing
              </Heading>
              <p className="mb-3">
                Under the UK General Data Protection Regulation (UK GDPR), we rely
                on the following lawful bases:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-hero-blue text-white">
                      <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">Lawful basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Fulfilling a booked service (inspection, certificate delivery)", "Performance of a contract (Art. 6(1)(b))"],
                      ["Processing payment", "Performance of a contract (Art. 6(1)(b))"],
                      ["Sending booking confirmations and appointment reminders", "Performance of a contract (Art. 6(1)(b))"],
                      ["Maintaining financial and tax records", "Legal obligation (Art. 6(1)(c))"],
                      ["Preventing fraud and ensuring website security", "Legitimate interests (Art. 6(1)(f))"],
                      ["Improving our website and service quality", "Legitimate interests (Art. 6(1)(f))"],
                      ["Sending marketing emails about our services", "Consent (Art. 6(1)(a)) — you may opt out at any time"],
                    ].map(([purpose, basis], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                        <td className="px-4 py-3 align-top">{purpose}</td>
                        <td className="px-4 py-3 align-top text-brand-charcoal font-medium">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4 */}
            <section aria-labelledby="p-use">
              <Heading level={2} id="p-use" className="mb-4">
                4. How we use your personal data
              </Heading>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>To process and manage your booking and dispatch an accredited engineer to your property.</li>
                <li>To deliver your certificate by email on the day of the inspection.</li>
                <li>To send booking confirmations, appointment reminders and post-inspection follow-up emails.</li>
                <li>To respond to enquiries submitted via our contact form, email, phone or WhatsApp.</li>
                <li>To process and reconcile payments and issue VAT invoices.</li>
                <li>To maintain records required by law, including financial and tax records.</li>
                <li>To detect and prevent fraud, unauthorised access and other illegal activity.</li>
                <li>To analyse website usage and improve our service (using aggregated, anonymised data where possible).</li>
                <li>To send you marketing communications about our services, if you have opted in.</li>
              </ul>
              <p className="mt-4 text-sm">
                We will not use your personal data for purposes incompatible with
                those listed above without giving you prior notice and, where
                required, obtaining your consent.
              </p>
            </section>

            {/* 5 */}
            <section aria-labelledby="p-share">
              <Heading level={2} id="p-share" className="mb-4">
                5. Who we share your data with
              </Heading>
              <p className="mb-3">
                We share personal data only where necessary to deliver the service
                or comply with legal obligations. We do not sell your personal data
                to third parties.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-brand-charcoal">Accredited engineers:</strong>{" "}
                  We share your name, property address and appointment details with
                  the engineer dispatched to carry out the inspection. Engineers are
                  bound by confidentiality obligations and use your data only to
                  perform the service.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Payment processor:</strong>{" "}
                  Your payment details are processed by a PCI-DSS compliant payment
                  processor. We share only what is necessary to complete the
                  transaction.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Email service provider:</strong>{" "}
                  We use a third-party email platform to send booking confirmations,
                  certificates and communications. Your email address and name are
                  shared for this purpose.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Analytics providers:</strong>{" "}
                  We may use third-party analytics tools to understand website usage.
                  Where possible, data is anonymised before transmission.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Legal and regulatory authorities:</strong>{" "}
                  We will disclose personal data to the police, courts, the ICO or
                  other authorities where we are legally required or permitted to do
                  so.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section aria-labelledby="p-transfer">
              <Heading level={2} id="p-transfer" className="mb-4">
                6. International transfers
              </Heading>
              <p>
                We aim to process and store personal data within the United Kingdom
                or the European Economic Area. Where any third-party service
                provider processes data outside these territories, we ensure
                appropriate safeguards are in place — such as Standard Contractual
                Clauses (SCCs) approved by the ICO or an adequacy decision — before
                any transfer takes place.
              </p>
            </section>

            {/* 7 */}
            <section aria-labelledby="p-retention">
              <Heading level={2} id="p-retention" className="mb-4">
                7. How long we keep your data
              </Heading>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-hero-blue text-white">
                      <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Data category</th>
                      <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">Retention period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Booking records and invoices", "6 years from the date of service (HMRC requirement)"],
                      ["Certificates issued", "6 years from date of issue"],
                      ["Communications (email, contact form)", "2 years from last contact"],
                      ["Marketing consent records", "Until consent is withdrawn, then 1 year"],
                      ["Website analytics data", "26 months (aggregated)"],
                      ["Cookies", "See Section 8"],
                    ].map(([category, period], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                        <td className="px-4 py-3 align-top">{category}</td>
                        <td className="px-4 py-3 align-top">{period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm">
                After the applicable retention period, personal data is securely
                deleted or anonymised so that it can no longer be attributed to you.
              </p>
            </section>

            {/* 8 */}
            <section aria-labelledby="p-cookies">
              <Heading level={2} id="p-cookies" className="mb-4">
                8. Cookies
              </Heading>
              <p className="mb-3">
                We use cookies and similar tracking technologies on our website.
                Cookies are small text files stored on your device.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-hero-blue text-white">
                      <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Type</th>
                      <th className="text-left px-4 py-3 font-semibold">Purpose</th>
                      <th className="text-left px-4 py-3 rounded-tr-xl font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      ["Strictly necessary", "Session management, security, booking flow", "Session"],
                      ["Functional", "Remembering preferences (e.g. property type)", "1 year"],
                      ["Analytics", "Understanding how visitors use the site (aggregated)", "26 months"],
                      ["Marketing", "Measuring ad performance (only with consent)", "90 days"],
                    ].map(([type, purpose, duration], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                        <td className="px-4 py-3 align-top font-medium text-brand-charcoal">{type}</td>
                        <td className="px-4 py-3 align-top">{purpose}</td>
                        <td className="px-4 py-3 align-top">{duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm">
                You can control cookies through your browser settings. Disabling
                strictly necessary cookies may affect the functionality of the
                booking system.
              </p>
            </section>

            {/* 9 */}
            <section aria-labelledby="p-rights">
              <Heading level={2} id="p-rights" className="mb-4">
                9. Your rights under UK GDPR
              </Heading>
              <p className="mb-3">
                You have the following rights in relation to the personal data we
                hold about you:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>
                  <strong className="text-brand-charcoal">Right of access:</strong>{" "}
                  You can request a copy of the personal data we hold about you
                  (a Subject Access Request).
                </li>
                <li>
                  <strong className="text-brand-charcoal">Right to rectification:</strong>{" "}
                  You can ask us to correct inaccurate or incomplete personal data.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Right to erasure:</strong>{" "}
                  You can ask us to delete your personal data where there is no
                  compelling reason for us to continue processing it, subject to our
                  legal obligations (e.g. financial record-keeping).
                </li>
                <li>
                  <strong className="text-brand-charcoal">Right to restrict processing:</strong>{" "}
                  You can ask us to limit how we use your data in certain
                  circumstances.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Right to data portability:</strong>{" "}
                  You can ask us to provide your data in a structured,
                  machine-readable format where processing is based on consent or
                  contract.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Right to object:</strong>{" "}
                  You can object to processing based on legitimate interests or for
                  direct marketing purposes. We will stop processing unless we can
                  demonstrate compelling legitimate grounds.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Rights related to automated decisions:</strong>{" "}
                  We do not make decisions about you solely by automated means that
                  produce legal or similarly significant effects.
                </li>
              </ul>
              <p className="mt-4 text-sm">
                To exercise any of these rights, email{" "}
                <a href="mailto:privacy@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline">
                  privacy@mylandlordcertificate.co.uk
                </a>
                . We will respond within one month. We may need to verify your
                identity before processing the request.
              </p>
            </section>

            {/* 10 */}
            <section aria-labelledby="p-security">
              <Heading level={2} id="p-security" className="mb-4">
                10. Security
              </Heading>
              <p>
                We implement appropriate technical and organisational measures to
                protect your personal data against unauthorised access, loss,
                destruction or alteration. These include encryption of data in
                transit (TLS/HTTPS), access controls limiting data access to
                authorised personnel, and regular security reviews.
              </p>
              <p className="mt-3">
                In the event of a personal data breach that is likely to result in a
                risk to your rights and freedoms, we will notify the ICO within 72
                hours and, where required, notify you directly without undue delay.
              </p>
            </section>

            {/* 11 */}
            <section aria-labelledby="p-complaints">
              <Heading level={2} id="p-complaints" className="mb-4">
                11. Complaints
              </Heading>
              <p>
                If you are unhappy with how we handle your personal data, please
                contact us first at{" "}
                <a href="mailto:privacy@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline">
                  privacy@mylandlordcertificate.co.uk
                </a>{" "}
                so we can try to resolve the matter. You also have the right to
                lodge a complaint with the Information Commissioner&apos;s Office (ICO):
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm mt-3">
                <li>Website: <span className="text-brand-charcoal">ico.org.uk</span></li>
                <li>Helpline: 0303 123 1113</li>
                <li>Post: ICO, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</li>
              </ul>
            </section>

            {/* 12 */}
            <section aria-labelledby="p-changes">
              <Heading level={2} id="p-changes" className="mb-4">
                12. Changes to this policy
              </Heading>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices, technology or legal requirements. The
                &ldquo;Last updated&rdquo; date at the top of this page will always show when
                the policy was last revised. Where changes are material, we will
                notify you by email or by a prominent notice on our website.
              </p>
            </section>

          </div>
        </Container>
      </div>
    </>
  );
}
