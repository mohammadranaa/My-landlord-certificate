import type { Metadata } from "next";
import dynamic from "next/dynamic";

const BookingForm = dynamic(
  () => import("@/components/booking/booking-form").then(m => m.BookingForm),
  {
    ssr: true,
    loading: () => (
      <div className="h-[500px] rounded-2xl bg-border/20 animate-pulse" />
    ),
  }
);

export const metadata: Metadata = {
  title: "Book a Certificate | My Landlord Certificate",
  description:
    "Book your EICR, Gas Safety Certificate, EPC, Fire Risk Assessment or PAT Testing in minutes. Fixed prices, NICEIC approved engineers across London.",
};

export default function BookPage() {
  return <BookingForm />;
}
