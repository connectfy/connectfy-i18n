import enCommon from "../i18n/en.json";
import azCommon from "../i18n/az.json";
import ruCommon from "../i18n/ru.json";
import trCommon from "../i18n/tr.json";

export const resources = {
  en: enCommon,
  az: azCommon,
  ru: ruCommon,
  tr: trCommon,
} as const;

export type AvailableLang = keyof typeof resources;
export type Namespaces = keyof (typeof resources)["en"];

export const LANGUAGES: AvailableLang[] = Object.keys(
  resources
) as AvailableLang[];
export const DEFAULT_LANG: AvailableLang = "en";
