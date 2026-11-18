import type { Metadata } from "next";

export const siteConfig = {
  name: "One Page Cyprus",
  email: "hello@example.com",
  siteUrl: "https://onepage.com.cy",
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
  socialImage: string;
};

export function buildPageMetadata({
  title,
  description,
  pathname,
  openGraphLocale,
  socialImage,
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
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
