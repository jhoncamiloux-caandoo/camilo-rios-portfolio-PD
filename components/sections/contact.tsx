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

// Animated aurora orbs — each drifts independently on a slow loop
const orbs = [
  {
    cls: "h-[480px] w-[480px] bg-primary/25",
    animate: { x: ["-10%", "15%", "-10%"], y: ["5%", "-15%", "5%"] },
    duration: 18,
    initial: { top: "-10%", left: "-5%" },
  },
  {
    cls: "h-[360px] w-[360px] bg-violet-500/20",
    animate: { x: ["5%", "-20%", "5%"], y: ["-5%", "20%", "-5%"] },
    duration: 22,
    initial: { top: "30%", right: "-8%" },
  },
  {
    cls: "h-[280px] w-[280px] bg-indigo-600/15",
    animate: { x: ["-5%", "10%", "-5%"], y: ["10%", "-10%", "10%"] },
    duration: 26,
    initial: { bottom: "-5%", left: "30%" },
  },
];

export function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="contato"
        className="relative overflow-hidden bg-[#0A0A0A] py-28 text-light"
      >
        {/* ── Aurora gradient background ─────────────── */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {orbs.map((orb, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full blur-[100px] ${orb.cls}`}
              style={orb.initial as React.CSSProperties}
              animate={orb.animate}
              transition={{
                duration: orb.duration,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            />
          ))}
          {/* Radial vignette to keep edges dark */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,#0A0A0A_100%)]" />
          {/* Subtle noise grain overlay */}
          <div className="absolute inset-0 opacity-[0.025] [background-image:url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')] [background-size:200px]" />
        </div>

        {/* ── Content ────────────────────────────────── */}
        <div className="container relative z-10">
          <FadeIn className="grid grid-cols-1 items-end gap-gutter rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm md:grid-cols-12 md:p-14">
            <div className="md:col-span-8">
              <p className="mb-6 text-caption uppercase tracking-[0.22em] text-white/40">
                Contato
              </p>
              <h2 className="font-display text-[48px] font-semibold leading-[1.05] tracking-tight md:text-[56px]">
                Vamos desenhar o próximo salto do produto.
              </h2>
            </div>
            <div className="flex items-end md:col-span-4 md:justify-end">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex h-[52px] items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-primary/90 hover:shadow-[0_8px_32px_-4px_rgba(98,47,253,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Iniciar conversa
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Schedule modal ─────────────────────────── */}
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
                Escolha um horário na agenda para conversarmos sobre o seu
                produto, desafio ou oportunidade de crescimento.
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
