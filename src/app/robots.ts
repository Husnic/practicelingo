import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://practicelingo.co.uk";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/patient/", "/api/", "/legal/"],
      },
      {
        // Allow AI crawlers to index marketing content for GEO
        userAgent: ["GPTBot", "Claude-Web", "PerplexityBot", "anthropic-ai"],
        allow: ["/", "/about", "/how-it-works", "/solutions", "/languages", "/pilot-programme", "/contact"],
        disallow: ["/patient/", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
