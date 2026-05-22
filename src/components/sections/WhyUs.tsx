import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { sectionIds } from "../../lib/site";
import type { WhyUsContent } from "../../types/content";

type WhyUsProps = {
  content: WhyUsContent;
};

export function WhyUs({ content }: WhyUsProps) {
  return (
    <Section
      id={sectionIds.whyUs}
      title={content.title}
      description={content.description}
      tone="tint"
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {content.items.map((item) => (
          <Card key={item.title} className="h-full p-7" tone="plain">
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
