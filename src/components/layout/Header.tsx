import Link from "next/link";

import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import type { HeaderContent } from "../../types/content";

type HeaderProps = {
  content: HeaderContent;
};

export function Header({ content }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <Container className="py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="shrink-0">
              <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {content.brand}
              </span>
            </Link>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted"
            >
              {content.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button href={content.cta.href}>{content.cta.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
