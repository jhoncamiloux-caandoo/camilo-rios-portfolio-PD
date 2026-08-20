import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";

const FRICTIONS = [
  "Excesso de informação antes de qualquer benefício",
  "Baixa clareza da proposta de valor nos primeiros segundos",
  "Hierarquia visual pouco orientada à decisão",
  "CTA distante do contexto que gera confiança",
];

export function Ch04Problem() {
  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label="O problema">
      <div className="container">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-gutter">
          <div className="flex flex-col gap-6 md:col-span-6 lg:col-span-6">
            <Eyebrow>Problema</Eyebrow>
            <BlurTitle
              text="Quando a proposta de valor não é clara, cada etapa do funil precisa trabalhar mais."
              className="font-display text-3xl font-semibold leading-[1.14] tracking-tight text-[#0A0A0A] md:text-4xl"
            />

            <Reveal delay={0.4}>
              <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/50 md:text-base">
                A leitura inicial do funil apontava quatro fricções,
                confirmadas depois no discovery:
              </p>
            </Reveal>

            <div className="mt-2 flex flex-col gap-3">
              {FRICTIONS.map((friction, i) => (
                <Reveal key={friction} delay={0.5 + i * 0.08}>
                  <div className="flex items-start gap-3 border-l-2 border-black/[0.08] pl-4">
                    <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/60 md:text-base">
                      {friction}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center md:col-span-5 md:col-start-8">
            <Reveal delay={0.2}>
              <FlowDiagram
                direction="vertical"
                nodes={["Tráfego", "Landing", "Compreensão", "Confiança", "Ação", "Conversão"]}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
