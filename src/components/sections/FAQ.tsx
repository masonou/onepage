import { Section } from "../ui/Section";
import { sectionIds } from "../../lib/site";
import type { FAQContent } from "../../types/content";

type FAQProps = {
  content: FAQContent;
};

export function FAQ({ content }: FAQProps) {
  return (
    <Section
      id={sectionIds.faq}
      title={content.title}
      description={content.description}
    >
      <div className="space-y-4">
        {content.items.map((item) => (
          <details
            key={item.question}
            className="rounded-[1.75rem] border border-border bg-white px-6 py-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)]"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
              <span className="text-base font-semibold text-foreground">
                {item.question}
              </span>
              <span className="text-xl leading-none text-accent">+</span>
            </summary>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
