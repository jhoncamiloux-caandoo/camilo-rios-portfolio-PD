"use client";

import { Eyebrow, BlurTitle, Reveal } from "./case-primitives";

/* Frases-chave reveladas uma a uma ao scroll */
const PHRASES = [
  "A solução era inovadora: um agente de IA capaz de atender, qualificar e responder clientes pelo WhatsApp.",
  "O desafio nunca foi a tecnologia.",
  "O desafio era fazer com que um vendedor entendesse, em poucos segundos, por que aquela solução era relevante para o seu negócio.",
];

export function Ch03Contexto() {
  return (
    <section className="bg-white py-32 md:py-48" aria-label="Contexto do desafio">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-16 md:grid-cols-12 md:gap-gutter">

          {/* Coluna esquerda: narrativa */}
          <div className="flex flex-col gap-8 md:col-span-6 lg:col-span-5">
            <Eyebrow>03 · Contexto</Eyebrow>
            <BlurTitle
              text="Traduzindo tecnologia em compreensão."
              className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-5xl lg:text-6xl"
            />

            <div className="flex flex-col gap-6">
              {PHRASES.map((phrase, i) => (
                <Reveal key={i} delay={i * 0.12}>
                  <p
                    className={`border-l-2 pl-5 font-sans leading-relaxed ${
                      i === 1
                        ? "border-[#622FFD] text-lg font-medium text-[#0A0A0A] md:text-xl"
                        : "border-black/[0.08] text-base text-[#0A0A0A]/55 md:text-lg"
                    }`}
                  >
                    {phrase}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
                A responsabilidade do projeto foi transformar complexidade em
                clareza, reduzindo esforço cognitivo e conduzindo o usuário
                naturalmente até a conversa com o time comercial.
              </p>
            </Reveal>
          </div>

          {/* Coluna direita: desafio em números de percepção */}
          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={0.2} className="sticky top-28 flex flex-col gap-4">
              {[
                {
                  q: "Poucos segundos",
                  a: "era o tempo disponível para o visitante entender a proposta de valor.",
                },
                {
                  q: "Produto complexo",
                  a: "inteligência artificial aplicada a vendas, um conceito novo para o público.",
                },
                {
                  q: "Confiança imediata",
                  a: "sem ela, nenhum vendedor iniciaria uma conversa comercial.",
                },
              ].map((item, i) => (
                <Reveal key={item.q} delay={0.15 * i}>
                  <div className="rounded-2xl border border-black/[0.06] bg-[#F8F8F8] p-7">
                    <p className="font-display text-xl font-semibold tracking-tight text-[#0A0A0A] md:text-2xl">
                      {item.q}
                    </p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-[#0A0A0A]/50 md:text-base">
                      {item.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
