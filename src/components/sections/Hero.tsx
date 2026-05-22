import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Container } from "../ui/Container";
import type { HeroContent } from "../../types/content";

type HeroProps = {
  content: HeroContent;
};

export function Hero({ content }: HeroProps) {
  return (
    <section className="overflow-hidden border-b border-border bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Website creation for Cyprus
            </p>
            <h1 className="max-w-3xl font-display text-5xl leading-tight tracking-tight text-foreground sm:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              {content.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
              <Button href={content.secondaryCta.href} variant="secondary">
                {content.secondaryCta.label}
              </Button>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-muted">
              {content.trustNote}
            </p>
          </div>

          <Card className="rounded-[2rem] p-8 sm:p-10" tone="accent">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              What matters most
            </p>
            <ul className="mt-6 space-y-4">
              {content.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-base leading-7 text-foreground"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
