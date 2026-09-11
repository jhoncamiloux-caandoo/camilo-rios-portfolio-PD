"use client";

import { Eyebrow, BlurTitle, Reveal, Timeline } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch03Architecture() {
  const { t } = useLocale();
  const c = t.intelligence.ch03;

  return (
    <section className="bg-white py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              {c.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32">
          <Timeline steps={c.states} />
        </div>
      </div>
    </section>
  );
}
