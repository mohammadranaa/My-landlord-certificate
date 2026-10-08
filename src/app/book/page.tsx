import type { Metadata } from "next";
import { LazyBookingForm as BookingForm } from "@/components/lazy";
import { resolvePortalBooking, toBookingPrefill } from "@/lib/portal/booking-attribution";

export const metadata: Metadata = {
  title: "Book a Certificate",
  description:
    "Book your EICR, Gas Safety Certificate, EPC, Fire Risk Assessment or PAT Testing in minutes. Fixed prices, NICEIC approved engineers across London.",
};

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string; portalProperty?: string }>;
}) {
  const { from, portalProperty } = await searchParams;
  // Only look up a portal session for links that came from the portal, so
  // ordinary visitors never trigger an auth round-trip.
  const portal = from === "portal" || portalProperty ? await resolvePortalBooking(portalProperty) : null;

  return <BookingForm prefill={portal ? toBookingPrefill(portal) : undefined} />;
}
