import { FadeIn } from "@/components/motion/fade-in";
import { HeroCanvas } from "@/components/sections/hero-canvas";

const features = [
  { icon: "shield", label: "Resultado 1" },
  { icon: "phone", label: "Resultado 2" },
  { icon: "card", label: "Resultado 3" },
  { icon: "card", label: "Resultado 4" },
] as const;

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

function FeatureIcon({ name }: { name: (typeof features)[number]["icon"] }) {
  const common = {
    "aria-hidden": "true" as const,
    viewBox: "0 0 24 24",
    className: "h-4 w-4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (name === "phone") {
    return (
      <svg {...common}>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

export function Hero() {
  return (
    <>
      {/* Header fixo */}
      <header className="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-light/70 backdrop-blur-xl">
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
            </div>

            {/* Direita: lista de resultados */}
            <div className="hidden md:col-span-3 md:col-start-10 md:flex">
              <FadeIn immediate delay={0.2} className="flex w-full flex-col gap-6">
                {features.map((feature, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#45506f]/20 bg-[#393950]/10 text-[#45506f] backdrop-blur">
                      <FeatureIcon name={feature.icon} />
                    </span>
                    <span className="text-sm text-[#45506f]">{feature.label}</span>
                  </div>
                ))}
              </FadeIn>
            </div>
          </div>
        </div>
      </HeroCanvas>
    </>
  );
}
