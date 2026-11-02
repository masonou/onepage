import Image from "next/image";

import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { sectionIds } from "../../lib/site";
import type { ExamplesContent } from "../../types/content";

type ExamplesProps = {
  content: ExamplesContent;
};

export function Examples({ content }: ExamplesProps) {
  return (
    <Section
      id={sectionIds.examples}
      title={content.title}
      description={content.description}
    >
      <Card className="overflow-hidden p-5 sm:p-6 lg:p-8" tone="soft">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:gap-12">
          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <Image
                src={content.project.desktopImage}
                alt="LVG Blinds website displayed on a desktop screen"
                width={1440}
                height={1080}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-auto w-full object-cover object-top"
              />
            </div>
            <div className="absolute bottom-3 right-3 w-24 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-[0_18px_40px_rgba(15,23,42,0.2)] sm:bottom-5 sm:right-5 sm:w-32 lg:w-40">
              <Image
                src={content.project.mobileImage}
                alt="LVG Blinds website displayed on a mobile screen"
                width={390}
                height={844}
                sizes="(min-width: 1024px) 10rem, 8rem"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="space-y-6 lg:py-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Featured project
            </p>
            <div className="space-y-3">
              <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {content.project.name}
              </h3>
              <p className="text-base leading-8 text-muted">{content.project.description}</p>
            </div>

            <ul className="space-y-3">
              {content.project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-7 text-foreground"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <a
              href={content.project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold tracking-tight text-white shadow-[0_18px_40px_rgba(21,90,201,0.18)] hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(21,90,201,0.14)]"
            >
              Visit website
            </a>
          </div>
        </div>
      </Card>
    </Section>
  );
}
