import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";

export function Ch02Problem() {
  return (
    <section className="bg-[#0A0A0A] py-28 md:py-40" aria-label="O problema da IA sem UX">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>Problema</Eyebrow>
          <BlurTitle
            text="IA não deve adicionar complexidade ao produto que deveria simplificar."
            className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col items-center gap-6">
            <Reveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                Sem UX
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <FlowDiagram direction="vertical" dark nodes={["Usuário", "Prompt", "IA", "?", "Resultado"]} />
            </Reveal>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Reveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#622FFD]">
                Experiência desenhada
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <FlowDiagram
                direction="vertical"
                dark
                activeIndex={4}
                nodes={["Intenção", "Contexto", "IA", "Recomendação", "Validação humana", "Ação", "Feedback"]}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
