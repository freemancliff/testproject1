import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Keep Vercel preview deployments out of search results; only the production site is indexed.
  const isPreview = !!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";
  if (isPreview) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/search-index.json"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
