"use client";

import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch02Problem() {
  const { t } = useLocale();
  const c = t.intelligence.ch02;

  return (
    <section className="bg-[#0A0A0A] py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-white md:text-5xl"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col items-center gap-6">
            <Reveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                {c.withoutUxLabel}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <FlowDiagram direction="vertical" dark nodes={c.withoutUxNodes} />
            </Reveal>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Reveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-primary-light">
                {c.designedLabel}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <FlowDiagram
                direction="vertical"
                dark
                activeIndex={4}
                nodes={c.designedNodes}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
