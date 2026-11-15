"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "../ui/Button";
import { Container } from "../ui/Container";
import type { HeaderContent } from "../../types/content";

type HeaderProps = {
  content: HeaderContent;
};

type LanguageSwitchProps = {
  content: HeaderContent["localeSwitch"];
  className?: string;
};

function LanguageSwitch({ content, className = "" }: LanguageSwitchProps) {
  return (
    <Link
      href={content.href}
      aria-label={content.ariaLabel}
      className={[
        "inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium text-muted hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        className,
      ].join(" ")}
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
      <span>{content.label}</span>
    </Link>
  );
}

export function Header({ content }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = "mobile-navigation";
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
      <Container className="py-3 lg:py-4">
        <div className="flex items-center justify-between lg:hidden">
          <Link href={content.homeHref} className="min-w-0 shrink whitespace-nowrap">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-2xl">
              {content.brand}
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-1">
            <LanguageSwitch content={content.localeSwitch} className="h-9 w-[5.5rem] sm:w-24" />
            <button
              type="button"
              aria-label={isMenuOpen ? content.closeMenuLabel : content.openMenuLabel}
              aria-expanded={isMenuOpen}
              aria-controls={menuId}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {isMenuOpen ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2">
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              ) : (
                <span className="flex w-5 flex-col gap-1" aria-hidden="true">
                  <span className="h-0.5 w-full rounded-full bg-current" />
                  <span className="h-0.5 w-full rounded-full bg-current" />
                  <span className="h-0.5 w-full rounded-full bg-current" />
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="hidden items-center justify-between lg:flex">
          <Link href={content.homeHref} className="shrink-0">
            <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
                {content.brand}
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <nav
              aria-label={content.navigationLabel}
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
              <LanguageSwitch content={content.localeSwitch} className="h-8 w-24" />
              <Button href={content.cta.href}>{content.cta.label}</Button>
            </div>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="absolute inset-x-0 top-full border-b border-border bg-white shadow-[0_14px_28px_rgba(15,23,42,0.08)] lg:hidden">
          <Container className="py-3">
            <nav id={menuId} aria-label={content.navigationLabel} className="flex flex-col gap-1">
              {content.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-surface hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              ))}
              <Button href={content.cta.href} onClick={closeMenu} className="mt-2 w-full">
                {content.cta.label}
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
