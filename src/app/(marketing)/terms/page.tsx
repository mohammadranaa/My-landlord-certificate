import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { PHONE_DISPLAY, TEL } from "@/lib/constants";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using My Landlord Certificate booking services. Covers booking, pricing, cancellation, certificate delivery, liability and governing law.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/terms" },
  robots: { index: false },
  openGraph: {
    title: "Terms of Service — My Landlord Certificate",
    description:
      "Terms and conditions for using My Landlord Certificate. Covers booking, pricing, cancellation, certificates and liability.",
    url: "https://www.mylandlordcertificate.co.uk/terms",
  },
  twitter: {
    title: "Terms of Service — My Landlord Certificate",
    description:
      "Terms covering booking, fixed pricing, cancellation policy, certificate delivery and governing law.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://www.mylandlordcertificate.co.uk/terms" },
  ],
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default function TermsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className="bg-compliance-blue text-white">
        <Container className="py-12 md:py-14">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
            Legal
          </p>
          <Heading level={1} inverted className="mb-2">
            Terms of Service
          </Heading>
          <p className="text-blue-200 text-sm">Last updated: 14 May 2026</p>
        </Container>
      </section>

      {/* ── Content ── */}
      <div className="py-14 bg-warm-white">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-brand-charcoal/80 leading-relaxed">

            {/* Intro */}
            <section aria-labelledby="t-intro">
              <Heading level={2} id="t-intro" className="mb-4">
                1. About these terms
              </Heading>
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website at
                mylandlordcertificate.co.uk and all services provided by My Landlord
                Certificate (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By placing a booking or using
                our website, you agree to these Terms in full. If you do not agree,
                you must not use our services.
              </p>
              <p className="mt-3">
                These Terms are governed by the law of England and Wales. If you are
                a consumer, nothing in these Terms affects your statutory rights.
              </p>
              <p className="mt-3">
                These Terms should be read alongside our{" "}
                <a href="/privacy" className="text-compliance-blue hover:underline">
                  Privacy Policy
                </a>
                , which explains how we handle your personal data.
              </p>
            </section>

            {/* 2 */}
            <section aria-labelledby="t-services">
              <Heading level={2} id="t-services" className="mb-4">
                2. Our services
              </Heading>
              <p className="mb-3">
                We provide a booking platform that connects landlords, property
                managers and letting agents with accredited engineers and assessors
                for the following property compliance inspections and certificates:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                <li>Electrical Installation Condition Report (EICR)</li>
                <li>Gas Safety Certificate (CP12 — Landlord Gas Safety Record)</li>
                <li>Energy Performance Certificate (EPC)</li>
                <li>Fire Risk Assessment (FRA)</li>
                <li>Portable Appliance Testing (PAT)</li>
                <li>Certificate bundles combining the above services</li>
              </ul>
              <p className="text-sm">
                We act as a booking intermediary and service manager. The inspection
                and certificate are carried out and issued by the accredited engineer
                or assessor we dispatch. All engineers hold the regulatory
                accreditation required for their discipline (NICEIC or NAPIT for
                electrical, Gas Safe Register for gas, accredited DEA for EPC,
                NEBOSH qualified for fire risk assessments).
              </p>
            </section>

            {/* 3 */}
            <section aria-labelledby="t-booking">
              <Heading level={2} id="t-booking" className="mb-4">
                3. Booking
              </Heading>
              <Heading level={3} className="mb-2 text-base">
                3.1 Making a booking
              </Heading>
              <p className="text-sm mb-4">
                A booking is made when you complete the online booking process and
                receive a booking confirmation email from us. You must provide
                accurate information about the property, including the correct
                address, property type and size. Providing inaccurate information
                may result in a different price being applicable or the engineer
                being unable to complete the inspection.
              </p>

              <Heading level={3} className="mb-2 text-base">
                3.2 Booking confirmation
              </Heading>
              <p className="text-sm mb-4">
                A booking confirmation email constitutes acceptance of your order.
                It confirms the service booked, the property address, the
                appointment date and time, the price paid and the engineer&apos;s
                contact details. Please check your confirmation email and contact
                us immediately if any details are incorrect.
              </p>

              <Heading level={3} className="mb-2 text-base">
                3.3 Your obligations at the time of booking
              </Heading>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>You must be the property owner, landlord or an authorised agent acting on their behalf.</li>
                <li>You must have the right to grant access to the property for the purpose of the inspection.</li>
                <li>You must ensure that the property is in a condition that allows the inspection to be carried out safely.</li>
                <li>For gas safety inspections, all gas appliances to be checked must be accessible and operational.</li>
              </ul>
            </section>

            {/* 4 */}
            <section aria-labelledby="t-pricing">
              <Heading level={2} id="t-pricing" className="mb-4">
                4. Pricing and payment
              </Heading>
              <Heading level={3} className="mb-2 text-base">
                4.1 Fixed pricing
              </Heading>
              <p className="text-sm mb-4">
                All prices are displayed on our website and during the booking
                process before payment is taken. Prices are fixed and inclusive of
                VAT. The price displayed at the time of booking is the price you
                will be charged — we will not add to it after the visit.
              </p>

              <Heading level={3} className="mb-2 text-base">
                4.2 Additional charges
              </Heading>
              <p className="text-sm mb-3">
                Two supplementary charges may apply and are shown during the booking
                process:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                <li>
                  <strong className="text-brand-charcoal">Parking:</strong>{" "}
                  £10.00 where the engineer is required to pay for parking at or near
                  the property.
                </li>
                <li>
                  <strong className="text-brand-charcoal">London Congestion Zone:</strong>{" "}
                  £20.00 for properties located within the London Congestion Charge
                  Zone, reflecting the charge incurred by the engineer.
                </li>
              </ul>
              <p className="text-sm">
                No other additional charges will be applied without your prior
                written agreement.
              </p>

              <Heading level={3} className="mb-2 text-base mt-4">
                4.3 Payment
              </Heading>
              <p className="text-sm">
                Payment is taken in full at the time of booking. We accept all major
                credit and debit cards. Payment is processed by a PCI-DSS compliant
                third-party payment processor. A VAT invoice is emailed to you with
                your booking confirmation.
              </p>
            </section>

            {/* 5 */}
            <section aria-labelledby="t-cancel">
              <Heading level={2} id="t-cancel" className="mb-4">
                5. Cancellation and rescheduling
              </Heading>
              <Heading level={3} className="mb-2 text-base">
                5.1 Cancellation or rescheduling by you
              </Heading>
              <ul className="list-disc pl-5 space-y-2 text-sm mb-4">
                <li>
                  <strong className="text-brand-charcoal">More than 24 hours&apos; notice:</strong>{" "}
                  You may cancel or reschedule free of charge by contacting us at
                  least 24 hours before the scheduled appointment time. A full
                  refund will be issued within 5–10 working days to the original
                  payment method.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Less than 24 hours&apos; notice:</strong>{" "}
                  Cancellations or rescheduling requests received fewer than 24 hours
                  before the appointment will incur a rebooking fee of £25. This
                  reflects the cost of the engineer&apos;s committed time. If you cancel
                  entirely with less than 24 hours&apos; notice, a refund of the service
                  fee minus the £25 fee will be issued.
                </li>
                <li>
                  <strong className="text-brand-charcoal">Failed access:</strong>{" "}
                  If the engineer attends the property at the agreed time and is
                  unable to gain access (because the tenant is not present, no
                  keyholder is available or the property is inaccessible), the visit
                  will be treated as a cancellation with less than 24 hours&apos; notice
                  and the same rebooking fee will apply.
                </li>
              </ul>

              <Heading level={3} className="mb-2 text-base">
                5.2 Cancellation or rescheduling by us
              </Heading>
              <p className="text-sm">
                In the unlikely event that we need to cancel or reschedule your
                appointment, we will contact you as soon as possible and offer the
                next available appointment at no additional charge. If you do not
                wish to reschedule, we will issue a full refund.
              </p>
            </section>

            {/* 6 */}
            <section aria-labelledby="t-our-obligations">
              <Heading level={2} id="t-our-obligations" className="mb-4">
                6. Our obligations
              </Heading>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>We will dispatch an engineer who holds the correct accreditation for the service booked.</li>
                <li>We will use reasonable endeavours to ensure the engineer arrives at the agreed appointment time. We are not liable for delays caused by traffic, access issues or other circumstances beyond our control.</li>
                <li>We will issue your certificate by email on within 24 hours of the inspection, provided the inspection is completed without any impediment.</li>
                <li>We will ensure that certificates are issued in a format that is legally compliant and accepted by local authorities, letting agents and mortgage lenders.</li>
                <li>For EPC certificates, we will ensure the certificate is lodged on the national EPC register (epcregister.com) on the day of issue.</li>
                <li>Where an EICR is graded Unsatisfactory due to C1 (Danger present) observations, the engineer will make the installation safe before leaving the property.</li>
              </ul>
            </section>

            {/* 7 */}
            <section aria-labelledby="t-your-obligations">
              <Heading level={2} id="t-your-obligations" className="mb-4">
                7. Your obligations
              </Heading>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>You must provide accurate property details at the time of booking. Pricing is based on property type and size — if the property differs materially from what was described, the engineer may need to issue a revised quote.</li>
                <li>You must ensure that a responsible adult (the tenant, a keyholder or yourself) is available to provide access to the property at the agreed appointment time.</li>
                <li>You must ensure that the property is safe for the engineer to work in. This includes ensuring adequate lighting, accessible meter cupboards and consumer units, and notifying us in advance of any known hazards.</li>
                <li>For gas safety inspections, you must ensure that all gas appliances to be checked are available and that the gas supply is turned on.</li>
                <li>You are responsible for complying with all legal obligations associated with the certificates issued, including forwarding certificates to tenants within the statutory timeframes.</li>
                <li>You must not present a certificate issued under these Terms as applying to a property other than the one inspected.</li>
              </ul>
            </section>

            {/* 8 */}
            <section aria-labelledby="t-certificates">
              <Heading level={2} id="t-certificates" className="mb-4">
                8. Certificates and compliance
              </Heading>
              <p className="text-sm mb-3">
                Certificates issued through our service are the result of an
                independent assessment carried out by the accredited engineer at the
                time of inspection. The findings and outcome of the certificate
                (including any EICR observation codes) reflect the condition of the
                installation or property at the date and time of inspection.
              </p>
              <p className="text-sm mb-3">
                We do not guarantee any particular outcome. An EICR may be graded
                Satisfactory or Unsatisfactory; an EPC may achieve any rating from A
                to G; a Fire Risk Assessment may identify required actions. The
                engineer&apos;s findings are their professional, independent judgement.
              </p>
              <p className="text-sm mb-3">
                Where an EICR is graded Unsatisfactory, you must arrange remedial
                works within 28 days (or sooner if specified in the report) and
                obtain written confirmation from a qualified electrician. You are
                responsible for ensuring ongoing compliance with the Electrical
                Safety Standards in the Private Rented Sector (England) Regulations
                2020 and all other applicable legislation.
              </p>
              <p className="text-sm">
                It is your responsibility as landlord or authorised agent to forward
                certificates to tenants, local authorities and other parties within
                the statutory timeframes required by law.
              </p>
            </section>

            {/* 9 */}
            <section aria-labelledby="t-remedial">
              <Heading level={2} id="t-remedial" className="mb-4">
                9. Remedial works
              </Heading>
              <p className="text-sm mb-3">
                Where the engineer identifies work required to bring the installation
                or appliance up to standard, they may provide a separate quotation
                for remedial works. Any such quotation is a separate contract
                between you and the engineer (or the engineer&apos;s employer). My
                Landlord Certificate is not a party to that contract and accepts no
                liability in relation to any remedial works carried out.
              </p>
              <p className="text-sm">
                You are under no obligation to accept a quotation from the attending
                engineer for remedial works.
              </p>
            </section>

            {/* 10 */}
            <section aria-labelledby="t-liability">
              <Heading level={2} id="t-liability" className="mb-4">
                10. Limitation of liability
              </Heading>
              <Heading level={3} className="mb-2 text-base">
                10.1 General
              </Heading>
              <p className="text-sm mb-4">
                To the fullest extent permitted by law, our total liability to you
                for any claim arising from or related to these Terms or our services
                — whether in contract, tort (including negligence), breach of
                statutory duty or otherwise — is limited to the total amount you paid
                us for the specific service giving rise to the claim.
              </p>

              <Heading level={3} className="mb-2 text-base">
                10.2 Exclusions
              </Heading>
              <p className="text-sm mb-3">We are not liable for:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                <li>Loss of profit, loss of revenue, loss of business or indirect or consequential losses of any kind.</li>
                <li>Any loss arising from your failure to comply with your obligations under these Terms.</li>
                <li>Any loss arising from circumstances beyond our reasonable control, including acts of God, industrial action, severe weather or restrictions imposed by government or regulatory bodies.</li>
                <li>The conduct, acts or omissions of engineers dispatched to carry out inspections (though we will use reasonable endeavours to assist you in resolving any complaint).</li>
              </ul>

              <Heading level={3} className="mb-2 text-base">
                10.3 Nothing excluded
              </Heading>
              <p className="text-sm">
                Nothing in these Terms excludes or limits our liability for death or
                personal injury caused by our negligence, fraud or fraudulent
                misrepresentation, or any other liability that cannot be excluded or
                limited by English law.
              </p>
            </section>

            {/* 11 */}
            <section aria-labelledby="t-complaints">
              <Heading level={2} id="t-complaints" className="mb-4">
                11. Complaints
              </Heading>
              <p className="text-sm mb-3">
                If you are dissatisfied with any aspect of our service, please
                contact us in the first instance:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
                <li>
                  Email:{" "}
                  <a href="mailto:info@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline">
                    info@mylandlordcertificate.co.uk
                  </a>
                </li>
                <li>Phone: <a href={TEL} className="text-compliance-blue hover:underline">{PHONE_DISPLAY}</a></li>
              </ul>
              <p className="text-sm">
                We aim to acknowledge all complaints within two working days and to
                provide a substantive response within ten working days. Where a
                complaint relates to the professional conduct of an engineer, we may
                need to refer the matter to the relevant accreditation body (NICEIC,
                Gas Safe Register, etc.) and will keep you updated on progress.
              </p>
            </section>

            {/* 12 */}
            <section aria-labelledby="t-ip">
              <Heading level={2} id="t-ip" className="mb-4">
                12. Intellectual property
              </Heading>
              <p className="text-sm">
                All content on this website — including text, graphics, logos, images
                and software — is owned by or licensed to My Landlord Certificate
                and is protected by copyright and other intellectual property laws.
                You may not reproduce, distribute or create derivative works from
                any content on this website without our prior written consent.
              </p>
            </section>

            {/* 13 */}
            <section aria-labelledby="t-third-party">
              <Heading level={2} id="t-third-party" className="mb-4">
                13. Third-party links
              </Heading>
              <p className="text-sm">
                Our website may contain links to third-party websites. These links
                are provided for your convenience only. We have no control over the
                content of those sites and accept no responsibility or liability for
                them or for any loss or damage that may arise from your use of them.
              </p>
            </section>

            {/* 14 */}
            <section aria-labelledby="t-law">
              <Heading level={2} id="t-law" className="mb-4">
                14. Governing law and jurisdiction
              </Heading>
              <p className="text-sm">
                These Terms are governed by and construed in accordance with the law
                of England and Wales. Any dispute arising from or in connection with
                these Terms shall be subject to the exclusive jurisdiction of the
                courts of England and Wales, except that if you are a consumer
                resident in Scotland or Northern Ireland, you may also bring
                proceedings in the courts of that jurisdiction.
              </p>
            </section>

            {/* 15 */}
            <section aria-labelledby="t-changes">
              <Heading level={2} id="t-changes" className="mb-4">
                15. Changes to these terms
              </Heading>
              <p className="text-sm">
                We may update these Terms from time to time. The &ldquo;Last updated&rdquo;
                date at the top of this page will show when the Terms were last
                revised. Continued use of our website or services after any change
                constitutes acceptance of the revised Terms. For material changes,
                we will provide reasonable notice via email or a prominent notice on
                our website.
              </p>
            </section>

          </div>
        </Container>
      </div>
    </>
  );
}
