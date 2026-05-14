import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import {
  getAllPosts,
  CATEGORIES,
  CATEGORY_STYLES,
  CATEGORY_GRADIENT,
  formatDate,
  type PostFrontmatter,
  type BlogCategory,
} from "@/lib/blog";
import { JsonLd } from "@/components/shared/json-ld";

export const metadata: Metadata = {
  title: "Landlord Compliance Blog — Guides, Tips & Updates",
  description:
    "Expert guides on EICR, Gas Safety Certificates, EPCs and UK landlord compliance. Plain-English advice to help you stay legal and protect your rental property.",
  alternates: { canonical: "https://mylandlordcertificate.co.uk/blog" },
  openGraph: {
    title: "Landlord Compliance Blog — Guides, Tips & Updates",
    description:
      "Expert guides on EICR, Gas Safety Certificates, EPCs and UK landlord compliance.",
    url: "https://mylandlordcertificate.co.uk/blog",
  },
  twitter: {
    title: "Landlord Compliance Blog — Guides, Tips & Updates",
    description:
      "Expert guides on EICR, Gas Safety Certificates, EPCs and UK landlord compliance.",
  },
};

const POSTS_PER_PAGE = 9;
const BASE = "https://mylandlordcertificate.co.uk";

// ── Post card ─────────────────────────────────────────────────────────────────

function PostCard({ post }: { post: PostFrontmatter }) {
  const gradient = CATEGORY_GRADIENT[post.category] ?? "from-brand-charcoal to-slate-800";
  const badge = CATEGORY_STYLES[post.category] ?? "bg-brand-charcoal text-white";

  return (
    <article className="group flex flex-col rounded-2xl border border-border overflow-hidden bg-white hover:shadow-lg transition-shadow duration-200">
      {/* Thumbnail placeholder */}
      <div className={`h-44 bg-gradient-to-br ${gradient} flex items-end p-5`}>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badge}`}>
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-center gap-3 text-xs text-brand-grey">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>

        <Link href={`/blog/${post.slug}`} className="group-hover:text-compliance-blue transition-colors">
          <h2 className="text-base font-bold text-brand-charcoal leading-snug line-clamp-3">
            {post.title}
          </h2>
        </Link>

        <p className="text-sm text-brand-charcoal/70 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="text-sm font-semibold text-compliance-blue hover:underline self-start mt-1"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}

// ── Pagination ─────────────────────────────────────────────────────────────────

function Pagination({
  currentPage,
  totalPages,
  category,
}: {
  currentPage: number;
  totalPages: number;
  category: string;
}) {
  if (totalPages <= 1) return null;

  const catParam = category !== "All" ? `&category=${encodeURIComponent(category)}` : "";

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(
    (p) => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1,
  );

  const withEllipsis: (number | "…")[] = [];
  pages.forEach((p, i) => {
    if (i > 0 && p - (pages[i - 1] as number) > 1) withEllipsis.push("…");
    withEllipsis.push(p);
  });

  return (
    <nav aria-label="Blog pagination" className="flex justify-center items-center gap-2 mt-12">
      <Link
        href={`/blog?page=${currentPage - 1}${catParam}`}
        aria-label="Previous page"
        aria-disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
          currentPage === 1
            ? "pointer-events-none border-border text-brand-grey/40"
            : "border-border text-brand-charcoal hover:border-compliance-blue hover:text-compliance-blue"
        }`}
      >
        ← Prev
      </Link>

      {withEllipsis.map((item, i) =>
        item === "…" ? (
          <span key={`ellipsis-${i}`} className="px-2 text-brand-grey">
            …
          </span>
        ) : (
          <Link
            key={item}
            href={`/blog?page=${item}${catParam}`}
            aria-label={`Page ${item}`}
            aria-current={item === currentPage ? "page" : undefined}
            className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium border transition-colors ${
              item === currentPage
                ? "bg-compliance-blue text-white border-compliance-blue"
                : "border-border text-brand-charcoal hover:border-compliance-blue hover:text-compliance-blue"
            }`}
          >
            {item}
          </Link>
        ),
      )}

      <Link
        href={`/blog?page=${currentPage + 1}${catParam}`}
        aria-label="Next page"
        aria-disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
          currentPage === totalPages
            ? "pointer-events-none border-border text-brand-grey/40"
            : "border-border text-brand-charcoal hover:border-compliance-blue hover:text-compliance-blue"
        }`}
      >
        Next →
      </Link>
    </nav>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>;
}) {
  const { category: rawCategory = "All", page: rawPage = "1" } = await searchParams;

  const category: BlogCategory = (CATEGORIES as readonly string[]).includes(rawCategory)
    ? (rawCategory as BlogCategory)
    : "All";

  const currentPage = Math.max(1, parseInt(rawPage, 10) || 1);

  const allPosts = getAllPosts();
  const filtered =
    category === "All" ? allPosts : allPosts.filter((p) => p.category === category);
  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const page = Math.min(currentPage, totalPages);
  const posts = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section aria-labelledby="blog-heading" className="bg-brand-charcoal py-14 md:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-blue-200/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">›</li>
              <li className="text-white font-medium">Blog</li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <Heading level={1} id="blog-heading" inverted className="mb-4">
              Landlord Compliance Blog
            </Heading>
            <p className="text-blue-100 text-lg leading-relaxed">
              Plain-English guides on EICR, Gas Safety, EPC and every certificate UK
              landlords need. Written by compliance experts, updated for 2026.
            </p>
          </div>
        </Container>
      </section>

      {/* Category filter */}
      <div className="border-b border-border bg-white sticky top-16 z-30">
        <Container>
          <nav
            aria-label="Filter by category"
            className="flex gap-1 overflow-x-auto py-3 scrollbar-none"
          >
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  category === cat
                    ? "bg-compliance-blue text-white"
                    : "text-brand-charcoal hover:bg-compliance-blue/10 hover:text-compliance-blue"
                }`}
                aria-current={category === cat ? "page" : undefined}
              >
                {cat}
              </Link>
            ))}
          </nav>
        </Container>
      </div>

      {/* Posts grid */}
      <Section spacing="lg" className="bg-warm-white">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-brand-grey text-lg">No posts in this category yet.</p>
              <Link href="/blog" className="mt-4 inline-block text-compliance-blue hover:underline text-sm font-medium">
                View all posts →
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>

              <Pagination
                currentPage={page}
                totalPages={totalPages}
                category={category}
              />
            </>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <section className="bg-compliance-blue py-14">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <Heading level={2} inverted className="mb-4">
              Ready to book your landlord certificates?
            </Heading>
            <p className="text-blue-100 mb-8">
              NICEIC approved engineers. Fixed prices. Certificates emailed the same day.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center bg-action-green text-brand-charcoal font-bold px-8 py-3.5 rounded-xl hover:bg-brand-green-dark transition-colors text-base"
            >
              Book now
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
