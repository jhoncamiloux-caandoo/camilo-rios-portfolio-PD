"use client";

import { CaseHeader } from "@/components/case-lp/case-header";
import { NextCase } from "@/components/case-lp/next-case";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { ScHero } from "@/components/cases/scale/lab/sc-hero";
import { ScBeforeAfter } from "@/components/cases/scale/lab/sc-before-after";
import { ScTokenArch } from "@/components/cases/scale/lab/sc-token-arch";
import { ScSystemInterface } from "@/components/cases/scale/lab/sc-system-interface";
import { ScSystemLab } from "@/components/cases/scale/lab/sc-system-lab";
import { ScA11y } from "@/components/cases/scale/lab/sc-a11y";
import { ScAi } from "@/components/cases/scale/lab/sc-ai";
import { ScGrowth } from "@/components/cases/scale/lab/sc-growth";
import { ScOps } from "@/components/cases/scale/lab/sc-ops";
import { ScResult } from "@/components/cases/scale/lab/sc-result";
import { Ch04Tokens } from "@/components/cases/scale/ch-04-tokens";
import { Ch05Components } from "@/components/cases/scale/ch-05-components";
import { Ch10Results } from "@/components/cases/scale/ch-10-results";
import { useLocale } from "@/lib/i18n/locale-context";

export default function CaseScalePage() {
  const { t } = useLocale();
  const nextCase = t.scale.nextCase;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-[#0A0A0A]">
      <CaseHeader label="Clint · Scale" />
      {/* Etapa A do Scale reconstruído: capítulos 1 a 4 */}
      <ScHero />
      <ScBeforeAfter />
      <ScTokenArch />
      <ScSystemInterface />
      {/* Etapa B: capítulos 5 e 6 */}
      <ScSystemLab />
      <ScA11y />
      {/* Etapa C: capítulos 7 e 8 */}
      <ScAi />
      <ScGrowth />
      <Ch04Tokens />
      <Ch05Components />
      {/* Etapa D: capítulos 9 e 10 */}
      <ScOps />
      <Ch10Results />
      <ScResult />
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
