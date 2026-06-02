/**
 * SITEMAP POLICY — read before editing
 *
 * 1. Only list DESTINATION URLs — never redirect sources.
 *    Redirect sources are in next.config.ts redirects().
 *    If you add a redirect A→B, remove A from here.
 *
 * 2. All URLs must use www (BASE constant is www by default).
 *
 * 3. Do not include noindex pages (/privacy, /terms, /cookies,
 *    /demo, /book, /admin, /api/*).
 *
 * 4. After any URL changes, re-submit sitemap in GSC:
 *    https://search.google.com/search-console
 *    → Sitemaps → delete old → submit new
 *
 * /landlord-certificates-bundle excluded until page has sufficient content.
 */
import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://www.mylandlordcertificate.co.uk";

// All 33 London borough slugs — must match keys in eicr-[slug]/page.tsx
const boroughSlugs = [
  "barking-dagenham", "barnet", "bexley", "brent", "bromley",
  "camden", "city-of-london", "croydon", "ealing", "enfield",
  "greenwich", "hackney", "hammersmith-fulham", "haringey", "harrow",
  "havering", "hillingdon", "hounslow", "islington", "kensington-chelsea",
  "kingston-upon-thames", "lambeth", "lewisham", "merton", "newham",
  "redbridge", "richmond-upon-thames", "southwark", "sutton",
  "tower-hamlets", "waltham-forest", "wandsworth", "westminster",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Primary service pages (canonical top-level URLs) ────────────────────────
  const primaryServices: MetadataRoute.Sitemap = [
    { url: `${BASE}/eicr`,                         priority: 0.98, changeFrequency: "monthly" },
    { url: `${BASE}/gas-safety-certificate`,        priority: 0.97, changeFrequency: "monthly" },
    { url: `${BASE}/pat-testing`,          priority: 0.90, changeFrequency: "monthly" },
    { url: `${BASE}/fire-risk-assessment`, priority: 0.90, changeFrequency: "monthly" },
    { url: `${BASE}/epc`,                  priority: 0.90, changeFrequency: "monthly" },
    { url: `${BASE}/asbestos-survey`,      priority: 0.80, changeFrequency: "monthly" },
  ];

  // ── Cost / pricing guide pages ──────────────────────────────────────────────
  const costGuides: MetadataRoute.Sitemap = [
    { url: `${BASE}/eicr-cost`,                    priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/gas-safety-certificate-cost`,   priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/epc-cost`,                     priority: 0.82, changeFrequency: "monthly" },
    { url: `${BASE}/pricing`,                      priority: 0.85, changeFrequency: "monthly" },
  ];

  // ── Commercial service pages ─────────────────────────────────────────────────
  const commercialServices: MetadataRoute.Sitemap = [
    { url: `${BASE}/commercial-eicr`,                     priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/commercial-gas-safety-certificate`,    priority: 0.80, changeFrequency: "monthly" },
    { url: `${BASE}/commercial-epc`,                      priority: 0.80, changeFrequency: "monthly" },
  ];

  // ── Category hub pages ───────────────────────────────────────────────────────
  const categoryHubs: MetadataRoute.Sitemap = [
    { url: `${BASE}/electrical-safety`,  priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/gas-safety`,         priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/fire-safety`,        priority: 0.85, changeFrequency: "monthly" },
  ];

  // ── Electrical Safety sub-pages ───────────────────────────────────────────────
  const electricalSubPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/electrical-diagnostic`,        priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/fuse-box-installation`,        priority: 0.80, changeFrequency: "monthly" },
    { url: `${BASE}/emergency-lights-certificate`, priority: 0.80, changeFrequency: "monthly" },
  ];

  // ── Gas Safety sub-pages ─────────────────────────────────────────────────────
  const gasSubPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/boiler-installation`, priority: 0.80, changeFrequency: "monthly" },
  ];

  // ── Fire Safety sub-pages ─────────────────────────────────────────────────────
  const fireSubPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/fire-safety-certificate`,        priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/fire-alarm-installation`,        priority: 0.80, changeFrequency: "monthly" },
    { url: `${BASE}/fire-safety/fire-alarm-panels`,  priority: 0.72, changeFrequency: "monthly" },
    { url: `${BASE}/fire-door-certificate`,          priority: 0.80, changeFrequency: "monthly" },
    { url: `${BASE}/fire-extinguisher-testing`,      priority: 0.80, changeFrequency: "monthly" },
  ];

  // ── Location hub and borough pages ────────────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/eicr-london`,    priority: 0.80, changeFrequency: "monthly" },
    { url: `${BASE}/coverage-areas`, priority: 0.70, changeFrequency: "monthly" },
    ...boroughSlugs.map((slug) => ({
      url: `${BASE}/eicr/${slug}`,
      priority: 0.72 as number,
      changeFrequency: "monthly" as const,
    })),
  ];

  // ── Marketing / info pages ────────────────────────────────────────────────────
  const infoPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/faq`,            priority: 0.70, changeFrequency: "monthly" },
    { url: `${BASE}/about`,          priority: 0.60, changeFrequency: "yearly"  },
    { url: `${BASE}/reviews`,        priority: 0.60, changeFrequency: "monthly" },
    { url: `${BASE}/contact`,        priority: 0.60, changeFrequency: "yearly"  },
    { url: `${BASE}/letting-agents`, priority: 0.60, changeFrequency: "yearly"  },
  ];

  // ── Blog pages ────────────────────────────────────────────────────────────────
  const blogPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/blog`, priority: 0.80, changeFrequency: "weekly" as const },
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      priority: 0.70 as number,
      changeFrequency: "monthly" as const,
    })),
  ];

  return [
    { url: BASE, lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    ...primaryServices.map((p) => ({ ...p, lastModified: now })),
    ...costGuides.map((p) => ({ ...p, lastModified: now })),
    ...commercialServices.map((p) => ({ ...p, lastModified: now })),
    ...categoryHubs.map((p) => ({ ...p, lastModified: now })),
    ...electricalSubPages.map((p) => ({ ...p, lastModified: now })),
    ...gasSubPages.map((p) => ({ ...p, lastModified: now })),
    ...fireSubPages.map((p) => ({ ...p, lastModified: now })),
    ...locationPages.map((p) => ({ ...p, lastModified: now })),
    ...infoPages.map((p) => ({ ...p, lastModified: now })),
    ...blogPages.map((p) => ({ ...p, lastModified: p.lastModified ?? now })),
    // /privacy and /terms are robots: noindex — intentionally excluded
  ];
}
