import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the My Landlord Certificate team.",
};

export default function ContactPage() {
  return (
    <section className="py-16 px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-brand-charcoal mb-4">
        Contact Us
      </h1>
      <p className="text-brand-grey">Contact form coming soon.</p>
    </section>
  );
}
