import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/* Required by `output: "export"` — emitted as a static sitemap.xml at build time.
   `lastModified` below is therefore stamped at build time, not per request. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
