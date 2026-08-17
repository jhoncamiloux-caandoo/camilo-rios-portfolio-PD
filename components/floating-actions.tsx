"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, FileText } from "lucide-react";
import { CALENDAR_URL, RESUME_URL } from "@/lib/links";

const ease = [0.22, 1, 0.36, 1] as const;

type Action = {
  href: string;
  label: string;
  icon: typeof Calendar;
  variant: "primary" | "secondary";
};

const actions: Action[] = [
  {
    href: CALENDAR_URL,
    label: "Agendar reunião",
    icon: Calendar,
    variant: "primary",
  },
  {
    href: RESUME_URL,
    label: "Currículo",
    icon: FileText,
    variant: "secondary",
  },
];

/* Botões fixos no canto inferior direito — visíveis em toda a navegação.
   Desktop: pill com ícone + rótulo. Mobile: círculo só com ícone,
   rótulo aparece como tooltip ao toque/hover para não cobrir conteúdo. */
export function FloatingActions() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
      role="group"
      aria-label="Ações rápidas"
    >
      {actions.map((action, i) => {
        const Icon = action.icon;
        const isPrimary = action.variant === "primary";

        return (
          <motion.div
            key={action.label}
            className="relative"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.1, ease }}
          >
            {/* Tooltip — mobile (toque) */}
            <AnimatePresence>
              {activeTooltip === action.label && (
                <motion.span
                  role="tooltip"
                  className="absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#0A0A0A] px-3 py-1.5 font-sans text-xs font-medium text-white shadow-lg sm:hidden"
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 6 }}
                  transition={{ duration: 0.18 }}
                >
                  {action.label}
                </motion.span>
              )}
            </AnimatePresence>

            <motion.a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={action.label}
              title={action.label}
              onFocus={() => setActiveTooltip(action.label)}
              onBlur={() => setActiveTooltip(null)}
              onTouchStart={() => setActiveTooltip(action.label)}
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25, ease }}
              className={[
                "flex items-center justify-center gap-2 rounded-full transition-shadow duration-300",
                "h-12 w-12 sm:h-auto sm:w-auto sm:px-5 sm:py-3",
                isPrimary
                  ? "bg-primary text-white shadow-[0_8px_24px_-4px_rgba(98,47,253,0.5)] hover:shadow-[0_10px_32px_-4px_rgba(98,47,253,0.7)]"
                  : "border border-black/[0.08] bg-white text-[#0A0A0A] shadow-[0_8px_24px_-6px_rgba(10,10,10,0.18)] hover:border-primary/30 hover:shadow-[0_10px_32px_-6px_rgba(10,10,10,0.24)]",
              ].join(" ")}
            >
              <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
              <span className="hidden font-sans text-sm font-semibold sm:inline">
                {action.label}
              </span>
            </motion.a>
          </motion.div>
        );
      })}
    </div>
  );
}
