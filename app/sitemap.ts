import type { MetadataRoute } from "next";
import { doors } from "@/content/site";
import { siteUrl } from "@/lib/contact";

// Necesario con output: "export" para generarlo como archivo estático.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...doors.map((d) => ({
      url: `${siteUrl}/${d.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
