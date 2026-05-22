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
      <div className="grid gap-5 lg:grid-cols-3">
        {content.items.map((item) => (
          <Card key={item.title} className="flex h-full flex-col gap-4 p-8" tone="soft">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Example
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-7 text-muted">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-8 text-sm leading-7 text-muted">{content.note}</p>
    </Section>
  );
}
