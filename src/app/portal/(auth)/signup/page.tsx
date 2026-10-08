import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/portal/signup-form";

export const metadata: Metadata = {
  title: "Request agent portal access — My Landlord Certificate",
  description:
    "Free compliance portal for letting agents: every property, certificate, renewal date and invoice in one place, with automatic expiry reminders.",
  robots: { index: true, follow: true },
};

const BENEFITS = [
  { title: "Every certificate, one place", body: "Gas, EICR, EPC, fire, PAT, legionella and more — per property, with PDFs ready to share." },
  { title: "Never miss a renewal", body: "Automatic reminders at 60, 30 and 7 days before anything expires." },
  { title: "Book renewals in one click", body: "Request a renewal straight from the certificate — we confirm within one working day." },
  { title: "Invoices and payment status", body: "See what's been invoiced, what's paid and what's outstanding, per property." },
];

export default function PortalSignupPage() {
  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 md:grid-cols-[1.1fr_1fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[.18em] text-compliance-blue">For letting &amp; estate agents</p>
        <h1 className="mt-2 text-3xl font-bold text-brand-charcoal sm:text-4xl">
          Your whole portfolio&apos;s compliance, in one portal
        </h1>
        <p className="mt-4 text-brand-grey">
          Request access to the My Landlord Certificate agent portal. It&apos;s free for agents we work with — we review every
          request and usually approve within one working day.
        </p>
        <ul className="mt-8 space-y-5">
          {BENEFITS.map((b) => (
            <li key={b.title} className="flex gap-3">
              <span className="mt-1.5 h-2.5 w-2.5 shrink-0 bg-action-green" aria-hidden />
              <div>
                <p className="font-semibold text-brand-charcoal">{b.title}</p>
                <p className="text-sm text-brand-grey">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-border bg-white p-6 sm:p-8">
        <h2 className="text-xl font-bold text-brand-charcoal">Request portal access</h2>
        <p className="mb-6 mt-1 text-sm text-brand-grey">Tell us about your agency. We&apos;ll email you once you&apos;re approved.</p>
        <SignupForm />
        <p className="mt-6 text-center text-sm text-brand-grey">
          Already have access?{" "}
          <Link href="/portal/login" className="text-compliance-blue hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
