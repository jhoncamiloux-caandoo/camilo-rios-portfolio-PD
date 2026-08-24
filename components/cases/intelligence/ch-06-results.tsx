"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  UserSearch,
  Handshake,
  Compass,
  Wallet,
  LifeBuoy,
  CalendarCheck,
  Repeat2,
  PackageCheck,
  ClipboardCheck,
  Filter,
  BarChart3,
  Headphones,
  User,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import { Eyebrow, BlurTitle, Reveal, MetricGrid } from "@/components/case-lp/case-primitives";
import { ClintBarraPrompt } from "@/components/case-lp/clint-components-live";

type Agent = { nome: string; faz: string; icon: LucideIcon };

const AGENTS: Agent[] = [
  { nome: "Atendente", faz: "Faz o atendimento no WhatsApp e direciona para o que o cliente precisa.", icon: MessageCircle },
  { nome: "Pré-vendedor", faz: "Qualifica o lead e agenda com o vendedor certo.", icon: UserSearch },
  { nome: "Vendedor", faz: "Apresenta, contorna objeção, envia o link de pagamento.", icon: Handshake },
  { nome: "Consultor", faz: "Entende a necessidade antes de recomendar a solução.", icon: Compass },
  { nome: "Cobrança", faz: "Lembra do vencimento, envia a segunda via e negocia o atraso.", icon: Wallet },
  { nome: "Suporte", faz: "Resolve a dúvida do cliente e escala para o time quando precisa.", icon: LifeBuoy },
  { nome: "Recepção", faz: "Agenda, confirma presença e remarca, sem precisar de alguém disponível para isso.", icon: CalendarCheck },
  { nome: "Follow-up", faz: "Volta em quem parou de responder, na hora certa, sem esquecer.", icon: Repeat2 },
  { nome: "Pós-venda", faz: "Acompanha o cliente novo, colhe feedback e abre recompra.", icon: PackageCheck },
  { nome: "Pesquisa", faz: "Faz a pesquisa de satisfação e organiza as respostas.", icon: ClipboardCheck },
];

const ROLE_WORDS = AGENTS.map((a) => a.nome);

