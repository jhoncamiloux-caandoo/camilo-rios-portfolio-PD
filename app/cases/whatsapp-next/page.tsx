"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { CaseHeader } from "@/components/case-lp/case-header";
import { NextCase } from "@/components/case-lp/next-case";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { WnHero, WnContext, WnStrategy, WnIdentity } from "@/components/cases/whatsapp-next/wn-part-1";
import { WnBlog, WnContent, WnA11y, WnMotion } from "@/components/cases/whatsapp-next/wn-part-2";
import { WnLandingPage, WnAds, WnLeads, WnResults, WnRole, WnLearning } from "@/components/cases/whatsapp-next/wn-part-3";

export default function CaseWhatsappNextPage() {
  const { t } = useLocale();
  const c = t.whatsappNext;
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020403] text-[#f5fff8]">
      <CaseHeader label={c.nav.label} />
      <WnHero />
      <WnContext />
      <WnStrategy />
      <WnIdentity />
      <WnBlog />
      <WnContent />
      <WnA11y />
      <WnMotion />
      <WnLandingPage />
      <WnAds />
      <WnLeads />
      <WnResults />
      <WnRole />
      <WnLearning />
      <NextCase eyebrow={c.nextCase.eyebrow} title={c.nextCase.title} description={c.nextCase.description} href="/cases/acquire" />
      <CaseFooter />
    </div>
  );
}
