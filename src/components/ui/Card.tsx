import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  tone?: "plain" | "soft" | "accent";
};

export function Card({
  children,
  className = "",
  tone = "plain",
}: CardProps) {
  const toneClass =
    tone === "accent" ? "bg-surface-strong" : tone === "soft" ? "bg-surface" : "bg-white";

  return (
    <div
      className={[
        "rounded-[1.75rem] border border-border shadow-[0_18px_50px_rgba(15,23,42,0.05)]",
        toneClass,
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
