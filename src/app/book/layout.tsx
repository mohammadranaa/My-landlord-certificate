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
    <div className="min-h-screen bg-warm-white">
      <header className="bg-compliance-blue px-6 py-4">
        <a href="/" className="text-white font-bold text-lg">
          My Landlord Certificate
        </a>
      </header>
      <main>{children}</main>
    </div>
  );
}
