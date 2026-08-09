import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PHONE_DISPLAY, TEL, WHATSAPP_URL, EMAIL, MAILTO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Booking Cancelled",
  robots: { index: false },
};

export default function BookCancelledPage() {
  return (
    <main className="min-h-screen bg-warm-white flex items-center justify-center py-16 px-4">
      <Container className="max-w-xl text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-amber-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <Heading level={1} className="mb-3">
          No worries — you have not been charged
        </Heading>

        <p className="text-brand-grey text-lg mb-8">
          Your booking was not completed and no payment was taken. Your details
          are saved — just try again when you are ready.
        </p>

        {/* Options */}
        <div className="bg-white rounded-2xl border border-border p-6 text-left mb-8 space-y-4">
          <p className="text-sm font-semibold text-brand-grey uppercase tracking-wider">
            How would you like to proceed?
          </p>
          <div className="space-y-3 text-sm text-brand-charcoal">
            <p>
              <strong>Try again online</strong> — use the button below to go
              back to the booking form.
            </p>
            <p>
              <strong>Pay over the phone</strong> — call us on{" "}
              <a
                href={TEL}
                className="text-compliance-blue font-medium hover:underline"
              >
                {PHONE_DISPLAY}
              </a>{" "}
              and we will take your booking directly.
            </p>
            <p>
              <strong>WhatsApp us</strong> —{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-medium hover:underline"
              >
                message us on WhatsApp
              </a>{" "}
              and we will send you a payment link.
            </p>
            <p>
              <strong>Email us</strong> —{" "}
              <a
                href={MAILTO}
                className="text-compliance-blue font-medium hover:underline"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/book"
            className={cn(buttonVariants({ variant: "primary" }))}
          >
            Try again
          </Link>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Back to homepage
          </Link>
        </div>
      </Container>
    </main>
  );
}
