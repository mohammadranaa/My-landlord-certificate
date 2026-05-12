import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Certificate",
};

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-warm-white">
      {/* Booking-specific slim header */}
      <header className="bg-brand-blue px-6 py-4">
        <a href="/" className="text-white font-bold text-lg">
          My Landlord Certificate
        </a>
      </header>
      <main className="max-w-2xl mx-auto px-6 py-10">{children}</main>
    </div>
  );
}
