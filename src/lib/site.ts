import type { Metadata } from "next";

export const siteConfig = {
  name: "One Page Cyprus",
  email: "hello@example.com",
  // TODO: Update this with the final production domain before launch.
  siteUrl: "https://onepagecyprus.com",
} as const;

export const sectionIds = {
  packages: "packages",
  process: "how-it-works",
  examples: "examples",
  whyUs: "why-us",
  contact: "contact",
} as const;

type BuildPageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  openGraphLocale: string;
};

export function buildPageMetadata({
  title,
  description,
  pathname,
  openGraphLocale,
}: BuildPageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
      languages: {
        el: "/",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: siteConfig.name,
      locale: openGraphLocale,
      type: "website",
    },
  };
}
