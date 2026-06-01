import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://practicelingo.co.uk";

const now = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl,                                        lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${siteUrl}/about`,                             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/how-it-works`,                      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/solutions`,                         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/languages`,                         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/pilot-programme`,                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`,                           lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    // Legal
    { url: `${siteUrl}/legal/privacy`,                     lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${siteUrl}/legal/terms`,                       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${siteUrl}/legal/accessibility`,               lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${siteUrl}/legal/gdpr`,                        lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${siteUrl}/legal/clinical-disclaimer`,         lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${siteUrl}/legal/cookies`,                     lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${siteUrl}/legal/safeguarding`,                lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${siteUrl}/legal/translation-disclaimer`,      lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${siteUrl}/legal/emergency`,                   lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${siteUrl}/legal/nhs-affiliation`,             lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${siteUrl}/legal/ai-disclosure`,               lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${siteUrl}/legal/data-security`,               lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${siteUrl}/legal/edi`,                         lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
    { url: `${siteUrl}/legal/complaints`,                  lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];
}
