"use client";

import Link from "next/link";
import { Dialog } from "@base-ui/react/dialog";
import { cn } from "@/lib/utils";

export interface NavLink {
  href: string;
  label: string;
}

interface NavBarProps {
  links?: NavLink[];
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
}

const defaultLinks: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
];

/**
 * Sticky top navigation bar.
 * Desktop: logo · nav links · "Book Now" CTA.
 * Mobile: logo + hamburger that opens an accessible full-height dialog menu.
 *
 * @example
 *   // In a layout file:
 *   <NavBar ctaHref="/book" ctaLabel="Book Now" />
 */
export function NavBar({
  links = defaultLinks,
  ctaHref = "/book",
  ctaLabel = "Book Now",
  className,
}: NavBarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-white border-b border-border shadow-sm",
        className,
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-lg text-compliance-blue shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2 rounded-sm"
        >
          My Landlord Certificate
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-7" role="list">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="listitem"
              className="text-sm font-medium text-brand-charcoal hover:text-compliance-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href={ctaHref}
          className="hidden md:inline-flex items-center bg-compliance-blue hover:bg-brand-blue-dark text-white font-semibold px-5 py-2 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2"
        >
          {ctaLabel}
        </Link>

        {/* Mobile hamburger + full-screen dialog menu */}
        <Dialog.Root>
          <Dialog.Trigger
            aria-label="Open navigation menu"
            className="md:hidden p-2 -mr-2 text-brand-charcoal hover:text-compliance-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-md"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Dialog.Trigger>

          <Dialog.Portal>
            {/* Backdrop */}
            <Dialog.Backdrop className="fixed inset-0 bg-black/40 z-40" />

            {/* Slide-in panel from right */}
            <Dialog.Popup className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl flex flex-col">
              <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>

              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <span className="font-bold text-compliance-blue">
                  My Landlord Certificate
                </span>
                <Dialog.Close
                  aria-label="Close navigation menu"
                  className="p-2 -mr-2 text-brand-grey hover:text-brand-charcoal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue rounded-md"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M18 6L6 18M6 6l12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Dialog.Close>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 flex-1 px-3 py-4 overflow-y-auto">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-base font-medium text-brand-charcoal hover:text-compliance-blue hover:bg-compliance-blue/5 rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="px-5 py-5 border-t border-border">
                <Link
                  href={ctaHref}
                  className="block text-center bg-compliance-blue hover:bg-brand-blue-dark text-white font-semibold px-5 py-3 rounded-xl text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-compliance-blue focus-visible:ring-offset-2"
                >
                  {ctaLabel}
                </Link>
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
