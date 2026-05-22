import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { sectionIds } from "../../lib/site";
import type { WhoItsForContent } from "../../types/content";

type WhoItsForProps = {
  content: WhoItsForContent;
};

export function WhoItsFor({ content }: WhoItsForProps) {
  return (
    <Section
      id={sectionIds.whoItsFor}
      title={content.title}
      description={content.description}
      tone="tint"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {content.items.map((item) => (
          <Card key={item} tone="plain">
            <p className="text-base font-semibold leading-7 text-foreground">{item}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
