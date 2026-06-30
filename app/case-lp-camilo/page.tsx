import { CaseHeader } from "@/components/case-lp/case-header";
import { Ch01Hero } from "@/components/case-lp/ch-01-hero";

/* Capítulo 01 está completo. Os próximos capítulos serão adicionados
   aqui na mesma ordem do STORY.md conforme forem implementados. */

export default function CaseLpCamilo() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-[#0A0A0A]">
      <CaseHeader />
      <Ch01Hero />
    </div>
  );
}
