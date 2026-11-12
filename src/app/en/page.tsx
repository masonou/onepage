import type { Metadata } from "next";

import { MarketingPage } from "../../components/MarketingPage";
import { enContent } from "../../lib/content/en";
import { buildPageMetadata } from "../../lib/site";

export const metadata: Metadata = buildPageMetadata({
  ...enContent.metadata,
  pathname: "/en",
  openGraphLocale: "en_CY",
});

export default function EnglishHomePage() {
  return <MarketingPage content={enContent} />;
}
