"use client";

import { CaseHeader } from "@/components/case-lp/case-header";
import { NextCase } from "@/components/case-lp/next-case";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { Ch01Hero } from "@/components/cases/intelligence/ch-01-hero";
import { Ch02Problem } from "@/components/cases/intelligence/ch-02-problem";
import { Ch03Architecture } from "@/components/cases/intelligence/ch-03-architecture";
import { Ch04HumanInLoop } from "@/components/cases/intelligence/ch-04-human-in-loop";
import { Ch05Showcase } from "@/components/cases/intelligence/ch-05-showcase";
import { Ch06Results } from "@/components/cases/intelligence/ch-06-results";
import { useLocale } from "@/lib/i18n/locale-context";

export default function CaseIntelligencePage() {
  const { t } = useLocale();
  const c = t.intelligence.nextCase;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-[#0A0A0A]">
      <CaseHeader label="Clint · Intelligence" />
      <Ch01Hero />
      <Ch02Problem />
      <Ch03Architecture />
      <Ch04HumanInLoop />
      <Ch05Showcase />
      <Ch06Results />
      <NextCase
        eyebrow={c.eyebrow}
        title={c.title}
        description={c.description}
        href="/cases/scale"
      />
      <CaseFooter />
    </div>
  );
}
