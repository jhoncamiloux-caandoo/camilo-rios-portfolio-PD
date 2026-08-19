import { Eyebrow, BlurTitle, Reveal, MetricGrid } from "@/components/case-lp/case-primitives";

const AGENTS = [
  { nome: "Atendente", faz: "Faz o atendimento no WhatsApp e direciona para o que o cliente precisa." },
  { nome: "Pré-vendedor", faz: "Qualifica o lead e agenda com o vendedor certo." },
  { nome: "Vendedor", faz: "Apresenta, contorna objeção, envia o link de pagamento." },
  { nome: "Consultor", faz: "Entende a necessidade antes de recomendar a solução." },
  { nome: "Cobrança", faz: "Lembra do vencimento, envia a segunda via e negocia o atraso." },
  { nome: "Suporte", faz: "Resolve a dúvida do cliente e escala para o time quando precisa." },
  { nome: "Recepção", faz: "Agenda, confirma presença e remarca sem ocupar ninguém." },
  { nome: "Follow-up", faz: "Volta em quem parou de responder, na hora certa, sem esquecer." },
  { nome: "Pós-venda", faz: "Acompanha o cliente novo, colhe feedback e abre recompra." },
  { nome: "Pesquisa", faz: "Faz a pesquisa de satisfação e organiza as respostas." },
];

export function Ch06Results() {
  return (
    <section className="relative bg-[#0A0A0A] py-28 md:py-40" aria-label="Amplitude e resultado">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(98,47,253,0.12),transparent_70%)]"
      />
      <div className="container relative">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>O que mais um agente pode fazer</Eyebrow>
          <BlurTitle
            text="Um mesmo sistema, dez papéis diferentes na operação."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 md:mt-20 md:grid-cols-5">
          {AGENTS.map((agent, i) => (
            <Reveal key={agent.nome} delay={i * 0.05}>
              <div className="flex h-full flex-col gap-1.5 rounded-xl border border-white/[0.08] bg-white/[0.03] p-4">
                <p className="font-display text-sm font-semibold text-white">{agent.nome}</p>
                <p className="font-sans text-xs leading-relaxed text-white/45">{agent.faz}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-3xl text-center md:mt-32">
          <Reveal>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Resultado na prática
            </p>
          </Reveal>
        </div>

        <div className="mt-8">
          <MetricGrid
            dark
            size="sm"
            items={[
              { value: 21, suffix: "x", label: "mais chance de qualificar" },
              { value: 60, suffix: "%", label: "das vendas após o 5º contato" },
              { value: 30, prefix: "+", suffix: "%", label: "reuniões marcadas na conversa" },
              { value: 10, prefix: "+", suffix: "%", label: "receita que já estava perdida" },
            ]}
          />
        </div>
        <Reveal delay={0.3} className="mx-auto mt-6 max-w-md text-center">
          <p className="font-sans text-xs text-white/30">
            Médias comunicadas pela própria plataforma Clint a seus clientes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
