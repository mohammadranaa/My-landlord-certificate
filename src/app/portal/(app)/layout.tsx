import { Barlow, Barlow_Condensed } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Toaster } from "sonner";
import { requireApprovedPortalUser } from "@/lib/portal/session";
import { getPortfolioData } from "@/lib/portal/properties";
import { LogoutButton } from "@/components/portal/logout-button";

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

const condensedStyle: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };

const NAV_ITEMS = [
  { href: "/portal/dashboard", label: "Overview" },
  { href: "/portal/properties", label: "Properties" },
  { href: "/portal/documents", label: "Documents" },
  { href: "/portal/account", label: "Account" },
] as const;

export default async function PortalAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const portalUser = await requireApprovedPortalUser();
  const { properties, kpis, certs } = await getPortfolioData();

  const compliancePct =
    properties.length > 0 ? Math.round((kpis.compliant / properties.length) * 100) : 0;

  const needsAttentionCount = kpis.expiredOrBreach + kpis.expiring;
  const alertCount = kpis.expiredOrBreach + kpis.expiring + kpis.awaitingCertificate;

  const navCounts: Record<string, number | null> = {
    "/portal/dashboard": needsAttentionCount,
    "/portal/properties": properties.length,
    "/portal/documents": certs.length,
    "/portal/account": null,
  };

  const initials = portalUser.agency_name
    .split(" ")
    .map((w: string) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className={`${barlow.variable} ${barlowCondensed.variable} flex h-screen bg-[#FAFAF7]`}>
      <Toaster position="bottom-center" richColors />
      {/* Sidebar */}
      <aside
        className="flex h-screen w-[244px] shrink-0 flex-col overflow-y-auto text-[#FAFAF7]"
        style={{
          padding: "26px 18px 22px",
          background: "#1F2937",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px), radial-gradient(70% 120% at 100% 0%, rgba(0,147,219,.22), transparent 68%)",
          backgroundSize: "44px 44px, 44px 44px, auto",
        }}
      >
        <div className="flex flex-col gap-7">
          <div>
            <Image src="/logo-white.svg" alt="My Landlord Certificate" width={150} height={32} />
            <p
              className="mt-2 text-[13px] font-semibold uppercase text-[#80D100]"
              style={{ ...condensedStyle, letterSpacing: ".18em" }}
            >
              Agent Portal
            </p>
          </div>

          <nav className="flex flex-col gap-0.5">
            {NAV_ITEMS.map((item) => {
              const count = navCounts[item.href];
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-none px-3 py-[11px] text-[17px] font-semibold uppercase transition-colors"
                  style={{
                    ...condensedStyle,
                    letterSpacing: ".03em",
                    color: "rgba(250,250,247,.66)",
                  }}
                >
                  <span>{item.label}</span>
                  {count !== null && (
                    <span style={{ color: "rgba(250,250,247,.4)" }}>{count.toLocaleString()}</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Compliance plate — pinned to bottom */}
        <div className="relative mt-auto" style={{ position: "relative" }}>
          <div
            className="border p-3"
            style={{ borderColor: "rgba(255,255,255,.14)" }}
          >
            <p
              className="text-[13px] font-semibold uppercase"
              style={{ ...condensedStyle, letterSpacing: ".16em", color: "rgba(250,250,247,.7)" }}
            >
              Portfolio compliance
            </p>
            <p className="mt-1 text-[38px] font-semibold" style={condensedStyle}>
              {compliancePct}%
            </p>
            <div className="mt-2 h-1 w-full" style={{ background: "rgba(255,255,255,.14)" }}>
              <div className="h-1" style={{ background: "#80D100", width: `${compliancePct}%` }} />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2.5">
            <div
              className="flex h-[34px] w-[34px] shrink-0 items-center justify-center text-xs font-semibold text-white"
              style={{ background: "#0093DB" }}
            >
              {initials}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{portalUser.agency_name}</p>
              <p className="truncate text-xs" style={{ color: "rgba(250,250,247,.5)" }}>
                {portalUser.full_name}
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden">
        <header
          className="flex items-center gap-4 bg-white px-8 py-4"
          style={{ borderBottom: "1px solid #e7e4dc" }}
        >
          <div
            className="flex max-w-[420px] flex-1 items-center gap-2 px-3 py-[9px]"
            style={{ background: "#FAFAF7", border: "1px solid #e2e8f0" }}
          >
            <span style={{ color: "#9CA3AF" }}>⌕</span>
            <input
              type="search"
              placeholder="Search address, postcode or job number"
              className="w-full bg-transparent text-sm text-[#1F2937] outline-none placeholder:text-[#9CA3AF]"
            />
          </div>

          <div className="ml-auto flex items-center gap-4">
            <span
              className="text-sm font-semibold uppercase"
              style={{ ...condensedStyle, color: "#6B7280" }}
            >
              {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
            </span>
            <span className="h-5 w-px" style={{ background: "#e2e8f0" }} />
            {alertCount > 0 && (
              <span
                className="flex items-center gap-2 px-2.5 py-1 text-xs font-semibold"
                style={{ background: "rgba(245,158,11,.14)", color: "#96620a" }}
              >
                <span className="h-[7px] w-[7px]" style={{ background: "#F59E0B" }} />
                {alertCount} item{alertCount === 1 ? "" : "s"} need action
              </span>
            )}
            <LogoutButton />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto" style={{ padding: "30px 32px 56px" }}>
          <div className="mx-auto" style={{ maxWidth: 1220 }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
