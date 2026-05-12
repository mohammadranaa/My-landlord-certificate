import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Book a compliance certificate in 3 simple steps. Choose your service, pick a time, get your certificate same day.",
};

const steps = [
  {
    number: "01",
    title: "Choose your service",
    body: "Select the certificate you need — or let us recommend one based on your property type and current compliance status.",
  },
  {
    number: "02",
    title: "Pick a date and time",
    body: "Choose a slot that works for you. We offer morning, afternoon and evening appointments across London and the South East.",
  },
  {
    number: "03",
    title: "Receive your certificate",
    body: "A qualified, accredited engineer visits your property. Your certificate is emailed to you the same day, ready to share with tenants or your local authority.",
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      <section className="bg-brand-blue text-white py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h1>
          <p className="text-blue-200 text-lg">
            From booking to certificate in three simple steps.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="text-5xl font-black text-brand-blue/10 mb-3">
                {step.number}
              </div>
              <h2 className="text-xl font-bold text-brand-charcoal mb-2">
                {step.title}
              </h2>
              <p className="text-brand-charcoal/70 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/book"
            className="inline-block bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Book now — from £59
          </Link>
        </div>
      </section>
    </div>
  );
}
