"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";
import { SEMANTIC, contrast } from "./tokens";

/* Capítulo 6: contraste calculado a partir dos tokens, com os pares reais
   e um checker livre entre tokens semânticos. */

const REAL = [
  { fg: "accent.solid", bg: "bg.canvas" },
  { fg: "accent.text", bg: "bg.canvas" },
  { fg: "fg.default", bg: "accent.solid" },
];
const hex = (id: string) => SEMANTIC.find((t) => t.id === id)!.value;

function Verdict({ ok, label }: { ok: boolean; label: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[11px] ${ok ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"}`}>
      {ok ? <Check className="h-3 w-3" aria-hidden="true" /> : <X className="h-3 w-3" aria-hidden="true" />}
      {label}
    </span>
  );
}

function Results({ ratio }: { ratio: number }) {
  const { t } = useLocale();
  const c = t.scaleLab.a11y;
  const v = (ok: boolean) => (ok ? c.pass : c.fail);
  return (
    <div className="flex flex-wrap gap-1.5">
      <Verdict ok={ratio >= 4.5} label={`AA · ${c.normal} · ${v(ratio >= 4.5)}`} />
      <Verdict ok={ratio >= 3} label={`AA · ${c.large} · ${v(ratio >= 3)}`} />
      <Verdict ok={ratio >= 7} label={`AAA · ${v(ratio >= 7)}`} />
    </div>
  );
}

export function ScA11y() {
  const { t } = useLocale();
  const c = t.scaleLab.a11y;
  const [fg, setFg] = useState("accent.solid");
  const [bg, setBg] = useState("bg.canvas");
  const ratio = contrast(hex(fg), hex(bg));

  const select = "w-full rounded-lg border border-black/15 bg-white px-3 py-2.5 font-mono text-sm text-[#0A0A0A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]";

  return (
    <section aria-label={c.ariaLabel} className="bg-white py-24 text-[#0A0A0A] md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#622FFD]">{c.eyebrow}</p>
          <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">{c.title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-[#0A0A0A]/70 md:text-lg">{c.description}</p>
        </div>

        <p className="mt-12 font-mono text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A]/60">{c.realLabel}</p>
        <ul className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
          {REAL.map((pair) => {
            const r = contrast(hex(pair.fg), hex(pair.bg));
            return (
              <li key={pair.fg + pair.bg}>
                <button type="button" onClick={() => { setFg(pair.fg); setBg(pair.bg); }} className="w-full overflow-hidden rounded-2xl border border-black/[0.08] text-left transition hover:border-[#622FFD]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD]">
                  <div className="px-5 py-6" style={{ background: hex(pair.bg), color: hex(pair.fg) }}>
                    <p className="font-display text-xl font-semibold">{c.sample}</p>
                    <p className="text-sm">{c.sample}</p>
                  </div>
                  <div className="flex flex-col gap-2 p-4">
                    <p className="font-mono text-xs text-[#0A0A0A]/70">{pair.fg} / {pair.bg}</p>
                    <p className="font-display text-3xl font-semibold">{r.toFixed(2)}:1</p>
                    <Results ratio={r} />
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 grid grid-cols-1 gap-6 rounded-2xl border border-black/[0.08] bg-[#F8F8F8] p-5 md:grid-cols-2 md:p-8">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#0A0A0A]/60">{c.checkerLabel}</p>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              {c.fgLabel}
              <select value={fg} onChange={(e) => setFg(e.target.value)} className={select}>
                {SEMANTIC.map((t) => <option key={t.id} value={t.id}>{t.id} · {t.value}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-medium">
              {c.bgLabel}
              <select value={bg} onChange={(e) => setBg(e.target.value)} className={select}>
                {SEMANTIC.map((t) => <option key={t.id} value={t.id}>{t.id} · {t.value}</option>)}
              </select>
            </label>
          </div>
          <div className="flex flex-col justify-center gap-4" aria-live="polite">
            <div className="rounded-xl px-5 py-6" style={{ background: hex(bg), color: hex(fg) }}>
              <p className="font-display text-2xl font-semibold">{c.sample}</p>
              <p className="text-sm">{c.sample}</p>
            </div>
            <p className="font-display text-4xl font-semibold">{ratio.toFixed(2)}:1</p>
            <Results ratio={ratio} />
          </div>
        </div>

        <p className="mt-10 text-center font-display text-2xl font-semibold md:text-3xl">{c.message}</p>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#0A0A0A]/60">{c.note}</p>
      </div>
    </section>
  );
}
