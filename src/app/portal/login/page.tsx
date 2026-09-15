import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/portal/login-form";

export const metadata: Metadata = {
  title: "Log in — Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-1 text-2xl font-bold text-brand-charcoal">
        Agent portal login
      </h1>
      <p className="mb-8 text-sm text-brand-grey">
        Log in to view your jobs, certificates, and account details.
      </p>

      <LoginForm />

      <p className="mt-6 text-center text-sm text-brand-grey">
        New here?{" "}
        <Link href="/portal/signup" className="text-compliance-blue hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
