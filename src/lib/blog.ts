import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
