"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/locale-context";
import { SocialLinks } from "@/components/social-links";

/* Rodapé minimalista de encerramento de um case. */
export function CaseFooter() {
  const { t } = useLocale();
  return (
    <footer className="bg-surface pb-36 pt-10 md:pb-10">
      <div className="container flex flex-col items-center justify-between gap-4 border-t border-ink/[0.06] pt-8 text-center md:flex-row md:pr-44 md:text-left">
        <p className="font-sans text-xs text-ink/65">
          © {new Date().getFullYear()} Jhon Camilo Rios · Senior Product Designer
        </p>
        <SocialLinks dark={false} />
        <Link
          href="/"
          className="font-sans text-xs font-semibold text-ink/65 transition-colors hover:text-link"
        >
          {t.home.common.backToPortfolio}
        </Link>
      </div>
    </footer>
  );
}
