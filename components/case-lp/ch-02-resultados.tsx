"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal, BigNumber, DrawnLine } from "./case-primitives";

/* Funil: cada métrica leva à próxima */
const FUNNEL = [
  { value: 28967, label: "cliques nas campanhas de mídia paga" },
  { value: 10722, label: "conversas iniciadas pelo WhatsApp" },
  { value: 37, suffix: "%", label: "de taxa de conversão" },
  { value: 1.27, prefix: "R$ ", decimals: 2, label: "por conversa iniciada" },
  { value: 79, suffix: "%", label: "de toda a geração de demanda da operação" },
];

export function Ch02Resultados() {
  return (
    <section
      id="resultados"
      className="relative bg-[#0A0A0A] py-32 md:py-48"
      aria-label="Resultados do projeto"
    >
      {/* Glow roxo sutil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(98,47,253,0.12),transparent_70%)]"
      />

      <div className="container relative">
        {/* Cabeçalho do capítulo */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow light>02 · Resultados</Eyebrow>
          <BlurTitle
            text="Antes de mostrar o processo, o impacto vem primeiro."
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/50 md:text-lg">
              Os resultados não surgiram de uma grande ideia. Foram consequência
              de pequenas decisões orientadas por comportamento do usuário,
              dados e experimentação contínua.
            </p>
          </Reveal>
        </div>

        {/* Funil de métricas */}
        <div className="mx-auto mt-24 flex max-w-2xl flex-col items-center md:mt-32">
          {FUNNEL.map((m, i) => (
            <div key={m.label} className="flex w-full flex-col items-center">
              {i > 0 && <DrawnLine light className="mb-10 mt-10 h-16 md:h-20" />}
              <Reveal className="flex flex-col items-center gap-3 text-center">
                <BigNumber
                  value={m.value}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  decimals={m.decimals ?? 0}
                  className="font-display text-6xl font-semibold leading-none tracking-tight text-white md:text-8xl lg:text-9xl"
                />
                <span className="max-w-sm font-sans text-sm text-white/40 md:text-base">
                  {m.label}
                </span>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Revelação de fechamento */}
        <motion.div
          className="mx-auto mt-32 max-w-2xl text-center md:mt-44"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
        >
          <BlurTitle
            text="Esses resultados não surgiram por acaso."
            as="h3"
            className="font-display text-3xl font-semibold leading-snug tracking-tight text-white md:text-5xl"
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
