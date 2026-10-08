import type { Metadata } from "next";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { ResetPasswordPanel } from "@/components/portal/reset-password-panel";

export const metadata: Metadata = {
  title: "Choose a new password — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default async function ResetPasswordPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-1 text-2xl font-bold text-brand-charcoal">Choose a new password</h1>
      {user ? (
        <>
          <p className="mb-8 text-sm text-brand-grey">For {user.email}. At least 8 characters.</p>
          <ResetPasswordPanel />
        </>
      ) : (
        <p className="mt-4 text-sm text-brand-grey">
          This reset link has expired or was already used.{" "}
          <Link href="/portal/forgot-password" className="text-compliance-blue hover:underline">
            Request a new one
          </Link>
          .
        </p>
      )}
    </div>
  );
}
