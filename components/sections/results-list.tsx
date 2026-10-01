"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, TrendingUp, ShieldCheck, Plus, MousePointerClick } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { LucideIcon } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

type Result = {
  metric: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const resultIcons: LucideIcon[] = [BarChart3, TrendingUp, ShieldCheck];

export function ResultsList() {
  const { t } = useLocale();
  const results: Result[] = t.home.resultsList.items.map((item, i) => ({
    ...item,
    icon: resultIcons[i],
  }));
  const [selected, setSelected] = useState<Result | null>(null);
  const reduce = useReducedMotion();
  // Pulso de descoberta: só na primeira visita, só no primeiro card, e para depois do primeiro clique.
  const [hinted, setHinted] = useState(true);
  useEffect(() => {
    try {
      setHinted(localStorage.getItem("results-hint-seen") === "1");
    } catch {
      setHinted(false);
    }
  }, []);
  const open = (item: Result) => {
    setSelected(item);
    if (!hinted) {
      setHinted(true);
      try {
        localStorage.setItem("results-hint-seen", "1");
      } catch {}
    }
  };

  return (
    <>
      <p className="mb-2.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#45506f]">
        <MousePointerClick className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="hidden [@media(hover:hover)]:inline">{t.home.resultsList.hint}</span>
        <span className="[@media(hover:hover)]:hidden">{t.home.resultsList.hintTouch}</span>
      </p>
      <ul className="flex flex-col gap-3">
        {results.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={item.metric}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.22 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <button
                type="button"
                onClick={() => open(item)}
                className="group flex w-full items-center gap-3 rounded-xl border border-[#45506f]/12 bg-white/50 px-4 py-3 text-left backdrop-blur-sm transition-all duration-300 hover:translate-x-1 hover:border-primary/30 hover:bg-white/80 hover:shadow-[0_8px_24px_-8px_rgba(98,47,253,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label={`${t.home.resultsList.detailsAriaPrefix}: ${item.title}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#45506f]/20 bg-[#393950]/08 text-[#45506f] transition-colors duration-300 group-hover:border-primary/30 group-hover:text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>

                <span className="flex min-w-0 items-baseline gap-2.5">
                  <span className="font-display text-lg font-bold leading-none text-[#262628] transition-colors duration-300 group-hover:text-primary">
                    {item.metric}
                  </span>
                  <span className="truncate text-sm text-[#6b6b70]">
                    {item.title}
                  </span>
                </span>

                {/* (+) sinaliza que abre mais contexto; gira para × no hover */}
                <span className="relative ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#45506f]/20 bg-white text-[#45506f] transition-all duration-300 group-hover:rotate-90 group-hover:border-primary group-hover:bg-primary group-hover:text-white group-focus-visible:border-primary">
                  {i === 0 && !hinted && !reduce && (
                    <span aria-hidden="true" className="absolute inset-0 animate-[ping_1.4s_ease-out_2] rounded-full bg-primary/40" />
                  )}
                  <Plus className="relative h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
                </span>
              </button>
            </motion.li>
          );
        })}
      </ul>

      <Dialog
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="sm:max-w-[460px] border border-white/[0.08] bg-[#0A0A0A] p-8 shadow-2xl backdrop-blur-xl sm:rounded-2xl">
          {selected && (
            <motion.div
              key={selected.metric}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-2 flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary-light">
                  {React.createElement(selected.icon, {
                    className: "h-5 w-5",
                    "aria-hidden": "true",
                  })}
                </span>
                <span className="font-display text-5xl font-bold tracking-tight text-white">
                  {selected.metric}
                </span>
              </div>

              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="font-sans text-xl font-semibold leading-snug tracking-tight text-white">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="pt-1 font-sans text-base leading-relaxed text-white/60">
                  {selected.desc}
                </DialogDescription>
              </DialogHeader>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
