import { CaseHeader } from "@/components/case-lp/case-header";
import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";

/* Fase 1 — esqueleto de rota. Conteúdo completo entra na Fase 3, com
   a copy real de "Clint IA.dc.html" / "Agentes.dc.html" e screenshots
   reais do produto (Agentes, Conversas, CRM). */

export default function CaseIntelligencePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-[#0A0A0A]">
      <CaseHeader label="Clint · Intelligence" />

      <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 pt-24 text-center">
        <span className="rounded-full bg-[#622FFD]/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#622FFD]">
          Em construção
        </span>

        <Eyebrow>02 · Intelligence — AI / UX</Eyebrow>

        <BlurTitle
          text="Projetando experiências de IA para equipes comerciais."
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[#0A0A0A] md:text-6xl"
        />

        <Reveal delay={0.2}>
          <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
            Como transformar modelos, automações e recomendações em
            experiências compreensíveis, acionáveis e controláveis pelo
            usuário.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <FlowDiagram
            nodes={["Intenção", "Contexto", "IA", "Recomendação", "Validação humana", "Ação"]}
            activeIndex={2}
          />
        </Reveal>
      </section>
    </div>
  );
}
