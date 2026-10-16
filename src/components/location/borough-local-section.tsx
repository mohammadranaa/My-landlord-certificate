import { Heading } from "@/components/ui/heading";
import { getBoroughLocal, type BoroughLocal, type LocalServiceKey } from "@/data/borough-local";

function formatChecked(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function LicensingTable({ local, boroughName }: { local: BoroughLocal; boroughName: string }) {
  if (local.licensing.length === 0) return null;
  return (
    <div className="mt-6">
      <p className="font-semibold text-brand-charcoal mb-3">Property licensing in {boroughName}</p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {local.licensing.map((s) => (
          <li key={s.name} className="rounded-xl border border-border bg-white p-4 text-sm">
            <p className="font-semibold text-brand-charcoal">{s.name}</p>
            <p className="text-xs text-brand-grey mb-2">
              {s.type} · {s.status}
            </p>
            <dl className="space-y-1.5 text-brand-charcoal/80">
              <div>
                <dt className="inline font-medium text-brand-charcoal">Applies to: </dt>
                <dd className="inline">{s.appliesTo}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-brand-charcoal">Area: </dt>
                <dd className="inline">{s.area}</dd>
              </div>
              <div>
                <dt className="inline font-medium text-brand-charcoal">Period: </dt>
                <dd className="inline">{s.period}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
      <p className="text-xs text-brand-grey mt-2">
        Checked {formatChecked(local.checkedOn)}. Schemes and fees change, so confirm the current position on the{" "}
        <a href={local.council.licensingUrl} target="_blank" rel="noopener" className="text-compliance-blue hover:underline">
          {local.council.name} licensing page
        </a>
        .
      </p>
    </div>
  );
}

function StockFacts({ local }: { local: BoroughLocal }) {
  if (local.stockFacts.length === 0) return null;
  return (
    <dl className="mt-6 grid gap-3 sm:grid-cols-2">
      {local.stockFacts.map((f) => (
        <div key={f.label} className="rounded-xl bg-warm-white border border-border p-4">
          <dt className="text-xs text-brand-grey">{f.label}</dt>
          <dd className="text-lg font-bold text-brand-charcoal">{f.value}</dd>
          <dd className="text-xs text-brand-grey">{f.source}</dd>
        </div>
      ))}
    </dl>
  );
}

function Sources({ local }: { local: BoroughLocal }) {
  return (
    <details className="mt-6 text-xs text-brand-grey">
      <summary className="cursor-pointer font-medium">Sources</summary>
      <ul className="mt-2 space-y-1 list-disc pl-5">
        {local.sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noopener" className="hover:underline">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function BoroughLocalSection({
  slug,
  serviceKey,
  boroughName,
}: {
  slug: string;
  serviceKey: string;
  boroughName: string;
}) {
  const local = getBoroughLocal(slug);
  if (!local) return null;
  const angle = local.serviceAngles[serviceKey as LocalServiceKey];
  const hasAngle = Boolean(angle && angle.body.length > 0);

  return (
    <section aria-labelledby="borough-local-heading">
      <Heading level={2} id="borough-local-heading" className="mb-4">
        {hasAngle ? angle.heading : `Landlord licensing and housing in ${boroughName}`}
      </Heading>
      {hasAngle && angle.body.map((p) => (
        <p key={p.slice(0, 40)} className="text-brand-charcoal/80 leading-relaxed mb-4">
          {p}
        </p>
      ))}
      <LicensingTable local={local} boroughName={boroughName} />
      <StockFacts local={local} />
      <Sources local={local} />
    </section>
  );
}

export function BoroughLocalOverview({ slug, boroughName }: { slug: string; boroughName: string }) {
  const local = getBoroughLocal(slug);
  if (!local) return null;

  return (
    <div className="mt-8">
      {local.overview.map((p) => (
        <p key={p.slice(0, 40)} className="text-brand-charcoal/80 leading-relaxed mb-4">
          {p}
        </p>
      ))}
      <LicensingTable local={local} boroughName={boroughName} />
      <StockFacts local={local} />
      <Sources local={local} />
    </div>
  );
}
