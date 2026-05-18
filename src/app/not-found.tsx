import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/ui/nav-bar";
import { Footer } from "@/components/ui/footer";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page Not Found — My Landlord Certificate",
  robots: { index: false },
};

const helpLinks = [
  { label: "EICR Certificate", href: "/eicr", sub: "From £67.99" },
  { label: "Gas Safety Certificate", href: "/gas-safety-certificate", sub: "From £49.99" },
  { label: "EPC Certificate", href: "/epc", sub: "From £89.99" },
  { label: "Fire Risk Assessment", href: "/fire-risk-assessment", sub: "From £74" },
  { label: "Pricing", href: "/pricing", sub: "All services & prices" },
  { label: "How It Works", href: "/#how-it-works", sub: "3-step process" },
];

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="flex-1 bg-warm-white">
        <Container className="py-24 md:py-32 text-center max-w-2xl">
          {/* 404 number */}
          <p
            aria-hidden="true"
            className="text-[8rem] md:text-[10rem] font-bold leading-none text-compliance-blue/10 select-none mb-4"
          >
            404
          </p>

          <Heading level={1} className="mb-3">
            Page not found
          </Heading>
          <p className="text-brand-grey leading-relaxed mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Try one
            of the links below, or go back to the homepage.
          </p>

          {/* Quick links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10 text-left">
            {helpLinks.map(({ label, href, sub }) => (
              <Link
                key={href}
                href={href}
                className="rounded-xl border border-border bg-white px-4 py-3 hover:border-compliance-blue transition-colors group"
              >
                <p className="text-sm font-semibold text-brand-charcoal group-hover:text-compliance-blue transition-colors">
                  {label}
                </p>
                <p className="text-xs text-brand-grey mt-0.5">{sub}</p>
              </Link>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
              Back to homepage
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              Contact us
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
