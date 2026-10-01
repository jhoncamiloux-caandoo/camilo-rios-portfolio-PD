import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog/posts";

const BASE_URL = "https://camilo-rios-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/cases/acquire", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cases/intelligence", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cases/scale", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cases/whatsapp-next", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cases/servientrega", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.6, changeFrequency: "yearly" as const })),
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
