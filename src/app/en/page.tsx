import type { Metadata } from "next";

import { MarketingPage } from "../../components/MarketingPage";
import { enContent } from "../../lib/content/en";
import { buildPageMetadata } from "../../lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Simple Websites for Small Businesses in Cyprus | One Page Cyprus",
  description:
    "Affordable, modern, mobile-friendly websites for small businesses, solo professionals, and local service providers in Cyprus. Starting from €500.",
  pathname: "/en",
  locale: "en",
});

export default function EnglishPage() {
  return <MarketingPage content={enContent} locale="en" />;
}
