import type { Metadata } from "next";

export const siteConfig = {
  name: "One Page Cyprus",
  email: "hello@example.com",
  // TODO: Update this with the final production domain before launch.
  siteUrl: "https://onepagecyprus.com",
} as const;

export const sectionIds = {
  whoItsFor: "who-its-for",
  packages: "packages",
  problem: "problem",
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
};

export function buildPageMetadata({
  title,
  description,
  pathname,
}: BuildPageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: siteConfig.name,
      locale: "el_CY",
      type: "website",
    },
  };
}
