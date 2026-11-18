import type { Metadata } from "next";

import { MarketingPage } from "../../components/MarketingPage";
import { elContent } from "../../lib/content/el";
import { buildPageMetadata } from "../../lib/site";

export const metadata: Metadata = buildPageMetadata({
  ...elContent.metadata,
  pathname: "/",
  openGraphLocale: "el_CY",
  socialImage: "/images/og-greek.png",
});

export default function GreekHomePage() {
  return <MarketingPage content={elContent} />;
}
