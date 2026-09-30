"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";

/* Rodapé minimalista de encerramento de um case. */
export function CaseFooter() {
  const { t } = useLocale();
  return (
    <footer className="bg-white py-10">
      <div className="container flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 text-center md:flex-row md:text-left">
        <p className="font-sans text-xs text-[#0A0A0A]/65">
          © {new Date().getFullYear()} Jhon Camilo Rios · Senior Product Designer
        </p>
        <Link
          href="/"
          className="font-sans text-xs font-semibold text-[#0A0A0A]/65 transition-colors hover:text-primary"
        >
          {t.home.common.backToPortfolio}
        </Link>
      </div>
    </footer>
  );
}
