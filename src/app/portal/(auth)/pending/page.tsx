import type { Metadata } from "next";
import { TEL, PHONE_DISPLAY } from "@/lib/constants";
import { LogoutButton } from "@/components/portal/logout-button";

export const metadata: Metadata = {
  title: "Account pending — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default function PortalPendingPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16 text-center">
      <h1 className="mb-3 text-2xl font-bold text-brand-charcoal">
        Account pending approval
      </h1>
      <p className="mb-6 text-sm text-brand-grey">
        Thanks for signing up. We're reviewing your details and will email you
        once your account is approved — usually within one working day.
      </p>
      <p className="mb-8 text-sm text-brand-grey">
        Need this sooner? Call us on{" "}
        <a href={TEL} className="text-compliance-blue hover:underline">
          {PHONE_DISPLAY}
        </a>
        .
      </p>
      <LogoutButton />
    </div>
  );
}
