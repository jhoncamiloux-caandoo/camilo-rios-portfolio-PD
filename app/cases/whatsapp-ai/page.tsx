import { CaseHeader } from "@/components/case-lp/case-header";
import { Ch01Hero } from "@/components/case-lp/ch-01-hero";
import { Ch02Resultados } from "@/components/case-lp/ch-02-resultados";
import { Ch03Contexto } from "@/components/case-lp/ch-03-contexto";
import { Ch04Discovery } from "@/components/case-lp/ch-04-discovery";
import { Ch05Estrategia } from "@/components/case-lp/ch-05-estrategia";
import { Ch06Construcao } from "@/components/case-lp/ch-06-construcao";
import { Ch07Whatsapp } from "@/components/case-lp/ch-07-whatsapp";
import { Ch08Typebot } from "@/components/case-lp/ch-08-typebot";
import { Ch09Otimizacao } from "@/components/case-lp/ch-09-otimizacao";
import { Ch10ResultadosFinais } from "@/components/case-lp/ch-10-resultados-finais";
import { Ch11Aprendizados } from "@/components/case-lp/ch-11-aprendizados";
import { Ch12Conclusao } from "@/components/case-lp/ch-12-conclusao";

/* Narrativa completa conforme STORY.md:
   curiosidade → surpresa → compreensão → confiança → respeito →
   interesse → credibilidade → impacto → autoridade → conversa */

export default function CaseLpCamilo() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-[#0A0A0A]">
      <CaseHeader />
      <Ch01Hero />
      <Ch02Resultados />
      <Ch03Contexto />
      <Ch04Discovery />
      <Ch05Estrategia />
      <Ch06Construcao />
      <Ch07Whatsapp />
      <Ch08Typebot />
      <Ch09Otimizacao />
      <Ch10ResultadosFinais />
      <Ch11Aprendizados />
      <Ch12Conclusao />
    </div>
  );
}
