import type { Metadata } from "next";
import Link from "next/link";
import { ForgotPasswordForm } from "@/components/portal/password-forms";
import { kicker, pageIntro, pageTitle, textLink } from "@/components/portal/auth-ui";

export const metadata: Metadata = {
  title: "Reset password — Client Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default function PortalForgotPasswordPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/portal/login" className={`${textLink} text-sm`}>
          ← Back to log in
        </Link>
        <p className={`${kicker} mt-4`}>Reset password</p>
        <h1 className={pageTitle}>Forgot your password?</h1>
        <p className={pageIntro}>Enter your email and we&apos;ll send you a link to set a new one.</p>
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
