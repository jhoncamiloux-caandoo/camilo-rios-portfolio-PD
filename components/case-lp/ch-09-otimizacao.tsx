"use client";

import { motion } from "framer-motion";
import { ease, Eyebrow, BlurTitle, Reveal } from "./case-primitives";

const INSIGHTS = [
  {
    tool: "Microsoft Clarity",
    finding: "Sessões gravadas e heatmaps revelaram padrões de comportamento e pontos de hesitação.",
  },
  {
    tool: "Google Analytics",
    finding: "Funis de aquisição mostraram os gargalos reais da jornada, dobra a dobra.",
  },
  {
    tool: "Iterações guiadas por dados",
    finding: "Ajustes de copy, reposicionamento de elementos e mudanças de hierarquia visual, sempre a partir de uma hipótese.",
  },
];

const CYCLE = ["Observação", "Hipótese", "Implementação", "Mensuração", "Aprendizado"];

/* Mini gráfico de linha animado (GA) */
function LineChart() {
  return (
    <svg viewBox="0 0 320 140" className="w-full" aria-hidden="true">
      {/* grid */}
      {[35, 70, 105].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(0,0,0,0.05)" strokeWidth="1" />
      ))}
      {/* área */}
      <motion.path
        d="M0 120 C40 110, 70 95, 110 88 S 180 70, 220 52 S 290 30, 320 22 L320 140 L0 140 Z"
        fill="url(#gaGradient)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      {/* linha */}
      <motion.path
        d="M0 120 C40 110, 70 95, 110 88 S 180 70, 220 52 S 290 30, 320 22"
        fill="none"
        stroke="#622FFD"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.6, ease }}
      />
      <defs>
        <linearGradient id="gaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#622FFD" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#622FFD" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Heatmap abstrato (Clarity) */
function Heatmap() {
  const spots = [
    { x: "18%", y: "22%", s: 72, o: 0.5 },
    { x: "58%", y: "30%", s: 96, o: 0.65 },
    { x: "34%", y: "58%", s: 60, o: 0.4 },
    { x: "72%", y: "68%", s: 84, o: 0.55 },
  ];
  return (
    <div className="relative h-[140px] w-full overflow-hidden rounded-lg bg-[#0A0A0A]/[0.03]" aria-hidden="true">
      {/* linhas de wireframe */}
      <div className="absolute inset-x-6 top-5 h-2 rounded bg-black/[0.06]" />
      <div className="absolute inset-x-6 top-10 h-2 w-2/3 rounded bg-black/[0.05]" />
      <div className="absolute inset-x-6 top-[72px] h-2 rounded bg-black/[0.05]" />
      <div className="absolute inset-x-6 top-[92px] h-2 w-1/2 rounded bg-black/[0.04]" />
      {spots.map((spot, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: spot.x,
            top: spot.y,
            width: spot.s,
            height: spot.s,
            background: `radial-gradient(circle, rgba(249,71,6,${spot.o}) 0%, rgba(249,71,6,0) 70%)`,
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease }}
        />
      ))}
    </div>
  );
}

export function Ch09Otimizacao() {
  return (
    <section className="bg-white py-32 md:py-48" aria-label="Otimização contínua">
      <div className="container">
        {/* Cabeçalho */}
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>09 · Otimização contínua</Eyebrow>
          <BlurTitle
            text="O lançamento foi apenas o começo."
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-[#0A0A0A] md:text-6xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              O projeto nunca ficou pronto. Evoluiu continuamente com base em
              comportamento real dos usuários.
            </p>
          </Reveal>
        </div>

        {/* Painéis de dados */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-6 md:mt-28 md:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 shadow-[0_16px_48px_-20px_rgba(10,10,10,0.14)]">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-sans text-sm font-semibold text-[#0A0A0A]">Google Analytics</p>
                <span className="rounded-full bg-[#622FFD]/10 px-3 py-1 font-sans text-[11px] font-semibold text-[#622FFD]">
                  Conversão
                </span>
              </div>
              <LineChart />
              <p className="mt-4 font-sans text-xs text-[#0A0A0A]/40">
                Evolução da taxa de conversão ao longo das iterações
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 shadow-[0_16px_48px_-20px_rgba(10,10,10,0.14)]">
              <div className="mb-5 flex items-center justify-between">
                <p className="font-sans text-sm font-semibold text-[#0A0A0A]">Microsoft Clarity</p>
                <span className="rounded-full bg-[#F94706]/10 px-3 py-1 font-sans text-[11px] font-semibold text-[#F94706]">
                  Heatmap
                </span>
              </div>
              <Heatmap />
              <p className="mt-4 font-sans text-xs text-[#0A0A0A]/40">
                Zonas de atenção e cliques mapeadas em sessões reais
              </p>
            </div>
          </Reveal>
        </div>

        {/* Insights */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          {INSIGHTS.map((item, i) => (
            <Reveal key={item.tool} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-black/[0.06] bg-[#F8F8F8] p-6">
                <p className="font-display text-base font-semibold tracking-tight text-[#0A0A0A]">
                  {item.tool}
                </p>
                <p className="mt-2 font-sans text-sm leading-relaxed text-[#0A0A0A]/50">
                  {item.finding}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Ciclo de experimentação */}
        <Reveal className="mt-20 md:mt-24">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-3">
            {CYCLE.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                {i > 0 && (
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#622FFD]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
                <span className="rounded-full border border-black/[0.08] bg-white px-5 py-2.5 font-sans text-sm font-semibold text-[#0A0A0A]">
                  {step}
                </span>
              </div>
            ))}
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#622FFD]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            <span className="rounded-full bg-[#622FFD] px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-[0_8px_28px_-8px_rgba(98,47,253,0.6)]">
              Nova Hipótese
            </span>
          </div>
          <p className="mt-8 text-center font-display text-xl font-medium tracking-tight text-[#0A0A0A] md:text-2xl">
            Nenhuma melhoria foi baseada em opinião. Todas foram guiadas por dados.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
