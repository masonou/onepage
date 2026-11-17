import type { MetadataRoute } from "next";

import { siteConfig } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.siteUrl,
    },
    {
      url: `${siteConfig.siteUrl}/en`,
    },
  ];
}
