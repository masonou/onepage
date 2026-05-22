import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { sectionIds } from "../../lib/site";
import type { ProcessContent } from "../../types/content";

type ProcessProps = {
  content: ProcessContent;
};

export function Process({ content }: ProcessProps) {
  return (
    <Section
      id={sectionIds.process}
      title={content.title}
      description={content.description}
      tone="tint"
    >
      <ol className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {content.steps.map((step, index) => (
          <li key={step.title}>
            <Card className="flex h-full flex-col gap-4 p-7" tone="plain">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm leading-7 text-muted">{step.description}</p>
              </div>
            </Card>
          </li>
        ))}
      </ol>
    </Section>
  );
}
