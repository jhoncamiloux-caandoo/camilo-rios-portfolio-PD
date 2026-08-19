import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";

const PRODUCTS = [
  {
    label: "Diagnóstico de IA para vendas",
    href: "https://diagnostico-ia-vendas.lovable.app/",
  },
  {
    label: "Plataforma completa Clint",
    href: "https://lps.useclint.com/plataforma-completa",
  },
];

export function Ch08Results() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label="Resultado do sistema">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(98,47,253,0.12),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>Resultado</Eyebrow>
          <BlurTitle
            text="Um sistema compartilhado, vários produtos."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/50 md:text-lg">
              Um sistema compartilhado tornou decisões visuais mais
              consistentes e reduziu a necessidade de reconstruir padrões a
              cada nova experiência. A prova não é um número isolado — é que
              o mesmo vocabulário visual sustenta produtos diferentes.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-3 md:mt-20">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.href} delay={i * 0.1}>
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-4 transition-colors duration-300 hover:border-[#622FFD]/40"
              >
                <span className="font-sans text-sm font-semibold text-white md:text-base">
                  {product.label}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#622FFD]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
