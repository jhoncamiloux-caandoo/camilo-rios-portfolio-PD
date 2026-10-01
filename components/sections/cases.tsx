"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  Percent,
  TrendingUp,
  Zap,
  Repeat,
  Bot,
  Gauge,
  Cpu,
  Boxes,
  Rocket,
  Sparkles,
  Layers,
  Coins,
  Users,
  Languages,
  Package,
  Route,
  Box,
  Check,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { useLocale } from "@/lib/i18n/locale-context";

type Stat = { icon: LucideIcon; value: string; label: string };

type Focus = "ux" | "ui" | "growth";

type Case = {
  project: string;
  company: string;
  specialty: string;
  icon: LucideIcon;
  body: string;
  href: string;
  stats: [Stat, Stat, Stat];
};

const casesBase = [
  {
    icon: Rocket,
    href: "/cases/acquire",
    stats: [
      { icon: TrendingUp, value: "79%" },
      { icon: Percent, value: "37%" },
      { icon: MessageCircle, value: "10.7k" },
    ],
  },
  {
    icon: Sparkles,
    href: "/cases/intelligence",
    stats: [
      { icon: Zap, value: "21x" },
      { icon: Repeat, value: "60%" },
      { icon: Bot, value: "10" },
    ],
  },
  {
    icon: Layers,
    href: "/cases/scale",
    stats: [
      { icon: Gauge, value: "47%" },
      { icon: Cpu, value: "70-85%" },
      { icon: Boxes, value: "7" },
    ],
  },
  {
    icon: MessageCircle,
    href: "/cases/whatsapp-next",
    stats: [
      { icon: Coins, value: "R$ 8" },
      { icon: Users, value: "1.680" },
      { icon: Percent, value: "25%" },
    ],
  },
  {
    icon: Package,
    href: "/cases/servientrega",
    stats: [
      { icon: Route, value: "6" },
      { icon: Box, value: "3D" },
      { icon: Languages, value: "3" },
    ],
  },
];

// Ordem padrão (sem escolha) e ordem por foco. Nenhum case some, só muda a ordem.
const DEFAULT_ORDER = ["/cases/intelligence", "/cases/acquire", "/cases/servientrega", "/cases/scale", "/cases/whatsapp-next"];
const ORDERS: Record<Focus, string[]> = {
  ux: ["/cases/intelligence", "/cases/scale", "/cases/acquire", "/cases/whatsapp-next", "/cases/servientrega"],
  ui: ["/cases/servientrega", "/cases/intelligence", "/cases/scale", "/cases/whatsapp-next", "/cases/acquire"],
  growth: ["/cases/whatsapp-next", "/cases/acquire", "/cases/intelligence", "/cases/scale", "/cases/servientrega"],
};
const FOCUSES: Focus[] = ["ux", "ui", "growth"];
const STORAGE_KEY = "case-focus";

