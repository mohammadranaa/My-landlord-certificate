import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — EICR, Gas Safety, EPC & More | My Landlord Certificate",
  description:
    "Browse all UK property compliance certificates: EICR, Gas Safety (CP12), EPC, Fire Risk Assessment, PAT Testing and landlord certificate bundles. Fixed prices, next-day appointments.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/services" },
  openGraph: {
    title: "Our Services — EICR, Gas Safety, EPC & More | My Landlord Certificate",
    description:
      "Fixed-price landlord compliance certificates across London and the South East. EICR from £67.99, Gas Safety from £50, EPC from £89.99.",
    url: "https://mylandlordcertificate.co.uk/services",
  },
  twitter: {
    title: "Our Services — My Landlord Certificate",
    description:
      "EICR, Gas Safety, EPC, Fire Risk Assessment and PAT Testing. Fixed prices. Next-day appointments.",
  },
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
