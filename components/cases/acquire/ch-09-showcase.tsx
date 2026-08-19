import { Eyebrow, BlurTitle, Reveal, BrowserMockup } from "@/components/case-lp/case-primitives";

const CAPTIONS = ["Hierarquia", "CTA no contexto", "Prova social", "Responsivo", "Conversão"];

export function Ch09Showcase() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="A landing page real">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Visual Showcase</Eyebrow>
          <BlurTitle
            text="O produto final, não uma simulação."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
        </div>

        <div className="mx-auto mt-16 max-w-4xl md:mt-20">
          <Reveal>
            <BrowserMockup
              src="/lp-hero.webp"
              alt="Landing Page Clint: Agente de IA para Vendas no WhatsApp, versão completa"
              url="clintdigital.com.br/agente-ia"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {CAPTIONS.map((caption) => (
            <span
              key={caption}
              className="rounded-full border border-black/[0.08] px-4 py-1.5 font-sans text-xs font-semibold uppercase tracking-[0.1em] text-[#0A0A0A]/50"
            >
              {caption}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
