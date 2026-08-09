import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  getPriceForEICR,
  getPriceForGasSafety,
  getPriceForEPC,
  getPriceForFRA,
  getPriceForPAT,
  LEGIONELLA_PRICES,
} from "@/lib/pricing";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

export interface PostFaq {
  question: string;
  answer: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  readTime: string;
  excerpt: string;
  keywords: string[];
  faqs?: PostFaq[];
}

export const CATEGORIES = [
  "All",
  "EICR",
  "Gas Safety",
  "EPC",
  "Fire Safety",
  "Landlord Guides",
  "Industry News",
] as const;

export type BlogCategory = (typeof CATEGORIES)[number];

export const CATEGORY_STYLES: Record<string, string> = {
  "EICR": "bg-compliance-blue text-white",
  "Gas Safety": "bg-action-green text-brand-charcoal",
  "EPC": "bg-brand-green-dark text-white",
  "Fire Safety": "bg-brand-amber text-white",
  "Landlord Guides": "bg-brand-charcoal text-white",
  "Industry News": "bg-brand-grey text-white",
};

export const CATEGORY_GRADIENT: Record<string, string> = {
  "EICR": "from-compliance-blue to-brand-blue-dark",
  "Gas Safety": "from-action-green to-brand-green-dark",
  "EPC": "from-emerald-500 to-emerald-700",
  "Fire Safety": "from-brand-amber to-orange-600",
  "Landlord Guides": "from-brand-charcoal to-slate-800",
  "Industry News": "from-brand-grey to-slate-600",
};

export function getAllPosts(): PostFrontmatter[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
      const { data } = matter(raw);
      return data as PostFrontmatter;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRawPost(
  slug: string,
): { frontmatter: PostFrontmatter; content: string } | null {
  const file = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as PostFrontmatter, content };
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  count = 3,
): PostFrontmatter[] {
  const all = getAllPosts();
  const sameCategory = all.filter(
    (p) => p.slug !== currentSlug && p.category === category,
  );
  if (sameCategory.length >= count) return sameCategory.slice(0, count);
  const others = all.filter(
    (p) => p.slug !== currentSlug && p.category !== category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function extractHeadings(
  content: string,
): { id: string; text: string }[] {
  const regex = /^## (.+)$/gm;
  const headings: { id: string; text: string }[] = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].replace(/\*\*/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    headings.push({ id, text });
  }
  return headings;
}

// ─── Post-topic CTAs ─────────────────────────────────────────────────────────
// `href` service IDs must match the ids in src/components/booking/step-3-services.tsx
// — that form has no "legionella" service yet, so that post links to plain /book.

export interface BlogCTA {
  label: string;
  href: string;
  subtext: string;
}

const eicrPrice = getPriceForEICR("studio");
const gasPrice = getPriceForGasSafety(1);
const epcPrice = getPriceForEPC("studio");
const fraPrice = getPriceForFRA("studio");
const patPrice = getPriceForPAT(1);
const legionellaPrice = LEGIONELLA_PRICES.standard;

export const BLOG_CTAS: Record<string, BlogCTA> = {
  "what-is-an-eicr": {
    label: `Book your EICR from £${eicrPrice}`,
    href: "/book?service=eicr",
    subtext: "Next-day appointments · Certificate within 24 hours",
  },
  "eicr-cost-london-2026": {
    label: `Book your EICR from £${eicrPrice}`,
    href: "/book?service=eicr",
    subtext: "Fixed price · No hidden charges",
  },
  "eicr-cost-guide-2026": {
    label: `Book your EICR from £${eicrPrice}`,
    href: "/book?service=eicr",
    subtext: "Fixed price · No hidden charges",
  },
  "what-happens-if-eicr-fails": {
    label: `Book your EICR from £${eicrPrice}`,
    href: "/book?service=eicr",
    subtext: "NICEIC approved · Certificate within 24 hours",
  },
  "eicr-vs-pat-testing-difference": {
    label: "Book EICR + PAT Testing",
    href: "/book",
    subtext: `EICR from £${eicrPrice} · PAT from £${patPrice}`,
  },
  "gas-safety-certificate-landlord-guide": {
    label: `Book your Gas Safety Certificate from £${gasPrice}`,
    href: "/book?service=gas-safety-cp12",
    subtext: "Gas Safe registered · Certificate within 24 hours",
  },
  "how-often-gas-safety-certificate-landlord": {
    label: `Book your Gas Safety Certificate from £${gasPrice}`,
    href: "/book?service=gas-safety-cp12",
    subtext: "Annual requirement · Gas Safe registered engineers",
  },
  "how-to-improve-epc-rating": {
    label: `Book your EPC from £${epcPrice}`,
    href: "/book?service=epc",
    subtext: "Elmhurst accredited assessors · Valid 10 years",
  },
  "fire-risk-assessment-hmo-guide": {
    label: `Book your Fire Risk Assessment from £${fraPrice}`,
    href: "/book?service=fra-residential",
    subtext: "IFSM certified assessors · Report within 48 hours",
  },
  "legionella-risk-assessment-landlord-guide": {
    label: `Book your Legionella Risk Assessment — £${legionellaPrice}`,
    href: "/book",
    subtext: "ACoP L8 compliant · Report within 48 hours",
  },
  "first-time-landlord-compliance-checklist": {
    label: "Book all your landlord certificates",
    href: "/book",
    subtext: "All certificates from one provider",
  },
  "landlord-certificates-guide-2026": {
    label: "Book your landlord certificates",
    href: "/book",
    subtext: `EICR from £${eicrPrice} · Gas Safety from £${gasPrice}`,
  },
  "renters-rights-act-2025-landlord-guide": {
    label: "Check your compliance certificates",
    href: "/book",
    subtext: "Stay compliant under the new rules",
  },
  "section-21-compliance-landlords": {
    label: "Book your compliance certificates",
    href: "/book",
    subtext: "EICR, Gas Safety and EPC from one provider",
  },
};

export const DEFAULT_BLOG_CTA: BlogCTA = {
  label: "Book a certificate",
  href: "/book",
  subtext: "All landlord certificates from one provider",
};

export function getBlogCTA(slug: string): BlogCTA {
  return BLOG_CTAS[slug] ?? DEFAULT_BLOG_CTA;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
