import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/engineer/", "/demo/"],
      },
    ],
    sitemap: "https://www.mylandlordcertificate.co.uk/sitemap.xml",
  };
}
