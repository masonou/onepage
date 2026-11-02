import Image from "next/image";

import { Section } from "../ui/Section";
import { sectionIds } from "../../lib/site";
import type { WhyUsContent } from "../../types/content";

type WhyUsProps = {
  content: WhyUsContent;
};

export function WhyUs({ content }: WhyUsProps) {
  return (
    <Section id={sectionIds.whyUs} title={content.title} tone="tint">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(17rem,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <div className="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <Image
              src={content.image}
              alt={content.imageAlt}
              width={1920}
              height={2560}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 24rem, 100vw"
              className="mt-[-20%] h-auto w-full"
            />
          </div>
        </div>

        <div className="max-w-xl border-l-2 border-accent pl-6 sm:pl-8">
          {content.description && (
            <p className="whitespace-pre-line text-base leading-8 text-muted sm:text-md">
              {content.description}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
