import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import { ALL_BOROUGHS } from "@/lib/borough-data";
import { getLocationService } from "@/lib/location-services";

/**
 * "[Service] in every London borough" — 33-link grid shared by every main
 * service page. Reads the service's name/urlPrefix from the registry, so
 * adding or renaming a service needs no change here.
 */
export function ServiceBoroughGrid({ serviceKey }: { serviceKey: string }) {
  const service = getLocationService(serviceKey);
  if (!service) return null;

  return (
    <section aria-labelledby="borough-grid-heading">
      <Heading level={2} id="borough-grid-heading" className="mb-2">
        {service.shortName} in every London borough
      </Heading>
      <p className="text-brand-grey mb-6">
        Fixed-price {service.shortName.toLowerCase()}, available across all
        33 London boroughs. Select your borough for local pricing and
        availability.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {ALL_BOROUGHS.map((borough) => (
          <Link
            key={borough.slug}
            href={`${service.urlPrefix}/${borough.slug}`}
            className="text-sm text-brand-charcoal border border-border rounded-lg px-3 py-2 hover:border-compliance-blue hover:text-compliance-blue transition-colors"
          >
            {borough.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
