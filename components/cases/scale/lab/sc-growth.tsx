"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bot, CalendarCheck, MessageCircle, Users } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

/* Capítulo 8: componentes → composição → campanha. */

type Key = "hero" | "cta" | "card" | "form" | "proof" | "badge";
const KEYS: Key[] = ["hero", "cta", "card", "form", "proof", "badge"];
const CARD_ICONS = [MessageCircle, Bot, CalendarCheck];

export function ScGrowth() {
  const { t } = useLocale();
  const c = t.scaleLab.growth;
  const l = c.lp;
  const reduce = useReducedMotion();
  const [cfg, setCfg] = useState<Record<Key, number>>({ hero: 0, cta: 0, card: 0, form: 0, proof: 0, badge: 0 });
  const set = (k: Key, v: number) => setCfg((x) => ({ ...x, [k]: v }));
  const split = cfg.hero === 1;
  const fade = { initial: reduce ? false : { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: reduce ? 0 : 0.35 } };

  const cta = (
    <motion.span key={`cta${cfg.cta}`} {...fade} className={`inline-flex w-fit rounded-full px-5 py-2.5 text-sm font-semibold ${cfg.cta === 0 ? "bg-[#622FFD] text-white" : "border border-[#A48BFF] text-[#c9b8ff]"}`}>
      {cfg.cta === 0 ? l.cta : l.ctaB}
    </motion.span>
  );
  const badge = (
    <motion.span key={`badge${cfg.badge}`} {...fade} className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${cfg.badge === 0 ? "bg-[#622FFD]/20 text-[#c9b8ff]" : "bg-rose-500/15 text-rose-300"}`}>
      {cfg.badge === 1 && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400 motion-reduce:animate-none" aria-hidden="true" />}
      {c.blocks.badge.options[cfg.badge]}
    </motion.span>
  );
  const used = KEYS.filter((k) => !(k === "proof" && cfg.proof === 1)).map((k) => c.blocks[k].label);

  return (
    <section aria-label={c.ariaLabel} className="bg-white py-24 text-[#0A0A0A] md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#622FFD]">{c.eyebrow}</p>
          <h2 className="mt-4 font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">{c.title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-[#0A0A0A]/70 md:text-lg">{c.description}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-4 rounded-2xl border border-black/[0.08] bg-[#F8F8F8] p-5 lg:col-span-4">
            {KEYS.map((k) => (
              <div key={k} className="flex flex-col gap-1.5">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0A0A0A]/60">{c.blocks[k].label}</span>
                <div role="group" aria-label={c.blocks[k].label} className="flex flex-wrap gap-1.5">
                  {c.blocks[k].options.map((o, i) => (
                    <button
                      key={o}
                      type="button"
                      aria-pressed={cfg[k] === i}
                      onClick={() => set(k, i)}
                      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#622FFD] ${cfg[k] === i ? "bg-[#622FFD] text-white" : "border border-black/10 bg-white text-[#0A0A0A]/80 hover:border-[#622FFD]/50"}`}
                    >
                      {o}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Landing page montada */}
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-[#0A0A0A] text-white shadow-[0_32px_80px_-24px_rgba(10,10,10,0.4)] lg:col-span-8">
            <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.07] px-4" aria-hidden="true">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <motion.div key={`hero${cfg.hero}`} {...fade} className={`grid gap-6 ${split ? "md:grid-cols-2 md:items-center" : "text-center"}`}>
                <div className={`flex flex-col gap-3 ${split ? "" : "items-center"}`}>
                  {badge}
                  <p className="font-display text-2xl font-semibold leading-tight md:text-3xl">{split ? l.heroTitleB : l.heroTitle}</p>
                  <p className="max-w-md text-sm text-white/70">{l.heroBody}</p>
                  {cta}
                </div>
                {split && (
                  <div className="flex flex-col gap-2 rounded-xl border border-white/10 bg-[#17171d] p-4">
                    <p className="w-fit rounded-xl bg-white/[0.07] px-3 py-2 text-xs">{t.scaleLab.wow.ui.chatIn}</p>
                    <p className="ml-auto w-fit rounded-xl bg-[#622FFD] px-3 py-2 text-xs">{t.scaleLab.wow.ui.chatOut}</p>
                  </div>
                )}
              </motion.div>

              <motion.div key={`card${cfg.card}`} {...fade} className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {l.cards.map((card, i) => {
                  const Icon = CARD_ICONS[i];
                  return (
                    <div key={card.title} className="rounded-xl border border-white/10 bg-[#17171d] p-4">
                      {cfg.card === 0 ? (
                        <Icon className="h-5 w-5 text-[#A48BFF]" aria-hidden="true" />
                      ) : (
                        <span className="font-mono text-xs text-[#A48BFF]">0{i + 1}</span>
                      )}
                      <p className="mt-2 text-sm font-semibold">{card.title}</p>
                      <p className="mt-1 text-xs text-white/60">{card.body}</p>
                    </div>
                  );
                })}
              </motion.div>

              {cfg.proof === 0 && (
                <motion.div {...fade} className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3">
                  <Users className="h-5 w-5 text-[#A48BFF]" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">{l.proof}</p>
                    <p className="text-[11px] text-white/60">{l.proofSource}</p>
                  </div>
                </motion.div>
              )}

              <motion.div key={`form${cfg.form}`} {...fade} className="rounded-xl border border-white/10 bg-[#17171d] p-4">
                <p className="text-sm font-semibold">{l.formTitle}</p>
                <div className={`mt-3 grid gap-2 ${cfg.form === 0 ? "sm:grid-cols-[1fr_auto]" : "sm:grid-cols-3"}`}>
                  {(cfg.form === 0 ? [l.formEmail] : [l.formName, l.formEmail, l.formPhone]).map((f) => (
                    <span key={f} className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/50">{f}</span>
                  ))}
                  <span className={`rounded-lg bg-[#622FFD] px-4 py-2 text-center text-xs font-semibold ${cfg.form === 1 ? "sm:col-span-3" : ""}`}>{l.formSubmit}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] text-[#0A0A0A]/60">
          {c.reuseLabel}: {used.join(" · ")}
        </p>
        <p className="mt-8 text-center font-display text-2xl font-semibold md:text-3xl">{c.conclusion}</p>
      </div>
    </section>
  );
}
