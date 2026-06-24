"use client";

import { useReducedMotion } from "framer-motion";

import {
  CardTransformed,
  CardsContainer,
  ContainerScroll,
} from "@/components/ui/animated-cards-stack";
import { FadeIn } from "@/components/motion/fade-in";

type Testimonial = {
  id: string;
  name: string;
  role: string;
  initials: string;
  quote: string;
};

/* Recomendações reais do LinkedIn — curadas para o posicionamento de
   Senior Product Designer (produto, design sênior, IA, dados, stakeholders). */
const testimonials: Testimonial[] = [
  {
    id: "camila",
    name: "Camila Meneghetti",
    role: "Senior Product Manager · IA",
    initials: "CM",
    quote:
      "Sempre interessado em compreender as motivações do usuário e como elas se conectam aos objetivos de negócio. Transita muito bem entre produto e tecnologia.",
  },
  {
    id: "juan",
    name: "Juan José H. Ramirez",
    role: "Senior Experience Designer · Thoughtworks",
    initials: "JR",
    quote:
      "Profissional dedicado e criativo, sempre atualizado em tendências e metodologias de design, contribuindo nos projetos com seu pensamento crítico.",
  },
  {
    id: "marcos",
    name: "Marcos Gabriel Moreira",
    role: "Product Designer · UX/UI",
    initials: "MM",
    quote:
      "Combina rigor técnico com um olhar clínico para criar peças de alto impacto, integrando IA ao workflow sem abrir mão da excelência estética. Eleva o nível de qualquer equipe.",
  },
  {
    id: "felippe",
    name: "Felippe Yann Machado",
    role: "RevOps · Data & AI Integration",
    initials: "FM",
    quote:
      "O designer mais versátil com quem já trabalhei. Usa ferramentas diversas para chegar a um produto final conciso, comunicativo e refinado.",
  },
  {
    id: "maria",
    name: "Maria Augusta Larré Lemos",
    role: "Analista de Inteligência de Mercado",
    initials: "ML",
    quote:
      "Eu delegava as demandas de UX/UI do briefing ao handoff — e ele sempre entregou com autonomia, técnica e senso de dono.",
  },
];

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="flex size-full flex-col justify-between gap-7 rounded-3xl border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl md:p-8">
      <div className="space-y-5">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <LinkedInGlyph className="h-4 w-4" />
        </span>
        <blockquote className="font-display text-lg font-medium leading-snug tracking-tight text-white md:text-xl">
          “{t.quote}”
        </blockquote>
      </div>

      <figcaption className="flex items-center gap-3.5">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/35 to-primary/5 text-sm font-semibold text-white ring-1 ring-white/15"
        >
          {t.initials}
        </span>
        <span className="min-w-0">
          <span className="block truncate font-sans text-sm font-semibold text-white">
            {t.name}
          </span>
          <span className="block truncate text-xs text-white/50">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

function SectionHeader() {
  return (
    <div className="container">
      <FadeIn className="max-w-2xl">
        <p className="mb-5 flex items-center gap-2 text-caption uppercase tracking-[0.22em] text-white/40">
          <LinkedInGlyph className="h-3.5 w-3.5 text-primary" />
          Recomendações · LinkedIn
        </p>
        <h2 className="font-display text-[40px] font-semibold leading-[1.08] tracking-tight md:text-h2">
          Quem já construiu comigo.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/55 md:text-lg">
          Recomendações reais de líderes de produto, design e dados com quem
          trabalhei lado a lado nos últimos 8 anos.
        </p>
      </FadeIn>
    </div>
  );
}

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section
      id="recomendacoes"
      className="relative overflow-hidden bg-dark text-white"
    >
      {/* Brilho roxo da marca no topo da seção */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[440px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(98,47,253,0.16),transparent_72%)]"
      />

      <div className="relative pt-24 md:pt-32">
        <SectionHeader />
      </div>

      {reduce ? (
        // Fallback acessível / sem scroll-jacking: grade estática.
        <div className="container relative grid grid-cols-1 gap-6 pb-28 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="h-[340px]">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      ) : (
        <ContainerScroll className="relative h-[300vh]">
          <div className="sticky top-0 flex h-screen w-full items-center justify-center">
            <CardsContainer className="h-[420px] w-[88vw] max-w-[380px]">
              {testimonials.map((t, index) => (
                <CardTransformed
                  key={t.id}
                  arrayLength={testimonials.length + 2}
                  index={index + 2}
                  className="size-full"
                  role="group"
                  aria-roledescription="recomendação"
                  aria-label={`${t.name} — ${t.role}`}
                >
                  <TestimonialCard t={t} />
                </CardTransformed>
              ))}
            </CardsContainer>
          </div>
        </ContainerScroll>
      )}
    </section>
  );
}
