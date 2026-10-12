"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * "Book online" link for partner pages. The page is statically generated, so
 * the visitor's utm_* params are read in the browser at click time and passed
 * through to /book alongside the partner ref code. Without JS the plain href
 * (with the ref code) still works.
 */
export function PartnerBookLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const router = useRouter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const incoming = new URLSearchParams(window.location.search);
    const url = new URL(href, window.location.origin);
    let added = false;
    for (const [key, value] of incoming) {
      if (key.startsWith("utm_")) {
        url.searchParams.set(key, value);
        added = true;
      }
    }
    if (!added) return;
    e.preventDefault();
    router.push(url.pathname + url.search);
  }

  return (
    <Link href={href} onClick={handleClick} className={cn(buttonVariants({ variant: "cta", size: "lg" }), className)}>
      {children}
    </Link>
  );
}
