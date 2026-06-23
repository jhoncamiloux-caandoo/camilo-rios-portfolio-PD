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
      className="h-4 w-4"
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
      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-white/10 backdrop-blur-xl">
        <div className="container flex h-14 items-center justify-between md:h-16">
          <a
            href="#inicio"
            className="flex items-center gap-2.5 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light"
            aria-label="Jhon Camilo Rios — voltar ao início"
          >
            <img
              src="/logo.svg"
              alt=""
              aria-hidden="true"
              className="h-7 w-7 shrink-0 md:h-8 md:w-8"
            />
            <span className="font-display text-base font-semibold text-dark md:text-lg">
              Jhon Camilo Rios
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 text-sm text-dark/60 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-sm transition hover:text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile nav — icon-free pill links */}
          <nav
            aria-label="Navegação mobile"
            className="flex items-center gap-3 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-black/8 bg-white/60 px-3 py-1 text-[11px] font-medium text-dark/70 backdrop-blur-sm transition hover:bg-white/90"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ── Hero animado ───────────────────────────────────────── */}
      <HeroCanvas>
        <div className="container grid grid-cols-1 items-start gap-5 pb-4 md:items-center md:gap-gutter md:grid-cols-12">

            {/* Esquerda: texto + CTAs */}
            <div className="flex flex-col gap-5 md:col-span-6 md:gap-8 lg:col-span-5">

              <FadeIn immediate>
                <p className="font-display text-xs uppercase tracking-[0.2em] text-[#3a3a3d] md:text-sm">
                  Senior Product Designer
                </p>
              </FadeIn>

              <div className="flex flex-col gap-3 md:gap-6">
                <FadeIn immediate delay={0.06}>
                  {/* Mobile: 30px — compacto, não vaza sobre o rosto */}
                  <h1 className="font-display text-[30px] font-semibold leading-[1.08] tracking-[-0.01em] text-[#262628] sm:text-[36px] md:text-[56px]">
                    Eu construo produtos digitais que geram crescimento.
                  </h1>
                </FadeIn>
                <FadeIn immediate delay={0.12}>
                  <p className="text-sm text-[#6b6b70] md:text-body">
                    8 anos conectando produto, dados e comportamento humano.
                  </p>
                </FadeIn>
              </div>

              <FadeIn immediate delay={0.18}>
                {/* Mobile: botões lado a lado compactos */}
                <div className="flex items-center gap-3">
                  <a
                    href="#cases"
                    className="inline-flex h-[42px] items-center gap-1 rounded-full border border-white/50 bg-[#9f77d6]/30 px-5 text-sm font-semibold text-[#1f073f] backdrop-blur-md transition hover:bg-[#9f77d6]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:h-[52px] md:px-6 md:text-base"
                  >
                    Ver Projetos
                    <Caret />
                  </a>
                  <a
                    href="#impacto"
                    className="inline-flex h-[42px] items-center gap-1 rounded-full border border-black/10 bg-white/40 px-5 text-sm font-semibold text-[#1c1c1c] backdrop-blur-md transition hover:bg-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:h-[52px] md:px-6 md:text-base"
                  >
                    {/* Texto curto no mobile */}
                    <span className="md:hidden">Trajetória</span>
                    <span className="hidden md:inline">Conhecer Minha Trajetória</span>
                    <Caret />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Direita: resultados — apenas desktop */}
            <div className="hidden md:col-span-3 md:col-start-10 md:flex md:flex-col">
              <ResultsList />
            </div>

        </div>
      </HeroCanvas>
    </>
  );
}
