"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  BookOpen,
  Languages,
  Package,
  Route,
  Box,
  Check,
  Plus,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import { useLocale } from "@/lib/i18n/locale-context";

type Stat = { icon: LucideIcon; value: string; label: string };

type Interest = "product" | "ux" | "ai" | "ds" | "growth" | "motion" | "content";

type Case = {
  tags: Interest[];
  rank: number;
  title: string;
  tag: string;
  icon: LucideIcon;
  body: string;
  href: string;
  stats: [Stat, Stat, Stat];
};

const casesBase = [
  {
    icon: Rocket,
    href: "/cases/acquire",
    tags: ["ux", "growth", "product"] as Interest[],
    stats: [
      { icon: TrendingUp, value: "79%" },
      { icon: Percent, value: "37%" },
      { icon: MessageCircle, value: "10.7k" },
    ],
  },
  {
    icon: Sparkles,
    href: "/cases/intelligence",
    tags: ["ai", "product", "ux"] as Interest[],
    stats: [
      { icon: Zap, value: "21x" },
      { icon: Repeat, value: "60%" },
      { icon: Bot, value: "10" },
    ],
  },
  {
    icon: Layers,
    href: "/cases/scale",
    tags: ["ds", "ai", "product"] as Interest[],
    stats: [
      { icon: Gauge, value: "47%" },
      { icon: Cpu, value: "70-85%" },
      { icon: Boxes, value: "7" },
    ],
  },
  {
    icon: MessageCircle,
    href: "/cases/whatsapp-next",
    tags: ["content", "growth", "ux"] as Interest[],
    stats: [
      { icon: Coins, value: "R$ 8" },
      { icon: BookOpen, value: "5" },
      { icon: Languages, value: "3" },
    ],
  },
  {
    icon: Package,
    href: "/cases/servientrega",
    tags: ["motion", "ai", "product"] as Interest[],
    stats: [
      { icon: Route, value: "6" },
      { icon: Box, value: "3D" },
      { icon: Languages, value: "3" },
    ],
  },
];

// Ordem padrão (sem escolha): os 3 que mais resumem o perfil vêm primeiro.
const DEFAULT_ORDER = ["/cases/intelligence", "/cases/acquire", "/cases/servientrega", "/cases/scale", "/cases/whatsapp-next"];
const INTERESTS: Interest[] = ["product", "ux", "ai", "ds", "growth", "motion", "content"];
const STORAGE_KEY = "case-interests";
const MAX = 3;

export function Cases() {
  const { t } = useLocale();
  const c = t.home.cases;
  const p = c.picker;
  const reduce = useReducedMotion();
  const [picked, setPicked] = useState<Interest[]>([]);
  const [collapsed, setCollapsed] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  // Preferência salva no navegador (conveniência; tudo funciona sem ela)
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (saved && Array.isArray(saved.picked)) {
        setPicked(saved.picked.filter((x: string) => INTERESTS.includes(x as Interest)).slice(0, MAX));
        setCollapsed(Boolean(saved.collapsed));
      }
    } catch {}
  }, []);
  const persist = (next: Interest[], col: boolean) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ picked: next, collapsed: col }));
    } catch {}
  };

  const toggle = (id: Interest) => {
    const next = picked.includes(id) ? picked.filter((x) => x !== id) : picked.length < MAX ? [...picked, id] : picked;
    const done = next.length === MAX;
    setPicked(next);
    setCollapsed(done);
    persist(next, done);
  };
  const skip = () => {
    setCollapsed(true);
    persist(picked, true);
  };
  const edit = () => {
    setCollapsed(false);
    persist(picked, false);
  };

  const cases: Case[] = casesBase
    .map((base, i) => {
      const dict = c.items[i];
      const score = base.tags.reduce((acc, tag, k) => acc + (picked.includes(tag) ? 3 - k : 0), 0);
      return {
        tags: base.tags,
        rank: score * 10 - DEFAULT_ORDER.indexOf(base.href),
        title: dict.title,
        tag: dict.tag,
        body: dict.body,
        icon: base.icon,
        href: base.href,
        stats: base.stats.map((st, j) => ({ icon: st.icon, value: st.value, label: dict.stats[j] })) as [Stat, Stat, Stat],
      };
    })
    .sort((a, b) => b.rank - a.rank);

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
  }, [picked]);
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

        {/* Seletor de interesses */}
        <div className="mt-10">
          <AnimatePresence mode="wait" initial={false}>
            {collapsed ? (
              <motion.p
                key="summary"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex flex-wrap items-center gap-2 text-sm text-dark/65"
              >
                {picked.length > 0 && (
                  <>
                    <span>{p.showingFor}</span>
                    {picked.map((id) => (
                      <span key={id} className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                        {p.interests[id]}
                      </span>
                    ))}
                    <span aria-hidden="true">·</span>
                  </>
                )}
                <button type="button" onClick={edit} className="font-semibold text-primary underline-offset-4 hover:underline">
                  {picked.length > 0 ? p.edit : p.question}
                </button>
              </motion.p>
            ) : (
              <motion.div
                key="picker"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="rounded-2xl border border-dark/10 bg-white p-5 md:p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-xl font-semibold md:text-2xl">{p.question}</p>
                  <span className="font-mono text-xs text-dark/65" aria-live="polite">
                    {p.counter.replace("{n}", String(picked.length))}
                  </span>
                </div>
                <p className="mt-1 text-sm text-dark/65">{p.helper}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {INTERESTS.map((id) => {
                    const on = picked.includes(id);
                    const full = !on && picked.length >= MAX;
                    return (
                      <li key={id}>
                        <button
                          type="button"
                          onClick={() => toggle(id)}
                          aria-pressed={on}
                          disabled={full}
                          className={`inline-flex h-10 items-center gap-1.5 rounded-full border px-4 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                            on
                              ? "border-primary bg-primary text-white"
                              : "border-dark/15 bg-white text-dark hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-dark/15 disabled:hover:text-dark"
                          }`}
                        >
                          {on ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Plus className="h-3.5 w-3.5" aria-hidden="true" />}
                          {p.interests[id]}
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <button type="button" onClick={skip} className="mt-4 text-sm font-medium text-dark/65 underline-offset-4 hover:text-dark hover:underline">
                  {p.skip}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

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
              const match = item.tags.find((tag) => picked.includes(tag));
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
                    aria-label={`${c.ariaPrefix}: ${item.title}`}
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
                      <p className="text-caption font-medium uppercase tracking-[0.16em] text-primary">{item.tag}</p>
                    </div>

                    {match && (
                      <span className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                        <Sparkles className="h-3 w-3" aria-hidden="true" />
                        {p.because} {p.interests[match]}
                      </span>
                    )}

                    <h3 className={`${match ? "mt-4" : "mt-7"} font-display text-[28px] font-semibold leading-[1.14] transition-colors duration-300 group-hover:text-primary`}>
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-dark/65">{item.body}</p>

                    <div className="mt-auto pt-7">
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
