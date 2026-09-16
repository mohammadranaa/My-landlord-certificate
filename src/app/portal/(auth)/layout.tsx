import Link from "next/link";
import { getPortalSession } from "@/lib/portal/session";
import { LogoutButton } from "@/components/portal/logout-button";

// Scoped to login/signup/pending only. The full sidebar shell for the
// authenticated app lives separately in (app)/layout.tsx — these two never
// overlap, so there's exactly one header rendered per route, never two.
export default async function PortalAuthLayout({
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
