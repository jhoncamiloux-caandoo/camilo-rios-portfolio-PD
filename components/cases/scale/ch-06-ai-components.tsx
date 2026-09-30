"use client";

import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { ClintAiSignature, ClintAiCommandCloud, ClintMeetingIntel } from "@/components/case-lp/clint-components-live";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch06AiComponents() {
  const { t } = useLocale();
  const c = t.scale.ch06;

  return (
    <section className="bg-[#F8F8F8] py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/65 md:text-lg">
              {c.description}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 flex max-w-4xl flex-col gap-6 md:mt-20">
          {/* Assinatura de IA */}
          <Reveal>
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 md:p-7">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A] md:text-xl">
                  {c.signatureTitle}
                </h3>
                <span className="font-mono text-[11px] text-[#0A0A0A]/65">{c.signatureTag}</span>
              </div>
              <p className="mb-5 font-sans text-sm leading-relaxed text-[#0A0A0A]/65">
                {c.signatureDescription}
              </p>
              <div className="flex items-center rounded-xl bg-[#060309] p-6">
                <ClintAiSignature />
              </div>
            </div>
          </Reveal>

          {/* Nuvem de comandos */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 md:p-7">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A] md:text-xl">
                  {c.cloudTitle}
                </h3>
                <span className="font-mono text-[11px] text-[#0A0A0A]/65">{c.cloudTag}</span>
              </div>
              <p className="mb-5 font-sans text-sm leading-relaxed text-[#0A0A0A]/65">
                {c.cloudDescription}
              </p>
              <div className="rounded-xl bg-[#060309] p-6">
                <ClintAiCommandCloud />
              </div>
            </div>
          </Reveal>

          {/* Inteligência de reuniões */}
          <Reveal delay={0.2}>
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 md:p-7">
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold tracking-tight text-[#0A0A0A] md:text-xl">
                  {c.meetingTitle}
                </h3>
                <span className="font-mono text-[11px] text-[#0A0A0A]/65">{c.meetingTag}</span>
              </div>
              <p className="mb-5 font-sans text-sm leading-relaxed text-[#0A0A0A]/65">
                {c.meetingDescription}
              </p>
              <div className="grid grid-cols-1 gap-6 rounded-xl bg-[#060309] p-6 md:grid-cols-2 md:items-center">
                <div className="flex flex-col gap-3">
                  {c.meetingPoints.map((point) => (
                    <p key={point} className="font-sans text-xs leading-relaxed text-white/60">
                      {point}
                    </p>
                  ))}
                </div>
                <ClintMeetingIntel />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
