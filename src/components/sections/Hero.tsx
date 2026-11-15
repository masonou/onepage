import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import type { HeroContent } from "../../types/content";

type HeroProps = {
  content: HeroContent;
};

type UnderlinedPhraseProps = {
  children: string;
  className?: string;
};

function UnderlinedPhrase({ children, className = "" }: UnderlinedPhraseProps) {
  return (
    <span className={`relative inline-block pb-3 ${className}`}>
      {children}
      <svg
        viewBox="0 0 120 12"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-6.5 w-full text-accent"
      >
        <path
          fill="currentColor"
          d="M2 7.4C27 4.4 70 3.2 118 5.9C84 6.6 39 7.6 3 8.8C2.2 8.8 1.6 8.2 2 7.4Z"
        />
      </svg>
    </span>
  );
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="overflow-hidden border-b border-border bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl space-y-6 lg:text-center">
          <h1 className="max-w-3xl font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:mx-auto lg:max-w-4xl lg:text-6xl">
            <span>{content.title}</span>
            {content.highlightOnNewLine ? (
              <UnderlinedPhrase className="mt-2 block w-fit lg:mx-auto">
                {content.highlightedTitle}
              </UnderlinedPhrase>
            ) : (
              <>
                {" "}
                <UnderlinedPhrase className="whitespace-nowrap">
                  {content.highlightedTitle}
                </UnderlinedPhrase>
              </>
            )}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl lg:mx-auto">
            {content.description}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-center">
            <Button href={content.primaryCta.href}>
              {content.primaryCta.label}
            </Button>
            <Button href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </Button>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-muted lg:mx-auto">
            {content.trustNote}
          </p>
        </div>
      </Container>
    </section>
  );
}
