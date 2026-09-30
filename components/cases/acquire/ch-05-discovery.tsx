"use client";

import { Eyebrow, BlurTitle, Reveal, Timeline } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch05Discovery() {
  const { t } = useLocale();
  const c = t.acquire.ch05;
  return (
    <section className="bg-white py-28 md:py-40" aria-label={c.sectionAriaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/65 md:text-lg">
              {c.paragraph}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {c.questions.map((q, i) => (
            <Reveal key={q} delay={i * 0.1}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-black/[0.06] bg-[#F8F8F8] p-6">
                <span className="mt-0.5 font-display text-sm font-semibold text-[#622FFD]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-base font-medium leading-snug text-[#0A0A0A] md:text-lg">
                  {q}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 md:mt-32">
          <Timeline steps={c.steps} />
        </div>
      </div>
    </section>
  );
}
