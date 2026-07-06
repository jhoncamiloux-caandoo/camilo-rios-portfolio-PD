"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal, BigNumber } from "./case-primitives";

const METRICS = [
  { value: 28967, label: "cliques" },
  { value: 10722, label: "conversas" },
  { value: 37, suffix: "%", label: "conversão" },
  { value: 1.27, prefix: "R$ ", decimals: 2, label: "por conversa" },
];

export function Ch10ResultadosFinais() {
  return (
    <section className="relative bg-[#0A0A0A] py-32 md:py-48" aria-label="Impacto no negócio">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] bg-[radial-gradient(55%_55%_at_50%_100%,rgba(98,47,253,0.14),transparent_70%)]"
      />

      <div className="container relative">
        {/* Cabeçalho */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow light>10 · Impacto no negócio</Eyebrow>
          <BlurTitle
            text="A Landing Page tornou-se o principal ativo de aquisição da operação."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
        </div>

        {/* Número central: 79% */}
        <div className="mx-auto mt-20 flex max-w-3xl flex-col items-center md:mt-28">
          <BigNumber
            value={79}
            suffix="%"
            duration={2000}
            className="font-display text-[120px] font-semibold leading-none tracking-tight text-white md:text-[200px]"
          />
          <Reveal delay={0.3}>
            <p className="mt-4 max-w-md text-center font-sans text-base text-white/45 md:text-lg">
              de todo o tráfego pago da operação passou por esta Landing Page
            </p>
          </Reveal>

          {/* Barra de proporção */}
          <div className="mt-10 w-full max-w-xl">
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#6670FF] to-[#3841B9]"
                initial={{ width: "0%" }}
                whileInView={{ width: "79%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.8, ease }}
              />
            </div>
            <div className="mt-3 flex justify-between font-sans text-xs text-white/35">
              <span>Esta Landing Page</span>
              <span>Demais canais</span>
            </div>
          </div>
        </div>

        {/* Métricas de apoio */}
        <div className="mx-auto mt-24 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-12 md:mt-32 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.08} className="flex flex-col items-center gap-2 text-center">
              <BigNumber
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                decimals={m.decimals ?? 0}
                className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl"
              />
              <span className="font-sans text-sm text-white/40">{m.label}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mx-auto mt-24 max-w-2xl text-center md:mt-32">
          <p className="font-sans text-base leading-relaxed text-white/50 md:text-lg">
            Mais importante do que os números, o projeto estabeleceu um processo
            contínuo de experimentação, análise e evolução.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
