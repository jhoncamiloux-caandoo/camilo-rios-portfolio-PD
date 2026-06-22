import { FadeIn } from "@/components/motion/fade-in";
import { HeroCanvas } from "@/components/sections/hero-canvas";
import { ResultsList } from "@/components/sections/results-list";

const navLinks = [
  { label: "Impacto", href: "#impacto" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

function Caret() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function Hero() {
  return (
    <>
      {/* Header fixo — opacidade 10% para deixar o hero "respirar" */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-white/10 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <a
            href="#inicio"
            className="rounded-sm font-display text-lg font-semibold text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light"
          >
            Jhon Camilo Rios
          </a>
          <nav className="flex items-center gap-4 text-xs text-dark/60 md:gap-8 md:text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-sm transition hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero animado: o rosto percorre os 100 frames conforme o scroll */}
      <HeroCanvas>
        <div className="relative z-10 flex h-full items-center py-24 md:py-16">
          <div className="container grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
            {/* Esquerda: texto + CTAs */}
            <div className="flex flex-col gap-8 md:col-span-6 lg:col-span-5">
              <FadeIn immediate>
                <p className="font-display text-sm uppercase tracking-[0.2em] text-[#3a3a3d]">
                  Senior Product Designer
                </p>
              </FadeIn>

              <div className="flex flex-col gap-6">
                <FadeIn immediate delay={0.06}>
                  <h1 className="font-display text-[40px] font-semibold leading-[1.05] tracking-[-0.01em] text-[#262628] md:text-[56px]">
                    Eu construo produtos digitais que geram crescimento.
                  </h1>
                </FadeIn>
                <FadeIn immediate delay={0.12}>
                  <p className="text-body text-[#6b6b70]">
                    Todo crescimento começa entendendo pessoas
                  </p>
                </FadeIn>
              </div>

              <FadeIn immediate delay={0.18}>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#cases"
                    className="inline-flex h-[52px] items-center gap-1 rounded-full border border-white/50 bg-[#9f77d6]/30 px-6 text-base font-semibold text-[#1f073f] backdrop-blur-md transition hover:bg-[#9f77d6]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light"
                  >
                    Ver Projetos
                    <Caret />
                  </a>
                  <a
                    href="#impacto"
                    className="inline-flex h-[52px] items-center gap-1 rounded-full border border-black/10 bg-white/40 px-6 text-base font-semibold text-[#1c1c1c] backdrop-blur-md transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light"
                  >
                    Conhecer Minha Trajetória
                    <Caret />
                  </a>
                </div>
              </FadeIn>

              {/* Resultados — visível em mobile abaixo dos CTAs */}
              <div className="md:hidden">
                <ResultsList />
              </div>
            </div>

            {/* Direita: lista de resultados interativa (desktop) */}
            <div className="hidden md:col-span-3 md:col-start-10 md:flex md:flex-col">
              <ResultsList />
            </div>
          </div>
        </div>
      </HeroCanvas>
    </>
  );
}
