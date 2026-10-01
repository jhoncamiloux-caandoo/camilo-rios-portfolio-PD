"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles, UserRound } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

// Onde a IA entra no processo e onde a decisão continua sendo minha.
const LEAD: ("ai" | "me")[] = ["ai", "ai", "ai", "ai", "me", "me", "ai", "ai", "me", "me"];
const TOOLS: Record<number, string> = { 7: "Claude · Codex" };
const PROOF_HREF = ["/cases/servientrega", "/cases/intelligence", "/cases/scale"];

export function AiProcess() {
  const { t } = useLocale();
  const c = t.home.aiProcess;
  const reduce = useReducedMotion();

  return (
    <section id="ia" data-nav-theme="light" className="bg-light py-24 text-dark md:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-gutter">
          <div className="flex flex-col gap-4 lg:col-span-5">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-dark/65">{c.eyebrow}</span>
            <h2 className="font-display text-[40px] font-semibold leading-[1.05] tracking-tight md:text-[52px]">{c.title}</h2>
            <p className="font-sans text-base leading-relaxed text-dark/70 md:text-lg">{c.message}</p>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-dark/70">
              <span className="inline-flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" /></span>
                {c.legendAi}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-dark text-white"><UserRound className="h-3.5 w-3.5" aria-hidden="true" /></span>
                {c.legendMe}
              </span>
            </div>
          </div>

          <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:col-span-7">
            {c.steps.map((step, i) => {
              const me = LEAD[i] === "me";
              return (
                <motion.li
                  key={step.title}
                  initial={reduce ? false : { opacity: 0.25, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ duration: 0.45, delay: reduce ? 0 : (i % 2) * 0.08 }}
                  className={`flex items-start gap-3 rounded-xl border p-4 ${me ? "border-dark/80 bg-dark text-white" : "border-dark/10 bg-white"}`}
                >
                  <span className={`font-mono text-xs ${me ? "text-white/60" : "text-dark/50"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-base font-semibold">{step.title}</h3>
                      <span className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${me ? "bg-white/15 text-white" : "bg-primary/10 text-primary"}`}>
                        {me ? <UserRound className="h-3 w-3" aria-hidden="true" /> : <Sparkles className="h-3 w-3" aria-hidden="true" />}
                        {me ? c.legendMe : c.legendAi}
                      </span>
                    </div>
                    <p className={`mt-1 text-sm leading-snug ${me ? "text-white/70" : "text-dark/65"}`}>{step.body}</p>
                    {TOOLS[i] && <p className="mt-2 font-mono text-[11px] text-primary">{TOOLS[i]}</p>}
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <div className="mt-14">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-dark/65">{c.proofTitle}</p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {c.proofs.map((proof, i) => (
              <Link
                key={proof.case}
                href={PROOF_HREF[i]}
                className="group flex items-start justify-between gap-4 rounded-xl border border-dark/10 bg-white p-5 transition hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span>
                  <span className="block font-display text-lg font-semibold group-hover:text-primary">{proof.case}</span>
                  <span className="mt-1 block text-sm leading-snug text-dark/65">{proof.body}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-dark/50 transition group-hover:text-primary" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
