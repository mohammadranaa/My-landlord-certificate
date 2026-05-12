import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about My Landlord Certificate and our mission.",
};

export default function AboutPage() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-charcoal mb-4">About Us</h1>
      <p className="text-brand-grey">Content coming soon.</p>
    </section>
  );
}
