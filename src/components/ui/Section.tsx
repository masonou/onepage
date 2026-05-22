import type { ReactNode } from "react";

import { Container } from "./Container";

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: "plain" | "tint";
};

export function Section({
  id,
  title,
  description,
  children,
  className = "",
  tone = "plain",
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "scroll-mt-28 py-16 sm:py-20",
        tone === "tint" ? "bg-surface" : "bg-white",
        className,
      ].join(" ")}
    >
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{description}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}
