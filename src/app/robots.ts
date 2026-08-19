import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/* Required by `output: "export"` — emitted as a static robots.txt at build time. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
