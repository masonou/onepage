import { elContent } from "./el";
import { enContent } from "./en";

export const contentByLanguage = {
  el: elContent,
  en: enContent,
} as const;

export type ContentLanguage = keyof typeof contentByLanguage;

export const defaultLanguage: ContentLanguage = "el";

export const siteContent = contentByLanguage[defaultLanguage];
