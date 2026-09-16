import type { Metadata } from "next";
import Link from "next/link";
import { SignupForm } from "@/components/portal/signup-form";

export const metadata: Metadata = {
  title: "Sign up — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default function PortalSignupPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-1 text-2xl font-bold text-brand-charcoal">
        Create your agent account
      </h1>
      <p className="mb-8 text-sm text-brand-grey">
        We'll review your details and approve your account, usually within
        one working day.
      </p>

      <SignupForm />

      <p className="mt-6 text-center text-sm text-brand-grey">
        Already have an account?{" "}
        <Link href="/portal/login" className="text-compliance-blue hover:underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
