"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal, BigNumber } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";

export function Ch12Results() {
  const { t } = useLocale();
  const c = t.acquire.ch12;
  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label={c.sectionAriaLabel}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(55%_55%_at_50%_100%,rgba(98,47,253,0.14),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-2xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl"
          />
        </div>

        <div className="mx-auto mt-16 flex max-w-xl flex-col items-center md:mt-20">
          <BigNumber
            value={79}
            suffix="%"
            duration={1800}
            className="font-display text-[100px] font-semibold leading-none tracking-tight text-white md:text-[160px]"
          />
          <Reveal delay={0.3}>
            <p className="mt-3 max-w-md text-center font-sans text-sm text-white/60 md:text-base">
              {c.bigNumberCaption}
            </p>
          </Reveal>

          <div className="mt-10 w-full max-w-md">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#6670FF] to-[#3841B9]"
                initial={{ width: "0%" }}
                whileInView={{ width: "79%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.8, ease }}
              />
            </div>
            <div className="mt-3 flex justify-between font-sans text-xs text-white/60">
              <span>{c.barLabelLeft}</span>
              <span>{c.barLabelRight}</span>
            </div>
          </div>
        </div>

        <Reveal delay={0.4} className="mx-auto mt-20 max-w-xl text-center md:mt-24">
          <p className="font-sans text-base leading-relaxed text-white/60 md:text-lg">
            {c.paragraph}
          </p>
        </Reveal>

        <Reveal delay={0.5} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://agente-de-ia-para-vendas-no-whatsap.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 font-sans text-sm font-semibold text-[#0A0A0A] transition-all duration-250 hover:bg-[#622FFD] hover:text-white"
          >
            {c.ctaLabel}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
