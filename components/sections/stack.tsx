"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  PenTool,
  Frame,
  Sparkles,
  Bot,
  BarChart3,
  LineChart,
  MousePointerClick,
  Workflow,
  Boxes,
  Wand2,
  type LucideIcon,
} from "lucide-react";

type Tool = { name: string; icon: LucideIcon };

const tools: Tool[] = [
  { name: "Figma", icon: PenTool },
  { name: "Framer", icon: Frame },
  { name: "Webflow", icon: Boxes },
  { name: "Claude", icon: Sparkles },
  { name: "ChatGPT", icon: Bot },
  { name: "Figma Make", icon: Wand2 },
  { name: "Power BI", icon: BarChart3 },
  { name: "Google Analytics", icon: LineChart },
  { name: "Microsoft Clarity", icon: MousePointerClick },
  { name: "RD Station", icon: Workflow },
];

function ToolChip({ name, icon: Icon }: Tool) {
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] px-5 py-3.5 backdrop-blur-md transition duration-300 hover:border-primary/40 hover:bg-white/[0.07]">
      <Icon
        aria-hidden="true"
        strokeWidth={1.6}
        className="h-5 w-5 text-white/55 transition-colors duration-300 group-hover:text-primary"
      />
      <span className="whitespace-nowrap font-sans text-base font-medium tracking-tight text-white/90">
        {name}
      </span>
    </div>
  );
}

function Row({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {tools.map((t) => (
        <li key={t.name}>
          <ToolChip {...t} />
        </li>
      ))}
    </ul>
  );
}

export function Stack() {
  const reduce = useReducedMotion();

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#0A0A0A] py-24 text-white">
      <div className="container mb-12 flex flex-col gap-3">
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
          Stack & Ferramentas
        </span>
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          Do discovery ao handoff, com IA acelerando cada etapa.
        </h2>
      </div>

      {reduce ? (
        <div className="container">
          <ul className="flex flex-wrap gap-4">
            {tools.map((t) => (
              <li key={t.name}>
                <ToolChip {...t} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            <Row />
            <Row duplicate />
          </motion.div>
        </div>
      )}
    </section>
  );
}
