"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal, BigNumber, DrawnLine } from "@/components/case-lp/case-primitives";

const FUNNEL = [
  { value: 28967, label: "cliques nas campanhas de mídia paga" },
  { value: 10722, label: "conversas iniciadas pelo WhatsApp" },
  { value: 37, suffix: "%", label: "de taxa de conversão" },
  { value: 1.27, prefix: "R$ ", decimals: 2, label: "por conversa iniciada" },
  { value: 79, suffix: "%", label: "de toda a demanda da operação" },
];

export function Ch02Impact() {
  return (
    <section id="resultados" className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label="Impacto do projeto">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(98,47,253,0.12),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>Antes do processo</Eyebrow>
          <BlurTitle
            text="O impacto vem antes do processo."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-lg font-sans text-base leading-relaxed text-white/50 md:text-lg">
              Estes números não são o objetivo do case, são a consequência de
              decisões de Product Design que estão detalhadas a seguir.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center md:mt-28">
          {FUNNEL.map((m, i) => (
            <div key={m.label} className="flex w-full flex-col items-center">
              {i > 0 && <DrawnLine light className="mb-8 mt-8 h-14 md:h-16" />}
              <Reveal className="flex flex-col items-center gap-3 text-center">
                <BigNumber
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  decimals={m.decimals ?? 0}
                  className="font-display text-5xl font-semibold leading-none tracking-tight text-white md:text-7xl lg:text-8xl"
                />
                <span className="max-w-sm font-sans text-sm text-white/40 md:text-base">
                  {m.label}
                </span>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-10 max-w-md text-center">
          <p className="font-sans text-xs text-white/30">
            Medido via Google Analytics e Meta Ads durante o período da campanha.
          </p>
        </Reveal>

        <motion.div
          className="mx-auto mt-28 max-w-2xl text-center md:mt-36"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
        >
          <BlurTitle
            text="Esses resultados não surgiram por acaso."
            as="h3"
            className="font-display text-2xl font-semibold leading-snug tracking-tight text-white md:text-4xl"
          />
          <Reveal delay={0.4}>
            <p className="mt-6 font-sans text-base text-white/40 md:text-lg">
              A seguir, o processo que os tornou possíveis.
            </p>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}
