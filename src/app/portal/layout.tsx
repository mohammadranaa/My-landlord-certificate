import type { Metadata } from "next";
import Link from "next/link";
import { getPortalSession } from "@/lib/portal/session";
import { LogoutButton } from "@/components/portal/logout-button";

export const metadata: Metadata = {
  title: "Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

// This layout wraps every /portal/* page, including login/signup/pending —
// it only renders the shell. Redirect/approval guarding for the
// authenticated section (dashboard, jobs, account) is a separate nested
// layout, added in a later step.
export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getPortalSession();

  return (
    <div className="flex min-h-screen flex-col bg-warm-white">
      <header className="flex items-center justify-between border-b border-border bg-white px-6 py-4">
        <Link href="/" className="text-lg font-bold text-brand-charcoal">
          My Landlord Certificate
          <span className="ml-2 text-sm font-medium text-compliance-blue">
            Agent Portal
          </span>
        </Link>

        {session.status === "approved" && (
          <div className="flex items-center gap-4">
            <span className="text-sm text-brand-charcoal">
              {session.portalUser.agency_name}
            </span>
            <LogoutButton />
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>
    </div>
  );
}
