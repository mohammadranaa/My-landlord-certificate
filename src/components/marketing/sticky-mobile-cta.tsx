"use client";

import Link from "next/link";

interface StickyMobileCtaProps {
  href: string;
  label: string;
  price: number;
}

export function StickyMobileCta({ href, label, price }: StickyMobileCtaProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border px-4 py-3 flex items-center gap-3 shadow-lg">
      <div className="flex-1 min-w-0">
        <p className="text-xs text-brand-grey truncate">{label}</p>
        <p className="text-brand-charcoal font-bold">from £{price}</p>
      </div>
      <Link
        href={href}
        className="shrink-0 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
      >
        Book now
      </Link>
    </div>
  );
}
