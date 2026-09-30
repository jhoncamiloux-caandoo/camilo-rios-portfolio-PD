"use client";

import { CaseHeader } from "@/components/case-lp/case-header";
import { NextCase } from "@/components/case-lp/next-case";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { Ch01Hero } from "@/components/cases/scale/ch-01-hero";
import { Ch02Problem } from "@/components/cases/scale/ch-02-problem";
import { Ch03Architecture } from "@/components/cases/scale/ch-03-architecture";
import { Ch04Tokens } from "@/components/cases/scale/ch-04-tokens";
import { Ch04bTokenLayers } from "@/components/cases/scale/ch-04b-token-layers";
import { Ch05bPlayground } from "@/components/cases/scale/ch-05b-playground";
import { Ch05Components } from "@/components/cases/scale/ch-05-components";
import { Ch06AiComponents } from "@/components/cases/scale/ch-06-ai-components";
import { Ch07Governance } from "@/components/cases/scale/ch-07-governance";
import { Ch08GrowthSystem } from "@/components/cases/scale/ch-08-growth-system";
import { Ch09FigmaStorybook } from "@/components/cases/scale/ch-09-figma-storybook";
import { Ch10Results } from "@/components/cases/scale/ch-10-results";
import { useLocale } from "@/lib/i18n/locale-context";

export default function CaseScalePage() {
  const { t } = useLocale();
  const nextCase = t.scale.nextCase;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-[#0A0A0A]">
      <CaseHeader label="Clint · Scale" />
      <Ch01Hero />
      <Ch02Problem />
      <Ch03Architecture />
      <Ch04Tokens />
      <Ch04bTokenLayers />
      <Ch05Components />
      <Ch05bPlayground />
      <Ch06AiComponents />
      <Ch07Governance />
      <Ch08GrowthSystem />
      <Ch09FigmaStorybook />
      <Ch10Results />
      <NextCase
        eyebrow={nextCase.eyebrow}
        title={nextCase.title}
        description={nextCase.description}
        href="/cases/acquire"
      />
      <CaseFooter />
    </div>
  );
}
