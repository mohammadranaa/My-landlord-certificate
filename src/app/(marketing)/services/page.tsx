import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Browse all our UK property compliance certificates and services.",
};

export default function ServicesPage() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-charcoal mb-4">
        Our Services
      </h1>
      <p className="text-brand-grey">Coming soon — service cards go here.</p>
    </section>
  );
}
