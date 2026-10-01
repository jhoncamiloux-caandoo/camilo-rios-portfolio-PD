"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { HeroCrm } from "./hero-crm";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch01Hero() {
  const { t } = useLocale();
  const c = t.intelligence.ch01;

  return (
    <section
      className="relative bg-white pb-24 pt-40 md:pb-32 md:pt-48"
      aria-label={c.ariaLabel}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(60%_60%_at_70%_0%,rgba(98,47,253,0.07),transparent_72%)]"
      />

      <div className="container relative grid grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-gutter">
        <div className="flex flex-col gap-7 md:col-span-6 lg:col-span-5">
          <Eyebrow>{c.eyebrow}</Eyebrow>

          <BlurTitle
            as="h1"
            text={c.title}
            className="font-display text-[34px] font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] sm:text-[42px] md:text-[52px]"
          />

          <Reveal delay={0.4}>
            <p className="max-w-md font-sans text-base leading-relaxed text-[#0A0A0A]/65 md:text-lg">
              {c.description}
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-2">
              {c.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/[0.08] px-3.5 py-1.5 font-sans text-xs font-medium text-[#0A0A0A]/65"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <p className="font-sans text-xs text-[#0A0A0A]/65">
              {c.teamNote}
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal delay={0.2}>
            <div role="img" aria-label={c.heroImageAlt}>
              <HeroCrm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
