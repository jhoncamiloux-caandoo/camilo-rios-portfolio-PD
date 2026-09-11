"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";
import { LOCALES, LOCALE_FLAG, LOCALE_LABELS, type Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClickOutside = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const otherLocales = LOCALES.filter((l) => l !== locale);

  const handleSelect = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Idioma: ${LOCALE_LABELS[locale]}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border text-base leading-none backdrop-blur-sm transition-colors duration-300 md:h-10 md:w-10",
          dark
            ? "border-white/15 bg-white/10 hover:bg-white/20"
            : "border-black/8 bg-white/60 hover:bg-white/90"
        )}
      >
        <span aria-hidden="true">{LOCALE_FLAG[locale]}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label="Selecionar idioma"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.16, ease }}
            className="absolute right-0 top-full z-10 mt-2 flex flex-col gap-1 rounded-2xl border border-black/8 bg-white/95 p-1.5 shadow-[0_12px_32px_-8px_rgba(10,10,10,0.28)] backdrop-blur-xl"
          >
            {otherLocales.map((l) => (
              <li key={l}>
                <button
                  type="button"
                  role="option"
                  aria-selected={false}
                  onClick={() => handleSelect(l)}
                  className="flex w-full items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left text-sm font-medium text-[#0A0A0A] transition-colors hover:bg-black/5"
                >
                  <span aria-hidden="true" className="text-base leading-none">
                    {LOCALE_FLAG[l]}
                  </span>
                  {LOCALE_LABELS[l]}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
