import Link from "next/link";

import type { Locale } from "../../types/content";

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

const languages = [
  { code: "EL", href: "/", title: "Greek" },
  { code: "EN", href: "/en", title: "English" },
] as const;

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  return (
    <div
      aria-label="Language selector"
      className="inline-flex rounded-full border border-border bg-white p-1"
      role="group"
    >
      {languages.map((language) => {
        const isActive =
          (language.code === "EL" && currentLocale === "el") ||
          (language.code === "EN" && currentLocale === "en");

        return (
          <Link
            key={language.code}
            href={language.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.14em]",
              isActive ? "bg-accent text-white" : "text-muted hover:text-foreground",
            ].join(" ")}
            title={language.title}
          >
            {language.code}
          </Link>
        );
      })}
    </div>
  );
}
