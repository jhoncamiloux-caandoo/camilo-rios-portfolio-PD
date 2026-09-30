"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n/locale-context";

type Role = {
  company: string;
  role: string;
  period: string;
  highlight: string;
  current?: boolean;
};

const rolesCurrent = [true, false, false, false, false];

export function Journey() {
  const { t } = useLocale();
  const roles: Role[] = t.home.journey.roles.map((r, i) => ({
    ...r,
    current: rolesCurrent[i],
  }));

  return (
    <section id="trajetoria" data-nav-theme="light" className="bg-[#F8F8F8] py-28 text-dark">
      <div className="container">
        <div className="mb-16 flex flex-col gap-3 md:mb-20">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-dark/65">
            {t.home.journey.eyebrow}
          </span>
          <h2 className="max-w-2xl font-display text-[40px] font-semibold leading-[1.08] tracking-tight md:text-5xl">
            {t.home.journey.title}
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
                <p className="font-display text-sm font-semibold text-dark/65">
                  {r.period}
                </p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-display text-xl font-semibold tracking-tight text-dark">
                  {r.company}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{r.role}</p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-dark/65">
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
