import { FadeIn } from "@/components/motion/fade-in";

const signals = [
  {
    value: "Growth",
    label: "Design orientado por experimentos, leitura de funil e decisão de negócio.",
  },
  {
    value: "AI",
    label: "Produtos com fluxos inteligentes, automação útil e interações claras.",
  },
  {
    value: "CRO",
    label: "Interfaces que reduzem fricção e deixam a proposta de valor evidente.",
  },
  {
    value: "SaaS",
    label: "Sistemas de produto consistentes, escaláveis e prontos para operação diária.",
  },
];

export function Impact() {
  return (
    <section id="impacto" className="bg-light py-28 text-dark">
      <div className="container">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <FadeIn className="md:col-span-5">
            <p className="mb-6 text-caption uppercase tracking-[0.22em] text-dark/50">
              Impacto
            </p>
            <h2 className="font-display text-[48px] font-semibold leading-[1.08] md:text-h2">
              Design como motor de crescimento.
            </h2>
          </FadeIn>
          <FadeIn className="md:col-span-6 md:col-start-7" delay={0.12}>
            <p className="text-body text-dark/62">
              O trabalho combina estratégia de produto, sistemas visuais e
              execução detalhada para transformar problemas ambiciosos em
              jornadas simples de entender, medir e evoluir.
            </p>
          </FadeIn>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-dark/10 bg-dark/10 md:grid-cols-4">
          {signals.map((signal, index) => (
            <FadeIn
              className="bg-light p-7"
              delay={index * 0.06}
              key={signal.value}
            >
              <p className="font-display text-[44px] font-semibold leading-none text-dark">
                {signal.value}
              </p>
              <p className="mt-5 text-sm leading-6 text-dark/58">{signal.label}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
