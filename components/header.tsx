"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLocale } from "@/lib/i18n/locale-context";

type Theme = "light" | "dark";

const ease = [0.22, 1, 0.36, 1] as const;

export function Header() {
  const { t } = useLocale();
  const navLinks = [
    { label: t.home.header.navLinks.impact, href: "#impacto" },
    { label: t.home.header.navLinks.cases, href: "#cases" },
    { label: t.home.header.navLinks.contact, href: "#contato" },
  ];
  const headerRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<Theme>("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const detect = () => {
      const rect = el.getBoundingClientRect();
      const x = window.innerWidth / 2;
      const y = rect.bottom + 2;
      const target = document.elementFromPoint(x, y);
      const themed = target?.closest<HTMLElement>("[data-nav-theme]");
      const next: Theme = themed?.dataset.navTheme === "dark" ? "dark" : "light";
      setTheme((prev) => (prev === next ? prev : next));
    };

    detect();

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        detect();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Fecha o menu mobile/tablet ao alternar para o breakpoint desktop.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const dark = theme === "dark" && !menuOpen;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-30 border-b backdrop-blur-xl transition-colors duration-300 ${
        dark ? "border-white/10 bg-black/25" : "border-black/5 bg-white/10"
      }`}
    >
      <div className="container flex h-14 items-center justify-between md:h-16">
        <a
          href="#inicio"
          className={`flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
            dark ? "focus-visible:ring-offset-[#0A0A0A]" : "focus-visible:ring-offset-light"
          }`}
          aria-label={t.home.header.logoAria}
        >
          <img
            src="/logo.svg"
            alt=""
            aria-hidden="true"
            className="h-7 w-7 shrink-0 md:h-8 md:w-8"
          />
          <span
            className={`font-display text-base font-semibold transition-colors duration-300 md:text-lg ${
              dark ? "text-white" : "text-dark"
            }`}
          >
            Jhon
          </span>
        </a>

        {/* Desktop nav — links de texto, só em telas grandes */}
        <nav
          aria-label={t.home.header.navAriaDesktop}
          className={`hidden items-center gap-8 text-sm transition-colors duration-300 lg:flex ${
            dark ? "text-white/60" : "text-dark/65"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-sm transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                dark ? "hover:text-white" : "hover:text-dark"
              }`}
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher dark={dark} />
        </nav>

        {/* Mobile/tablet — seletor de idioma + botão hambúrguer */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher dark={dark} />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? t.home.header.menuCloseAria : t.home.header.menuOpenAria}
            className={`flex h-9 w-9 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300 md:h-10 md:w-10 ${
              dark
                ? "border-white/15 bg-white/10 text-white hover:bg-white/20"
                : "border-black/8 bg-white/60 text-dark hover:bg-white/90"
            }`}
          >
            {menuOpen ? <X className="h-[18px] w-[18px]" aria-hidden="true" /> : <Menu className="h-[18px] w-[18px]" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Painel do menu mobile/tablet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav-panel"
            aria-label={t.home.header.navAriaMobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease }}
            className="overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-dark transition-colors hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
