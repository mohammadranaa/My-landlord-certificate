import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE = "https://mylandlordcertificate.co.uk";

// All 33 London coverage slugs
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

  // ── Category landing pages ──────────────────────────────────────────────────
  const categoryPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/electrical-safety`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/gas-safety`,        priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/fire-safety`,       priority: 0.9, changeFrequency: "monthly" },
    { url: `${BASE}/epc`,               priority: 0.9, changeFrequency: "monthly" },
  ];

  // ── Electrical Safety sub-pages ─────────────────────────────────────────────
  const electricalPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/electrical-safety/domestic-eicr`,              priority: 0.95, changeFrequency: "monthly" },
    { url: `${BASE}/electrical-safety/commercial-eicr`,            priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/electrical-safety/electrical-diagnostic`,      priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE}/electrical-safety/fuse-box-installation`,      priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE}/electrical-safety/emergency-lights-certificate`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/electrical-safety/pat-testing`,                priority: 0.85, changeFrequency: "monthly" },
  ];

  // ── Gas Safety sub-pages ────────────────────────────────────────────────────
  const gasPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/gas-safety/cp12`,               priority: 0.95, changeFrequency: "monthly" },
    { url: `${BASE}/gas-safety/cp42`,               priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/gas-safety/boiler-installation`, priority: 0.8,  changeFrequency: "monthly" },
  ];

  // ── Fire Safety sub-pages ───────────────────────────────────────────────────
  const firePages: MetadataRoute.Sitemap = [
    { url: `${BASE}/fire-safety/fire-safety-certificate`,  priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/fire-safety/fire-risk-assessment`,     priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/fire-safety/fire-alarm-installation`,  priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE}/fire-safety/fire-alarm-panels`,        priority: 0.75, changeFrequency: "monthly" },
    { url: `${BASE}/fire-safety/fire-door-certificate`,    priority: 0.8,  changeFrequency: "monthly" },
    { url: `${BASE}/fire-safety/fire-extinguisher-testing`, priority: 0.8, changeFrequency: "monthly" },
  ];

  // ── EPC sub-pages ───────────────────────────────────────────────────────────
  const epcPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/epc/domestic-epc`,  priority: 0.9,  changeFrequency: "monthly" },
    { url: `${BASE}/epc/commercial-epc`, priority: 0.85, changeFrequency: "monthly" },
  ];

  // ── Standalone services ─────────────────────────────────────────────────────
  const standaloneServices: MetadataRoute.Sitemap = [
    { url: `${BASE}/asbestos-survey`,              priority: 0.8, changeFrequency: "monthly" },
    { url: `${BASE}/landlord-certificates-bundle`, priority: 0.8, changeFrequency: "monthly" },
  ];

  // ── Informational / marketing pages ────────────────────────────────────────
  const infoPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/pricing`,         priority: 0.85, changeFrequency: "monthly" },
    { url: `${BASE}/coverage-areas`,  priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE}/faq`,             priority: 0.7,  changeFrequency: "monthly" },
    { url: `${BASE}/about`,           priority: 0.6,  changeFrequency: "yearly"  },
    { url: `${BASE}/reviews`,         priority: 0.6,  changeFrequency: "monthly" },
    { url: `${BASE}/contact`,         priority: 0.6,  changeFrequency: "yearly"  },
    { url: `${BASE}/letting-agents`,  priority: 0.6,  changeFrequency: "yearly"  },
    { url: `${BASE}/eicr-london`,     priority: 0.7,  changeFrequency: "monthly" },
  ];

  // ── Location pages (Phase 4) ────────────────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = boroughSlugs.map((slug) => ({
    url: `${BASE}/eicr-${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  // ── Blog pages ──────────────────────────────────────────────────────────────
  const blogPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      priority: 0.7 as number,
      changeFrequency: "monthly" as const,
    })),
  ];

  return [
    // Homepage
    { url: BASE, lastModified: now, priority: 1.0, changeFrequency: "weekly" },
    ...categoryPages.map((p) => ({ ...p, lastModified: now })),
    ...electricalPages.map((p) => ({ ...p, lastModified: now })),
    ...gasPages.map((p) => ({ ...p, lastModified: now })),
    ...firePages.map((p) => ({ ...p, lastModified: now })),
    ...epcPages.map((p) => ({ ...p, lastModified: now })),
    ...standaloneServices.map((p) => ({ ...p, lastModified: now })),
    ...infoPages.map((p) => ({ ...p, lastModified: now })),
    ...blogPages.map((p) => ({ ...p, lastModified: p.lastModified ?? now })),
    ...locationPages.map((p) => ({ ...p, lastModified: now })),
    // /privacy and /terms are robots: noindex and intentionally excluded
  ];
}
