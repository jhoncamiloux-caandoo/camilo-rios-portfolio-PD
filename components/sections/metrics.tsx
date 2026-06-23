"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Metric = {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
};

const metrics: Metric[] = [
  { value: 8, prefix: "+", suffix: " anos", label: "Construindo produtos digitais" },
  { value: 15, prefix: "+", suffix: "", label: "Ferramentas e diagnósticos com IA" },
  { value: 140, prefix: "+", suffix: "%", label: "Crescimento na geração de leads" },
  { value: 40, prefix: "+", suffix: "%", label: "Aumento no reconhecimento de marca" },
];

function Counter({ metric }: { metric: Metric }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1400;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setDisplay(Math.round(eased * metric.value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, metric.value]);

  return (
    <span ref={ref} className="tabular-nums">
      {metric.prefix}
      {display}
      {metric.suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="border-y border-white/10 bg-[#0A0A0A] py-24 text-white">
      <div className="container">
        <div className="mb-16 flex flex-col gap-3">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Em números
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Resultados que combinam design, dados e negócio.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 border-l border-white/10 pl-5"
            >
              <p className="font-display text-5xl font-bold tracking-tight text-white md:text-6xl">
                <Counter metric={metric} />
              </p>
              <p className="text-sm leading-relaxed text-white/55">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
