"use client";

import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch02Problem() {
  const { t } = useLocale();
  const c = t.scale.ch02;

  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.15] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 md:mt-28 md:grid-cols-2 md:gap-10">
          <div className="flex flex-col items-center gap-6">
            <Reveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#0A0A0A]/35">
                {c.beforeLabel}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="grid w-full max-w-xs grid-cols-3 gap-2">
              {c.beforeItems.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-black/[0.08] bg-white px-2 py-3 text-center font-sans text-xs font-medium text-[#0A0A0A]/50"
                >
                  {item}
                </span>
              ))}
            </Reveal>
          </div>

          <div className="flex flex-col items-center gap-6">
            <Reveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#622FFD]">
                {c.systemLabel}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <FlowDiagram
                direction="vertical"
                activeIndex={4}
                nodes={c.systemNodes}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
