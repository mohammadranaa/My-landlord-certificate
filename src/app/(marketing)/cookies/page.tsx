import type { Metadata } from "next";
import { JsonLd } from "@/components/shared/json-ld";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Cookie Policy | My Landlord Certificate",
  description:
    "Cookie policy for mylandlordcertificate.co.uk. Learn how we use cookies and how to manage your preferences.",
  alternates: { canonical: "https://www.mylandlordcertificate.co.uk/cookies" },
  robots: { index: false },
  openGraph: {
    title: "Cookie Policy | My Landlord Certificate",
    description:
      "Cookie policy for mylandlordcertificate.co.uk. Learn how we use cookies and how to manage your preferences.",
    url: "https://www.mylandlordcertificate.co.uk/cookies",
  },
  twitter: {
    title: "Cookie Policy | My Landlord Certificate",
    description: "Cookie policy for My Landlord Certificate.",
  },
};

// ── Schema ────────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mylandlordcertificate.co.uk" },
    { "@type": "ListItem", position: 2, name: "Cookie Policy", item: "https://www.mylandlordcertificate.co.uk/cookies" },
  ],
};

// ── Data ──────────────────────────────────────────────────────────────────────

const cookieRows: [string, string, string, string][] = [
  [
    "mlc_cookie_consent",
    "Essential",
    "Stores your cookie consent preference so we do not show the consent banner on every page visit.",
    "12 months",
  ],
  [
    "_ga",
    "Analytics (GA4)",
    "Google Analytics — used to distinguish unique users and track how visitors use our website. Only set after you accept analytics cookies.",
    "2 years",
  ],
  [
    "_ga_[ID]",
    "Analytics (GA4)",
    "Google Analytics — used to persist session state. Only set after you accept analytics cookies.",
    "2 years",
  ],
  [
    "_gid",
    "Analytics (GA4)",
    "Google Analytics — used to distinguish users. Only set after you accept analytics cookies.",
    "24 hours",
  ],
  [
    "_clck",
    "Analytics (Microsoft Clarity)",
    "Microsoft Clarity — persists a unique visitor identifier across visits to power session recordings and heatmaps. Only set after you accept analytics cookies.",
    "1 year",
  ],
  [
    "_clsk",
    "Analytics (Microsoft Clarity)",
    "Microsoft Clarity — groups multiple page views from one visit into a single session. Only set after you accept analytics cookies.",
    "1 day",
  ],
  [
    "_fbp",
    "Advertising (Meta Pixel)",
    "Meta (Facebook) Pixel — used to measure the performance of our Facebook and Instagram ads and to build advertising audiences. Only set after you accept non-essential cookies.",
    "90 days",
  ],
  [
    "__stripe_mid",
    "Payment processing",
    "Set by Stripe to prevent fraud and process payments securely. Only set when you proceed to the payment step of the booking form.",
    "1 year",
  ],
  [
    "__stripe_sid",
    "Payment processing",
    "Set by Stripe for session management during the payment process.",
    "30 minutes",
  ],
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function CookiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* ── Hero ── */}
      <section className="bg-compliance-blue text-white">
        <Container className="py-12 md:py-14">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
            Legal · Transparency
          </p>
          <Heading level={1} inverted className="mb-2">
            Cookie Policy
          </Heading>
          <p className="text-blue-200 text-sm">Last updated: July 2026</p>
        </Container>
      </section>

      {/* ── Content ── */}
      <div className="py-14 bg-warm-white">
        <Container className="max-w-3xl">
          <div className="prose-container space-y-10 text-brand-charcoal/80 leading-relaxed">

            {/* 1 */}
            <section aria-labelledby="c-what">
              <Heading level={2} id="c-what" className="mb-4">
                1. What are cookies?
              </Heading>
              <p>
                Cookies are small text files that are placed on your device when you
                visit a website. They are widely used to make websites work, to work
                more efficiently, and to provide information to the website owner.
              </p>
              <p className="mt-3">
                Cookies do not contain personally identifiable information and cannot
                be used to run programs or deliver viruses to your device.
              </p>
            </section>

            {/* 2 */}
            <section aria-labelledby="c-use">
              <Heading level={2} id="c-use" className="mb-4">
                2. How we use cookies
              </Heading>
              <p className="mb-3">
                My Landlord Certificate (mylandlordcertificate.co.uk) uses cookies
                for the following purposes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-compliance-blue text-white">
                      <th scope="col" className="text-left px-4 py-3 rounded-tl-xl font-semibold">Cookie name</th>
                      <th scope="col" className="text-left px-4 py-3 font-semibold">Type</th>
                      <th scope="col" className="text-left px-4 py-3 font-semibold">Purpose</th>
                      <th scope="col" className="text-left px-4 py-3 rounded-tr-xl font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {cookieRows.map(([name, type, purpose, duration], i) => (
                      <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-warm-white"}>
                        <td className="px-4 py-3 align-top font-medium text-brand-charcoal whitespace-nowrap">{name}</td>
                        <td className="px-4 py-3 align-top whitespace-nowrap">{type}</td>
                        <td className="px-4 py-3 align-top">{purpose}</td>
                        <td className="px-4 py-3 align-top whitespace-nowrap">{duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm">
                A small number identifier (the &ldquo;[ID]&rdquo; in <code>_ga_[ID]</code>) is
                unique to our Google Analytics property. Meta also sets a related
                cookie, <code>_fbc</code>, when you arrive via a Facebook or Instagram
                ad click — it is only set alongside <code>_fbp</code>, under the same
                consent condition.
              </p>
            </section>

            {/* 3 */}
            <section aria-labelledby="c-types">
              <Heading level={2} id="c-types" className="mb-4">
                3. Types of cookies we use
              </Heading>

              <Heading level={3} className="mb-2 text-base">
                Essential cookies
              </Heading>
              <p className="text-sm mb-4">
                These cookies are necessary for the website to function and cannot
                be switched off. They are usually set in response to actions you
                take, such as setting your privacy preferences or filling in forms.
                Without these cookies, services you have asked for cannot be
                provided.
              </p>

              <Heading level={3} className="mb-2 text-base">
                Analytics cookies
              </Heading>
              <p className="text-sm mb-3">
                We use Google Analytics 4 (GA4) and Microsoft Clarity to understand
                how visitors interact with our website. This helps us improve the
                user experience and our services. Analytics cookies are only set
                after you have given your consent via our cookie banner.
              </p>
              <p className="text-sm mb-4">
                The information collected includes pages visited, time spent on
                pages, how you arrived at our website, and (via Microsoft Clarity)
                anonymised session recordings and click heatmaps. This data is
                aggregated and, where possible, anonymised — we do not use it to
                identify you personally.
              </p>

              <Heading level={3} className="mb-2 text-base">
                Advertising cookies
              </Heading>
              <p className="text-sm mb-4">
                We use the Meta (Facebook) Pixel to measure the performance of our
                Facebook and Instagram advertising and to build advertising
                audiences for future campaigns. We also use Google Ads conversion
                tracking, which relies on Google&apos;s Consent Mode and only stores
                identifying cookies once you accept non-essential cookies —
                otherwise it sends cookieless, aggregated conversion signals only.
                Advertising cookies are only set after you have given your consent
                via our cookie banner.
              </p>

              <Heading level={3} className="mb-2 text-base">
                Payment cookies
              </Heading>
              <p className="text-sm">
                When you proceed to pay for a certificate booking, Stripe (our
                payment processor) sets cookies to prevent fraud and ensure your
                payment is processed securely. These cookies are set by Stripe&apos;s
                domain and are governed by Stripe&apos;s own privacy policy.
              </p>
            </section>

            {/* 4 */}
            <section aria-labelledby="c-not-use">
              <Heading level={2} id="c-not-use" className="mb-4">
                4. Cookies we do not use
              </Heading>
              <p className="mb-3 text-sm">We do not use:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Cookies from any provider not disclosed in Section 2 above</li>
                <li>Cookies that sell or share your data with data brokers</li>
                <li>
                  Cookies that track you across unrelated third-party websites for
                  purposes beyond the advertising and analytics uses described in
                  this policy
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section aria-labelledby="c-manage">
              <Heading level={2} id="c-manage" className="mb-4">
                5. Managing your cookie preferences
              </Heading>

              <Heading level={3} className="mb-2 text-base">
                Our cookie banner
              </Heading>
              <p className="text-sm mb-4">
                When you first visit our website, a cookie banner appears at the
                bottom of the screen. You can choose to accept or decline
                non-essential cookies — declining prevents analytics and
                advertising cookies (Google Analytics, Microsoft Clarity, Meta
                Pixel) from loading at all. Your preference is saved for 12 months.
              </p>
              <p className="text-sm mb-4">
                To change your preference at any time, clear your browser cookies
                and revisit the site — the banner will reappear.
              </p>

              <Heading level={3} className="mb-2 text-base">
                Browser settings
              </Heading>
              <p className="text-sm mb-2">
                You can also control cookies through your browser settings. Most
                browsers allow you to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-3">
                <li>View cookies that have been set</li>
                <li>Delete some or all cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Block all cookies</li>
              </ul>
              <p className="text-sm mb-4">
                Note that blocking all cookies may affect the functionality of our
                website, including the booking form.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm mb-4">
                <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                <li>Safari: Settings → Safari → Privacy</li>
                <li>Firefox: Settings → Privacy &amp; Security → Cookies and Site Data</li>
                <li>Edge: Settings → Cookies and site permissions</li>
              </ul>

              <Heading level={3} className="mb-2 text-base">
                Third-party opt-outs
              </Heading>
              <p className="text-sm">
                You can opt out of Google Analytics tracking across all websites by
                installing the{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  className="text-compliance-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
                . You can also manage ad personalisation directly with{" "}
                <a
                  href="https://www.facebook.com/adpreferences/ad_settings/"
                  className="text-compliance-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Meta&apos;s ad preferences
                </a>
                .
              </p>
            </section>

            {/* 6 */}
            <section aria-labelledby="c-third-party">
              <Heading level={2} id="c-third-party" className="mb-4">
                6. Third-party cookies
              </Heading>
              <p className="mb-3">
                Some cookies on our website are set by third-party services. We do
                not control these cookies — they are governed by the privacy
                policies of the relevant third party.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-sm">
                <li>
                  <strong className="text-brand-charcoal">Google Analytics</strong>
                  <br />
                  Purpose: Website analytics
                  <br />
                  Privacy policy:{" "}
                  <a href="https://policies.google.com/privacy" className="text-compliance-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    policies.google.com/privacy
                  </a>
                </li>
                <li>
                  <strong className="text-brand-charcoal">Microsoft Clarity</strong>
                  <br />
                  Purpose: Session recording and heatmap analytics
                  <br />
                  Privacy policy:{" "}
                  <a href="https://privacy.microsoft.com/privacystatement" className="text-compliance-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    privacy.microsoft.com/privacystatement
                  </a>
                </li>
                <li>
                  <strong className="text-brand-charcoal">Meta (Facebook Pixel)</strong>
                  <br />
                  Purpose: Advertising measurement and audience building
                  <br />
                  Privacy policy:{" "}
                  <a href="https://www.facebook.com/privacy/policy" className="text-compliance-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    facebook.com/privacy/policy
                  </a>
                </li>
                <li>
                  <strong className="text-brand-charcoal">Stripe</strong>
                  <br />
                  Purpose: Secure payment processing
                  <br />
                  Privacy policy:{" "}
                  <a href="https://stripe.com/gb/privacy" className="text-compliance-blue hover:underline" target="_blank" rel="noopener noreferrer">
                    stripe.com/gb/privacy
                  </a>
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section aria-labelledby="c-changes">
              <Heading level={2} id="c-changes" className="mb-4">
                7. Changes to this policy
              </Heading>
              <p>
                We may update this cookie policy from time to time to reflect
                changes in technology, legislation, or our business practices. The
                &ldquo;Last updated&rdquo; date at the top of this page shows when it was
                most recently revised.
              </p>
              <p className="mt-3">
                We recommend checking this page periodically to stay informed about
                how we use cookies.
              </p>
            </section>

            {/* 8 */}
            <section aria-labelledby="c-contact">
              <Heading level={2} id="c-contact" className="mb-4">
                8. Contact us
              </Heading>
              <p className="mb-3">
                If you have questions about our use of cookies, please contact us:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  Email:{" "}
                  <a href="mailto:info@mylandlordcertificate.co.uk" className="text-compliance-blue hover:underline">
                    info@mylandlordcertificate.co.uk
                  </a>
                </li>
                <li>Phone: 020 3996 1070</li>
                <li>Address: 134 Merton High Street, London</li>
              </ul>
              <p className="mt-3 text-sm">
                Or write to us at the address above and we will respond within 5
                working days.
              </p>
            </section>

          </div>
        </Container>
      </div>
    </>
  );
}
