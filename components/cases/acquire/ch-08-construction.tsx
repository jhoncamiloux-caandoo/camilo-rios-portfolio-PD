"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";

const SECTIONS = [
  {
    name: "Hero",
    decision:
      "Apresentar primeiro o benefício, não a tecnologia. A headline comunica o resultado que o vendedor quer: fechar mais vendas.",
    hypothesis:
      "Simplificar a Hero e apresentar primeiro o benefício ajudaria mais usuários a entender a proposta de valor em poucos segundos.",
  },
  {
    name: "Benefícios",
    decision:
      "Transformar funcionalidades em resultados percebidos. Nada de jargão técnico: cada benefício descreve um ganho concreto na operação.",
    hypothesis:
      "Resultados percebidos reduzem a carga cognitiva mais do que listas de recursos.",
  },
  {
    name: "Demonstração",
    decision:
      "Mostrar a IA conversando de verdade numa simulação de chat, em vez de explicar em texto como ela funciona.",
    hypothesis:
      "Uma demonstração visual reduziria a carga cognitiva mais do que uma explicação textual.",
  },
  {
    name: "Provas",
    decision:
      "Prova social específica: depoimentos com contexto de negócio, números reais e nomes reais.",
    hypothesis:
      "Provas sociais específicas aumentariam a percepção de credibilidade.",
  },
  {
    name: "Autoridade",
    decision:
      "Elementos de credibilidade posicionados antes do CTA final: parceiros, resultados e presença de mercado.",
    hypothesis:
      "Credibilidade percebida reduz o risco da decisão e destrava a ação.",
  },
];

function Sketch({ name, active }: { name: string; active: number }) {
  return (
    <div
      aria-hidden="true"
      className="flex w-full max-w-[280px] flex-col gap-2 rounded-2xl border border-black/[0.07] bg-white p-5 shadow-[0_16px_48px_-16px_rgba(10,10,10,0.12)]"
    >
      {SECTIONS.map((s, i) => (
        <div
          key={s.name}
          className={`rounded-md transition-colors duration-500 ${
            i === active ? "bg-[#622FFD]" : "bg-black/[0.05]"
          } ${i === active ? "h-14" : "h-5"}`}
        />
      ))}
      <p className="mt-2 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0A0A0A]/35">
        {name} em foco
      </p>
    </div>
  );
}

export function Ch08Construction() {
  return (
    <section className="bg-[#F8F8F8] py-32 md:py-48" aria-label="Construção da experiência">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Construção</Eyebrow>
          <BlurTitle
            text="Cada elemento existe por um motivo."
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Os três pilares da estratégia se traduziram dobra a dobra.
              Nenhum componente foi inserido apenas por estética: cada uma
              responde a uma objeção específica da jornada.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-24 flex max-w-5xl flex-col gap-24 md:mt-32 md:gap-32">
          {SECTIONS.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={s.name}
                className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${
                  reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <Reveal className="flex w-full justify-center md:w-1/2">
                  <Sketch name={s.name} active={i} />
                </Reveal>

                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <Reveal>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-semibold text-[#622FFD]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-[#0A0A0A] md:text-3xl">
                        {s.name}
                      </h3>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/60 md:text-lg">
                      {s.decision}
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="rounded-xl bg-[#622FFD]/[0.05] p-5">
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#622FFD]">
                        Hipótese de design
                      </p>
                      <p className="mt-2 font-sans text-sm italic leading-relaxed text-[#0A0A0A]/55 md:text-base">
                        &ldquo;{s.hypothesis}&rdquo;
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-24 max-w-xl text-center md:mt-32">
          <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/50 md:text-lg">
            Faltava uma última decisão, a que mais pesou no resultado final: o
            que acontece depois que a confiança já foi construída.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
