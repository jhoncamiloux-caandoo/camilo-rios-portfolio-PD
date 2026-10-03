"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch10Typebot() {
  const { t } = useLocale();
  const c = t.acquire.ch10;
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
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/65 md:text-lg">
              {c.paragraph}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-10 md:mt-28 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-3">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-black/[0.07] bg-white shadow-[0_24px_64px_-24px_rgba(10,10,10,0.18)]">
                <div className="flex items-center gap-3 border-b border-black/[0.05] bg-[#0A0A0A] px-6 py-4">
                  <span className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-[#622FFD] to-[#A78BFA]" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-white">{c.chatHeaderTitle}</p>
                    <p className="font-sans text-xs text-[#25D366]">{c.chatHeaderStatus}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  {c.chat.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: i * 0.14, ease }}
                      className={`max-w-[85%] rounded-2xl px-4 py-3 font-sans text-sm leading-relaxed ${
                        msg.from === "bot"
                          ? "self-start rounded-tl-md bg-[#F2F0FF] text-[#0A0A0A]"
                          : "self-end rounded-tr-md bg-[#622FFD] text-white"
                      }`}
                    >
                      {msg.text}
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.6, delay: c.chat.length * 0.14 + 0.2, ease }}
                    className="mt-2 flex items-center justify-between rounded-2xl border border-[#622FFD]/25 bg-[#622FFD]/[0.05] px-5 py-4"
                  >
                    <div>
                      <p className="font-sans text-sm font-semibold text-[#0A0A0A]">{c.scheduleTitle}</p>
                      <p className="font-sans text-xs text-[#0A0A0A]/65">{c.scheduleSubtitle}</p>
                    </div>
                    <span className="rounded-full bg-[#622FFD] px-4 py-2 font-sans text-xs font-semibold text-white">
                      {c.scheduleCta}
                    </span>
                  </motion.div>
                </div>
              </div>
            </Reveal>
            <p className="text-center font-sans text-[11px] text-[#0A0A0A]/65">
              {c.chatCaption}
            </p>
          </div>

          <div className="flex flex-col justify-center gap-8">
            <Reveal>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/65">
                {c.qualifiersLabel}
              </p>
            </Reveal>
            <div className="flex flex-col gap-3">
              {c.qualifiers.map((q, i) => (
                <motion.div
                  key={q.label}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-white px-5 py-4"
                >
                  <span className="font-sans text-sm text-[#0A0A0A]/65">{q.label}</span>
                  <span className="font-sans text-sm font-semibold text-[#0A0A0A]">{q.value}</span>
                </motion.div>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-2.5">
                {c.pipeline.map((step, i) => (
                  <div key={step} className="flex items-center gap-2.5">
                    {i > 0 && (
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-[#622FFD]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    )}
                    <span className="rounded-full border border-black/[0.08] bg-white px-4 py-2 font-sans text-xs font-semibold text-[#0A0A0A] md:text-sm">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="font-sans text-base leading-relaxed text-[#0A0A0A]/65">
                {c.resultParagraph}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-16 max-w-4xl md:mt-24">
          <div className="overflow-hidden rounded-2xl border border-black/[0.08] bg-[#0A0A0A] p-2 shadow-[0_24px_64px_-24px_rgba(10,10,10,0.25)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img loading="lazy" decoding="async"
              src="/cases/clint/acquire/typebot-fluxo-real.webp"
              alt={c.screenshotAlt}
              className="block w-full rounded-xl"
            />
          </div>
          <p className="mt-4 text-center font-sans text-[11px] text-[#0A0A0A]/65">
            {c.screenshotCaption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
