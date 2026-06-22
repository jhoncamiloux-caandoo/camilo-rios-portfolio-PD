"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight, X } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CALENDAR_URL = "https://calendar.app.google/KVjyGh8sqBStv64V7";

type Case = {
  title: string;
  tag: string;
  body: string;
};

const cases: Case[] = [
  {
    title: "Arquitetura de conversão para SaaS",
    tag: "CRO / Produto",
    body: "Reorganizar narrativa, hierarquia de valor e pontos de decisão para aumentar clareza em jornadas de aquisição.",
  },
  {
    title: "Experiências com inteligência artificial",
    tag: "AI / UX",
    body: "Desenhar fluxos onde modelos, automações e feedback humano trabalham sem transformar complexidade técnica em carga cognitiva.",
  },
  {
    title: "Sistemas para times de crescimento",
    tag: "Growth / Design System",
    body: "Criar padrões visuais e operacionais que aceleram experimentos sem comprometer consistência ou qualidade percebida.",
  },
];

export function Cases() {
  const [selected, setSelected] = useState<Case | null>(null);

  return (
    <>
      {/* pt-20 = 80px de respiro acima da seção */}
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
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col rounded-md border border-dark/10 bg-white p-7 text-left shadow-[0_24px_80px_rgba(10,10,10,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_32px_80px_rgba(98,47,253,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={`Ver detalhes: ${item.title}`}
              >
                <p className="text-caption font-medium uppercase tracking-[0.18em] text-primary">
                  {item.tag}
                </p>
                <h3 className="mt-10 font-display text-[34px] font-semibold leading-[1.12] transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h3>
                <p className="mt-6 text-sm leading-6 text-dark/58">{item.body}</p>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  Agendar conversa
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de agendamento */}
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="sm:max-w-[440px] border border-white/[0.08] bg-[#0A0A0A] p-8 shadow-2xl backdrop-blur-xl sm:rounded-2xl">
          {selected && (
            <motion.div
              key={selected.title}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Tag */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {selected.tag}
              </p>

              {/* Título + descrição */}
              <div className="flex flex-col gap-3">
                <DialogTitle className="font-display text-2xl font-semibold leading-snug tracking-tight text-white">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="font-sans text-sm leading-relaxed text-white/50">
                  {selected.body}
                </DialogDescription>
              </div>

              {/* Divisor */}
              <div className="h-px w-full bg-white/[0.06]" />

              {/* CTA */}
              <div className="flex flex-col gap-3">
                <p className="font-sans text-sm text-white/60">
                  Quer discutir este projeto? Escolha um horário direto na agenda.
                </p>
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_8px_24px_-4px_rgba(98,47,253,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                >
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  Agendar conversa
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
