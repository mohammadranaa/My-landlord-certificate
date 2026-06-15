import type { Metadata } from "next";
import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, TEL, WHATSAPP_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Booking Confirmed — My Landlord Certificate",
  robots: { index: false },
};

export default async function BookSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  let session = null;
  if (session_id) {
    try {
      session = await getStripe().checkout.sessions.retrieve(session_id);
    } catch {
      // Session retrieval failed — show generic success
    }
  }

  const customerName = session?.metadata?.customer_name ?? "";
  const servicesReadable = session?.metadata?.services_readable ?? "";
  const appointmentDate = session?.metadata?.appointment_date ?? "";
  const appointmentSlot = session?.metadata?.appointment_slot ?? "";
  const propertyAddress = session?.metadata?.property_address ?? "";
  const totalPaid = session?.amount_total
    ? `£${(session.amount_total / 100).toFixed(2)}`
    : "";

  return (
    <main className="min-h-screen bg-warm-white flex items-center justify-center py-16 px-4">
      <Container className="max-w-xl text-center">
        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-action-green/15 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-action-green"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <Heading level={1} className="mb-3">
          Booking confirmed
          {customerName ? `, ${customerName.split(" ")[0]}` : ""}!
        </Heading>

        <p className="text-brand-grey text-lg mb-8">
          Your payment was successful. We will call you within 2 hours to
          confirm your appointment details.
        </p>

        {/* Booking summary */}
        {(servicesReadable || appointmentDate || propertyAddress) && (
          <div className="bg-white rounded-2xl border border-border p-6 text-left mb-8 space-y-3">
            <p className="text-sm font-semibold text-brand-grey uppercase tracking-wider">
              Booking summary
            </p>
            {servicesReadable && (
              <div className="flex justify-between text-sm gap-4">
                <span className="text-brand-grey shrink-0">Services</span>
                <span className="font-medium text-brand-charcoal text-right">
                  {servicesReadable}
                </span>
              </div>
            )}
            {propertyAddress && (
              <div className="flex justify-between text-sm gap-4">
                <span className="text-brand-grey shrink-0">Property</span>
                <span className="font-medium text-brand-charcoal text-right">
                  {propertyAddress}
                </span>
              </div>
            )}
            {appointmentDate && (
              <div className="flex justify-between text-sm gap-4">
                <span className="text-brand-grey shrink-0">Date</span>
                <span className="font-medium text-brand-charcoal">
                  {appointmentDate}
                </span>
              </div>
            )}
            {appointmentSlot && (
              <div className="flex justify-between text-sm gap-4">
                <span className="text-brand-grey shrink-0">Time slot</span>
                <span className="font-medium text-brand-charcoal">
                  {appointmentSlot}
                </span>
              </div>
            )}
            {totalPaid && (
              <div className="flex justify-between text-sm border-t border-border pt-3 mt-3">
                <span className="font-semibold text-brand-charcoal">
                  Total paid
                </span>
                <span className="font-bold text-compliance-blue">
                  {totalPaid}
                </span>
              </div>
            )}
          </div>
        )}

        {/* What happens next */}
        <div className="bg-compliance-blue/5 rounded-2xl p-6 text-left mb-8">
          <p className="text-sm font-semibold text-compliance-blue uppercase tracking-wider mb-4">
            What happens next
          </p>
          <ul className="space-y-3">
            {[
              "You will receive a confirmation email shortly",
              "We will call you within 2 hours to confirm your exact appointment time",
              "Our engineer will call 1 hour before arrival",
              "Your certificate will be emailed within 24 hours of inspection",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-brand-charcoal"
              >
                <svg
                  className="w-4 h-4 text-action-green shrink-0 mt-0.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Reschedule */}
        <p className="text-sm text-brand-grey mb-8">
          Need to reschedule or have a question?{" "}
          <a
            href={TEL}
            className="text-compliance-blue font-medium hover:underline"
          >
            Call {PHONE_DISPLAY}
          </a>{" "}
          or{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#25D366] font-medium hover:underline"
          >
            WhatsApp us
          </a>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className={cn(buttonVariants({ variant: "primary" }))}>
            Back to homepage
          </Link>
          <Link
            href="/book"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Book another certificate
          </Link>
        </div>
      </Container>
    </main>
  );
}