export function Cases() {
  const { t } = useLocale();
  const c = t.home.cases;
  const p = c.picker;
  const reduce = useReducedMotion();
  const [focus, setFocus] = useState<Focus | null>(null);
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  // Preferência salva no navegador (conveniência; tudo funciona sem ela)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && FOCUSES.includes(saved as Focus)) setFocus(saved as Focus);
    } catch {}
  }, []);
  const choose = (next: Focus | null) => {
    setFocus(next);
    try {
      if (next) localStorage.setItem(STORAGE_KEY, next);
      else localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };
  const order = focus ? ORDERS[focus] : DEFAULT_ORDER;

  const cases: Case[] = casesBase
    .map((base, i) => {
      const dict = c.items[i];
      return {
        project: dict.project,
        company: dict.company,
        specialty: dict.specialty,
        body: dict.body,
        icon: base.icon,
        href: base.href,
        stats: base.stats.map((st, j) => ({ icon: st.icon, value: st.value, label: dict.stats[j] })) as [Stat, Stat, Stat],
      };
    })
    .sort((a, b) => order.indexOf(a.href) - order.indexOf(b.href));

  const updateEdges = () => {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
  };
  // Depois de reordenar, volta ao início para o recrutador ver os 3 mais relevantes
  useEffect(() => {
    // O snap "mandatory" re-alinha o card que estava fixado antes da troca; desliga por um instante.
    const el = track.current;
    if (!el) return;
    el.style.scrollSnapType = "none";
    el.style.scrollBehavior = "auto";
    el.scrollLeft = 0;
    const id = window.setTimeout(() => {
      el.scrollLeft = 0;
      el.style.scrollSnapType = "";
      el.style.scrollBehavior = "";
      updateEdges();
    }, 450);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus]);
  const page = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id="cases" data-nav-theme="light" className="bg-light pb-28 pt-20 text-dark">
      <div className="container">
        <FadeIn className="max-w-4xl">
          <p className="mb-6 text-caption uppercase tracking-[0.22em] text-dark/65">{c.eyebrow}</p>
          <h2 className="font-display text-[48px] font-semibold leading-[1.08] md:text-h2">{c.title}</h2>
        </FadeIn>

        {/* Seletor de foco: uma escolha reorganiza os 3 primeiros */}
        <fieldset className="mt-10">
          <legend className="font-display text-xl font-semibold md:text-2xl">{p.question}</legend>
          <p className="mt-1 text-sm text-dark/65">{p.helper}</p>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
            {FOCUSES.map((id) => {
              const on = focus === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => choose(on ? null : id)}
                  aria-pressed={on}
                  className={`group flex items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:p-5 ${
                    on ? "border-primary bg-primary/[0.06] shadow-[0_0_0_3px_rgba(98,47,253,0.12)]" : "border-dark/10 bg-white hover:border-primary/40"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${on ? "border-primary bg-primary text-white" : "border-dark/25 text-transparent group-hover:border-primary/60"}`}
                  >
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span>
                    <span className={`block font-display text-lg font-semibold ${on ? "text-primary" : "text-dark"}`}>{p.options[id].label}</span>
                    <span className="mt-1 block text-sm leading-snug text-dark/65">{p.options[id].desc}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 min-h-[20px] text-sm text-dark/65" aria-live="polite">
            {focus && (
              <>
                {p.showingFor} <strong className="font-semibold text-dark">{p.options[focus].label}</strong>
                <span aria-hidden="true"> · </span>
                <button type="button" onClick={() => choose(null)} className="font-semibold text-primary underline-offset-4 hover:underline">
                  {p.reset}
                </button>
              </>
            )}
          </p>
        </fieldset>

        {/* Carrossel: 3 visíveis no desktop, setas nas laterais */}
        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => page(-1)}
            disabled={edges.start}
            aria-label={p.prev}
            className="absolute -left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-dark/10 bg-white text-dark shadow-lg transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-0 md:flex lg:-left-6"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => page(1)}
            disabled={edges.end}
            aria-label={p.next}
            className="absolute -right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-dark/10 bg-white text-dark shadow-lg transition-all hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-0 md:flex lg:-right-6"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            ref={track}
            onScroll={updateEdges}
            className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto scroll-smooth px-4 pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cases.map((item) => {
              const LeadIcon = item.icon;
              const match = focus && ORDERS[focus].indexOf(item.href) < 3;
              return (
                <motion.div
                  key={item.href}
                  layout={!reduce}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                  className="w-[86%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <Link
                    href={item.href}
                    className="group relative flex h-full flex-col rounded-md border border-dark/10 bg-white p-7 text-left shadow-[0_24px_80px_rgba(10,10,10,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_32px_80px_rgba(98,47,253,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    aria-label={`${c.ariaPrefix}: ${item.project}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-dark/10 text-dark/65 transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </span>

                    <div className="flex items-center gap-3 pr-12">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary">
                        <LeadIcon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <p className="font-mono text-[11px] font-medium uppercase leading-snug tracking-[0.12em] text-primary">{item.specialty}</p>
                    </div>

                    {match && (
                      <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        {p.because} {p.options[focus].label}
                      </span>
                    )}

                    <h3 className={`${match ? "mt-4" : "mt-7"} font-display text-[28px] font-semibold leading-[1.14] transition-colors duration-300 group-hover:text-primary`}>
                      {item.project}
                    </h3>
                    <p className="mt-1 text-sm text-dark/65">
                      {item.company} · <span className="sr-only">{c.labels.role}: </span>
                      {c.labels.roleValue}
                    </p>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-dark/65">{c.labels.challenge}</p>
                    <p className="mt-1.5 text-sm leading-6 text-dark/80">{item.body}</p>

                    <div className="mt-auto pt-7">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-dark/65">{c.labels.result}</p>
                      <div className="grid grid-cols-3 divide-x divide-dark/[0.08] rounded-md border border-dark/[0.08] bg-dark/[0.015] py-4">
                        {item.stats.map((stat) => {
                          const Icon = stat.icon;
                          return (
                            <div key={stat.label} className="flex flex-col items-center gap-1.5 px-2 text-center">
                              <Icon className="h-4 w-4 text-primary/60" strokeWidth={1.8} aria-hidden="true" />
                              <span className="font-display text-lg font-semibold leading-none tracking-tight tabular-nums text-dark">{stat.value}</span>
                              <span className="text-[10.5px] leading-tight tracking-wide text-dark/65">{stat.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
