import type { MetadataRoute } from "next";

const BASE = "https://mylandlordcertificate.co.uk";

// All 33 London coverage slugs — used to pre-declare location pages
// for the sitemap even before individual pages are built (Phase 4).
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

  // ── Core service pages ──────────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/eicr`,                        priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/gas-safety-certificate`,       priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/epc`,                          priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/fire-risk-assessment`,         priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/pat-testing`,                  priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/landlord-certificates-bundle`, priority: 0.9, changeFrequency: "monthly" },
  ];

  // ── SEO / cost guide pages ──────────────────────────────────────────────────
  const seoPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/eicr-cost`,                    priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/gas-safety-certificate-cost`,  priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/epc-cost`,                     priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/eicr-london`,                  priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/pricing`,                      priority: 0.8, changeFrequency: "monthly" },
  ];

  // ── Informational pages ─────────────────────────────────────────────────────
  const infoPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/how-it-works`,   priority: 0.7, changeFrequency: "yearly" },
    { url: `${BASE}/coverage-areas`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/faq`,            priority: 0.7, changeFrequency: "monthly" },
    { url: `${BASE}/about`,          priority: 0.6, changeFrequency: "yearly"  },
    { url: `${BASE}/reviews`,        priority: 0.6, changeFrequency: "monthly" },
    { url: `${BASE}/contact`,        priority: 0.6, changeFrequency: "yearly"  },
    { url: `${BASE}/letting-agents`, priority: 0.6, changeFrequency: "yearly"  },
  ];

  // ── Location pages (Phase 4) ────────────────────────────────────────────────
  // Individual borough EICR pages are listed here as soon as the sitemap is
  // deployed. Pages that are not yet built will return 404 until they exist —
  // which is acceptable; crawlers will retry. Remove this block until Phase 4
  // pages are actually built if you prefer a clean sitemap.
  const locationPages: MetadataRoute.Sitemap = boroughSlugs.map((slug) => ({
    url: `${BASE}/eicr-${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [
    // Homepage
    {
      url: BASE,
      lastModified: now,
      priority: 1.0,
      changeFrequency: "weekly",
    },
    ...servicePages.map((p) => ({ ...p, lastModified: now })),
    ...seoPages.map((p) => ({ ...p, lastModified: now })),
    ...infoPages.map((p) => ({ ...p, lastModified: now })),
    ...locationPages.map((p) => ({ ...p, lastModified: now })),
    // Note: /privacy and /terms are robots: noindex and are intentionally
    // excluded from the sitemap.
  ];
}
