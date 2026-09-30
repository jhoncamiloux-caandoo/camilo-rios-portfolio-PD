"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch04HumanInLoop() {
  const { t } = useLocale();
  const c = t.intelligence.ch04;

  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-gutter">
          <div className="flex flex-col gap-6 md:col-span-6 lg:col-span-5">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <BlurTitle
              text={c.title}
              className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-4xl"
            />
            <Reveal delay={0.15}>
              <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/65 md:text-lg">
                {c.description}
              </p>
            </Reveal>

            <div className="mt-2 flex flex-wrap gap-2">
              {c.considerations.map((item, i) => (
                <Reveal key={item} delay={0.05 * i}>
                  <span className="rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 font-sans text-xs font-medium text-[#0A0A0A]/65">
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:col-span-5 md:col-start-8">
            <Reveal className="w-full max-w-xs rounded-xl border border-black/[0.07] bg-white px-6 py-3.5 text-center font-sans text-sm font-semibold text-[#0A0A0A]">
              {c.flow.aiSuggests}
            </Reveal>
            <span aria-hidden="true" className="h-6 w-px bg-black/10" />
            <Reveal delay={0.1} className="w-full max-w-xs rounded-xl bg-[#622FFD] px-6 py-3.5 text-center font-sans text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(98,47,253,0.55)]">
              {c.flow.userDecides}
            </Reveal>
            <span aria-hidden="true" className="h-6 w-px bg-black/10" />
            <div className="grid w-full max-w-xs grid-cols-3 gap-2">
              {[c.flow.approve, c.flow.edit, c.flow.reject].map((option, i) => (
                <Reveal
                  key={option}
                  delay={0.15 + i * 0.05}
                  className="rounded-lg border border-black/[0.07] bg-white px-2 py-2.5 text-center font-sans text-xs font-semibold text-[#0A0A0A]/70"
                >
                  {option}
                </Reveal>
              ))}
            </div>
            <span aria-hidden="true" className="h-6 w-px bg-black/10" />
            <Reveal delay={0.3} className="w-full max-w-xs rounded-xl border border-black/[0.07] bg-white px-6 py-3.5 text-center font-sans text-sm font-semibold text-[#0A0A0A]">
              {c.flow.actionExecuted}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
