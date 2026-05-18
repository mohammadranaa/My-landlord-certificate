"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";
import { FROM_PRICES } from "@/lib/pricing";

// ── Nav data ──────────────────────────────────────────────────────────────────

const categories = [
  {
    slug: "electrical-safety",
    label: "Electrical Safety",
    href: "/electrical-safety",
    services: [
      { href: "/electrical-safety/domestic-eicr", label: "Domestic EICR", price: FROM_PRICES.eicr },
      { href: "/electrical-safety/commercial-eicr", label: "Commercial EICR", price: FROM_PRICES["commercial-eicr"] },
      { href: "/electrical-safety/electrical-diagnostic", label: "Electrical Diagnostic", price: FROM_PRICES["electrical-diagnostic"] },
      { href: "/electrical-safety/fuse-box-installation", label: "Fuse Box Installation", price: FROM_PRICES["fuse-box"] },
      { href: "/electrical-safety/emergency-lights-certificate", label: "Emergency Lights Cert", price: FROM_PRICES.elc },
      { href: "/electrical-safety/pat-testing", label: "PAT Testing", price: FROM_PRICES.pat },
    ],
  },
  {
    slug: "gas-safety",
    label: "Gas Safety",
    href: "/gas-safety",
    services: [
      { href: "/gas-safety/cp12", label: "Gas Safety (CP12)", price: FROM_PRICES["gas-safety-cp12"] },
      { href: "/gas-safety/cp42", label: "Commercial Gas (CP42)", price: FROM_PRICES["gas-safety-cp42"] },
      { href: "/gas-safety/boiler-installation", label: "Boiler Installation", price: FROM_PRICES["boiler-installation"] },
    ],
  },
  {
    slug: "fire-safety",
    label: "Fire Safety",
    href: "/fire-safety",
    services: [
      { href: "/fire-safety/fire-safety-certificate", label: "Fire Safety Certificate", price: FROM_PRICES["fire-safety-cert"] },
      { href: "/fire-safety/fire-risk-assessment", label: "Fire Risk Assessment", price: FROM_PRICES["fra-residential"] },
      { href: "/fire-safety/fire-alarm-installation", label: "Fire Alarm Installation", price: FROM_PRICES["fire-alarm-installation"] },
      { href: "/fire-safety/fire-door-certificate", label: "Fire Door Certificate", price: FROM_PRICES["fire-door-cert"] },
      { href: "/fire-safety/fire-extinguisher-testing", label: "Fire Extinguisher Testing", price: FROM_PRICES["fire-extinguisher"] },
    ],
  },
  {
    slug: "epc",
    label: "EPC",
    href: "/epc",
    services: [
      { href: "/epc/domestic-epc", label: "Domestic EPC", price: FROM_PRICES.epc },
      { href: "/epc/commercial-epc", label: "Commercial EPC", price: FROM_PRICES["commercial-epc"] },
    ],
  },
] as const;

const asbestos = {
  href: "/asbestos-survey",
  label: "Asbestos Survey",
  price: FROM_PRICES["asbestos-survey"],
} as const;

const topLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/letting-agents", label: "Letting Agents" },
] as const;

// ── Chevron icon ──────────────────────────────────────────────────────────────

