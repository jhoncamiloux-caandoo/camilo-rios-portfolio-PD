"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";

type Case = {
  title: string;
  tag: string;
  body: string;
  href: string;
};

const cases: Case[] = [
  {
    title: "Arquitetura de conversão para SaaS",
    tag: "CRO / Produto",
    body: "Reorganizar narrativa, hierarquia de valor e pontos de decisão para aumentar clareza em jornadas de aquisição.",
    href: "/cases/acquire",
  },
  {
    title: "Experiências com inteligência artificial",
    tag: "AI / UX",
    body: "Desenhar fluxos onde modelos, automações e feedback humano trabalham sem transformar complexidade técnica em carga cognitiva.",
    href: "/cases/intelligence",
  },
  {
    title: "Sistemas para times de crescimento",
    tag: "Growth / Design System",
    body: "Criar padrões visuais e operacionais que aceleram experimentos sem comprometer consistência ou qualidade percebida.",
    href: "/cases/scale",
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
          {cases.map((item, index) => (
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
            >
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-md border border-dark/10 bg-white p-7 text-left shadow-[0_24px_80px_rgba(10,10,10,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_32px_80px_rgba(98,47,253,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`Ver case: ${item.title}`}
              >
                <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
                  {item.tag}
                </p>
                <h3 className="mt-10 font-display text-[34px] font-semibold leading-[1.12] transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-6 text-sm leading-6 text-dark/58">{item.body}</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Ver case
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
