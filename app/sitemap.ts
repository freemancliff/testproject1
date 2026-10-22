import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { archives } from "@/lib/archives";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/2026mit", 0.9, "weekly"),
    page("/register", 0.8, "weekly"),
    page("/bookstore", 0.7, "monthly"),
    page("/2026eji", 0.7, "monthly"),
    ...archives.map((a) => page(`/archive/${a.year}`, 0.5, "yearly")),
  ];
}
