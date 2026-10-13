"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

type Theme = "light" | "dark";

const LABELS: Record<string, { toDark: string; toLight: string }> = {
  pt: { toDark: "Ativar tema escuro", toLight: "Ativar tema claro" },
  en: { toDark: "Switch to dark theme", toLight: "Switch to light theme" },
  es: { toDark: "Activar tema oscuro", toLight: "Activar tema claro" },
};

/** Alterna entre tema claro e escuro. O valor inicial vem do script no <head> (layout.tsx). */
export function ThemeToggle({ dark = false }: { dark?: boolean }) {
  const { locale } = useLocale();
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
    window.setTimeout(() => root.classList.remove("theme-transition"), 350);
  };

  const l = LABELS[locale.slice(0, 2)] ?? LABELS.pt;
  const label = theme === "dark" ? l.toLight : l.toDark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300 md:h-10 md:w-10 ${
        dark
          ? "border-white/15 bg-white/10 text-white hover:bg-white/20"
          : "border-ink/10 bg-surface/60 text-ink hover:bg-surface/90"
      }`}
    >
      {theme === "dark" ? <Sun className="h-[18px] w-[18px]" aria-hidden="true" /> : <Moon className="h-[18px] w-[18px]" aria-hidden="true" />}
    </button>
  );
}
