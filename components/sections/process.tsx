"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";

// Como eu trabalho: 6 passos ligados por uma linha que se preenche com o scroll.
export function Process() {
  const { t } = useLocale();
  const c = t.home.process;
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const draw = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const length = reduce ? 1 : draw;

  return (
    <section ref={ref} id="como-trabalho" data-nav-theme="dark" className="relative bg-[#0A0A0A] py-24 text-white md:py-28">
      <div className="container">
        <div className="mb-14 flex max-w-2xl flex-col gap-3 md:mb-20">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{c.eyebrow}</span>
          <h2 className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[56px]">{c.title}</h2>
          <p className="mt-2 font-sans text-base leading-relaxed text-white/70 md:text-lg">{c.intro}</p>
        </div>

        <div className="relative">
          {/* Linha de progresso: horizontal no desktop, vertical no mobile */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-5 hidden h-[2px] bg-white/10 lg:block">
            <motion.div className="h-full origin-left bg-[#8b6bff]" style={{ scaleX: length }} />
          </div>
          <div aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-[2px] -translate-x-1/2 bg-white/10 lg:hidden">
            <motion.div className="h-full w-full origin-top bg-[#8b6bff]" style={{ scaleY: length }} />
          </div>

          <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-6 lg:gap-6">
            {c.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.06 }}
                className="flex gap-5 lg:flex-col lg:gap-6"
              >
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#8b6bff]/50 bg-[#0A0A0A] font-mono text-xs font-bold text-[#c9b8ff]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-xl font-semibold text-white">{step.title}</h3>
                  <p className="font-sans text-sm leading-relaxed text-white/70">{step.body}</p>
                  {step.example && (
                    <p className="mt-2 border-l border-[#8b6bff]/40 pl-3 font-sans text-xs leading-relaxed text-white/60">{step.example}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
