import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Certificate",
  description: "Book your UK property compliance certificate in minutes.",
};

export default function BookPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-charcoal mb-2">
        Book a Certificate
      </h1>
      <p className="text-brand-grey mb-8">
        Select the service you need and we&apos;ll match you with a qualified
        local engineer.
      </p>
      {/* Booking form / step 1 goes here */}
      <div className="bg-white rounded-xl border border-border p-6">
        <p className="text-sm text-brand-grey">Booking flow coming soon.</p>
      </div>
    </div>
  );
}
