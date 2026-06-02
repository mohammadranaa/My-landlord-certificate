import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/shared/json-ld";
import {
  getAllPosts,
  getRawPost,
  getRelatedPosts,
  extractHeadings,
  formatDate,
  CATEGORY_STYLES,
  CATEGORY_GRADIENT,
  type PostFaq,
} from "@/lib/blog";
import {
  getPriceForEICR,
  getPriceForGasSafety,
  getPriceForEPC,
  getPriceForFRA,
  getPriceForPAT,
  ADDITIONAL_CHARGES,
} from "@/lib/pricing";

const BASE = "https://www.mylandlordcertificate.co.uk";

// ── Static params ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getRawPost(slug);
  if (!post) return {};
  const { frontmatter: fm } = post;
  return {
    title: fm.title,
    description: fm.description,
    keywords: fm.keywords,
    alternates: { canonical: `${BASE}/blog/${slug}` },
    openGraph: {
      title: fm.title,
      description: fm.description,
      url: `${BASE}/blog/${slug}`,
      type: "article",
      publishedTime: fm.date,
    },
    twitter: { title: fm.title, description: fm.description },
  };
}

// ── MDX custom components ─────────────────────────────────────────────────────

function MidArticleCTA() {
  return (
    <div className="my-10 rounded-2xl bg-compliance-blue p-6 text-white not-prose">
      <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-2">
        Need an EICR?
      </p>
      <p className="text-xl font-bold mb-1">
        Book from £{getPriceForEICR("studio")} — certificate emailed same day
      </p>
      <p className="text-blue-100 text-sm mb-5">
        NICEIC approved engineers. Fixed price. All 33 London boroughs covered.
      </p>
      <Link
        href="/eicr"
        className="inline-flex items-center bg-action-green text-brand-charcoal font-bold px-6 py-2.5 rounded-xl hover:bg-brand-green-dark transition-colors text-sm"
      >
        Book your EICR →
      </Link>
    </div>
  );
}

