import { elContent } from "./el";

export const contentByLanguage = {
  el: elContent,
} as const;

export type ContentLanguage = keyof typeof contentByLanguage;

export const defaultLanguage: ContentLanguage = "el";

export const siteContent = contentByLanguage[defaultLanguage];
