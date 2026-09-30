"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { CaseHeader } from "@/components/case-lp/case-header";
import { NextCase } from "@/components/case-lp/next-case";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { SvHero, SvConcept, SvVisual } from "@/components/cases/servientrega/sv-part-1";
import { SvJourney, SvFilm } from "@/components/cases/servientrega/sv-part-2";
import { SvAI, SvMulti, SvOutro } from "@/components/cases/servientrega/sv-part-3";

export default function CaseServientregaPage() {
  const { t } = useLocale();
  const c = t.servientrega;
  return (
    // overflow-x-clip (e não hidden) para não quebrar as seções sticky
    <div className="relative min-h-screen overflow-x-clip bg-[#07080b] text-white">
      <CaseHeader label={c.nav.label} />
      <SvHero />
      <SvConcept />
      <SvVisual />
      <SvJourney />
      <SvFilm />
      <SvAI />
      <SvMulti />
      <SvOutro />
      <NextCase eyebrow={c.nextCase.eyebrow} title={c.nextCase.title} description={c.nextCase.description} href="/cases/acquire" />
      <CaseFooter />
    </div>
  );
}
