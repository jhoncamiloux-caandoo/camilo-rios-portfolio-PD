import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";

const STATES = [
  { label: "experimental", desc: "Pode mudar. Não usar como dependência central sem avisar.", color: "#a787ff" },
  { label: "stable", desc: "Contrato público. Mudança incompatível exige versão major.", color: "#43d97b" },
  { label: "deprecated", desc: "Continua funcionando durante a migração e aponta o substituto.", color: "#d1a6ff" },
  { label: "removed", desc: "Não existe mais na implementação; permanece só no changelog.", color: "#0A0A0A" },
];

const GATE = [
  "Usa tokens e componentes existentes, ou documenta por que um novo contrato é necessário.",
  "Atualiza a implementação canônica, nunca só a demonstração.",
  "Atualiza o registro ao adicionar, renomear ou remover componente.",
  "Atualiza a vitrine quando aparência, anatomia ou uso muda.",
  "Atualiza o changelog quando afeta quem consome o sistema.",
  "Passa na auditoria automática de sincronização.",
];

const DEBT = [
  { arquivo: "components.css", cores: 15, primitivas: 23 },
  { arquivo: "effects.css", cores: 9, primitivas: 0 },
  { arquivo: "lp.js", cores: 2, primitivas: 0 },
];

export function Ch07Governance() {
  return (
    <section className="bg-white py-28 md:py-40" aria-label="Governança do design system">
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow>Governança</Eyebrow>
          <BlurTitle
            text="Um Design System não é só UI. É a regra de quem pode mudar o quê."
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-[#0A0A0A] md:text-5xl"
          />
          <Reveal delay={0.2}>
            <p className="max-w-xl font-sans text-base leading-relaxed text-[#0A0A0A]/55 md:text-lg">
              Em outro sistema que estruturei para o mesmo ecossistema de
              LPs, cada componente carrega um estado, uma fonte da verdade e
              uma auditoria automática. É essa disciplina, não a paleta em
              si, que eu levo para qualquer produto novo.
            </p>
          </Reveal>
        </div>

        {/* Estados de um componente */}
        <div className="mx-auto mt-16 max-w-4xl md:mt-20">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/40">
              Estados de um componente
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {STATES.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="flex items-start gap-3 rounded-xl border border-black/[0.07] bg-[#F8F8F8] p-4">
                  <span
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: s.color, border: s.color === "#0A0A0A" ? "1px solid rgba(0,0,0,0.2)" : undefined }}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-mono text-xs font-semibold text-[#0A0A0A]">{s.label}</p>
                    <p className="mt-1 font-sans text-xs leading-relaxed text-[#0A0A0A]/50">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Gate de mudança */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Reveal>
            <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/40">
              Definition of Done para qualquer mudança
            </p>
          </Reveal>
          <div className="flex flex-col gap-2">
            {GATE.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 0.04}
                className="flex items-start gap-3 border-b border-black/[0.06] py-3 last:border-b-0"
              >
                <span className="mt-0.5 font-mono text-[11px] text-[#622FFD]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-sans text-sm text-[#0A0A0A]/65">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Dívida técnica congelada */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Reveal>
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#0A0A0A]/40">
              Dívida técnica, só pode diminuir
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-5 max-w-xl font-sans text-sm leading-relaxed text-[#0A0A0A]/50">
              Cor escrita à mão em vez de token é dívida. Em vez de fingir
              que não existe, uma baseline congela o número atual: ele nunca
              pode aumentar, e cada redução vira uma linha no changelog.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left">
              <thead>
                <tr className="border-b border-black/[0.08]">
                  <th className="py-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]/40">
                    Arquivo
                  </th>
                  <th className="py-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]/40">
                    Cores hardcoded
                  </th>
                  <th className="py-2 font-sans text-xs font-semibold uppercase tracking-wider text-[#0A0A0A]/40">
                    Primitivas expostas
                  </th>
                </tr>
              </thead>
              <tbody>
                {DEBT.map((row) => (
                  <tr key={row.arquivo} className="border-b border-black/[0.05]">
                    <td className="py-2.5 font-mono text-xs text-[#0A0A0A]/70">{row.arquivo}</td>
                    <td className="py-2.5 font-mono text-xs text-[#622FFD]">{row.cores}</td>
                    <td className="py-2.5 font-mono text-xs text-[#622FFD]">{row.primitivas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>

        {/* Nota crítica: nem todo experimento vira componente */}
        <Reveal delay={0.2} className="mx-auto mt-16 max-w-2xl rounded-xl bg-[#622FFD]/[0.05] p-6 text-center">
          <p className="font-sans text-sm leading-relaxed text-[#0A0A0A]/65">
            Nem todo experimento sobrevive. Uma versão inicial de
            &ldquo;integrações&rdquo; foi testada na vitrine, marcada para
            substituição e nunca chegou a entrar no registro oficial. O
            sistema documentou a troca em vez de esconder a tentativa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