function RotatingRole() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % ROLE_WORDS.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <span className="relative inline-block text-primary">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLE_WORDS[i]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block font-semibold"
        >
          {ROLE_WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const ORB_AVATARS = [
  "/cases/clint/intelligence/avatares/toy-100.webp",
  "/cases/clint/intelligence/avatares/toy-87.webp",
  "/cases/clint/intelligence/avatares/toy-83.webp",
  "/cases/clint/intelligence/avatares/toy-80.webp",
  "/cases/clint/intelligence/avatares/toy-79.webp",
  "/cases/clint/intelligence/avatares/toy-73.webp",
  "/cases/clint/intelligence/avatares/toy-45.webp",
];

const ORB_ROLE_ICONS: { icon: LucideIcon; color: string }[] = [
  { icon: MessageCircle, color: "#7ee2a8" },
  { icon: Filter, color: "#c4b0ff" },
  { icon: BarChart3, color: "#9ad9ff" },
  { icon: Headphones, color: "#ffd6a0" },
  { icon: User, color: "#ffb3d9" },
  { icon: DollarSign, color: "#a7f3c4" },
];

const SATELLITES = [
  { top: "4%", left: "50%", duration: 7, delay: 0 },
  { top: "34%", left: "92%", duration: 7.8, delay: -1.3 },
  { top: "88%", left: "78%", duration: 8.6, delay: -2.6 },
  { top: "90%", left: "20%", duration: 9.4, delay: -3.9 },
  { top: "34%", left: "7%", duration: 10.2, delay: -5.2 },
];

type OrbSlot = { avatar: string; role: number; visible: boolean };

function useAgentOrbs(reduce: boolean | null) {
  const [slots, setSlots] = useState<OrbSlot[]>(() =>
    Array.from({ length: 6 }, (_, i) => ({
      avatar: ORB_AVATARS[i % ORB_AVATARS.length],
      role: i % ORB_ROLE_ICONS.length,
      visible: true,
    })),
  );

  useEffect(() => {
    if (reduce) return;
    let idx = 0;
    const id = setInterval(() => {
      const i = idx % 6;
      idx += 5;
      setSlots((s) => s.map((slot, j) => (j === i ? { ...slot, visible: false } : slot)));
      setTimeout(() => {
        setSlots((s) => {
          const used = s.map((x) => x.avatar);
          const free = ORB_AVATARS.filter((a) => !used.includes(a));
          const nextAvatar = free.length ? free[Math.floor(Math.random() * free.length)] : s[i].avatar;
          const nextRole = Math.floor(Math.random() * ORB_ROLE_ICONS.length);
          return s.map((slot, j) => (j === i ? { avatar: nextAvatar, role: nextRole, visible: true } : slot));
        });
      }, 1150);
    }, 3200);
    return () => clearInterval(id);
  }, [reduce]);

  return slots;
}

function AgentOrbs() {
  const reduce = useReducedMotion();
  const slots = useAgentOrbs(reduce);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px]" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/[0.14]" />
      <div className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.05]" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl"
        style={{ background: "radial-gradient(circle, rgba(140,70,255,0.26) 0%, rgba(124,58,237,0.07) 46%, transparent 72%)" }}
        animate={reduce ? undefined : { opacity: [0.72, 1, 0.72], scale: [1, 1.045, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {SATELLITES.map((pos, i) => {
        const slot = slots[i];
        const { icon: Icon, color } = ORB_ROLE_ICONS[slot.role];
        return (
          <motion.span
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ top: pos.top, left: pos.left }}
            animate={reduce ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: pos.duration, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
          >
            <motion.span
              className="relative block h-[52px] w-[52px] rounded-full bg-cover bg-center shadow-[0_14px_34px_rgba(0,0,0,0.5)] ring-1 ring-white/[0.16] md:h-[76px] md:w-[76px]"
              style={{ backgroundImage: `url(${slot.avatar})` }}
              animate={{ opacity: slot.visible ? 1 : 0, scale: slot.visible ? 1 : 0.9 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                className="absolute -right-1 -bottom-1 flex h-[27px] w-[27px] items-center justify-center rounded-full bg-[#0a0712] ring-1 ring-primary/30"
                style={{ color }}
              >
                <Icon className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden="true" />
              </span>
            </motion.span>
          </motion.span>
        );
      })}

      <motion.span
        className="absolute left-1/2 top-1/2 z-[3] w-[31%] -translate-x-1/2 -translate-y-1/2"
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.span
          className="relative block aspect-square w-full rounded-full bg-cover bg-center shadow-[0_26px_64px_rgba(0,0,0,0.6),0_0_46px_rgba(140,80,255,0.3)] ring-1 ring-white/20"
          style={{ backgroundImage: `url(${slots[5].avatar})` }}
          animate={{ opacity: slots[5].visible ? 1 : 0, scale: slots[5].visible ? 1 : 0.9 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="absolute -bottom-[1%] -right-[3%] flex aspect-square w-[33%] items-center justify-center rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] shadow-[0_10px_24px_rgba(88,44,224,0.5)] ring-2 ring-[#0a0712]">
            <Filter className="h-[44%] w-[44%] text-white" strokeWidth={1.9} aria-hidden="true" />
          </span>
        </motion.span>
      </motion.span>
    </div>
  );
}

function AgentCard({ agent, duplicate = false }: { agent: Agent; duplicate?: boolean }) {
  const Icon = agent.icon;
  return (
    <li aria-hidden={duplicate || undefined} className="w-[270px] shrink-0">
      <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/80 to-fuchsia-500/50 p-[2px]">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0A0A0A] text-primary">
              <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </span>
          </span>
          <div className="flex flex-col gap-1">
            <span className="font-display text-base font-medium leading-none text-white">
              {agent.nome}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] text-white/40">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden="true" />
              agente ativo
            </span>
          </div>
        </div>
        <span className="h-px w-full bg-white/[0.08]" aria-hidden="true" />
        <p className="font-sans text-sm leading-relaxed text-white/55">{agent.faz}</p>
      </div>
    </li>
  );
}

function Row({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul aria-hidden={duplicate || undefined} className="flex shrink-0 items-stretch gap-4 pr-4">
      {AGENTS.map((a) => (
        <AgentCard key={a.nome} agent={a} duplicate={duplicate} />
      ))}
    </ul>
  );
}

export function Ch06Results() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label="Amplitude e resultado">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(98,47,253,0.12),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>Mesma arquitetura, mais papéis</Eyebrow>
          <BlurTitle
            text="Um mesmo sistema, dez papéis diferentes na operação."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <Reveal delay={0.15}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/50 md:text-lg">
              O mesmo copiloto que acompanha a conversa de vendas cobre outras
              nove frentes da operação, cada uma com o nível de autonomia que
              a situação pede: tarefas de rotina seguem direto, decisões de
              maior risco continuam passando por uma pessoa.
            </p>
          </Reveal>
        </div>

        {/* Recriação da interface real de criação de agentes */}
        <Reveal delay={0.25} className="mx-auto mt-14 max-w-5xl md:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(98,47,253,0.16),transparent_70%)]"
            />
            <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8">
              <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/70">
                  Agentes de IA
                </span>
                <h3 className="font-display text-2xl font-medium leading-tight text-white md:text-3xl">
                  <RotatingRole /> agora é um agente de IA.
                </h3>
                <p className="max-w-md font-sans text-sm leading-relaxed text-white/50">
                  Atende todo contato assim que chega, qualifica e direciona, com o mesmo controle humano em cada decisão.
                </p>
                <div className="mt-2 w-full max-w-md">
                  <ClintBarraPrompt
                    frases={[
                      "Um agente de pré-vendas",
                      "Um agente de cobrança",
                      "Um agente de suporte",
                      "Um agente de recepção",
                    ]}
                  />
                </div>
              </div>
              <AgentOrbs />
            </div>
          </div>
        </Reveal>
        <p className="mx-auto mt-4 max-w-md text-center font-sans text-[11px] text-white/25">
          Recriação fiel dos componentes reais de criação de agentes da Clint.
        </p>

        {/* Evidência real: agente sendo configurado e testado */}
        <Reveal delay={0.2} className="mx-auto mt-10 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-white/[0.08]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/cases/clint/intelligence/conversa-agente-baloes.webp"
              alt="Tela real da Clint testando e configurando um agente de IA, com comandos em balões de conversa"
              className="block w-full"
            />
          </div>
          <p className="mt-4 text-center font-sans text-[11px] text-white/25">
            Tela real da plataforma: um agente sendo testado e configurado
            antes de ir para produção.
          </p>
        </Reveal>

        {/* Esteira de agentes */}
        <div className="mx-auto mt-16 max-w-5xl md:mt-20">
          {reduce ? (
            <ul className="flex flex-wrap justify-center gap-4">
              {AGENTS.map((a) => (
                <AgentCard key={a.nome} agent={a} />
              ))}
            </ul>
          ) : (
            <div className="relative w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_4%,#000_96%,transparent)]">
              <motion.div
                className="flex w-max"
                animate={{ x: ["0%", "-33.3333%"] }}
                transition={{ ease: "linear", duration: 42, repeat: Infinity }}
              >
                <Row />
                <Row duplicate />
                <Row duplicate />
              </motion.div>
            </div>
          )}
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center md:mt-32">
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Resultado na prática
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 font-sans text-sm leading-relaxed text-white/45 md:text-base">
              Os agentes ajudaram a operação a chegar nesses números. O
              comportamento de cada um foi desenhado pelos designers,
              programado pelo time de engenharia, e configurado caso a caso a
              partir dos dados que cada cliente trazia na implantação.
            </p>
          </Reveal>
        </div>

        <div className="mt-8">
          <MetricGrid
            dark
            size="sm"
            items={[
              { value: 21, suffix: "x", label: "mais chance de qualificar" },
              { value: 60, suffix: "%", label: "das vendas após o 5º contato" },
              { value: 30, prefix: "+", suffix: "%", label: "reuniões marcadas na conversa" },
              { value: 10, prefix: "+", suffix: "%", label: "receita que já estava perdida" },
            ]}
          />
        </div>
        <Reveal delay={0.3} className="mx-auto mt-6 max-w-md text-center">
          <p className="font-sans text-xs text-white/30">
            Médias comunicadas pela própria plataforma Clint a seus clientes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
