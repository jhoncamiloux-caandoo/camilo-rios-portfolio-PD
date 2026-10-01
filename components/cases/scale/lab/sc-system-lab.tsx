"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { ComponentExplorer } from "@/components/cases/scale/ch-05b-playground";
import { Ch04Tokens } from "@/components/cases/scale/ch-04-tokens";
import { Ch05Components } from "@/components/cases/scale/ch-05-components";

/* Capítulo 5: System Lab em abas (componentes, espaçamento, anatomia). */

type Tab = "components" | "spacing" | "anatomy" | "clint";
const SCALE = [4, 8, 12, 16, 24, 32, 48, 64, 96];

function Spacing() {
  const { t } = useLocale();
  const c = t.scaleLab.lab.spacing;
  const reduce = useReducedMotion();
  const [sel, setSel] = useState(16);
  // Onde cada valor aparece no card de exemplo
  const uses: Record<number, string[]> = { 8: ["badge"], 16: ["title"], 24: ["pad", "body"] };
  const on = (k: string) => (uses[sel] ?? []).includes(k);
  const mark = (k: string) => `transition-colors ${on(k) ? "bg-[#622FFD]/30" : "bg-transparent"}`;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div>
        <h3 className="font-display text-2xl font-semibold text-white">{c.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{c.body}</p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">{c.hint}</p>
        <div role="group" aria-label={c.hint} className="mt-3 flex flex-col gap-1.5">
          {SCALE.map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={sel === v}
              onClick={() => setSel(v)}
              onMouseEnter={() => setSel(v)}
              className={`flex items-center gap-3 rounded-lg px-2 py-1.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] ${sel === v ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"}`}
            >
              <span className="w-16 font-mono text-xs text-white/80">space.{v / 4}</span>
              <motion.span className="h-2.5 rounded-sm" animate={{ width: v * 2.2, backgroundColor: sel === v ? "#8b6bff" : "rgba(255,255,255,0.18)" }} transition={{ duration: reduce ? 0 : 0.25 }} />
              <span className="font-mono text-[11px] text-white/60">{v}px</span>
              {uses[v] && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#8b6bff]" aria-hidden="true" />}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center rounded-2xl border border-white/10 p-6" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "8px 8px" }}>
        <div className={`relative w-full max-w-sm rounded-2xl border border-white/10 bg-[#17171d] ${on("pad") ? "outline outline-2 outline-[#8b6bff]/60" : ""}`} style={{ padding: 24 }}>
          {on("pad") && (
            <span className="absolute -top-6 left-0 font-mono text-[10px] text-[#A48BFF]">
              {c.padding} · 24px
            </span>
          )}
          <span className="inline-flex rounded-full bg-[#622FFD]/20 px-2.5 py-1 font-mono text-[10px] text-[#c9b8ff]">IA</span>
          <div className={`relative h-2 ${mark("badge")}`} style={{ height: 8 }}>{on("badge") && <span className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[#A48BFF]">↕ 8px</span>}</div>
          <p className="font-display text-lg font-semibold text-white">{c.cardTitle}</p>
          <div className={`relative ${mark("title")}`} style={{ height: 16 }}>{on("title") && <span className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[#A48BFF]">↕ 16px</span>}</div>
          <p className="text-sm leading-relaxed text-white/70">{c.cardBody}</p>
          <div className={`relative ${mark("body")}`} style={{ height: 24 }}>{on("body") && <span className="absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[#A48BFF]">↕ 24px</span>}</div>
          <span className="inline-flex rounded-full bg-[#622FFD] px-5 py-2.5 text-sm font-semibold text-white">{c.cta}</span>
        </div>
      </div>
      <p className="text-sm text-white/70 lg:col-span-2">{c.conclusion}</p>
    </div>
  );
}

const PARTS = ["icon", "label", "padding", "radius", "type", "focus"] as const;
type Part = (typeof PARTS)[number];

function Anatomy() {
  const { t } = useLocale();
  const c = t.scaleLab.lab.anatomy;
  const reduce = useReducedMotion();
  const [part, setPart] = useState<Part>("padding");
  const p = c.parts[part];
  const ring = (k: Part) => (part === k ? "outline outline-2 outline-offset-2 outline-[#A48BFF]" : "");

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="flex min-h-[260px] items-center justify-center rounded-2xl border border-white/10 p-8" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "16px 16px" }}>
        <div className="relative">
          {/* Anel de foco */}
          <motion.span aria-hidden="true" className="absolute -inset-1.5 rounded-full border-2 border-[#A48BFF]" animate={{ opacity: part === "focus" ? 1 : 0 }} transition={{ duration: reduce ? 0 : 0.2 }} />
          <span className={`relative inline-flex items-center gap-2 rounded-full bg-[#622FFD] text-white ${part === "radius" ? "shadow-[0_0_0_2px_#A48BFF]" : ""}`} style={{ padding: "16px 24px" }}>
            {part === "padding" && (
              <>
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-6 rounded-l-full bg-[#A48BFF]/35" />
                <span aria-hidden="true" className="absolute inset-y-0 right-0 w-6 rounded-r-full bg-[#A48BFF]/35" />
                <span aria-hidden="true" className="absolute inset-x-6 top-0 h-4 bg-[#A48BFF]/25" />
                <span aria-hidden="true" className="absolute inset-x-6 bottom-0 h-4 bg-[#A48BFF]/25" />
              </>
            )}
            <Plus className={`relative h-4 w-4 rounded ${ring("icon")}`} aria-hidden="true" />
            <span className={`relative text-base font-semibold ${ring("label")} ${part === "type" ? "underline decoration-[#A48BFF] decoration-2 underline-offset-4" : ""}`}>{c.button}</span>
          </span>
        </div>
      </div>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/60">{c.hint}</p>
        <div role="group" aria-label={c.hint} className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {PARTS.map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={part === k}
              onClick={() => setPart(k)}
              className={`rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] ${part === k ? "border-[#8b6bff] bg-[#622FFD]/15 text-white" : "border-white/10 text-white/75 hover:text-white"}`}
            >
              {c.parts[k].name}
            </button>
          ))}
        </div>
        <motion.div key={part} initial={reduce ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4" aria-live="polite">
          <p className="font-display text-lg font-semibold text-white">{p.name}</p>
          <p className="mt-1 font-mono text-sm text-[#A48BFF]">{p.token}</p>
          <p className="mt-2 text-sm text-white/70">{p.note}</p>
        </motion.div>
        <p className="mt-5 text-sm text-white/70">{c.conclusion}</p>
      </div>
    </div>
  );
}

export function ScSystemLab() {
  const { t } = useLocale();
  const c = t.scaleLab.lab;
  const [tab, setTab] = useState<Tab>("components");
  const cats = [
    { label: c.categories.actions, ids: ["button"] },
    { label: c.categories.forms, ids: ["input", "select", "controls"] },
    { label: c.categories.navigation, ids: ["tabs"] },
    { label: c.categories.feedback, ids: ["toast", "feedback", "overlay"] },
    { label: c.categories.data, ids: ["badge"] },
  ];

  return (
    <section aria-label={c.ariaLabel} className="bg-[#0A0A0A] py-24 text-white md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A48BFF]">{c.eyebrow}</p>
          <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">{c.title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-white/70 md:text-lg">{c.description}</p>
        </div>

        <div role="tablist" aria-label={c.eyebrow} className="mt-10 inline-flex max-w-full flex-wrap rounded-3xl border border-white/15 p-1 sm:rounded-full">
          {(["components", "spacing", "anatomy", "clint"] as Tab[]).map((k) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={tab === k}
              onClick={() => setTab(k)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] md:px-5 ${tab === k ? "bg-white text-[#0A0A0A]" : "text-white/70 hover:text-white"}`}
            >
              {c.tabs[k]}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="mt-8">
          {tab === "components" && (
            <>
              <ComponentExplorer categories={cats} />
              <p className="mt-4 text-sm text-white/60">{c.aiNote}</p>
            </>
          )}
          {tab === "spacing" && <Spacing />}
          {tab === "anatomy" && <Anatomy />}
          {tab === "clint" && (
            <div className="flex flex-col gap-4">
              <p className="text-sm text-white/70">{c.clintNote}</p>
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <Ch04Tokens embedded />
              </div>
              <div className="overflow-hidden rounded-3xl">
                <Ch05Components embedded />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
