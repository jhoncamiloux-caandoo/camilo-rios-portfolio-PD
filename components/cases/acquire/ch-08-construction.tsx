"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";
import type { AcquireDictionary } from "@/lib/i18n/dictionaries/acquire";

function Sketch({
  name,
  active,
  sections,
  sketchFocusSuffix,
}: {
  name: string;
  active: number;
  sections: AcquireDictionary["ch08"]["sections"];
  sketchFocusSuffix: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="flex w-full max-w-[280px] flex-col gap-2 rounded-2xl border border-black/[0.07] bg-white p-5 shadow-[0_16px_48px_-16px_rgba(10,10,10,0.12)]"
    >
      {sections.map((s, i) => (
        <div
          key={s.name}
          className={`rounded-md transition-colors duration-500 ${
            i === active ? "bg-[#622FFD]" : "bg-black/[0.05]"
          } ${i === active ? "h-14" : "h-5"}`}
        />
      ))}
      <p className="mt-2 text-center font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0A0A0A]/35">
        {name} {sketchFocusSuffix}
      </p>
    </div>
  );
}

export function Ch08Construction() {
  const { t } = useLocale();
  const c = t.acquire.ch08;
  return (
    <section className="bg-[#F8F8F8] py-32 md:py-48" aria-label={c.sectionAriaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              {c.paragraph}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-24 flex max-w-5xl flex-col gap-24 md:mt-32 md:gap-32">
          {c.sections.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={s.name}
                className={`flex flex-col items-center gap-10 md:flex-row md:gap-16 ${
                  reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <Reveal className="flex w-full justify-center md:w-1/2">
                  <Sketch name={s.name} active={i} sections={c.sections} sketchFocusSuffix={c.sketchFocusSuffix} />
                </Reveal>

                <div className="flex w-full flex-col gap-4 md:w-1/2">
                  <Reveal>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-semibold text-[#622FFD]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-[#0A0A0A] md:text-3xl">
                        {s.name}
                      </h3>
                    </div>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/60 md:text-lg">
                      {s.decision}
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="rounded-xl bg-[#622FFD]/[0.05] p-5">
                      <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#622FFD]">
                        {c.hypothesisLabel}
                      </p>
                      <p className="mt-2 font-sans text-sm italic leading-relaxed text-[#0A0A0A]/55 md:text-base">
                        &ldquo;{s.hypothesis}&rdquo;
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mx-auto mt-24 max-w-xl text-center md:mt-32">
          <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/50 md:text-lg">
            {c.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
