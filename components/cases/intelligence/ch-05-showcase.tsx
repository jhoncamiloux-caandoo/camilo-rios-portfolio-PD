"use client";

import { Eyebrow, BlurTitle, Reveal, BrowserMockup } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

const SCREEN_SRC = [
  "/cases/clint/intelligence/agentes-inbox-atendimento.webp",
  "/cases/clint/intelligence/agentes-inbox-conversa.webp",
  "/cases/clint/intelligence/agentes-negociacoes.webp",
  "/cases/clint/intelligence/ia-analise-print.webp",
];

export function Ch05Showcase() {
  const { t } = useLocale();
  const c = t.intelligence.ch05;
  const screens = c.screens.map((screen, i) => ({ ...screen, src: SCREEN_SRC[i] }));

  return (
    <section className="bg-white py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
        </div>

        {/* Peça central */}
        <div className="mx-auto mt-16 max-w-3xl md:mt-20">
          <Reveal>
            <BrowserMockup
              src="/cases/clint/intelligence/ia-chat-copiloto.webp"
              alt={c.heroImageAlt}
              url="useclint.com/plataforma"
            />
          </Reveal>
        </div>

        {/* Grade de telas reais */}
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {screens.map((screen, i) => (
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
            {c.ctaText}
          </p>
          <a
            href="https://typebot.co/demonstracao-clint"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex h-11 items-center gap-2 rounded-full border border-black/[0.1] px-6 font-sans text-sm font-semibold text-[#0A0A0A] transition-colors hover:border-primary hover:text-primary"
          >
            {c.ctaButton}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
