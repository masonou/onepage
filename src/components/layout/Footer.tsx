import Link from "next/link";

import { Container } from "../ui/Container";
import type { FooterContent } from "../../types/content";

type FooterProps = {
  content: FooterContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
              {content.brand}
            </p>
            <p className="max-w-md text-sm leading-6 text-muted">
              {content.tagline}
            </p>
          </div>

          <div className="space-y-3 text-sm text-muted md:text-right">
            <div className="flex gap-4 md:justify-end">
              {content.localeLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
            <a href={`mailto:${content.email}`} className="hover:text-foreground">
              {content.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
