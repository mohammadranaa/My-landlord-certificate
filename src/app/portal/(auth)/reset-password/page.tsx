import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ResetPasswordForm } from "@/components/portal/password-forms";
import { kicker, pageIntro, pageTitle, primaryButton } from "@/components/portal/auth-ui";

export const metadata: Metadata = {
  title: "Set a new password — Client Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default async function PortalResetPasswordPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="flex flex-col gap-6">
        <div>
          <p className={kicker}>Link expired</p>
          <h1 className={pageTitle}>This reset link has expired</h1>
          <p className={pageIntro}>
            Reset links work once and expire after an hour. Request a new one and use it straight away.
          </p>
        </div>
        <Link href="/portal/forgot-password" className={primaryButton}>
          Send a new link
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className={kicker}>New password</p>
        <h1 className={pageTitle}>Set a new password</h1>
        <p className={pageIntro}>For {user.email}</p>
      </div>
      <ResetPasswordForm />
    </div>
  );
}
