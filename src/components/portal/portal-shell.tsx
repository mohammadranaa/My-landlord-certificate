"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import { LogoutButton } from "./logout-button";
import { BookLink } from "./book-link";

const condensed: React.CSSProperties = { fontFamily: "var(--font-barlow-condensed)" };

const NAV_ITEMS = [
  { href: "/portal/dashboard", label: "Overview", match: ["/portal/dashboard"] },
  { href: "/portal/properties", label: "Properties", match: ["/portal/properties", "/portal/jobs"] },
  { href: "/portal/documents", label: "Documents", match: ["/portal/documents"] },
  { href: "/portal/account", label: "Account", match: ["/portal/account"] },
] as const;

interface PortalShellProps {
  children: React.ReactNode;
  agencyName: string;
  fullName: string;
  compliancePct: number;
  alertCount: number;
  navCounts: Record<string, number | null>;
}

export function PortalShell({ children, agencyName, fullName, compliancePct, alertCount, navCounts }: PortalShellProps) {
  const pathname = usePathname();
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const mobileOpen = openedOn === pathname;

  const initials = agencyName
    .split(/\s+/)
    .filter(Boolean)
    .map((w: string) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Europe/London",
  });

  const sidebar = (
    <div className="flex h-full flex-col" style={{ padding: "26px 18px 22px" }}>
      <div className="flex flex-col gap-7">
        <div className="flex items-start justify-between">
          <div>
            <Image src="/logo-white.svg" alt="My Landlord Certificate" width={150} height={32} priority />
            <p className="mt-2 text-[13px] font-semibold uppercase text-[#80D100]" style={{ ...condensed, letterSpacing: ".18em" }}>
              Agent Portal
            </p>
          </div>
          <button
            onClick={() => setOpenedOn(null)}
            className="p-1 text-[rgba(250,250,247,.7)] lg:hidden"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-0.5" aria-label="Portal">
          {NAV_ITEMS.map((item) => {
            const active = item.match.some((m) => pathname === m || pathname.startsWith(`${m}/`));
            const count = navCounts[item.href];
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="flex items-center justify-between px-3 py-[11px] text-[17px] font-semibold uppercase transition-colors hover:bg-[rgba(255,255,255,.06)]"
                style={{
                  ...condensed,
                  letterSpacing: ".03em",
                  color: active ? "#FAFAF7" : "rgba(250,250,247,.66)",
                  background: active ? "rgba(0,147,219,.22)" : undefined,
                  boxShadow: active ? "inset 3px 0 0 #0093DB" : undefined,
                }}
              >
                <span>{item.label}</span>
                {count !== null && count !== undefined && (
                  <span style={{ color: active ? "rgba(250,250,247,.8)" : "rgba(250,250,247,.4)" }}>
                    {count.toLocaleString()}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto pt-8">
        <BookLink
          href="/book?from=portal"
          label="Book a certificate"
          location="sidebar"
          variant="green"
          size="md"
          className="mb-4 w-full"
        />
        <div className="border p-3" style={{ borderColor: "rgba(255,255,255,.14)" }}>
          <p className="text-[13px] font-semibold uppercase" style={{ ...condensed, letterSpacing: ".16em", color: "rgba(250,250,247,.7)" }}>
            Portfolio compliance
          </p>
          <p className="mt-1 text-[38px] font-semibold" style={condensed}>
            {compliancePct}%
          </p>
          <div className="mt-2 h-1 w-full" style={{ background: "rgba(255,255,255,.14)" }}>
            <div className="h-1" style={{ background: "#80D100", width: `${compliancePct}%` }} />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2.5">
          <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center text-xs font-semibold text-white" style={{ background: "#0093DB" }}>
            {initials || "MLC"}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{agencyName}</p>
            <p className="truncate text-xs" style={{ color: "rgba(250,250,247,.5)" }}>
              {fullName}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const sidebarBackground: React.CSSProperties = {
    background: "#1F2937",
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px), radial-gradient(70% 120% at 100% 0%, rgba(0,147,219,.22), transparent 68%)",
    backgroundSize: "44px 44px, 44px 44px, auto",
  };

  return (
    <div className="flex h-dvh bg-[#FAFAF7]">
      {/* Desktop sidebar */}
      <aside className="hidden h-dvh w-[244px] shrink-0 overflow-y-auto text-[#FAFAF7] lg:block" style={sidebarBackground}>
        {sidebar}
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button className="absolute inset-0 bg-[rgba(31,41,55,.55)]" aria-label="Close menu" onClick={() => setOpenedOn(null)} />
          <aside className="relative h-full w-[272px] overflow-y-auto text-[#FAFAF7]" style={sidebarBackground}>
            {sidebar}
          </aside>
        </div>
      )}

      <div className="flex h-dvh min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex items-center gap-3 bg-white px-4 py-3 sm:px-8 sm:py-4" style={{ borderBottom: "1px solid #e7e4dc" }}>
          <button onClick={() => setOpenedOn(pathname)} className="p-1 text-[#1F2937] lg:hidden" aria-label="Open menu">
            <Menu size={22} />
          </button>

          <form action="/portal/properties" method="get" role="search" className="flex max-w-[420px] flex-1 items-center gap-2 px-3 py-[9px]" style={{ background: "#FAFAF7", border: "1px solid #e2e8f0" }}>
            <Search size={15} className="shrink-0 text-[#9CA3AF]" aria-hidden />
            <input
              type="search"
              name="q"
              placeholder="Search address, postcode or job number"
              aria-label="Search properties"
              className="w-full min-w-0 bg-transparent text-sm text-[#1F2937] outline-none placeholder:text-[#9CA3AF]"
            />
          </form>

          <div className="ml-auto flex items-center gap-3 sm:gap-4">
            <span className="hidden text-sm font-semibold uppercase md:inline" style={{ ...condensed, color: "#6B7280" }}>
              {today}
            </span>
            {alertCount > 0 && (
              <Link
                href="/portal/properties?filter=action"
                className="hidden items-center gap-2 px-2.5 py-1 text-xs font-semibold sm:flex"
                style={{ background: "rgba(245,158,11,.14)", color: "#96620a" }}
              >
                <span className="h-[7px] w-[7px]" style={{ background: "#F59E0B" }} />
                {alertCount} need{alertCount === 1 ? "s" : ""} action
              </Link>
            )}
            <LogoutButton />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-4 pb-14 pt-6 sm:px-8 sm:pt-[30px]">
          <div className="mx-auto" style={{ maxWidth: 1280 }}>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
