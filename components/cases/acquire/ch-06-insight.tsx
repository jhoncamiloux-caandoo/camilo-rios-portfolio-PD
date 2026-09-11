"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch06Insight() {
  const { t } = useLocale();
  const c = t.acquire.ch06;
  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label={c.sectionAriaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.15}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              {c.paragraph}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
          {c.insights.map((insight, i) => (
            <Reveal key={insight.n} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-black/[0.07] bg-white p-7">
                <span className="font-display text-sm font-semibold text-[#622FFD]">{insight.n}</span>
                <h3 className="font-display text-xl font-semibold tracking-tight text-[#0A0A0A] md:text-2xl">
                  {insight.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/55 md:text-base">
                  {insight.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
