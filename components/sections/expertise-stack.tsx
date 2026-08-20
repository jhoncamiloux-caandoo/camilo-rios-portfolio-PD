"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Search,
  Layers,
  PenTool,
  Boxes,
  TrendingUp,
  Sparkles,
  Wand2,
  Users,
  BarChart3,
  Workflow,
  Code2,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

type Pillar = { title: string; icon: LucideIcon; color: string };

const pillars: Pillar[] = [
  { title: "Descoberta & pesquisa", icon: Search, color: "#3B82F6" },
  { title: "Arquitetura de informação", icon: Layers, color: "#622FFD" },
  { title: "UI & design visual", icon: PenTool, color: "#D946EF" },
  { title: "Design systems", icon: Boxes, color: "#F59E0B" },
  { title: "Growth & CRO", icon: TrendingUp, color: "#10B981" },
  { title: "IA aplicada a produto", icon: Sparkles, color: "#8B5CF6" },
  { title: "Prototipagem", icon: Wand2, color: "#06B6D4" },
  { title: "Testes com usuários", icon: Users, color: "#F43F5E" },
  { title: "Dados & métricas", icon: BarChart3, color: "#14B8A6" },
  { title: "Automação de fluxos", icon: Workflow, color: "#6366F1" },
  { title: "Handoff para engenharia", icon: Code2, color: "#94A3B8" },
  { title: "Comunicação com stakeholders", icon: MessageSquare, color: "#F97316" },
];

const RANGE = 3;
const TICK_MS = 1600;
const SLOTS = Array.from({ length: RANGE * 2 + 1 }, (_, i) => i - RANGE);

const STEP = [
  { y: 0, scale: 1, opacity: 1, blur: 0 },
  { y: 74, scale: 0.94, opacity: 0.75, blur: 0 },
  { y: 138, scale: 0.88, opacity: 0.4, blur: 2 },
  { y: 194, scale: 0.82, opacity: 0.15, blur: 5 },
];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

function styleForSlot(slot: number) {
  const abs = Math.min(Math.abs(slot), STEP.length - 1);
  const dir = Math.sign(slot);
  const s = STEP[abs];
  return { y: dir * s.y, scale: s.scale, opacity: s.opacity, blur: s.blur, zIndex: 10 - abs };
}

export function ExpertiseStack() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { margin: "-15% 0px -15% 0px" });
  const [tick, setTick] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (reducedMotion || !isInView) return;
    const id = setInterval(() => {
      if (!paused.current) setTick((t) => t + 1);
    }, TICK_MS);
    return () => clearInterval(id);
  }, [reducedMotion, isInView]);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="dark"
      className="relative overflow-hidden bg-[#0A0A0A] py-28 text-white md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[520px] -translate-y-1/2 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(98,47,253,0.12),transparent_72%)]"
      />

      <div className="container relative">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Frentes de atuação
          </p>
          <h2 className="font-display text-[36px] font-semibold leading-[1.1] tracking-tight md:text-[48px]">
            Um designer, várias camadas de produto.
          </h2>
        </FadeIn>

        <span className="sr-only">
          {pillars.map((p) => p.title).join(", ")}.
        </span>

        <div
          aria-hidden="true"
          className="relative mx-auto mt-20 h-[420px] max-w-lg md:h-[460px]"
          onMouseEnter={() => (paused.current = true)}
          onMouseLeave={() => (paused.current = false)}
        >
          <AnimatePresence initial={false}>
            {SLOTS.map((slot) => {
              const birth = tick + slot;
              const item = pillars[mod(birth, pillars.length)];
              const Icon = item.icon;
              const s = styleForSlot(slot);
              const enterFrom = styleForSlot(slot > 0 ? RANGE + 1 : -(RANGE + 1));

              return (
                <div
                  key={birth}
                  className="absolute inset-x-0 top-1/2 flex justify-center"
                  style={{ transform: "translateY(-50%)", zIndex: s.zIndex }}
                >
                  <motion.div
                    className="w-full max-w-md px-4"
                    initial={{
                      y: enterFrom.y,
                      scale: enterFrom.scale,
                      opacity: 0,
                      filter: `blur(${enterFrom.blur}px)`,
                    }}
                    animate={{
                      y: s.y,
                      scale: s.scale,
                      opacity: s.opacity,
                      filter: `blur(${s.blur}px)`,
                    }}
                    exit={{
                      y: enterFrom.y,
                      scale: enterFrom.scale,
                      opacity: 0,
                      filter: `blur(${enterFrom.blur}px)`,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 32, mass: 1 }}
                  >
                    <div
                      className={`flex items-center gap-4 rounded-2xl border px-6 py-5 transition-colors duration-300 ${
                        slot === 0
                          ? "border-white/[0.14] bg-white/[0.06] shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
                          : "border-white/[0.06] bg-white/[0.04]"
                      }`}
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${item.color}22`, color: item.color }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="font-display text-base font-semibold leading-snug text-white md:text-lg">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
