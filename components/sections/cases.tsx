"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

type Stat = { icon: LucideIcon; value: string; label: string };

type Case = {
  title: string;
  tag: string;
  icon: LucideIcon;
  body: string;
  href: string;
  stats: [Stat, Stat, Stat];
};

const cases: Case[] = [
  {
    title: "Arquitetura de conversão para SaaS",
    tag: "CRO / Produto",
    icon: Rocket,
    body: "Reorganizar narrativa, hierarquia de valor e pontos de decisão para aumentar clareza em jornadas de aquisição.",
    href: "/cases/acquire",
    stats: [
      { icon: TrendingUp, value: "79%", label: "da demanda" },
      { icon: Percent, value: "37%", label: "conversão" },
      { icon: MessageCircle, value: "10.7k", label: "conversas" },
    ],
  },
  {
    title: "Experiências com inteligência artificial",
    tag: "AI / UX",
    icon: Sparkles,
    body: "Desenhar fluxos onde modelos, automações e feedback humano trabalham sem transformar complexidade técnica em carga cognitiva.",
    href: "/cases/intelligence",
    stats: [
      { icon: Zap, value: "21x", label: "qualificação" },
      { icon: Repeat, value: "60%", label: "pós 5º contato" },
      { icon: Bot, value: "10", label: "papéis de IA" },
    ],
  },
  {
    title: "Sistemas para times de crescimento",
    tag: "Growth / Design System",
    icon: Layers,
    body: "Criar padrões visuais e operacionais que aceleram experimentos sem comprometer consistência ou qualidade percebida.",
    href: "/cases/scale",
    stats: [
      { icon: Gauge, value: "47%", label: "mais rápido" },
      { icon: Cpu, value: "70-85%", label: "menos tokens" },
      { icon: Boxes, value: "7", label: "componentes" },
    ],
  },
];

export function Cases() {
  return (
    <section id="cases" className="bg-light pb-28 pt-20 text-dark">
      <div className="container">
        <FadeIn className="max-w-4xl">
          <p className="mb-6 text-caption uppercase tracking-[0.22em] text-dark/50">
            Cases
          </p>
          <h2 className="font-display text-[48px] font-semibold leading-[1.08] md:text-h2">
            Projetos pensados para usuários, funis e times.
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-gutter lg:grid-cols-3">
          {cases.map((item, index) => {
            const LeadIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full"
              >
                <Link
                  href={item.href}
                  className="group relative flex h-full flex-col rounded-md border border-dark/10 bg-white p-7 text-left shadow-[0_24px_80px_rgba(10,10,10,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_32px_80px_rgba(98,47,253,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label={`Ver case: ${item.title}`}
                >
                  {/* Seta de canto */}
                  <span
                    aria-hidden="true"
                    className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-dark/10 text-dark/35 transition-all duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>

                  {/* Ícone-líder + tag */}
                  <div className="flex items-center gap-3 pr-12">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/8 text-primary">
                      <LeadIcon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <p className="text-caption font-medium uppercase tracking-[0.16em] text-primary">
                      {item.tag}
                    </p>
                  </div>

                  <h3 className="mt-7 font-display text-[28px] font-semibold leading-[1.14] transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-dark/58">{item.body}</p>

                  {/* Painel de dados-chave */}
                  <div className="mt-auto pt-7">
                    <div className="grid grid-cols-3 divide-x divide-dark/[0.08] rounded-md border border-dark/[0.08] bg-dark/[0.015] py-4">
                      {item.stats.map((stat) => {
                        const Icon = stat.icon;
                        return (
                          <div
                            key={stat.label}
                            className="flex flex-col items-center gap-1.5 px-2 text-center"
                          >
                            <Icon className="h-4 w-4 text-primary/60" strokeWidth={1.8} aria-hidden="true" />
                            <span className="font-display text-lg font-semibold leading-none tracking-tight tabular-nums text-dark">
                              {stat.value}
                            </span>
                            <span className="text-[10.5px] leading-tight tracking-wide text-dark/45">
                              {stat.label}
                            </span>
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
    </section>
  );
}
