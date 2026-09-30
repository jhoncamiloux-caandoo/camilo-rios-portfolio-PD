"use client";

import { Eyebrow, BlurTitle, Reveal, FlowDiagram } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch04Problem() {
  const { t } = useLocale();
  const c = t.acquire.ch04;
  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label={c.sectionAriaLabel}>
      <div className="container">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-gutter">
          <div className="flex flex-col gap-6 md:col-span-6 lg:col-span-6">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <BlurTitle
              text={c.title}
              className="font-display text-3xl font-semibold leading-[1.14] tracking-tight text-[#0A0A0A] md:text-4xl"
            />

            <Reveal delay={0.4}>
              <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/65 md:text-base">
                {c.intro}
              </p>
            </Reveal>

            <div className="mt-2 flex flex-col gap-3">
              {c.frictions.map((friction, i) => (
                <Reveal key={friction} delay={0.5 + i * 0.08}>
                  <div className="flex items-start gap-3 border-l-2 border-black/[0.08] pl-4">
                    <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/65 md:text-base">
                      {friction}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center md:col-span-5 md:col-start-8">
            <Reveal delay={0.2}>
              <FlowDiagram
                direction="vertical"
                nodes={c.flowNodes}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
