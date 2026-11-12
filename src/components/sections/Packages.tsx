import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { sectionIds } from "../../lib/site";
import type { PackagesContent } from "../../types/content";

type PackagesProps = {
  content: PackagesContent;
};

export function Packages({ content }: PackagesProps) {
  return (
    <Section
      id={sectionIds.packages}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-5 xl:grid-cols-2">
        {content.packages.map((item) => (
          <Card key={item.name} className="flex h-full flex-col gap-6 p-8" tone="plain">
            <div className="space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.bestFor}</p>
                </div>
                <p className="text-lg font-semibold text-accent">{item.price}</p>
              </div>
              <p className="text-base leading-7 text-muted">{item.description}</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                {content.includesLabel}
              </p>
              <ul className="space-y-3">
                {item.includes.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-7 text-foreground"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>

      <p className="mt-8 max-w-4xl text-sm leading-7 text-muted">{content.note}</p>
    </Section>
  );
}
