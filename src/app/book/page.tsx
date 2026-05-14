import type { Metadata } from "next";
import { BookingForm } from "@/components/booking/booking-form";

export const metadata: Metadata = {
  title: "Book a Certificate | My Landlord Certificate",
  description:
    "Book your EICR, Gas Safety Certificate, EPC, Fire Risk Assessment or PAT Testing in minutes. Fixed prices, NICEIC approved engineers across London.",
};

export default function BookPage() {
  return <BookingForm />;
}
