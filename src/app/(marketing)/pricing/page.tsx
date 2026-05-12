import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent, upfront pricing for all our compliance services.",
};

export default function PricingPage() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-charcoal mb-4">Pricing</h1>
      <p className="text-brand-grey">Pricing cards coming soon.</p>
    </section>
  );
}
