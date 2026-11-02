import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Contact } from "./sections/Contact";
import { Examples } from "./sections/Examples";
// import { FAQ } from "./sections/FAQ";
import { Hero } from "./sections/Hero";
import { Packages } from "./sections/Packages";
import { Problem } from "./sections/Problem";
import { Process } from "./sections/Process";
// import { WhoItsFor } from "./sections/WhoItsFor";
//import { WhyUs } from "./sections/WhyUs";
import type { SiteContent } from "../types/content";

type MarketingPageProps = {
  content: SiteContent;
};

export function MarketingPage({ content }: MarketingPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header content={content.header} />
      <main className="flex-1">
        <Hero content={content.hero} />
        {/* <WhoItsFor content={content.whoItsFor} /> */}
        <Problem content={content.problem} />
        <Process content={content.process} />
        <Packages content={content.packages} />
        <Examples content={content.examples} />
        {/* <WhyUs content={content.whyUs} /> */}
        {/* <FAQ content={content.faq} /> */}
        <Contact content={content.contact} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
