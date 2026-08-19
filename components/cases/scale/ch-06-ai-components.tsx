import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { ClintAiSignature, ClintAiCommandCloud, ClintMeetingIntel } from "./clint-components-live";

export function Ch06AiComponents() {
  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label="Componentes de IA do design system">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Componentes de IA</Eyebrow>
          <BlurTitle
            text="Um vocabulário próprio para explicar IA sem virar chatbot genérico."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Cada produto de IA da Clint precisa comunicar a mesma promessa
              de formas diferentes. Em vez de reinventar a cada página, o
              sistema tem três peças reutilizáveis para isso.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-col gap-6 md:mt-20">
          {/* Assinatura de IA */}
          <Reveal>
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 md:p-7">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A] md:text-xl">
                  Assinatura de IA
                </h3>
                <span className="font-mono text-[11px] text-[#0A0A0A]/35">data-ai-intro</span>
              </div>
              <p className="mb-5 font-sans text-sm leading-relaxed text-[#0A0A0A]/50">
                A frase que resume a promessa do produto antes de qualquer
                prova: pessoa descreve, a Clint executa.
              </p>
              <div className="flex items-center rounded-xl bg-[#060309] p-6">
                <ClintAiSignature />
              </div>
            </div>
          </Reveal>

          {/* Nuvem de comandos */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 md:p-7">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A] md:text-xl">
                  Nuvem de comandos
                </h3>
                <span className="font-mono text-[11px] text-[#0A0A0A]/35">CSS puro · sem JS</span>
              </div>
              <p className="mb-5 font-sans text-sm leading-relaxed text-[#0A0A0A]/50">
                Mostra a amplitude da IA sem empilhar cards: três trilhas de
                comandos reais atravessam a marca, pausando no hover.
              </p>
              <div className="rounded-xl bg-[#060309] p-6">
                <ClintAiCommandCloud />
              </div>
            </div>
          </Reveal>

          {/* Inteligência de reuniões */}
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 md:p-7">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A] md:text-xl">
                  Inteligência de reuniões
                </h3>
                <span className="font-mono text-[11px] text-[#0A0A0A]/35">texto + produto</span>
              </div>
              <p className="mb-5 font-sans text-sm leading-relaxed text-[#0A0A0A]/50">
                Transforma uma promessa abstrata ("a IA analisa suas
                reuniões") em produto visível: transcrição, score e insight
                juntos, sem depender de vídeo.
              </p>
              <div className="grid grid-cols-1 gap-6 rounded-xl bg-[#060309] p-6 md:grid-cols-2 md:items-center">
                <div className="flex flex-col gap-3">
                  {[
                    "A objeção que mais aparece e derruba a venda.",
                    "Os próximos passos combinados com cada lead.",
                    "O padrão das calls que mais convertem.",
                  ].map((point) => (
                    <p key={point} className="font-sans text-xs leading-relaxed text-white/60">
                      {point}
                    </p>
                  ))}
                </div>
                <ClintMeetingIntel />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
