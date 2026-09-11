export type Locale = "pt" | "en" | "es";

export const LOCALES: Locale[] = ["pt", "en", "es"];

export const DEFAULT_LOCALE: Locale = "pt";

export const LOCALE_LABELS: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
};

/** BCP-47 tag set on <html lang> when each locale is active. */
export const LOCALE_HTML_LANG: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
  es: "es-CO",
};

/** Round flag shown on the language switcher for each locale. */
export const LOCALE_FLAG: Record<Locale, string> = {
  pt: "🇧🇷",
  en: "🇺🇸",
  es: "🇨🇴",
};
