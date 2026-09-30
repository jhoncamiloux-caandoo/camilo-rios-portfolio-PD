"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

// Mesma ordem de c.steps: atendimento → qualificação → funil → copiloto → dashboard.
const STEP_SRC = [
  "/cases/clint/intelligence/agentes-inbox-atendimento.webp",
  "/cases/clint/intelligence/agentes-inbox-conversa.webp",
  "/cases/clint/intelligence/agentes-negociacoes.webp",
  "/cases/clint/intelligence/ia-analise-print.webp",
  "/cases/clint/intelligence/ia-chat-copiloto.webp",
];

export function Ch05Showcase() {
  const { t } = useLocale();
  const c = t.intelligence.ch05;
  const steps = c.steps.map((step, i) => ({ ...step, src: STEP_SRC[i] }));

  return (
    <section className="bg-white py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/65">{c.description}</p>
        </div>

        {/* Fluxo narrado: cada tela é um passo da mesma conversa */}
        <ol className="relative mx-auto mt-16 flex max-w-5xl flex-col gap-16 md:mt-24 md:gap-24">
          <span
            aria-hidden="true"
            className="absolute bottom-4 left-5 top-4 w-px bg-gradient-to-b from-primary/40 via-primary/15 to-transparent md:left-1/2"
          />
          {steps.map((step, i) => {
            const flip = i % 2 === 1;
            return (
              <li key={step.title} className="relative grid grid-cols-1 items-center gap-6 pl-14 md:grid-cols-2 md:gap-16 md:pl-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-white shadow-[0_0_0_6px_#fff] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Reveal className={flip ? "md:order-2 md:pl-10" : "md:pr-10 md:text-right"}>
                  <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-[#0A0A0A] md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-[#0A0A0A]/65 md:text-base">
                    {step.body}
                  </p>
                </Reveal>
                <Reveal delay={0.1} className={flip ? "md:order-1 md:pr-10" : "md:pl-10"}>
                  <figure className="overflow-hidden rounded-2xl border border-black/[0.07] bg-[#0A0A0A] shadow-[0_24px_60px_-28px_rgba(10,10,10,0.45)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.src} alt={step.alt} className="block w-full" loading="lazy" />
                  </figure>
                </Reveal>
              </li>
            );
          })}
        </ol>

        {/* Referência ao fluxo conversacional real */}
        <Reveal delay={0.3} className="mx-auto mt-14 max-w-lg text-center">
          <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/65 md:text-base">
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
