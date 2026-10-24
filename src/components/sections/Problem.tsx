import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import type { ProblemContent } from "../../types/content";

type ProblemProps = {
  content: ProblemContent;
};

export function Problem({ content }: ProblemProps) {
  return (
    <Section title={content.title}>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-start">
        <div className="space-y-5 text-base leading-8 text-muted">
          {content.paragraphs.map((paragraph) => (
            <p
              key={paragraph.text}
              className={paragraph.tone === "strong" ? "font-semibold text-foreground" : ""}
            >
              {paragraph.text}
            </p>
          ))}
        </div>

        <Card className="rounded-4xl p-8" tone="soft">
          <h3 className="text-lg font-semibold text-foreground">
            {content.needsTitle}
          </h3>
          <ul className="mt-6 space-y-4">
            {content.needs.map((need) => (
              <li
                key={need}
                className="flex items-start gap-3 text-sm leading-7 text-foreground"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <span>{need}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