function FAQList({ items }: { items: PostFaq[] }) {
  if (!items?.length) return null;
  return (
    <div className="mt-10 not-prose">
      <h2 className="text-2xl font-bold text-brand-charcoal mb-6">
        Frequently Asked Questions
      </h2>
      <dl className="space-y-6">
        {items.map((faq) => (
          <div key={faq.question} className="border-b border-border pb-6 last:border-0 last:pb-0">
            <dt className="font-semibold text-brand-charcoal mb-2">{faq.question}</dt>
            <dd className="text-brand-charcoal/80 leading-relaxed text-[0.9375rem]">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// Prose element overrides passed to compileMDX
const proseComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = typeof children === "string" ? children : String(children ?? "");
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return (
      <h2
        id={id}
        className="scroll-mt-24 text-2xl font-bold text-brand-charcoal mt-10 mb-4"
        {...props}
      >
        {children}
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-xl font-semibold text-brand-charcoal mt-8 mb-3" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-brand-charcoal/80 leading-relaxed mb-5 text-[0.9375rem]" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 mb-5 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 mb-5 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-brand-charcoal/80 leading-relaxed text-[0.9375rem]" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-brand-charcoal" {...props}>
      {children}
    </strong>
  ),
  a: ({ href = "#", children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      className="text-compliance-blue hover:underline"
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-l-4 border-compliance-blue pl-5 italic text-brand-grey my-6"
      {...props}
    >
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="bg-compliance-blue text-white" {...props}>
      {children}
    </thead>
  ),
  th: ({ children, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className="px-4 py-3 text-left font-semibold text-sm"
      scope="col"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 border-b border-border text-brand-charcoal/80" {...props}>
      {children}
    </td>
  ),
  tr: ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="even:bg-warm-white" {...props}>
      {children}
    </tr>
  ),
  MidArticleCTA,
  FAQList,
};

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const raw = getRawPost(slug);
  if (!raw) notFound();

  const { frontmatter: fm, content: rawContent } = raw;
  const headings = extractHeadings(rawContent);
  const related = getRelatedPosts(slug, fm.category);

  const { content } = await compileMDX({
    source: rawContent,
    options: {
      scope: {
        // Pricing scope variables — MDX uses {eicrFrom} etc.
        eicrFrom: getPriceForEICR("studio"),
        eicrStudio: getPriceForEICR("studio"),
        eicr13bed: getPriceForEICR("1-3bed"),
        eicr4bed: getPriceForEICR("4bed"),
        eicr5bed: getPriceForEICR("5bed"),
        gasFrom: getPriceForGasSafety(1),
        epcFrom: getPriceForEPC("studio"),
        epc13bed: getPriceForEPC("1-3bed"),
        fraFrom: getPriceForFRA("studio"),
        fra13bed: getPriceForFRA("1-3bed"),
        patFrom: getPriceForPAT(1),
        congestionZone: ADDITIONAL_CHARGES.congestionZone,
        parking: ADDITIONAL_CHARGES.parking,
        faqs: fm.faqs ?? [],
      },
    },
    components: proseComponents,
  });

  const badgeClass = CATEGORY_STYLES[fm.category] ?? "bg-brand-charcoal text-white";
  const gradient = CATEGORY_GRADIENT[fm.category] ?? "from-brand-charcoal to-slate-800";

  // ── Schema ──────────────────────────────────────────────────────────────────
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: fm.title,
    description: fm.description,
    datePublished: fm.date,
    dateModified: fm.date,
    author: { "@type": "Organization", name: fm.author },
    publisher: {
      "@type": "Organization",
      name: "My Landlord Certificate",
      url: BASE,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: fm.title, item: `${BASE}/blog/${slug}` },
    ],
  };

  const schemas: object[] = [articleSchema, breadcrumbSchema];
  if (fm.faqs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: fm.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <JsonLd key={i} data={schema as Record<string, unknown>} />
      ))}

      {/* Article header */}
      <div className={`bg-gradient-to-br ${gradient} py-14 md:py-20`}>
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white/80 truncate max-w-[200px]">{fm.title}</li>
            </ol>
          </nav>

          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass} mb-4 inline-block`}>
            {fm.category}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4 mb-5 max-w-3xl leading-tight">
            {fm.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm">
            <span>{fm.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={fm.date}>{formatDate(fm.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{fm.readTime}</span>
          </div>
        </Container>
      </div>

      {/* Article body */}
      <Container>
        <div className="py-12 lg:grid lg:grid-cols-[1fr_260px] lg:gap-14 lg:items-start">
          {/* ── Prose content ── */}
          <article aria-label={fm.title}>
            {content}

            {/* End CTA */}
            <div className="mt-12 rounded-2xl border border-compliance-blue/20 bg-compliance-blue/5 p-7 not-prose">
              <p className="text-sm font-semibold text-compliance-blue uppercase tracking-wider mb-2">
                Ready to book?
              </p>
              <p className="text-xl font-bold text-brand-charcoal mb-1">
                Book your landlord certificate online
              </p>
              <p className="text-brand-charcoal/70 text-sm mb-5">
                Fixed prices. Next-day appointments. Certificate emailed same day. All 33
                London boroughs covered.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center bg-compliance-blue text-white font-bold px-6 py-2.5 rounded-xl hover:bg-brand-blue-dark transition-colors text-sm"
                >
                  Book now
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center border border-border text-brand-charcoal font-medium px-6 py-2.5 rounded-xl hover:border-compliance-blue hover:text-compliance-blue transition-colors text-sm"
                >
                  View all prices
                </Link>
              </div>
            </div>
          </article>

          {/* ── TOC sidebar ── */}
          {headings.length > 0 && (
            <aside
              aria-label="Table of contents"
              className="hidden lg:block sticky top-24 self-start"
            >
              <div className="rounded-2xl border border-border p-5 bg-white">
                <p className="text-xs font-bold text-brand-charcoal uppercase tracking-widest mb-4">
                  On this page
                </p>
                <nav>
                  <ul className="space-y-2">
                    {headings.map((h) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="text-sm text-brand-charcoal/70 hover:text-compliance-blue transition-colors leading-snug block py-0.5"
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Sidebar CTA */}
              <div className="mt-5 rounded-2xl bg-compliance-blue p-5 text-white">
                <p className="font-bold mb-1 text-sm">Book your EICR</p>
                <p className="text-blue-100 text-xs mb-4 leading-relaxed">
                  From £{getPriceForEICR("studio")} · Same-day certificate
                </p>
                <Link
                  href="/book"
                  className="block text-center bg-action-green text-brand-charcoal font-bold px-4 py-2 rounded-lg hover:bg-brand-green-dark transition-colors text-sm"
                >
                  Book now
                </Link>
              </div>
            </aside>
          )}
        </div>
      </Container>

      {/* Related posts */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="bg-warm-white border-t border-border py-14">
          <Container>
            <h2 id="related-heading" className="text-xl font-bold text-brand-charcoal mb-8">
              Related articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((post) => {
                const relGradient = CATEGORY_GRADIENT[post.category] ?? "from-brand-charcoal to-slate-800";
                const relBadge = CATEGORY_STYLES[post.category] ?? "bg-brand-charcoal text-white";
                return (
                  <article
                    key={post.slug}
                    className="group rounded-2xl border border-border bg-white overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className={`h-32 bg-gradient-to-br ${relGradient} flex items-end p-4`}>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${relBadge}`}>
                        {post.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-brand-grey mb-2">{formatDate(post.date)}</p>
                      <Link href={`/blog/${post.slug}`} className="group-hover:text-compliance-blue transition-colors">
                        <h3 className="font-bold text-brand-charcoal text-sm leading-snug line-clamp-3">
                          {post.title}
                        </h3>
                      </Link>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-3 inline-block text-xs font-semibold text-compliance-blue hover:underline"
                      >
                        Read article →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
