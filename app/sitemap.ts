import type { MetadataRoute } from "next";

const BASE_URL = "https://camilo-rios-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/cases/acquire", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cases/intelligence", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cases/scale", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/cases/whatsapp-ai", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
