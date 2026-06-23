"use client";

import { motion } from "framer-motion";

type Role = {
  company: string;
  role: string;
  period: string;
  highlight: string;
  current?: boolean;
};

const roles: Role[] = [
  {
    company: "Clint — CRM & Plataforma de Vendas",
    role: "UX/UI Designer · Product & Growth",
    period: "2024 — Atual",
    highlight:
      "Criação de +15 produtos digitais e diagnósticos com IA para geração de demanda e qualificação de leads.",
    current: true,
  },
  {
    company: "e-Saúde Marketing",
    role: "UI Designer",
    period: "2023 — 2024",
    highlight:
      "Interfaces responsivas para sites e e-mail marketing — +15% na taxa de conversão de leads.",
  },
  {
    company: "Binamik Tecnologia",
    role: "UX/UI Designer",
    period: "2023",
    highlight:
      "Gestão de Design Systems e UX Research — +20% na taxa de abertura de campanhas.",
  },
  {
    company: "Bonitour Viagens e Turismo",
    role: "Web Designer",
    period: "2017 — 2023",
    highlight:
      "Rebranding completo e automação de marketing — +40% no reconhecimento de marca.",
  },
  {
    company: "Telemark Spain",
    role: "Web Designer Gráfico",
    period: "2015 — 2016",
    highlight:
      "Sites para LATAM e Espanha com design culturalmente adaptado e colaboração internacional.",
  },
];

export function Journey() {
  return (
    <section className="bg-[#F8F8F8] py-28 text-dark">
      <div className="container">
        <div className="mb-16 flex flex-col gap-3 md:mb-20">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-dark/40">
            Trajetória
          </span>
          <h2 className="max-w-2xl font-display text-[40px] font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Oito anos transformando produtos em crescimento.
          </h2>
        </div>

        <ol className="relative ml-1">
          {/* Linha vertical contínua */}
          <div
            aria-hidden="true"
            className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-dark/10"
          />

          {roles.map((r, i) => (
            <motion.li
              key={r.company}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid grid-cols-1 gap-1 pb-12 pl-8 last:pb-0 md:grid-cols-12 md:gap-6"
            >
              {/* Dot */}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full ring-4 ring-[#F8F8F8] ${
                  r.current ? "bg-primary" : "bg-dark/25"
                }`}
              />

              <div className="md:col-span-3">
                <p className="font-display text-sm font-semibold text-dark/45">
                  {r.period}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-xl font-semibold tracking-tight text-dark">
                  {r.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{r.role}</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-dark/60">
                  {r.highlight}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
