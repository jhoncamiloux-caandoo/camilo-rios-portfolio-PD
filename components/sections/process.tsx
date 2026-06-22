"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";
import {
  BarChart2,
  GitBranch,
  FlaskConical,
  Layers,
  type LucideIcon,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

type Step = {
  num: string;
  title: string;
  body: string;
  icon: LucideIcon;
  visual: React.FC;
};

const steps: Step[] = [
  {
    num: "01",
    title: "Diagnóstico de negócio e comportamento",
    body: "Não começo desenhando telas; começo analisando dados e funis. Mergulho nas métricas de aquisição e retenção para identificar os gargalos reais de conversão e entender o comportamento do usuário através de dados quantitativos e qualitativos.",
    icon: BarChart2,
    visual: VisualDiagnostic,
  },
  {
    num: "02",
    title: "Arquitetura de experiência e narrativa",
    body: "Estruturo a jornada do usuário focada em reduzir o custo de aquisição (CAC) e maximizar o LTV. Utilizo frameworks de CRO e IA para mapear fluxos de decisão, garantindo que a proposta de valor elimine qualquer atrito cognitivo.",
    icon: GitBranch,
    visual: VisualArchitecture,
  },
  {
    num: "03",
    title: "Prototipagem, teste e refinamento",
    body: "Transformo hipóteses em protótipos de alta fidelidade. Valido cada interação iterativamente com testes A/B e feedback real, garantindo que o design seja uma alavanca comprovada de conversão antes do desenvolvimento.",
    icon: FlaskConical,
    visual: VisualPrototype,
  },
  {
    num: "04",
    title: "Sistema visual pronto para escala",
    body: "Construo Design Systems robustos e documentados, pensados para escala SaaS. O foco é garantir consistência visual global e um handoff impecável para a equipe de engenharia.",
    icon: Layers,
    visual: VisualSystem,
  },
];

// ─── VISUAL PLACEHOLDERS ─────────────────────────────────────────────────────

function VisualDiagnostic() {
  const bars = [55, 72, 48, 88, 63, 79, 41];
  return (
    <div className="flex h-full flex-col justify-between gap-6 p-8">
      {/* Mini funnel */}
      <div className="flex flex-col items-center gap-1">
        {[
          { w: "w-full", label: "Visitas", val: "24.8k" },
          { w: "w-4/5", label: "Leads", val: "6.2k" },
          { w: "w-3/5", label: "MQL", val: "1.9k" },
          { w: "w-2/5", label: "SQL", val: "480" },
        ].map((row) => (
          <div key={row.label} className="flex w-full items-center gap-3">
            <div
              className={`${row.w} h-8 rounded bg-white/[0.06] flex items-center justify-between px-3`}
            >
              <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                {row.label}
              </span>
              <span className="font-display text-sm font-semibold text-white/80">
                {row.val}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Sparkline */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
          Conversão — últimos 7d
        </span>
        <div className="flex h-14 items-end gap-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-primary/30 transition-all"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      {/* Insight pill */}
      <div className="rounded-xl border border-primary/20 bg-primary/10 px-4 py-3">
        <p className="text-xs text-primary">
          ↑ +23% no checkout após diagnóstico de atrito
        </p>
      </div>
    </div>
  );
}

function VisualArchitecture() {
  return (
    <div className="flex h-full flex-col justify-center gap-5 p-8">
      {/* Flow map nodes */}
      {[
        { label: "Entrada orgânica", sub: "SEO · Referral" },
        { label: "Landing page CRO", sub: "Hero · Social proof · CTA" },
        { label: "Onboarding IA", sub: "Personalização · Ativação" },
        { label: "Retenção & Expansão", sub: "NPS · Upsell loop" },
      ].map((node, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <span className="text-[9px] font-bold text-primary">{i + 1}</span>
          </div>
          <div className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
            <p className="text-sm font-semibold text-white/90">{node.label}</p>
            <p className="mt-0.5 text-[11px] text-white/35">{node.sub}</p>
          </div>
          {i < 3 && (
            <div className="absolute left-[2.55rem] mt-7 h-5 w-px bg-primary/20" />
          )}
        </div>
      ))}
    </div>
  );
}

function VisualPrototype() {
  return (
    <div className="flex h-full flex-col gap-5 p-8">
      {/* Browser chrome mock */}
      <div className="overflow-hidden rounded-xl border border-white/[0.08]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.04] px-4 py-2.5">
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="ml-3 h-4 flex-1 rounded bg-white/[0.05]" />
        </div>
        {/* Page wireframe */}
        <div className="flex flex-col gap-3 bg-white/[0.02] p-4">
          <div className="h-3 w-2/3 rounded bg-white/10" />
          <div className="h-2 w-full rounded bg-white/[0.06]" />
          <div className="h-2 w-5/6 rounded bg-white/[0.06]" />
          <div className="mt-2 h-8 w-32 rounded-full bg-primary/40" />
        </div>
      </div>
      {/* A/B labels */}
      <div className="grid grid-cols-2 gap-3">
        {["Variante A — 3.2%", "Variante B — 5.8% ↑"].map((label, i) => (
          <div
            key={i}
            className={`rounded-lg border px-3 py-2 text-center text-xs font-semibold ${
              i === 1
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-white/[0.08] bg-white/[0.03] text-white/40"
            }`}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function VisualSystem() {
  const tokens = [
    { label: "Primary", color: "bg-primary" },
    { label: "Dark", color: "bg-[#0A0A0A] border border-white/10" },
    { label: "Light", color: "bg-[#F8F8F8]" },
  ];
  const components = ["Button", "Card", "Modal", "Input", "Badge", "Nav"];
  return (
    <div className="flex h-full flex-col justify-between gap-5 p-8">
      {/* Token swatches */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
          Design Tokens
        </span>
        <div className="flex gap-2">
          {tokens.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-1.5">
              <div className={`h-10 w-10 rounded-lg ${t.color}`} />
              <span className="text-[9px] text-white/30">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Component list */}
      <div className="flex flex-col gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
          Componentes
        </span>
        <div className="flex flex-wrap gap-2">
          {components.map((c) => (
            <span
              key={c}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs text-white/60"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      {/* Handoff row */}
      <div className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
        <span className="text-xs text-white/40">Handoff para eng.</span>
        <span className="rounded-full bg-green-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-green-400">
          Ready ✓
        </span>
      </div>
    </div>
  );
}

// ─── STEP VISUAL CARD (sticky left) ──────────────────────────────────────────

function StepVisual({
  step,
  isActive,
}: {
  step: Step;
  isActive: boolean;
}) {
  const Visual = step.visual;
  const Icon = step.icon;

  return (
    <motion.div
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.97,
        y: isActive ? 0 : 12,
      }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute inset-0"
      aria-hidden={!isActive}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03]">
        {/* Card header */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-6 py-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-display text-sm font-semibold text-white/60">
            Passo {step.num}
          </span>
        </div>
        {/* Visual content */}
        <div className="relative flex-1">
          <Visual />
        </div>
      </div>
    </motion.div>
  );
}

// ─── STEP ROW (right column) ──────────────────────────────────────────────────

function StepRow({
  step,
  index,
  isActive,
  isLast,
  onActivate,
}: {
  step: Step;
  index: number;
  isActive: boolean;
  isLast: boolean;
  onActivate: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.65", "center 0.4"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.4) onActivate(index);
  });

  return (
    <div
      ref={ref}
      className="flex min-h-[70vh] items-center"
      aria-current={isActive ? "step" : undefined}
    >
      <div className="flex gap-8">
        {/* Timeline dot + line */}
        <div className="relative flex flex-col items-center">
          <motion.div
            animate={{
              backgroundColor: isActive ? "#622FFD" : "rgba(255,255,255,0.1)",
              boxShadow: isActive
                ? "0 0 0 4px rgba(98,47,253,0.2)"
                : "none",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10"
          >
            <span className="font-display text-xs font-bold text-white">
              {step.num}
            </span>
          </motion.div>
          {!isLast && (
            <div className="relative mt-2 w-px flex-1 overflow-hidden bg-white/[0.08]">
              <motion.div
                className="absolute inset-x-0 top-0 bg-primary"
                animate={{ height: isActive ? "100%" : "0%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          )}
        </div>

        {/* Text */}
        <motion.div
          animate={{ opacity: isActive ? 1 : 0.35 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4 pb-8 pt-1.5"
        >
          <h3 className="font-display text-2xl font-bold leading-snug text-white md:text-3xl">
            {step.title}
          </h3>
          <p className="max-w-md font-sans text-base leading-relaxed text-white/70">
            {step.body}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// ─── SECTION ─────────────────────────────────────────────────────────────────

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  // Overall scroll progress for the section (drives the timeline line)
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0A0A0A] py-28 text-white"
    >
      <div className="container">
        {/* Section header */}
        <div className="mb-20 flex flex-col gap-3">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Método
          </span>
          <h2 className="font-display text-[48px] font-semibold leading-[1.05] tracking-tight md:text-[56px]">
            Clareza antes de superfície.
          </h2>
        </div>

        {/* Two-column scroll layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — sticky visual */}
          <div className="hidden lg:block">
            <div className="sticky top-[20vh] h-[60vh]">
              <div className="relative h-full">
                {steps.map((step, i) => (
                  <StepVisual
                    key={step.num}
                    step={step}
                    isActive={activeStep === i}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — scrollable steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <StepRow
                key={step.num}
                step={step}
                index={i}
                isActive={activeStep === i}
                isLast={i === steps.length - 1}
                onActivate={setActiveStep}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
