"use client";

import { motion } from "framer-motion";
import { Eyebrow, BlurTitle, Reveal, BigNumber } from "@/components/case-lp/case-primitives";

const TIME_COMPARISON = [
  { label: "Do zero", value: "4h12", widthPct: 100 },
  { label: "Com Design System", value: "2h", widthPct: 47.6, accent: true },
];

function GlassPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-white/[0.03] p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          padding: 1,
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.16), rgba(98,47,253,0.4) 45%, rgba(255,255,255,0.05))",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-center">{children}</div>
    </div>
  );
}

function TimeComparisonBars() {
  return (
    <div className="mt-2 flex w-full max-w-[220px] flex-col gap-4">
      {TIME_COMPARISON.map((row) => (
        <div key={row.label} className="flex flex-col gap-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-sans text-xs text-white/45">{row.label}</span>
            <span className="font-display text-sm font-semibold text-white">{row.value}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.08]">
            <motion.div
              className={`h-full rounded-full ${
                row.accent
                  ? "bg-gradient-to-r from-[#6670FF] to-[#3841B9]"
                  : "bg-white/20"
              }`}
              initial={{ width: "0%" }}
              whileInView={{ width: `${row.widthPct}%` }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function Ch10Results() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label="Resultado do sistema">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(98,47,253,0.12),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>Resultado</Eyebrow>
          <BlurTitle
            text="Um sistema compartilhado torna cada página nova mais rápida de nascer."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/50 md:text-lg">
              Tokens e componentes prontos removem a decisão visual repetida
              de cada nova página, e isso também muda como agentes de IA
              trabalham dentro do projeto.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-6 md:mt-20 md:grid-cols-2">
          {/* Velocidade — dado real, com fonte */}
          <Reveal>
            <GlassPanel>
              <BigNumber
                value={47}
                suffix="%"
                duration={1600}
                className="font-display text-6xl font-semibold tracking-tight text-white md:text-7xl"
              />
              <span className="font-sans text-sm text-white/50">
                mais rápido para construir a mesma página
              </span>
              <TimeComparisonBars />
              <span className="mt-3 max-w-xs font-sans text-xs leading-relaxed text-white/30">
                Estudo controlado da Sparkbox: 8 desenvolvedores construíram o
                mesmo formulário duas vezes, uma do zero e outra reutilizando o
                Design System Carbon da IBM.
              </span>
            </GlassPanel>
          </Reveal>

          {/* Tokens de IA — estimativa raciocinada, não dado publicado */}
          <Reveal delay={0.15}>
            <GlassPanel>
              <span className="font-display text-6xl font-semibold tracking-tight text-white md:text-7xl">
                70&#8211;85%
              </span>
              <span className="font-sans text-sm text-white/50">
                menos tokens para um agente de IA gerar a mesma interface
              </span>
              <span className="max-w-xs font-sans text-xs leading-relaxed text-white/30">
                Estimativa própria, não um estudo publicado: escrever uma seção do
                zero (cores, espaçamento, estados, responsivo) custa
                1.200&#8211;2.000 tokens; importar um componente já pronto
                custa 150&#8211;300.
              </span>
            </GlassPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
