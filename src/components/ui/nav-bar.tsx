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
      { href: "/electrical-diagnostic", label: "Electrical Diagnostic", price: FROM_PRICES["electrical-diagnostic"] },
      { href: "/fuse-box-installation", label: "Fuse Box Installation", price: FROM_PRICES["fuse-box"] },
      { href: "/emergency-lights-certificate", label: "Emergency Lights Cert", price: FROM_PRICES.elc },
      { href: "/pat-testing", label: "PAT Testing", price: FROM_PRICES.pat },
    ],
  },
  {
    slug: "gas-safety",
    label: "Gas Safety",
    href: "/gas-safety",
    services: [
      { href: "/gas-safety/cp12", label: "Gas Safety (CP12)", price: FROM_PRICES["gas-safety-cp12"] },
      { href: "/gas-safety/cp42", label: "Commercial Gas (CP42)", price: FROM_PRICES["gas-safety-cp42"] },
      { href: "/boiler-installation", label: "Boiler Installation", price: FROM_PRICES["boiler-installation"] },
    ],
  },
  {
    slug: "fire-safety",
    label: "Fire Safety",
    href: "/fire-safety",
    services: [
      { href: "/fire-safety-certificate", label: "Fire Safety Certificate", price: FROM_PRICES["fire-safety-cert"] },
      { href: "/fire-risk-assessment", label: "Fire Risk Assessment", price: FROM_PRICES["fra-residential"] },
      { href: "/fire-alarm-installation", label: "Fire Alarm Installation", price: FROM_PRICES["fire-alarm-installation"] },
      { href: "/fire-door-certificate", label: "Fire Door Certificate", price: FROM_PRICES["fire-door-cert"] },
      { href: "/fire-extinguisher-testing", label: "Fire Extinguisher Testing", price: FROM_PRICES["fire-extinguisher"] },
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
  { href: "/contact", label: "Contact" },
] as const;

// ── Icon helpers ───────────────────────────────────────────────────────────────

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

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("w-4 h-4 shrink-0", className)} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2 3a1 1 0 011-1h2.5a1 1 0 011 1v1.586a1 1 0 01-.293.707l-1 1a8.001 8.001 0 004.5 4.5l1-1a1 1 0 01.707-.293H14a1 1 0 011 1V13a1 1 0 01-1 1h-1C6.268 14 2 9.732 2 4.5V3z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("w-5 h-5", className)} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={cn("w-5 h-5", className)} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2 rounded-sm"
        >
          <Image
            src="/logo.svg"
            alt="My Landlord Certificate"
            width={160}
            height={64}
            priority
            unoptimized
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* ── Desktop centre nav ── */}
        <div className="hidden lg:flex items-center gap-5 flex-1 justify-center">
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

        {/* ── Desktop right: contact + CTA ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/443301330066"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="p-1.5 text-brand-charcoal hover:text-compliance-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="tel:03301330066"
            className="flex items-center gap-1.5 text-sm font-medium text-brand-charcoal hover:text-compliance-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm"
          >
            <PhoneIcon />
            <span>0330 133 0066</span>
          </a>
          <a
            href="mailto:info@mylandlordcertificate.co.uk"
            aria-label="Email us"
            className="p-1.5 text-brand-charcoal hover:text-compliance-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm"
          >
            <EmailIcon />
          </a>
          <Link
            href="/book"
            className="inline-flex items-center bg-action-green text-brand-charcoal font-semibold px-5 py-2 rounded-lg text-sm transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2"
          >
            Book Now
          </Link>
        </div>

        {/* ── Mobile: icons + CTA + hamburger ── */}
        <div className="flex lg:hidden items-center gap-1.5 ml-auto">
          <a
            href="https://wa.me/443301330066"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp us"
            className="p-2 text-brand-charcoal hover:text-compliance-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-md"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="tel:03301330066"
            aria-label="Call us"
            className="p-2 text-brand-charcoal hover:text-compliance-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-md"
          >
            <PhoneIcon />
          </a>
          <Link
            href="/book"
            className="inline-flex items-center bg-action-green text-brand-charcoal font-semibold px-3 py-1.5 rounded-lg text-sm transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2"
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
                      src="/logo.svg"
                      alt="My Landlord Certificate"
                      width={140}
                      height={56}
                      unoptimized
                      className="h-14 w-auto object-contain"
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
                    className="block text-center bg-action-green text-brand-charcoal font-semibold px-5 py-3 rounded-xl text-base transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2"
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
                      {link.label}
                    </Link>
                  ))}
                </nav>
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
