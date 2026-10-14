import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/portal/login-form";
import { kicker, pageIntro, pageTitle, secondaryButton } from "@/components/portal/auth-ui";

export const metadata: Metadata = {
  title: "Log in — Client Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default function PortalLoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className={kicker}>Log in</p>
        <h1 className={pageTitle}>Welcome back</h1>
        <p className={pageIntro}>Log in to see your properties, jobs and certificates.</p>
      </div>

      <LoginForm />

      <div className="flex items-center gap-3 text-[13px] text-[#6B7280]">
        <span className="h-px flex-1 bg-[#E5E7EB]" />
        New to the portal?
        <span className="h-px flex-1 bg-[#E5E7EB]" />
      </div>

      <Link href="/portal/signup" className={secondaryButton}>
        Request portal access
      </Link>

      <p className="text-[13.5px] leading-relaxed text-[#4B5563]">
        Free for every client. Landlords, letting agents and block managers use the same account,
        and we link your properties for you.
      </p>
    </div>
  );
}
