"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";
import { COMPONENT, PRIMITIVES, SEMANTIC, type Tier } from "./tokens";

/* Capítulo 3: clique em qualquer token e siga a cadeia até a interface. */

const ALL = [...PRIMITIVES, ...SEMANTIC, ...COMPONENT];
const byId = (id: string) => ALL.find((x) => x.id === id);

// Cadeia completa (primitivo → semântico → componente) a partir de qualquer ponto
function chainOf(id: string): string[] {
  const t = byId(id)!;
  const down: string[] = [];
  let cur: Tier | undefined = t;
  while (cur) {
    down.unshift(cur.id);
    cur = cur.ref ? byId(cur.ref) : undefined;
  }
  const up: string[] = [];
  let last = id;
  for (;;) {
    const next = ALL.find((x) => x.ref === last);
    if (!next) break;
    up.push(next.id);
    last = next.id;
  }
  return [...down, ...up];
}

export function ScTokenArch() {
  const { t } = useLocale();
  const c = t.scaleLab.arch;
  const [active, setActive] = useState("button.primary.bg");
  const chain = chainOf(active);
  const comp = chain.find((id) => COMPONENT.some((x) => x.id === id));
  const cols = [PRIMITIVES, SEMANTIC, COMPONENT];
  const hit = (id: string) => comp === id;

  return (
    <section aria-label={c.ariaLabel} className="bg-white py-24 text-[#0A0A0A] md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#622FFD]">{c.eyebrow}</p>
          <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">{c.title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-[#0A0A0A]/70 md:text-lg">{c.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
          {cols.map((col, ci) => (
            <div key={c.layers[ci].name} className="rounded-2xl border border-black/[0.08] bg-[#F8F8F8] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A]/60">
                {String(ci + 1).padStart(2, "0")} · {c.layers[ci].name}
              </p>
              <p className="mb-3 text-xs text-[#0A0A0A]/60">{c.layers[ci].hint}</p>
              <ul className="flex flex-col gap-1.5">
                {col.map((tk) => {
                  const on = chain.includes(tk.id);
                  return (
                    <li key={tk.id}>
                      <button
                        type="button"
                        onClick={() => setActive(tk.id)}
                        aria-pressed={on}
                        className={`flex w-full items-center gap-2.5 rounded-lg border px-3 py-2 text-left font-mono text-xs transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] ${
                          on ? "border-[#622FFD] bg-white shadow-[0_0_0_3px_rgba(98,47,253,0.12)]" : "border-transparent hover:border-black/10 hover:bg-white"
                        }`}
                      >
                        <span className="h-4 w-4 shrink-0 rounded border border-black/10" style={{ background: tk.value }} aria-hidden="true" />
                        <span className={`flex-1 ${on ? "font-semibold text-[#0A0A0A]" : "text-[#0A0A0A]/75"}`}>{tk.id}</span>
                        <span className="text-[10px] text-[#0A0A0A]/50">{tk.value}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* 04 · Produto: onde a decisão aparece */}
          <div className="rounded-2xl border border-black/[0.08] bg-[#0A0A0A] p-4 text-white">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/60">04 · Product</p>
            <p className="mb-3 text-xs text-white/60">{c.productLabel}</p>
            <div className={`rounded-xl border p-3 transition ${hit("card.bg") ? "border-[#A48BFF] shadow-[0_0_0_3px_rgba(164,139,255,0.3)]" : "border-white/10"}`} style={{ background: "#0A0A0A" }}>
              <p className="font-display text-sm font-semibold">Ana Beatriz</p>
              <p className={`mt-0.5 text-[11px] text-[#9D9D9D] ${hit("caption.fg") ? "rounded outline outline-2 outline-offset-2 outline-[#A48BFF]" : ""}`}>Studio Lumi · WhatsApp</p>
              <div className="mt-3 flex items-center gap-3">
                <span className={`inline-flex rounded-full bg-[#622FFD] px-3.5 py-1.5 text-xs font-semibold ${hit("button.primary.bg") ? "shadow-[0_0_0_3px_rgba(164,139,255,0.6)]" : ""}`}>
                  <span className={hit("button.primary.fg") ? "rounded outline outline-2 outline-offset-2 outline-white" : ""}>{t.scaleLab.wow.ui.cta}</span>
                </span>
                <span className={`text-xs text-[#A48BFF] underline underline-offset-2 ${hit("link.fg") ? "rounded outline outline-2 outline-offset-2 outline-[#A48BFF]" : ""}`}>{t.scaleLab.wow.ui.link}</span>
              </div>
            </div>
            {comp && <p className="mt-3 text-xs text-[#A48BFF]">→ {c.usedIn[comp]}</p>}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-black/[0.08] p-4" aria-live="polite">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A]/60">{c.chainLabel}</p>
          <ol className="mt-2 flex flex-wrap items-center gap-2 font-mono text-sm">
            {chain.map((id, i) => (
              <motion.li key={id + active} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#622FFD]" aria-hidden="true">→</span>}
                <span className={id === active ? "font-semibold text-[#622FFD]" : "text-[#0A0A0A]/80"}>{id}</span>
              </motion.li>
            ))}
            {comp && (
              <li className="flex items-center gap-2">
                <span className="text-[#622FFD]" aria-hidden="true">→</span>
                <span className="rounded-full bg-[#622FFD] px-2.5 py-0.5 text-xs text-white">{c.usedIn[comp]}</span>
              </li>
            )}
          </ol>
        </div>
        <p className="mt-6 font-sans text-sm text-[#0A0A0A]/70">{c.conclusion}</p>
      </div>
    </section>
  );
}
