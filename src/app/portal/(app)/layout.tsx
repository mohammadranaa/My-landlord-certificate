import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Toaster } from "sonner";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import { getPortfolioData } from "@/lib/portal/properties";
import { PortalShell } from "@/components/portal/portal-shell";
import { PortalRealtimeRefresher } from "@/components/portal/realtime-refresher";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agent Portal — My Landlord Certificate",
  robots: { index: false, follow: false },
};

export default async function PortalAppLayout({ children }: { children: React.ReactNode }) {
  const portalUser = await requireApprovedPortalUser();
  const { groups, kpis, certs } = await getPortfolioData(portalUser.client_id);

  const compliancePct = groups.length > 0 ? Math.round((kpis.compliant / groups.length) * 100) : 0;
  const alertCount = kpis.expired + kpis.expiring;

  const navCounts: Record<string, number | null> = {
    "/portal/dashboard": alertCount > 0 ? alertCount : null,
    "/portal/properties": groups.length,
    "/portal/documents": certs.length,
    "/portal/account": null,
  };

  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable}`} style={{ fontFamily: "var(--font-barlow), system-ui, sans-serif" }}>
      <Toaster position="bottom-center" richColors />
      {portalUser.client_id && (
        <PortalRealtimeRefresher
          channelName={`portal-${portalUser.client_id}`}
          subscriptions={[
            { table: "jobs", filter: `client_id=eq.${portalUser.client_id}` },
            { table: "certificates", filter: `client_id=eq.${portalUser.client_id}` },
          ]}
        />
      )}
      <PortalShell
        agencyName={portalUser.agency_name}
        fullName={portalUser.full_name}
        compliancePct={compliancePct}
        alertCount={alertCount}
        navCounts={navCounts}
      >
        {children}
      </PortalShell>
    </div>
  );
}
