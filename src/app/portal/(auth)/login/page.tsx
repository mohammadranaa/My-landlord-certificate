import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/portal/login-form";

export const metadata: Metadata = {
  title: "Log in — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

const ERRORS: Record<string, string> = {
  "link-expired": "That link has expired or was already used. Please request a new one.",
};

export default async function PortalLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  const message = error ? ERRORS[error] : null;

  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-1 text-2xl font-bold text-brand-charcoal">Agent portal login</h1>
      <p className="mb-8 text-sm text-brand-grey">Your properties, certificates, renewals and invoices in one place.</p>

      {message && <p className="mb-6 border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">{message}</p>}

      <LoginForm />

      <div className="mt-6 flex flex-col items-center gap-2 text-sm text-brand-grey">
        <Link href="/portal/forgot-password" className="text-compliance-blue hover:underline">
          Forgot your password?
        </Link>
        <p>
          Don&apos;t have access yet?{" "}
          <Link href="/portal/signup" className="text-compliance-blue hover:underline">
            Request portal access
          </Link>
        </p>
      </div>
    </div>
  );
}
