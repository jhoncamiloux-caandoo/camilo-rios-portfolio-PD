import { Eyebrow, BlurTitle, Reveal, Timeline } from "@/components/case-lp/case-primitives";

const STATES = [
  { title: "Input", description: "O usuário descreve o que precisa em linguagem natural — sem formulário, sem campos técnicos." },
  { title: "Contexto", description: "O sistema reúne histórico da conversa, dados do CRM e estágio do funil antes de responder." },
  { title: "Processamento", description: "O modelo interpreta a intenção e decide qual ação, agente ou fluxo se aplica." },
  { title: "Resultado", description: "Uma recomendação é gerada — nunca uma ação irreversível tomada sozinha." },
  { title: "Confiança / explicação", description: "A interface mostra por que aquela recomendação apareceu, não só o que fazer." },
  { title: "Validação humana", description: "O vendedor aprova, edita ou rejeita antes de qualquer coisa ir para o cliente." },
  { title: "Ação", description: "Só depois da validação a mensagem é enviada, a reunião é marcada ou o negócio avança." },
  { title: "Feedback", description: "O resultado da ação retro-alimenta o modelo, refinando a próxima recomendação." },
];

export function Ch03Architecture() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Arquitetura da experiência de IA">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>AI Experience Architecture</Eyebrow>
          <BlurTitle
            text="Cada estado do modelo precisa de uma decisão de interface."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Da intenção do usuário até o feedback que refina o próximo
              ciclo — oito estados, oito decisões de design.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32">
          <Timeline steps={STATES} />
        </div>
      </div>
    </section>
  );
}
