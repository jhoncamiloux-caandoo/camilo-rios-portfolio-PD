import { CaseHeader } from "@/components/case-lp/case-header";
import { NextCase } from "@/components/case-lp/next-case";
import { CaseFooter } from "@/components/case-lp/case-footer";
import { Ch01Hero } from "@/components/cases/acquire/ch-01-hero";
import { Ch02Impact } from "@/components/cases/acquire/ch-02-impact";
import { Ch03Context } from "@/components/cases/acquire/ch-03-context";
import { Ch04Problem } from "@/components/cases/acquire/ch-04-problem";
import { Ch05Discovery } from "@/components/cases/acquire/ch-05-discovery";
import { Ch06Insight } from "@/components/cases/acquire/ch-06-insight";
import { Ch07Strategy } from "@/components/cases/acquire/ch-07-strategy";
import { Ch08Construction } from "@/components/cases/acquire/ch-08-construction";
import { Ch09CtaWhatsapp } from "@/components/cases/acquire/ch-09-cta-whatsapp";
import { Ch10Typebot } from "@/components/cases/acquire/ch-10-typebot";
import { Ch11Optimization } from "@/components/cases/acquire/ch-11-optimization";
import { Ch12Results } from "@/components/cases/acquire/ch-12-results";

export default function CaseAcquirePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-[#0A0A0A]">
      <CaseHeader label="Clint · Acquire" />
      <Ch01Hero />
      <Ch02Impact />
      <Ch03Context />
      <Ch04Problem />
      <Ch05Discovery />
      <Ch06Insight />
      <Ch07Strategy />
      <Ch08Construction />
      <Ch09CtaWhatsapp />
      <Ch10Typebot />
      <Ch11Optimization />
      <Ch12Results />
      <NextCase
        eyebrow="Próximo case"
        title="02 · Intelligence: projetando experiências de IA para equipes comerciais."
        description="Como transformar modelos, automações e recomendações em interações compreensíveis e controláveis."
        href="/cases/intelligence"
      />
      <CaseFooter />
    </div>
  );
}
