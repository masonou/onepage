export type Locale = "el" | "en";

export type LinkItem = {
  label: string;
  href: string;
};

export type HeaderContent = {
  brand: string;
  navigation: LinkItem[];
  cta: LinkItem;
};

export type HeroContent = {
  title: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  trustNote: string;
};

export type WhoItsForContent = {
  title: string;
  description: string;
  items: string[];
};

export type ProblemParagraph = {
  text: string;
  tone?: "normal" | "strong";
};

export type ProblemContent = {
  title: string;
  paragraphs: ProblemParagraph[];
  needsTitle: string;
  needs: string[];
};

export type PackageItem = {
  name: string;
  price: string;
  bestFor: string;
  description: string;
  includes: string[];
};

export type PackagesContent = {
  title: string;
  description: string;
  packages: PackageItem[];
  note: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ProcessContent = {
  title: string;
  description: string;
  steps: ProcessStep[];
};

export type FeaturedProject = {
  featuredLabel: string;
  name: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  website: string;
  desktopImage: string;
  desktopImageAlt: string;
  mobileImage: string;
  mobileImageAlt: string;
};

export type ExamplesContent = {
  title: string;
  description?: string;
  project: FeaturedProject;
};

export type WhyUsItem = {
  title: string;
  description: string;
};

export type WhyUsContent = {
  title: string;
  description: string;
  items: WhyUsItem[];
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQContent = {
  title: string;
  description: string;
  items: FAQItem[];
};

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  options?: FormSelectOption[];
  required?: boolean;
};

export type FormSelectOption = {
  label: string;
  value: string;
  preferred?: boolean;
};

export type ContactContent = {
  title: string;
  description: string;
  formFields: FormField[];
  ctaLabel?: string;
  formNote?: string;
  detailsTitle?: string;
  details?: string[];
};

export type FooterContent = {
  brand: string;
  tagline: string;
  localeLinks: LinkItem[];
  email: string;
};

export type SiteContent = {
  locale: Locale;
  header: HeaderContent;
  hero: HeroContent;
  whoItsFor: WhoItsForContent;
  problem: ProblemContent;
  packages: PackagesContent;
  process: ProcessContent;
  examples: ExamplesContent;
  whyUs: WhyUsContent;
  faq: FAQContent;
  contact: ContactContent;
  footer: FooterContent;
};
