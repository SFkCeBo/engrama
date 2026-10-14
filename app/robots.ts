import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/contact";

// Necesario con output: "export" para generarlo como archivo estático.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl}/sitemap.xml` };
}
