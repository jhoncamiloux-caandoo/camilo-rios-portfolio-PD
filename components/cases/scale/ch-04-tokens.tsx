import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";

const COLORS = [
  { nome: "Fundo", cor: "#060309" },
  { nome: "Painel escuro", cor: "#0d0d12" },
  { nome: "Roxo CTA", cor: "#2d1c7f" },
  { nome: "Magenta selo", cor: "#a600ff" },
  { nome: "Roxo ícone", cor: "#8800ff" },
  { nome: "Azul badge", cor: "#3739ad" },
  { nome: "Lilás stat", cor: "#d1a6ff" },
  { nome: "Lilás número", cor: "#a787ff" },
  { nome: "Verde ícone", cor: "#B6FFC1" },
  { nome: "Verde chip", cor: "#43d97b" },
];

const TYPE_SCALE = [
  { label: "H1 Hero", size: "52px" },
  { label: "H2 Seção", size: "39px" },
  { label: "H3 Bloco", size: "24px" },
  { label: "Subtítulo", size: "17.5px" },
  { label: "Corpo", size: "13–15px" },
  { label: "Eyebrow / selo", size: "12px caps" },
];

const GRADIENTS = [
  { nome: "barra hero", css: "linear-gradient(90deg, #CF75FF 0%, #A1D8FF 50%, #E95BFF 100%)" },
  { nome: "barra padrão", css: "linear-gradient(100deg, #CF75FF 0%, #FF9D5C 30%, #A1D8FF 70%, #7B9BFF 100%)" },
  { nome: "moldura seção 3", css: "linear-gradient(115deg, #A85FFF 0%, #E95BFF 40%, #8FB4FF 75%, #6AA6FF 100%)" },
];

const SPACING = [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96];
const RADIUS = [
  { nome: "xs", px: 8 },
  { nome: "sm", px: 12 },
  { nome: "md (icon-box)", px: 16 },
  { nome: "lg (card)", px: 20 },
  { nome: "xl (bloco escuro)", px: 24 },
  { nome: "2xl (full-width)", px: 28 },
  { nome: "pill (CTA)", px: 999 },
];
const SHADOWS = [
  { nome: "sm", css: "0 1px 3px rgba(0,0,0,.3), 0 4px 16px rgba(0,0,0,.35)" },
  { nome: "md", css: "0 14px 40px -14px rgba(0,0,0,.5)" },
  { nome: "lg", css: "0 34px 80px -24px rgba(0,0,0,.6)" },
  { nome: "brand", css: "0 8px 28px -10px rgba(166,0,255,.5)" },
];
const GRID = [
  { label: "Container máximo", value: "1200px" },
  { label: "Gutter", value: "24px" },
  { label: "Respiro entre seções", value: "96px (72px em blocos compactos)" },
];

export function Ch04Tokens() {
  return (
    <section className="bg-[#0A0A0A] py-28 md:py-40" aria-label="Tokens reais do design system">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>Tokens</Eyebrow>
          <BlurTitle
            text="A fonte única de verdade do produto."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-white/50 md:text-lg">
              Estes são os valores reais em produção: a mesma paleta e
              escala tipográfica (Poppins) usadas em todas as páginas da
              Clint.
            </p>
          </Reveal>
        </div>

        {/* Cores */}
        <div className="mx-auto mt-16 max-w-4xl md:mt-20">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Cores
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-4">
            {COLORS.map((c, i) => (
              <Reveal key={c.nome} delay={i * 0.04} className="w-[110px]">
                <div
                  className="h-16 rounded-xl border border-white/[0.08]"
                  style={{ background: c.cor }}
                  aria-hidden="true"
                />
                <p className="mt-2 font-sans text-xs font-semibold text-white">{c.nome}</p>
                <p className="font-mono text-[11px] text-white/45">{c.cor}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Gradientes */}
        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Gradientes
            </p>
          </Reveal>
          <div className="flex flex-wrap gap-5">
            {GRADIENTS.map((g, i) => (
              <Reveal key={g.nome} delay={i * 0.06} className="min-w-[220px] flex-1">
                <div className="h-10 rounded-full" style={{ background: g.css }} aria-hidden="true" />
                <p className="mt-1.5 font-mono text-[11px] text-white/45">{g.nome}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tipografia */}
        <div className="mx-auto mt-14 max-w-4xl">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Tipografia · Poppins
            </p>
          </Reveal>
          <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8">
            {TYPE_SCALE.map((t, i) => (
              <Reveal key={t.label} delay={i * 0.05} className="flex items-baseline justify-between gap-4">
                <span className="font-sans text-white" style={{ fontSize: `min(${t.size}, 28px)` }}>
                  {t.label}
                </span>
                <span className="shrink-0 font-mono text-xs text-white/40">{t.size}</span>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Espaçamento, raio, sombra, grid — a camada sistematizada além da marca */}
        <div className="mx-auto mt-20 max-w-4xl border-t border-white/[0.08] pt-14 md:mt-24">
          <Reveal>
            <p className="max-w-xl font-sans text-sm leading-relaxed text-white/40">
              Além da identidade visual da Clint, esta é a camada que todo
              Design System bem estruturado adiciona: uma escala sistemática
              de espaçamento, raio e sombra para que qualquer página nova
              nasça consistente, sem decisão ad-hoc.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Espaçamento */}
            <div>
              <Reveal>
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Espaçamento
                </p>
              </Reveal>
              <Reveal delay={0.1} className="flex flex-wrap items-end gap-2">
                {SPACING.map((px) => (
                  <div key={px} className="flex flex-col items-center gap-1.5">
                    <div
                      className="rounded-sm bg-[#a600ff]/60"
                      style={{ width: Math.min(px, 40), height: 6 }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] text-white/35">{px}</span>
                  </div>
                ))}
              </Reveal>
            </div>

            {/* Grid */}
            <div>
              <Reveal>
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Grid e container
                </p>
              </Reveal>
              <div className="flex flex-col gap-2">
                {GRID.map((g, i) => (
                  <Reveal
                    key={g.label}
                    delay={0.05 * i}
                    className="flex items-center justify-between gap-4 rounded-lg border border-white/[0.06] px-4 py-2.5"
                  >
                    <span className="font-sans text-xs text-white/55">{g.label}</span>
                    <span className="font-mono text-xs text-white/70">{g.value}</span>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Raios */}
            <div>
              <Reveal>
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Raios
                </p>
              </Reveal>
              <div className="flex flex-wrap gap-3">
                {RADIUS.map((r, i) => (
                  <Reveal key={r.nome} delay={0.04 * i} className="flex flex-col items-center gap-1.5">
                    <div
                      className="h-10 w-10 border border-[#a600ff]/40 bg-[#a600ff]/10"
                      style={{ borderRadius: Math.min(r.px, 20) }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] text-white/35">{r.nome}</span>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sombras */}
            <div>
              <Reveal>
                <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  Sombras
                </p>
              </Reveal>
              <div className="flex flex-wrap gap-4">
                {SHADOWS.map((s, i) => (
                  <Reveal key={s.nome} delay={0.05 * i} className="flex flex-col items-center gap-2">
                    <div
                      className="h-10 w-16 rounded-lg bg-[#0d0d12]"
                      style={{ boxShadow: s.css }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] text-white/35">{s.nome}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
