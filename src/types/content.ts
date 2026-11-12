export type Locale = "el" | "en";

export type LinkItem = {
  label: string;
  href: string;
};

export type LocaleSwitchContent = LinkItem & {
  ariaLabel: string;
};

export type HeaderContent = {
  brand: string;
  homeHref: string;
  navigation: LinkItem[];
  cta: LinkItem;
  localeSwitch: LocaleSwitchContent;
};

export type PageMetadataContent = {
  title: string;
  description: string;
};

export type HeroContent = {
  title: string;
  description: string;
  primaryCta: LinkItem;
  secondaryCta: LinkItem;
  trustNote: string;
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
  includesLabel: string;
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

export type WhyUsContent = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkedInLabel: string;
  instagramLabel: string;
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
  whatsappCtaLabel: string;
  whatsappMessage: string;
  formDividerLabel: string;
  selectPlaceholder: string;
  emailSubject: string;
  formFields: FormField[];
  ctaLabel?: string;
};

export type FooterContent = {
  brand: string;
  tagline: string;
  localeLinks: LinkItem[];
  email: string;
};

export type SiteContent = {
  locale: Locale;
  metadata: PageMetadataContent;
  header: HeaderContent;
  hero: HeroContent;
  problem?: ProblemContent;
  packages: PackagesContent;
  process: ProcessContent;
  examples: ExamplesContent;
  whyUs: WhyUsContent;
  contact: ContactContent;
  footer: FooterContent;
};
