import Link from "next/link";
import { Reveal } from "./case-primitives";

/* Transição para o próximo case da coleção — ou "mais trabalho" no último. */
export function NextCase({
  eyebrow,
  title,
  description,
  href,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <section className="border-t border-black/[0.06] bg-white py-20 md:py-28" aria-label="Próximo case">
      <div className="container">
        <Reveal>
          <Link
            href={href}
            className="group flex flex-col items-start justify-between gap-6 rounded-2xl border border-black/[0.07] p-8 transition-colors duration-300 hover:border-primary/30 md:flex-row md:items-center md:p-12"
          >
            <div className="flex flex-col gap-3">
              <span className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {eyebrow}
              </span>
              <h3 className="font-display text-2xl font-semibold leading-snug tracking-tight text-[#0A0A0A] md:text-4xl">
                {title}
              </h3>
              <p className="max-w-lg font-sans text-sm leading-relaxed text-[#0A0A0A]/50 md:text-base">
                {description}
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/[0.1] text-[#0A0A0A] transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
