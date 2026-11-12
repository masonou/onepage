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
            <Link href={content.homeHref} className="shrink-0">
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
              <Link
                href={content.localeSwitch.href}
                aria-label={content.localeSwitch.ariaLabel}
                className="inline-flex h-8 w-24 shrink-0 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium text-muted hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                <span>{content.localeSwitch.label}</span>
              </Link>
              <Button href={content.cta.href}>{content.cta.label}</Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
