import type { Metadata } from "next";

import { MarketingPage } from "../components/MarketingPage";
import { elContent } from "../lib/content/el";
import { buildPageMetadata } from "../lib/site";

// TODO: Replace this placeholder metadata with Greek copy once `src/lib/content/el.ts` is translated.
export const metadata: Metadata = buildPageMetadata({
  title: "Simple Websites for Small Businesses in Cyprus | One Page Cyprus",
  description:
    "Affordable, modern, mobile-friendly websites for small businesses, solo professionals, and local service providers in Cyprus. Starting from €500.",
  pathname: "/",
  locale: "el",
});

export default function HomePage() {
  return <MarketingPage content={elContent} locale="el" />;
}
