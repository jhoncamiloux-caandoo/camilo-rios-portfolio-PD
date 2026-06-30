import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function CaseHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl">
      <div className="container flex h-14 items-center justify-between md:h-16">

        {/* Voltar ao portfólio */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-medium text-[#0A0A0A]/50 transition-colors hover:text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          <span>Portfólio</span>
        </Link>

        {/* Logo central */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] focus-visible:ring-offset-2"
          aria-label="Jhon Camilo Rios — ir ao portfólio"
        >
          <img
            src="/logo.svg"
            alt=""
            aria-hidden="true"
            className="h-7 w-7 shrink-0"
          />
          <span className="font-display text-base font-semibold text-[#0A0A0A]">
            Jhon
          </span>
        </Link>

        {/* Identificador do case — desktop */}
        <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A0A0A]/35 md:block">
          Case 01 · IA para Vendas
        </span>
      </div>
    </header>
  );
}
