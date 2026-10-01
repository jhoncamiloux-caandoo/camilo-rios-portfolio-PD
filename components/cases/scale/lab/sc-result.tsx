"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, FileText } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { CALENDAR_URL, RESUME_URL } from "@/lib/links";

/* Capítulo 10: o que mudou, por área, e a conclusão com CTA. */

export function ScResult() {
  const { t } = useLocale();
  const c = t.scaleLab.result;
  const cta = t.scale.playground;
  const reduce = useReducedMotion();

  return (
    <section aria-label={c.ariaLabel} className="bg-white py-24 text-[#0A0A0A] md:py-32">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#622FFD]">{c.eyebrow}</p>
        <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[56px]">{c.title}</h2>
        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {c.areas.map((a, i) => (
            <motion.li
              key={a.name}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: reduce ? 0 : i * 0.07 }}
              className="rounded-2xl border border-black/[0.08] bg-[#F8F8F8] p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#622FFD]">{a.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-[#0A0A0A]/80">{a.body}</p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl bg-[#0A0A0A] px-6 py-14 text-center text-white md:px-12">
          <p className="font-display text-3xl font-semibold md:text-5xl">{c.conclusion}</p>
          <p className="max-w-xl text-base text-white/70 md:text-lg">{c.conclusionSub}</p>
          <div className="mt-4 w-full max-w-lg border-t border-white/10 pt-6">
            <p className="font-display text-lg font-semibold">{cta.ctaTitle}</p>
            <p className="mt-1 text-sm text-white/70">{cta.ctaDescription}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full bg-[#622FFD] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#7447FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {cta.ctaPrimary}
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition-colors hover:border-[#A48BFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <FileText className="h-4 w-4" aria-hidden="true" />
                {cta.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
