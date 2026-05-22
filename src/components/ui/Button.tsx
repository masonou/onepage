import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[rgba(21,90,201,0.14)]",
    variant === "primary"
      ? "bg-accent text-white shadow-[0_18px_40px_rgba(21,90,201,0.18)] hover:bg-accent-strong"
      : "border border-border bg-white text-foreground hover:border-accent hover:text-accent",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
}
