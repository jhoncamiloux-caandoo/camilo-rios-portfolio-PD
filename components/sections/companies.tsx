"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Box,
  Cpu,
  Layers,
  Search,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Expertise = { name: string; icon: LucideIcon };

const expertise: Expertise[] = [
  { name: "Growth", icon: TrendingUp },
  { name: "Inteligência Artificial", icon: Cpu },
  { name: "CRO", icon: Target },
  { name: "SaaS", icon: Layers },
  { name: "Produto", icon: Box },
  { name: "Pesquisa", icon: Search },
];

function ExpertiseCard({ name, icon: Icon }: Expertise) {
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-4 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-[0_10px_30px_-12px_rgba(98,47,253,0.55)]">
      <Icon
        aria-hidden="true"
        strokeWidth={1.6}
        className="h-5 w-5 text-white/55 transition-colors duration-300 group-hover:text-primary"
      />
      <span className="whitespace-nowrap font-sans text-lg font-medium tracking-tight text-white">
        {name}
      </span>
    </div>
  );
}

/**
 * Um "conjunto" completo das tags. O marquee renderiza dois conjuntos idênticos
 * lado a lado; o `pr-4` final iguala o respiro do gap interno, de modo que
 * deslocar exatamente 50% (= largura de um conjunto) emende sem salto visual.
 */
function MarqueeRow({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-4 pr-4"
    >
      {expertise.map((item) => (
        <li key={item.name}>
          <ExpertiseCard {...item} />
        </li>
      ))}
    </ul>
  );
}

export function Companies() {
  const reduce = useReducedMotion();

  return (
    <section className="overflow-hidden border-y border-white/10 bg-dark py-20 text-light">
      <div className="container flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
        <div className="shrink-0">
          <span className="mb-2 block font-display text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
            Foco Estratégico
          </span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-light md:text-3xl">
            Core Expertise
          </h2>
        </div>

        {reduce ? (
          // Acessível: sem movimento, todas as tags visíveis e sem máscara.
          <ul className="flex flex-wrap gap-4">
            {expertise.map((item) => (
              <li key={item.name}>
                <ExpertiseCard {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="relative w-full overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)] [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
            <motion.div
              className="flex w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 24, repeat: Infinity }}
            >
              <MarqueeRow />
              <MarqueeRow duplicate />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
