"use client";

import { Eyebrow, BlurTitle, Reveal } from "./case-primitives";

/* Cada seção da LP: a decisão e a hipótese que ela validava */
const SECTIONS = [
  {
    name: "Hero",
    decision:
      "Apresentar primeiro o benefício, não a tecnologia. A headline comunica o resultado que o vendedor quer: fechar mais vendas.",
    hypothesis:
      "Se simplificarmos a Hero e apresentarmos primeiro o benefício, mais usuários entenderão a proposta de valor em poucos segundos.",
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
      "Mostrar a IA conversando de verdade em uma simulação de chat, em vez de explicar em texto como ela funciona.",
    hypothesis:
      "Uma demonstração visual reduzirá a carga cognitiva mais do que uma explicação textual.",
  },
  {
    name: "Provas",
    decision:
      "Prova social específica: depoimentos com contexto de negócio, números reais e nomes reais.",
    hypothesis:
      "Se utilizarmos provas sociais específicas, a percepção de credibilidade aumentará.",
  },
  {
    name: "Autoridade",
    decision:
      "Elementos de credibilidade posicionados antes do CTA final: parceiros, resultados e presença de mercado.",
    hypothesis:
      "Credibilidade percebida reduz o risco da decisão e destrava a ação.",
  },
  {
    name: "CTA",
    decision:
      "Conversa imediata no WhatsApp em vez de formulário. O próximo passo está sempre a um clique.",
    hypothesis:
      "Se direcionarmos o usuário direto para o WhatsApp, reduziremos o esforço para iniciar uma conversa.",
  },
];

/* Mini wireframe abstrato de cada dobra */
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

export function Ch06Construcao() {
  return (
    <section className="bg-[#F8F8F8] py-32 md:py-48" aria-label="Construção da experiência">
      <div className="container">
        {/* Cabeçalho */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>06 · Construção</Eyebrow>
          <BlurTitle
            text="Cada elemento existe por um motivo."
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Nenhum componente foi inserido apenas por estética. Cada dobra
              valida uma hipótese e responde uma objeção.
            </p>
          </Reveal>
        </div>

        {/* Seções da LP, uma a uma */}
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
                {/* Wireframe */}
                <Reveal className="flex w-full justify-center md:w-1/2">
                  <Sketch name={s.name} active={i} />
                </Reveal>

                {/* Explicação */}
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
                        Hipótese validada
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
      </div>
    </section>
  );
}
