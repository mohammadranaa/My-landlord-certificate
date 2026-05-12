import Link from "next/link";
import { JsonLd } from "@/components/shared/json-ld";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbNav({ items }: BreadcrumbNavProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://mylandlordcertificate.co.uk",
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href
          ? { item: `https://mylandlordcertificate.co.uk${item.href}` }
          : {}),
      })),
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-4">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-grey">
          <li>
            <Link href="/" className="hover:text-brand-charcoal transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              <span aria-hidden="true">/</span>
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-brand-charcoal transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-brand-charcoal font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
