import type { Metadata } from "next";

import { siteConfig } from "../lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  title: siteConfig.name,
  description: "Simple, affordable websites for small businesses in Cyprus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // TODO: Revisit the root `lang` attribute when the default route is translated into Greek.
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
