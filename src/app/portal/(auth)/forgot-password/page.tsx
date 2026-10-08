import type { Metadata } from "next";
import Link from "next/link";
import { ForgotPasswordForm } from "@/components/portal/forgot-password-form";

export const metadata: Metadata = {
  title: "Reset password — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-1 text-2xl font-bold text-brand-charcoal">Reset your password</h1>
      <p className="mb-8 text-sm text-brand-grey">Enter your email and we&apos;ll send you a link to choose a new password.</p>
      <ForgotPasswordForm />
      <p className="mt-6 text-center text-sm text-brand-grey">
        <Link href="/portal/login" className="text-compliance-blue hover:underline">
          Back to login
        </Link>
      </p>
    </div>
  );
}
