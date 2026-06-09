import { Button } from "../ui/Button";
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
            <h1 className="max-w-3xl font-display text-5xl leading-tight tracking-tight text-foreground sm:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              {content.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={content.primaryCta.href}>
                {content.primaryCta.label}
              </Button>
              <Button href={content.secondaryCta.href} variant="secondary">
                {content.secondaryCta.label}
              </Button>
            </div>

            <p className="max-w-2xl text-sm leading-7 text-muted">
              {content.trustNote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
