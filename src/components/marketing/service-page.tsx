import Link from "next/link";
import type { ServiceData } from "@/lib/services";

export function ServicePage({ service }: { service: ServiceData }) {
  const { name, tagline, description, legalNote, priceFrom, turnaroundDays, validityYears, included, faqs } = service;

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-blue text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-300 text-sm font-medium mb-2 uppercase tracking-wide">
            Compliance Certificate
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>
          <p className="text-blue-200 text-lg mb-8 max-w-2xl">{tagline}</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/book?service=${service.slug}`}
              className="bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Book from £{priceFrom}
            </Link>
            <a
              href="#what-is-it"
              className="border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-lg transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-brand-charcoal text-brand-grey text-sm py-3 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-6">
          <span className="text-white">
            From <strong>£{priceFrom}</strong>
          </span>
          <span>Turnaround: <strong className="text-white">{turnaroundDays === 1 ? "Same day" : `${turnaroundDays} days`}</strong></span>
          {validityYears && (
            <span>Valid for: <strong className="text-white">{validityYears} year{validityYears > 1 ? "s" : ""}</strong></span>
          )}
          <span>Certificate emailed <strong className="text-white">same day</strong></span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        {/* What is it */}
        <section id="what-is-it">
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What is a {service.shortName}?
          </h2>
          <p className="text-brand-charcoal/80 leading-relaxed mb-4">{description}</p>
          <div className="bg-amber-50 border border-brand-amber/30 rounded-lg p-4 text-sm text-brand-charcoal/80">
            <strong className="text-brand-amber">Legal requirement: </strong>
            {legalNote}
          </div>
        </section>

        {/* What's included */}
        <section>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-4">
            What&apos;s included
          </h2>
          <ul className="space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-brand-green" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="text-brand-charcoal/80">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
            Frequently asked questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-brand-charcoal mb-2">{faq.q}</h3>
                <p className="text-brand-charcoal/70 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-blue rounded-2xl px-8 py-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Ready to book?</h2>
          <p className="text-blue-200 mb-6">
            Book online in under 3 minutes. A qualified engineer will contact you to confirm your slot.
          </p>
          <Link
            href={`/book?service=${service.slug}`}
            className="inline-block bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Book your {service.shortName} — from £{priceFrom}
          </Link>
        </section>
      </div>
    </div>
  );
}
