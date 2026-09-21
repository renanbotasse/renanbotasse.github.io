import { en } from "./en";
import { pt } from "./pt";
import type { Dictionary, Locale } from "./types";

export type { Dictionary, Locale, WorkCase } from "./types";
export { detectLocale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
