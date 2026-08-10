import type { MetadataRoute } from "next";

const DISALLOW = ["/admin/", "/api/", "/engineer/", "/demo/"];

// AI assistant / answer-engine crawlers we explicitly welcome (AEO).
// Listing them keeps the site eligible to appear in AI answers even if the
// default rule is ever tightened.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "Meta-ExternalAgent",
  "cohere-ai",
  "DuckAssistBot",
  "YouBot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: DISALLOW,
      },
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: DISALLOW,
      },
    ],
    sitemap: "https://www.mylandlordcertificate.co.uk/sitemap.xml",
    host: "https://www.mylandlordcertificate.co.uk",
  };
}
