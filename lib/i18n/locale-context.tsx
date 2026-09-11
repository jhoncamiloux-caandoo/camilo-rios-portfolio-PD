"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALE_HTML_LANG, LOCALES, type Locale } from "@/lib/i18n/types";
import { dictionaries, type Dictionary } from "@/lib/i18n/dictionaries";

const STORAGE_KEY = "locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && LOCALES.includes(stored)) return stored;
  } catch {
    // localStorage indisponível — mantém o padrão.
  }
  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  // Sempre inicia com o locale padrão para bater com o HTML renderizado no
  // servidor (evita hydration mismatch de texto). A preferência salva é
  // aplicada logo após o mount, no efeito abaixo — isso pode causar um
  // flash breve de PT → idioma salvo para quem já trocou antes, um trade-off
  // aceito por não termos rotas por idioma (troca é 100% client-side).
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored !== DEFAULT_LOCALE) setLocaleState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML_LANG[locale];
    document.documentElement.dataset.locale = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage indisponível (modo privado, etc.) — troca ainda funciona na sessão atual.
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale precisa estar dentro de <LocaleProvider>");
  return ctx;
}

/** Script inline (sem flash) — lido no <head> antes da hidratação. */
export const NO_FLASH_LOCALE_SCRIPT = `
(function () {
  try {
    var stored = window.localStorage.getItem("${STORAGE_KEY}");
    var locales = ${JSON.stringify(LOCALES)};
    var htmlLang = ${JSON.stringify(LOCALE_HTML_LANG)};
    var locale = locales.indexOf(stored) !== -1 ? stored : "${DEFAULT_LOCALE}";
    document.documentElement.dataset.locale = locale;
    document.documentElement.lang = htmlLang[locale];
  } catch (e) {}
})();
`;
