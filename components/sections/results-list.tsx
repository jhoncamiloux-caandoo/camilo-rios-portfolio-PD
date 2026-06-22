"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Zap, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { LucideIcon } from "lucide-react";

type Result = {
  metric: string;
  title: string;
  desc: string;
  icon: LucideIcon;
};

const results: Result[] = [
  {
    metric: "+140%",
    title: "Geração de leads",
    desc: "Estruturação, testes A/B e escala contínua através de 58 landing pages de alta performance, projetadas e validadas iterativamente para otimizar canais de aquisição pagos e orgânicos.",
    icon: BarChart3,
  },
  {
    metric: "+20%",
    title: "Aumento em vendas",
    desc: "Aplicação estrita de frameworks de CRO, mapeamento de gargalos comportamentais e otimização ponta a ponta de fluxos críticos de checkout e conversão digital.",
    icon: TrendingUp,
  },
  {
    metric: "15+",
    title: "Automações de IA",
    desc: "Sistemas inteligentes e agentes personalizados integrados ao fluxo de trabalho para aceleração de pesquisa, qualificação rápida de leads e automação de engajamento em tempo real.",
    icon: Zap,
  },
  {
    metric: "Q1 Hit",
    title: "Meta em 20 de Jan",
    desc: "Validação ágil de hipóteses de growth e engenharia de produto focada em conversão que antecipou os resultados e bateu as metas do trimestre inteiro logo nos primeiros 20 dias do ano.",
    icon: ShieldCheck,
  },
];

export function ResultsList() {
  const [selected, setSelected] = useState<Result | null>(null);

  return (
    <>
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
                onClick={() => setSelected(item)}
                className="group flex w-full items-center gap-3 rounded-xl border border-[#45506f]/12 bg-white/50 px-4 py-3 text-left backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/80 hover:shadow-[0_8px_24px_-8px_rgba(98,47,253,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                aria-label={`Ver detalhes: ${item.title}`}
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
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
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
                <DialogDescription className="pt-1 font-sans text-base leading-relaxed text-white/50">
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
