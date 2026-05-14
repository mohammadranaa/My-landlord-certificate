"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";
import { FROM_PRICES } from "@/lib/pricing";

// ── Nav data ──────────────────────────────────────────────────────────────────

const services = [
  { href: "/eicr", label: "EICR Certificate", price: FROM_PRICES["eicr"] },
  { href: "/gas-safety-certificate", label: "Gas Safety Certificate", price: FROM_PRICES["gas-safety-cp12"] },
  { href: "/epc", label: "EPC Certificate", price: FROM_PRICES["epc"] },
  { href: "/fire-risk-assessment", label: "Fire Risk Assessment", price: FROM_PRICES["fra-residential"] },
  { href: "/pat-testing", label: "PAT Testing", price: FROM_PRICES["pat"] },
  { href: "/landlord-certificates-bundle", label: "Landlord Certificates Bundle", price: "from £130" },
] as const;

const topLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/letting-agents", label: "Letting Agents" },
] as const;

// ── NavBar ────────────────────────────────────────────────────────────────────

export function NavBar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const servicesActive = services.some((s) => isActive(s.href));

  const openServices = useCallback(() => setIsServicesOpen(true), []);
  const closeServices = useCallback(() => setIsServicesOpen(false), []);

  const handleServicesBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      if (!servicesRef.current?.contains(e.relatedTarget as Node)) {
        setIsServicesOpen(false);
      }
    },
    [],
  );

  const handleServicesKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") setIsServicesOpen(false);
    },
    [],
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white border-b border-border shadow-sm",
        className,
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="font-bold text-lg text-compliance-blue shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2 rounded-sm"
        >
          My Landlord Certificate
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">

          {/* Services dropdown */}
          <div
            ref={servicesRef}
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
            onFocus={openServices}
            onBlur={handleServicesBlur}
            onKeyDown={handleServicesKeyDown}
          >
            <button
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              aria-controls="services-dropdown"
              onClick={() => setIsServicesOpen((o) => !o)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm",
                servicesActive
                  ? "text-compliance-blue"
                  : "text-brand-charcoal hover:text-compliance-blue",
              )}
            >
              Services
              <svg
                className={cn(
                  "w-3.5 h-3.5 transition-transform duration-150",
                  isServicesOpen && "rotate-180",
                )}
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
            </button>

            {/* Dropdown panel */}
            <div
              id="services-dropdown"
              role="menu"
              className={cn(
                "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-150",
                isServicesOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 -translate-y-1 pointer-events-none",
              )}
            >
              <div className="bg-white border border-border shadow-xl rounded-2xl w-72 py-2 overflow-hidden">
                {services.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    role="menuitem"
                    onClick={closeServices}
                    className={cn(
                      "flex items-center justify-between px-4 py-2.5 transition-colors",
                      isActive(svc.href)
                        ? "bg-compliance-blue/5"
                        : "hover:bg-compliance-blue/5",
                    )}
                  >
                    <span
                      className={cn(
                        "text-sm font-medium",
                        isActive(svc.href)
                          ? "text-compliance-blue"
                          : "text-brand-charcoal",
                      )}
                    >
                      {svc.label}
                    </span>
                    <span className="text-xs text-brand-grey ml-3 shrink-0">
                      {svc.price}
                    </span>
                  </Link>
                ))}

                {/* Divider + view all */}
                <div className="border-t border-border mt-1 pt-1">
                  <Link
                    href="/pricing"
                    role="menuitem"
                    onClick={closeServices}
                    className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-compliance-blue hover:bg-compliance-blue/5 transition-colors"
                  >
                    View All Services &amp; Pricing
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
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
          </div>

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

          <Dialog.Root onOpenChange={(open) => { if (!open) setMobileServicesOpen(false); }}>
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
                    className="font-bold text-compliance-blue text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm"
                  >
                    My Landlord Certificate
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

                {/* Book Now — prominent at top */}
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
                  {/* Services accordion */}
                  <div>
                    <button
                      aria-expanded={mobileServicesOpen}
                      aria-controls="mobile-services-list"
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue",
                        servicesActive
                          ? "text-compliance-blue bg-compliance-blue/5"
                          : "text-brand-charcoal hover:text-compliance-blue hover:bg-compliance-blue/5",
                      )}
                    >
                      Services
                      <svg
                        className={cn(
                          "w-4 h-4 transition-transform duration-150",
                          mobileServicesOpen && "rotate-180",
                        )}
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
                    </button>

                    {mobileServicesOpen && (
                      <div id="mobile-services-list" className="mt-0.5 ml-3 pl-3 border-l-2 border-compliance-blue/20 flex flex-col gap-0.5">
                        {services.map((svc) => (
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
                        <Link
                          href="/pricing"
                          className="flex items-center gap-1 px-4 py-2.5 text-sm font-medium text-compliance-blue hover:bg-compliance-blue/5 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue"
                        >
                          View All Services &amp; Pricing →
                        </Link>
                      </div>
                    )}
                  </div>

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

                {/* Phone number footer */}
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
    </header>
  );
}
