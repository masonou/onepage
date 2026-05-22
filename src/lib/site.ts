import type { Metadata } from "next";

import type { Locale } from "../types/content";

export const siteConfig = {
  name: "One Page Cyprus",
  email: "hello@example.com",
  // TODO: Update this with the final production domain before launch.
  siteUrl: "https://onepagecyprus.com",
} as const;

export const sectionIds = {
  whoItsFor: "who-its-for",
  packages: "packages",
  process: "how-it-works",
  examples: "examples",
  whyUs: "why-us",
  faq: "faq",
  contact: "contact",
} as const;

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  locale: Locale;
};

export function buildPageMetadata({
  title,
  description,
  pathname,
  locale,
}: BuildPageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages: {
        "el-CY": "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: siteConfig.name,
      locale: locale === "en" ? "en_GB" : "el_CY",
      type: "website",
    },
  };
}
