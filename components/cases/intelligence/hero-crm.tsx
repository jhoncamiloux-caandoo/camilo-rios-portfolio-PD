"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLocale } from "@/lib/i18n/locale-context";

const AV = "/cases/clint/intelligence/crm/";

// Leads fictícios do mock. "col" é a coluna inicial; o agente avança um lead por vez.
const LEADS = [
  { id: "ana", name: "Ana Beatriz", co: "Studio Lumi", ph: "p9", ch: "wa", col: 0 },
  { id: "rafa", name: "Rafael Nunes", co: "Alpha Group", ph: "p1", ch: "ig", col: 0 },
  { id: "ju", name: "Juliana Prado", co: "Vertical 360", ph: "p8", ch: "wa", col: 1 },
  { id: "carlos", name: "Carlos Mendes", co: "Nexo Digital", ph: "p2", ch: "wa", col: 1 },
  { id: "marcos", name: "Marcos Costa", co: "Prime", ph: "p3", ch: "wa", col: 2 },
  { id: "roberta", name: "Roberta Rod", co: "Via WhatsApp", ph: "p-roberta", ch: "wa", col: -1 },
  { id: "lucas", name: "Lucas Ferraz", co: "Impulso", ph: "p5", ch: "ig", col: 3 },
] as const;
// Ordem dos movimentos, em loop: cada passo leva um lead para a coluna seguinte.
const SEQ = ["roberta", "ana", "ju", "marcos", "rafa", "ana", "carlos", "ju", "ana"];

export function HeroCrm() {
  const { t } = useLocale();
  const c = t.intelligence.ch01.crm;
  const reduce = useReducedMotion();
  const [cols, setCols] = useState<Record<string, number>>(() => Object.fromEntries(LEADS.map((l) => [l.id, l.col])));
  const [step, setStep] = useState(0);
  const [last, setLast] = useState<string | null>(null);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setStep((s) => {
        const next = s + 1;
        if (next > SEQ.length) {
          setCols(Object.fromEntries(LEADS.map((l) => [l.id, l.col])));
          setLast(null);
          return 0;
        }
        const lead = SEQ[next - 1];
        setCols((prev) => ({ ...prev, [lead]: Math.min(3, prev[lead] + 1) }));
        setLast(lead);
        return next;
      });
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduce]);

  const lastLead = LEADS.find((l) => l.id === last);

  // O CRM é desenhado a 620px e reduzido para caber: no celular mantém a mesma composição do desktop.
  const DESIGN_W = 620;
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [h, setH] = useState<number | undefined>(undefined);
  const inner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const sc = Math.min(1, el.clientWidth / DESIGN_W);
      setScale(sc);
      if (inner.current) setH(inner.current.offsetHeight * sc);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative mt-12 md:mt-0">
      {/* Elementos flutuantes: o negócio chega pelo WhatsApp, entra no funil e o agente cuida dele */}
      <motion.img
        src="/cases/clint/intelligence/float-new-deal.webp"
        alt=""
        aria-hidden="true"
        className="absolute -left-3 -top-14 z-20 w-36 drop-shadow-[0_18px_30px_rgba(10,10,10,0.35)] md:-left-14 md:-top-20 md:w-52"
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.img
        src="/cases/clint/intelligence/float-whatsapp.webp"
        alt=""
        aria-hidden="true"
        className="absolute -bottom-6 -left-4 z-20 w-14 drop-shadow-[0_18px_30px_rgba(22,163,74,0.35)] md:-bottom-10 md:-left-10 md:w-20"
        animate={reduce ? undefined : { y: [0, 10, 0], rotate: [2, -3, 2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.img
        src="/cases/clint/intelligence/float-agent.webp"
        alt=""
        aria-hidden="true"
        className="absolute right-16 -top-10 z-20 w-14 md:top-[38%] drop-shadow-[0_18px_30px_rgba(98,47,253,0.35)] md:-right-4 md:w-20"
        animate={reduce ? undefined : { y: [0, -10, 0], rotate: [-3, 2, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div aria-hidden="true" className="absolute -inset-4 rounded-[28px] bg-[#622FFD]/10 blur-3xl" />
      <div ref={box} className="relative w-full" style={{ height: h }}>
      <div ref={inner} className="absolute left-0 top-0 origin-top-left" style={{ width: DESIGN_W, transform: `scale(${scale})` }}>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12] shadow-[0_32px_80px_-16px_rgba(10,10,10,0.45)]">
        {/* Barra do app */}
        <div className="flex h-10 items-center justify-between border-b border-white/[0.07] px-4">
          <span className="font-sans text-[11px] font-medium text-white/80">{c.pipeline}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#622FFD]/20 px-2 py-0.5 font-sans text-[10px] font-semibold text-[#c9b8ff]">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {c.agent}
          </span>
        </div>

        {/* Kanban */}
        <LayoutGroup>
          <div className="grid grid-cols-4 gap-2 p-3" aria-hidden="true">
            {c.cols.map((name, ci) => {
              const items = LEADS.filter((l) => cols[l.id] === ci);
              return (
                <div key={name} className="min-h-[290px] rounded-xl bg-white/[0.03] p-2">
                  <div className="mb-2 flex items-center justify-between px-1">
                    <span className="truncate font-sans text-[11px] font-semibold text-white/80">{name}</span>
                    <motion.span
                      key={items.length}
                      initial={reduce ? false : { scale: 1.4, color: "#c9b8ff" }}
                      animate={{ scale: 1, color: "rgba(255,255,255,0.6)" }}
                      className="font-mono text-[10px]"
                    >
                      {items.length}
                    </motion.span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {items.map((l) => {
                      const hot = l.id === last;
                      return (
                        <motion.div
                          key={l.id}
                          layoutId={l.id}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          className={`rounded-lg border p-2 ${hot ? "border-[#8b6bff] bg-[#622FFD]/15 shadow-[0_0_0_3px_rgba(98,47,253,0.18)]" : "border-white/[0.07] bg-[#17171d]"} ${ci === 3 ? "opacity-90" : ""}`}
                        >
                          <div className="flex items-center gap-1.5">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={`${AV}${l.ph}.webp`} alt="" className="h-5 w-5 shrink-0 rounded-full" />
                            <div className="min-w-0">
                              <p className="truncate font-sans text-[11px] font-semibold leading-tight text-white">{l.name}</p>
                              <p className="truncate font-sans text-[9px] leading-tight text-white/60">{l.co}</p>
                            </div>
                          </div>
                          <div className="mt-1.5 flex items-center justify-between">
                            <span className={`h-1.5 w-1.5 rounded-full ${l.ch === "wa" ? "bg-[#25D366]" : "bg-[#E1306C]"}`} />
                            <span className="h-1 w-8 rounded-full bg-white/10" />
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Aviso do que a IA acabou de fazer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center px-3">
          <AnimatePresence mode="wait">
            {lastLead && (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#1b1b22]/95 px-3 py-1.5 shadow-lg backdrop-blur"
              >
                <Sparkles className="h-3.5 w-3.5 text-[#c9b8ff]" aria-hidden="true" />
                <span className="font-sans text-[11px] text-white/90">
                  {c.actions[cols[lastLead.id]].replace("{name}", lastLead.name)}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