function Chevron({ rotated }: { rotated: boolean }) {
  return (
    <svg
      className={cn("w-3.5 h-3.5 transition-transform duration-150", rotated && "rotate-180")}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 4l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── NavBar ────────────────────────────────────────────────────────────────────

export function NavBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const anyServiceActive =
    categories.some((cat) => isActive(cat.href) || cat.services.some((s) => isActive(s.href))) ||
    isActive(asbestos.href);

  const openMega = useCallback(() => {
    clearTimeout(closeTimer.current);
    setIsMegaOpen(true);
  }, []);

  const scheduledClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setIsMegaOpen(false), 120);
  }, []);

  const closeMega = useCallback(() => {
    clearTimeout(closeTimer.current);
    setIsMegaOpen(false);
  }, []);

  return (
    <header
      className={cn("sticky top-0 z-50 bg-white border-b border-border shadow-sm", className)}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2 rounded-sm"
        >
          <Image
            src="/Logo.jpg"
            alt="My Landlord Certificate"
            width={220}
            height={60}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">

          {/* Services mega-menu trigger */}
          <button
            aria-haspopup="true"
            aria-expanded={isMegaOpen}
            onMouseEnter={openMega}
            onMouseLeave={scheduledClose}
            onFocus={openMega}
            onBlur={scheduledClose}
            onClick={() => setIsMegaOpen((o) => !o)}
            className={cn(
              "flex items-center gap-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm",
              anyServiceActive
                ? "text-compliance-blue"
                : "text-brand-charcoal hover:text-compliance-blue",
            )}
          >
            Services
            <Chevron rotated={isMegaOpen} />
          </button>

          {/* Other nav links */}
          {topLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm whitespace-nowrap",
                isActive(link.href)
                  ? "text-compliance-blue"
                  : "text-brand-charcoal hover:text-compliance-blue",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <Link
          href="/book"
          className="hidden lg:inline-flex items-center shrink-0 bg-compliance-blue hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2"
        >
          Book Now
        </Link>

        {/* ── Mobile: CTA + hamburger ── */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          <Link
            href="/book"
            className="inline-flex items-center bg-compliance-blue text-white font-semibold px-4 py-1.5 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2"
          >
            Book Now
          </Link>

          <Dialog.Root onOpenChange={(open) => { if (!open) setOpenMobileCategory(null); }}>
            <Dialog.Trigger
              aria-label="Open navigation menu"
              className="p-2 -mr-2 text-brand-charcoal hover:text-compliance-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-md"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Backdrop className="fixed inset-0 bg-black/40 z-40" />

              <Dialog.Popup className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl flex flex-col">
                <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>

                {/* Panel header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                  <Link
                    href="/"
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm"
                  >
                    <Image
                      src="/Logo.jpg"
                      alt="My Landlord Certificate"
                      width={180}
                      height={48}
                      className="h-12 w-auto object-contain"
                    />
                  </Link>
                  <Dialog.Close
                    aria-label="Close navigation menu"
                    className="p-2 -mr-2 text-brand-grey hover:text-brand-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-md"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </Dialog.Close>
                </div>

                {/* Book Now */}
                <div className="px-4 pt-4 pb-2">
                  <Link
                    href="/book"
                    className="block text-center bg-compliance-blue hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-xl text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2"
                  >
                    Book Now
                  </Link>
                </div>

                {/* Nav links */}
                <nav
                  className="flex flex-col gap-0.5 flex-1 px-3 py-2 overflow-y-auto"
                  aria-label="Mobile navigation"
                >
                  {/* Category accordions */}
                  {categories.map((cat) => {
                    const isOpen = openMobileCategory === cat.slug;
                    const catActive =
                      isActive(cat.href) || cat.services.some((s) => isActive(s.href));
                    return (
                      <div key={cat.slug}>
                        <button
                          aria-expanded={isOpen}
                          onClick={() =>
                            setOpenMobileCategory(isOpen ? null : cat.slug)
                          }
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
                            catActive
                              ? "text-compliance-blue bg-compliance-blue/5"
                              : "text-brand-charcoal hover:text-compliance-blue hover:bg-compliance-blue/5",
                          )}
                        >
                          {cat.label}
                          <Chevron rotated={isOpen} />
                        </button>

                        {isOpen && (
                          <div className="mt-0.5 ml-3 pl-3 border-l-2 border-compliance-blue/20 flex flex-col gap-0.5">
                            <Link
                              href={cat.href}
                              className={cn(
                                "px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
                                isActive(cat.href)
                                  ? "text-compliance-blue bg-compliance-blue/5"
                                  : "text-compliance-blue hover:bg-compliance-blue/5",
                              )}
                            >
                              All {cat.label} →
                            </Link>
                            {cat.services.map((svc) => (
                              <Link
                                key={svc.href}
                                href={svc.href}
                                className={cn(
                                  "flex items-center justify-between px-4 py-2.5 rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
                                  isActive(svc.href)
                                    ? "text-compliance-blue bg-compliance-blue/5 font-medium"
                                    : "text-brand-charcoal hover:text-compliance-blue hover:bg-compliance-blue/5",
                                )}
                              >
                                <span>{svc.label}</span>
                                <span className="text-xs text-brand-grey shrink-0 ml-2">
                                  {svc.price}
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  {/* Asbestos standalone */}
                  <Link
                    href={asbestos.href}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
                      isActive(asbestos.href)
                        ? "text-compliance-blue bg-compliance-blue/5"
                        : "text-brand-charcoal hover:text-compliance-blue hover:bg-compliance-blue/5",
                    )}
                  >
                    <span>{asbestos.label}</span>
                    <span className="text-xs text-brand-grey shrink-0 ml-2">{asbestos.price}</span>
                  </Link>

                  <div className="my-1 border-t border-border" />

                  {/* Other links */}
                  {topLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-4 py-3 text-base font-medium rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
                        isActive(link.href)
                          ? "text-compliance-blue bg-compliance-blue/5"
                          : "text-brand-charcoal hover:text-compliance-blue hover:bg-compliance-blue/5",
                      )}
                    >
                      {link.label === "Letting Agents" ? "For Letting Agents" : link.label}
                    </Link>
                  ))}
                </nav>

                {/* Phone */}
                <div className="px-5 py-4 border-t border-border">
                  <a
                    href="tel:03301330066"
                    className="flex items-center gap-2 text-sm text-brand-charcoal hover:text-compliance-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm"
                  >
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M2 3a1 1 0 011-1h2.5a1 1 0 011 1v1.586a1 1 0 01-.293.707l-1 1a8.001 8.001 0 004.5 4.5l1-1a1 1 0 01.707-.293H14a1 1 0 011 1V13a1 1 0 01-1 1h-1C6.268 14 2 9.732 2 4.5V3z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="font-medium">0330 133 0066</span>
                  </a>
                </div>
              </Dialog.Popup>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>

      {/* ── Desktop mega-menu panel ── */}
      <div
        onMouseEnter={openMega}
        onMouseLeave={scheduledClose}
        className={cn(
          "absolute inset-x-0 top-full bg-white border-b border-border shadow-xl z-40 transition-all duration-150",
          isMegaOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!isMegaOpen}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div key={cat.slug}>
                <Link
                  href={cat.href}
                  onClick={closeMega}
                  className={cn(
                    "block text-sm font-semibold pb-2.5 mb-3 border-b border-border transition-colors",
                    isActive(cat.href)
                      ? "text-compliance-blue"
                      : "text-brand-charcoal hover:text-compliance-blue",
                  )}
                >
                  {cat.label}
                </Link>
                <ul className="flex flex-col gap-0.5">
                  {cat.services.map((svc) => (
                    <li key={svc.href}>
                      <Link
                        href={svc.href}
                        onClick={closeMega}
                        className={cn(
                          "flex items-center justify-between py-1.5 px-2 -mx-2 rounded-lg text-sm transition-colors",
                          isActive(svc.href)
                            ? "text-compliance-blue font-medium"
                            : "text-brand-charcoal hover:text-compliance-blue hover:bg-compliance-blue/5",
                        )}
                      >
                        <span>{svc.label}</span>
                        <span className="text-xs text-brand-grey ml-3 shrink-0">{svc.price}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar: Asbestos + View All */}
          <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
            <Link
              href={asbestos.href}
              onClick={closeMega}
              className="flex items-center gap-2 text-sm text-brand-charcoal hover:text-compliance-blue transition-colors"
            >
              <span className="font-medium">{asbestos.label}</span>
              <span className="text-brand-grey">{asbestos.price}</span>
            </Link>
            <Link
              href="/pricing"
              onClick={closeMega}
              className="flex items-center gap-1 text-sm font-medium text-compliance-blue hover:underline"
            >
              View All Services &amp; Pricing
              <svg className="w-3.5 h-3.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2 6h8M6 2l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
