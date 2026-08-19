import { Eyebrow, BlurTitle, Reveal, Timeline } from "@/components/case-lp/case-primitives";

const QUESTIONS = [
  "O que impede alguém de clicar?",
  "O que gera confiança?",
  "Quais informações realmente influenciam a decisão?",
  "Em que momento convidar o usuário para conversar?",
];

const STEPS = [
  { title: "ICP e equipe comercial", description: "Entrevistas para entender objeções reais ouvidas todos os dias na venda." },
  { title: "Benchmark de mercado", description: "Referências de concorrentes e categorias adjacentes para identificar padrões de confiança." },
  { title: "Google Analytics", description: "Dados de comportamento das campanhas existentes: origens, quedas e gargalos do funil." },
  { title: "Microsoft Clarity", description: "Sessões gravadas e heatmaps revelando como as pessoas realmente navegavam na página." },
  { title: "Hipóteses", description: "Cada insight virou uma hipótese clara, mensurável e revisável." },
];

export function Ch05Discovery() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Discovery">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Discovery</Eyebrow>
          <BlurTitle
            text="Toda decisão começou antes do Figma."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Antes de desenhar qualquer interface, mergulhei no contexto do
              produto, do mercado e das pessoas. As respostas definiram toda a
              arquitetura da experiência.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {QUESTIONS.map((q, i) => (
            <Reveal key={q} delay={i * 0.1}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-black/[0.06] bg-[#F8F8F8] p-6">
                <span className="mt-0.5 font-display text-sm font-semibold text-[#622FFD]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-base font-medium leading-snug text-[#0A0A0A] md:text-lg">
                  {q}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 md:mt-32">
          <Timeline steps={STEPS} />
        </div>
      </div>
    </section>
  );
}
