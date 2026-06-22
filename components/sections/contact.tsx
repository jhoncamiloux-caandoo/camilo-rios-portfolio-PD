"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const CALENDAR_URL = "https://calendar.app.google/KVjyGh8sqBStv64V7";

export function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="contato" className="bg-dark py-28 text-light">
        <div className="container">
          <FadeIn className="grid grid-cols-1 gap-gutter rounded-md border border-white/10 bg-white/[0.03] p-8 md:grid-cols-12 md:p-12">
            <div className="md:col-span-8">
              <p className="mb-6 text-caption uppercase tracking-[0.22em] text-white/44">
                Contato
              </p>
              <h2 className="font-display text-[48px] font-semibold leading-[1.08] md:text-h2">
                Vamos desenhar o proximo salto do produto.
              </h2>
            </div>
            <div className="flex items-end md:col-span-4 md:justify-end">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex h-[52px] items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_8px_32px_-4px_rgba(98,47,253,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Iniciar conversa
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[440px] border border-white/[0.08] bg-[#0A0A0A] p-8 shadow-2xl backdrop-blur-xl sm:rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contato
            </p>

            <div className="flex flex-col gap-3">
              <DialogTitle className="font-display text-2xl font-semibold leading-snug tracking-tight text-white">
                Vamos desenhar o próximo salto do produto.
              </DialogTitle>
              <DialogDescription className="font-sans text-sm leading-relaxed text-white/50">
                Escolha um horário na agenda para conversarmos sobre o seu produto, desafio ou oportunidade de crescimento.
              </DialogDescription>
            </div>

            <div className="h-px w-full bg-white/[0.06]" />

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
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
}
