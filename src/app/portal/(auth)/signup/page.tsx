import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/portal/signup-form";
import { kicker, pageIntro, pageTitle, textLink } from "@/components/portal/auth-ui";

export const metadata: Metadata = {
  title: "Request access — Client Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default function PortalSignupPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/portal/login" className={`${textLink} text-sm`}>
          ← Back to log in
        </Link>
        <p className={`${kicker} mt-4`}>Request access</p>
        <h1 className={pageTitle}>Get your portal account</h1>
        <p className={pageIntro}>
          Takes a minute. We review every request and link your properties, usually within one
          working day.
        </p>
      </div>

      <SignupForm />

      <p className="text-center text-sm text-[#4B5563]">
        Already have an account?{" "}
        <Link href="/portal/login" className={textLink}>
          Log in
        </Link>
      </p>
    </div>
  );
}
