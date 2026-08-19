import { Eyebrow, BlurTitle, Reveal, BrowserMockup } from "@/components/case-lp/case-primitives";

const SCREENS = [
  {
    src: "/cases/clint/intelligence/agentes-inbox-atendimento.png",
    alt: "Atendimento do agente na Clint",
    caption: "Atendimento",
  },
  {
    src: "/cases/clint/intelligence/agentes-inbox-conversa.png",
    alt: "Conversas do agente em tempo real",
    caption: "Conversa em tempo real",
  },
  {
    src: "/cases/clint/intelligence/agentes-negociacoes.png",
    alt: "Negociações conduzidas pelo agente",
    caption: "Negociações",
  },
  {
    src: "/cases/clint/intelligence/ia-analise-print.png",
    alt: "Análise comercial na Clint",
    caption: "Análise comercial",
  },
];

export function Ch05Showcase() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Interface do produto de IA">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>AI UI Showcase</Eyebrow>
          <BlurTitle
            text="O copiloto que acompanha cada conversa comercial."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
        </div>

        {/* Peça central */}
        <div className="mx-auto mt-16 max-w-3xl md:mt-20">
          <Reveal>
            <BrowserMockup
              src="/cases/clint/intelligence/ia-chat-copiloto.png"
              alt="Dashboard criado pela Clint IA"
              url="useclint.com/plataforma"
            />
          </Reveal>
        </div>

        {/* Grade de telas reais */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SCREENS.map((screen, i) => (
            <Reveal key={screen.caption} delay={i * 0.08}>
              <figure className="overflow-hidden rounded-xl border border-black/[0.07]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={screen.src} alt={screen.alt} className="block w-full" loading="lazy" />
                <figcaption className="border-t border-black/[0.06] bg-[#F8F8F8] px-3 py-2 text-center font-sans text-xs font-medium text-[#0A0A0A]/55">
                  {screen.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Referência ao fluxo conversacional real */}
        <Reveal delay={0.3} className="mx-auto mt-14 max-w-lg text-center">
          <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/50 md:text-base">
            O fluxo conversacional que dá vida a esses agentes roda em
            produção — você pode conversar com ele agora.
          </p>
          <a
            href="https://typebot.co/demonstracao-clint"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center gap-2 rounded-full border border-black/[0.1] px-6 font-sans text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-primary hover:text-primary"
          >
            Testar o agente de IA
          </a>
        </Reveal>
      </div>
    </section>
  );
}
