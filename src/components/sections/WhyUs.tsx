import Image from "next/image";

import { Section } from "../ui/Section";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { sectionIds } from "../../lib/site";
import type { WhyUsContent } from "../../types/content";

type WhyUsProps = {
  content: WhyUsContent;
  whatsappCtaLabel: string;
  whatsappMessage: string;
};

export function WhyUs({ content, whatsappCtaLabel, whatsappMessage }: WhyUsProps) {
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
          <div className="mt-6">
            <WhatsAppButton label={whatsappCtaLabel} message={whatsappMessage} />
          </div>
          <div className="mt-5 flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/masonou"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn του Κυριάκου Masonou"
              className="inline-flex size-8 items-center justify-center rounded-full border border-border text-muted hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 fill-current">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.41v1.57h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.54V8.99H7.1v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/masonouky"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram του Κυριάκου Masonou"
              className="inline-flex size-8 items-center justify-center rounded-full border border-border text-muted hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3.5 fill-current">
                <path d="M7.17 0h9.66A7.18 7.18 0 0 1 24 7.17v9.66A7.18 7.18 0 0 1 16.83 24H7.17A7.18 7.18 0 0 1 0 16.83V7.17A7.18 7.18 0 0 1 7.17 0Zm-.24 2.42a4.5 4.5 0 0 0-4.51 4.51v10.14a4.5 4.5 0 0 0 4.51 4.51h10.14a4.5 4.5 0 0 0 4.51-4.51V6.93a4.5 4.5 0 0 0-4.51-4.51H6.93Zm10.97 1.81a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2ZM12 5.84A6.16 6.16 0 1 1 5.84 12 6.16 6.16 0 0 1 12 5.84Zm0 2.42A3.74 3.74 0 1 0 15.74 12 3.74 3.74 0 0 0 12 8.26Z" />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
