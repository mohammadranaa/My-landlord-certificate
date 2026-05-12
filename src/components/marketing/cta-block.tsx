import Link from "next/link";
import { cn } from "@/lib/utils";

interface CtaBlockProps {
  heading: string;
  subheading?: string;
  href: string;
  ctaLabel: string;
  className?: string;
}

export function CtaBlock({
  heading,
  subheading,
  href,
  ctaLabel,
  className,
}: CtaBlockProps) {
  return (
    <section
      className={cn(
        "bg-brand-blue rounded-2xl px-8 py-12 text-center text-white",
        className
      )}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
      {subheading && (
        <p className="text-blue-200 mb-8 max-w-xl mx-auto leading-relaxed">
          {subheading}
        </p>
      )}
      <Link
        href={href}
        className="inline-block bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base"
      >
        {ctaLabel}
      </Link>
    </section>
  );
}
