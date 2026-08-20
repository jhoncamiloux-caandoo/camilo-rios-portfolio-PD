"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Impacto", href: "#impacto" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

type Theme = "light" | "dark";

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<Theme>("light");

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

  const dark = theme === "dark";

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
          aria-label="Voltar ao início do portfólio de Jhon Camilo Rios"
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

        {/* Desktop nav */}
        <nav
          aria-label="Navegação principal"
          className={`hidden items-center gap-8 text-sm transition-colors duration-300 md:flex ${
            dark ? "text-white/60" : "text-dark/60"
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
        </nav>

        {/* Mobile nav — icon-free pill links */}
        <nav
          aria-label="Navegação mobile"
          className="flex items-center gap-3 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full border px-3 py-1 text-[11px] font-medium backdrop-blur-sm transition-colors duration-300 ${
                dark
                  ? "border-white/15 bg-white/10 text-white/80 hover:bg-white/20"
                  : "border-black/8 bg-white/60 text-dark/70 hover:bg-white/90"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
