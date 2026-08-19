import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";

const PILLARS = [
  { title: "Reduzir esforço cognitivo", description: "Hierarquia visual clara e UX Writing direto — cada dobra comunica uma única ideia." },
  { title: "Aumentar confiança", description: "Prova social e demonstração visual posicionadas antes de cada pedido de ação." },
  { title: "Incentivar ação", description: "CTAs presentes ao longo de toda a jornada, sempre após um momento de convencimento." },
];

export function Ch07Strategy() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Estratégia">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Estratégia</Eyebrow>
          <BlurTitle
            text="Projetando uma jornada de conversão, não uma lista de seções."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.15}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Cada seção da Landing Page foi construída para responder uma
              objeção específica, na ordem em que ela normalmente surge na
              cabeça de quem decide.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 overflow-x-auto md:mt-20">
          <Reveal className="flex min-w-max justify-center px-4 md:min-w-0">
            <FlowDiagram
              nodes={["Aquisição", "Proposta de valor", "Prova", "Qualificação", "Conversão"]}
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-5 md:mt-28 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="border-l-2 border-[#622FFD] pl-5">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A] md:text-xl">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-[#0A0A0A]/50 md:text-base">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
