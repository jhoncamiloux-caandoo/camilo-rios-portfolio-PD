import { CaseHeader } from "@/components/case-lp/case-header";
import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";

/* Fase 1 — esqueleto de rota. Conteúdo completo entra na Fase 4,
   mostrando o Design System real da Clint (tema.css, componentes/)
   como evidência — não um diagrama abstrato. */

export default function CaseScalePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-[#0A0A0A]">
      <CaseHeader label="Clint · Scale" />

      <section className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 pt-24 text-center">
        <span className="rounded-full bg-[#622FFD]/10 px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#622FFD]">
          Em construção
        </span>

        <Eyebrow>03 · Scale — Growth / Design System</Eyebrow>

        <BlurTitle
          text="Criando um sistema para escalar Growth."
          className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[#0A0A0A] md:text-6xl"
        />

        <Reveal delay={0.2}>
          <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
            Como transformar padrões visuais e operacionais em uma
            infraestrutura compartilhada para acelerar experimentos sem
            perder consistência.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <FlowDiagram
            nodes={["Tokens", "Componentes", "Padrões", "Telas", "Produto"]}
            activeIndex={1}
          />
        </Reveal>
      </section>
    </div>
  );
}
