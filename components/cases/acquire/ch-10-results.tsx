import Link from "next/link";
import { Eyebrow, BlurTitle, Reveal, BigNumber } from "@/components/case-lp/case-primitives";

export function Ch10Results() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label="Resultado e aprendizado">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(55%_55%_at_50%_100%,rgba(98,47,253,0.14),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>Resultado</Eyebrow>
          <BlurTitle
            text="A Landing Page tornou-se o principal ativo de aquisição da operação."
            className="font-display text-2xl font-semibold leading-[1.15] tracking-tight text-white md:text-4xl"
          />
        </div>

        <div className="mx-auto mt-16 flex flex-col items-center md:mt-20">
          <BigNumber
            value={79}
            suffix="%"
            duration={1800}
            className="font-display text-[100px] font-semibold leading-none tracking-tight text-white md:text-[160px]"
          />
          <Reveal delay={0.3}>
            <p className="mt-3 max-w-md text-center font-sans text-sm text-white/45 md:text-base">
              de toda a demanda da operação passou por esta experiência
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="mx-auto mt-20 max-w-xl text-center md:mt-24">
          <p className="font-sans text-base leading-relaxed text-white/50 md:text-lg">
            Clareza converteu mais do que complexidade. Cada botão de
            WhatsApp, posicionado no momento certo, sustentou esse resultado.
          </p>
        </Reveal>

        <Reveal delay={0.5} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/cases/whatsapp-ai"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 font-sans text-sm font-semibold text-[#0A0A0A] transition-all duration-250 hover:bg-[#622FFD] hover:text-white"
          >
            Ver o case completo
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
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
