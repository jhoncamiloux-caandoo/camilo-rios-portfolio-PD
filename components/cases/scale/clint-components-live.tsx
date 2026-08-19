"use client";

/* Recriações fiéis dos componentes reais do Design System da Clint —
   cores, gradientes e comportamento extraídos do código-fonte real
   (componentes/BotaoCTA.dc.html, ChipAgente.dc.html, BarraPrompt.dc.html,
   BalaoChat.dc.html). Não são screenshots — são o próprio design system
   reimplementado em React para esta vitrine, fiel ao original pixel a
   pixel na paleta e na tipografia (Poppins). */

import { useEffect, useState } from "react";

const POPPINS = "'Poppins', sans-serif";

/* ── BotaoCTA — variante primário e contorno ─────────────────────── */
export function ClintBotaoCTA({
  rotulo,
  selo,
  variante = "primario",
}: {
  rotulo: string;
  selo?: string;
  variante?: "primario" | "contorno";
}) {
  if (variante === "contorno") {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "stretch",
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.3)",
          cursor: "pointer",
          fontFamily: POPPINS,
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "13px 26px" }}>
          <span style={{ fontSize: 15, fontWeight: 500, color: "#ffffff" }}>{rotulo}</span>
        </span>
      </span>
    );
  }
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "stretch",
        borderRadius: 18,
        cursor: "pointer",
        fontFamily: POPPINS,
        background: "linear-gradient(180deg, #7c3aed 0%, #6d28d9 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.28), 0 10px 26px rgba(88,44,224,0.4)",
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "13px 26px" }}>
        <span style={{ fontSize: 15, fontWeight: 500, color: "#ffffff" }}>{rotulo}</span>
        {selo && (
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 0.5,
              textTransform: "uppercase",
              color: "#6d28d9",
              background: "#ffffff",
              borderRadius: 999,
              padding: "6px 11px",
            }}
          >
            {selo}
          </span>
        )}
      </span>
    </span>
  );
}

/* ── ChipAgente — compacto e grande ───────────────────────────────── */
export function ClintChipAgente({
  rotulo,
  variante = "compacto",
}: {
  rotulo: string;
  variante?: "compacto" | "grande";
}) {
  const grande = variante === "grande";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: grande ? 7 : 8,
        padding: grande ? "6px 13px 6px 6px" : "8px 15px 8px 8px",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.14)",
        background: grande ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.02)",
        fontSize: grande ? 11.5 : 12.5,
        fontWeight: grande ? 500 : 400,
        color: "rgba(255,255,255,0.9)",
        fontFamily: POPPINS,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          flex: "none",
          width: grande ? 21 : 24,
          height: grande ? 21 : 24,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.14)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#43d97b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 8.5h16c.6 0 1 .4 1 1V19c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V9.5c0-.6.4-1 1-1z" />
        </svg>
      </span>
      {rotulo}
    </span>
  );
}

/* ── BarraPrompt — variante padrão, com digitação real ───────────── */
const FRASES = [
  "O que você deseja criar?",
  "Crie um agente para atender leads",
  "Crie um funil de vendas",
  "Quero recuperar oportunidades perdidas",
];

export function ClintBarraPrompt() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    let ci = 0;
    let apagando = false;
    let fraseIndex = 0;
    let timeout: number;

    const tick = () => {
      const alvo = FRASES[fraseIndex % FRASES.length];
      let espera = 88;
      if (!apagando) {
        ci++;
        if (ci >= alvo.length) {
          apagando = true;
          espera = 3400;
        }
      } else {
        ci -= 1;
        espera = 42;
        if (ci <= 0) {
          ci = 0;
          apagando = false;
          espera = 620;
          fraseIndex = (fraseIndex + 1) % FRASES.length;
        }
      }
      setTexto(alvo.slice(0, Math.max(0, ci)));
      timeout = window.setTimeout(tick, espera);
    };
    timeout = window.setTimeout(tick, 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 62,
        padding: "16px 18px",
        borderRadius: 999,
        border: "1.5px solid transparent",
        background:
          "linear-gradient(#08080c, #08080c) padding-box, linear-gradient(100deg, #CF75FF 0%, #FF9D5C 30%, #A1D8FF 70%, #7B9BFF 100%) border-box",
        boxShadow: "0 2px 60px rgba(101,116,167,0.45)",
        fontFamily: POPPINS,
      }}
    >
      <span
        style={{
          flex: "none",
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a600ff, #8800ff)",
        }}
      />
      <span style={{ flex: 1, minWidth: 0, fontSize: 14, color: "#ffffff", whiteSpace: "nowrap", overflow: "hidden" }}>
        {texto}
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: 16,
            marginLeft: 3,
            verticalAlign: "text-bottom",
            background: "#CF75FF",
            animation: "blinkCursor 1s infinite",
          }}
        />
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
      </svg>
    </div>
  );
}

/* ── BalaoChat ────────────────────────────────────────────────────── */
export function ClintBalaoChat({ texto, hora }: { texto: string; hora: string }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 13,
        padding: "16px 22px",
        borderRadius: 27,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        fontFamily: POPPINS,
      }}
    >
      <span
        style={{
          flex: "none",
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #a600ff, #3739ad)",
        }}
      />
      <span style={{ fontSize: 14, color: "#ffffff" }}>{texto}</span>
      <span style={{ fontSize: 10.5, fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>{hora}</span>
    </div>
  );
}

/* ── AI Signature — "Você pensa, a Clint faz" ────────────────────── */
export function ClintAiSignature() {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: POPPINS }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/cases/clint/scale/icone-ia.png"
        alt=""
        style={{ width: 22, height: 22, borderRadius: "50%", display: "block" }}
      />
      <span style={{ fontSize: 15, color: "#ffffff" }}>
        Você pensa, <b>a Clint faz</b>
      </span>
    </div>
  );
}

/* ── Nuvem de comandos da IA — 3 trilhas em marquee, sem JS ──────── */
const COMMAND_ROWS = [
  ["crie um agente", "recupere carrinhos abandonados", "monte um funil", "crie um indicador"],
  ["analise as últimas vendas", "qual vendedor mais converte?", "segmente a lista fria", "agende uma reunião"],
  ["monte um follow-up", "mova negócios de etapa", "consulte o histórico do lead", "gere um dashboard"],
];

export function ClintAiCommandCloud() {
  return (
    <div style={{ position: "relative", padding: "8px 0" }} aria-label="Exemplos de comandos para a IA da Clint">
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {COMMAND_ROWS.map((row, i) => (
          <div
            key={i}
            style={{
              overflow: "hidden",
              WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
              maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 10,
                width: "max-content",
                animation: `${i % 2 === 0 ? "marqueeLeft" : "marqueeRight"} ${22 + i * 4}s linear infinite`,
              }}
            >
              {[...row, ...row].map((cmd, j) => (
                <span
                  key={j}
                  style={{
                    flexShrink: 0,
                    padding: "9px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.03)",
                    fontFamily: POPPINS,
                    fontSize: 12.5,
                    color: "rgba(255,255,255,0.75)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cmd}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "#060309",
          border: "1px solid rgba(255,255,255,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 40px rgba(166,0,255,0.35)",
        }}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/cases/clint/scale/icone-ia.png" alt="" style={{ width: 30, height: 30, borderRadius: "50%" }} />
      </div>
    </div>
  );
}

/* ── Inteligência de reuniões — transcrição + score, CSS puro ─────── */
export function ClintMeetingIntel() {
  const lines = [
    { speaker: "V", widths: [92, 100] },
    { speaker: "L", widths: [78, 48] },
    { speaker: "V", widths: [86, 58] },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20, fontFamily: POPPINS }}>
      <div
        style={{
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
          padding: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <div>
            <strong style={{ fontSize: 13, color: "#ffffff" }}>Reunião comercial</strong>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>
              32 min · transcrição concluída
            </div>
          </div>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              color: "#43d97b",
              border: "1px solid rgba(67,217,123,0.35)",
              borderRadius: 999,
              padding: "4px 10px",
            }}
          >
            analisando
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
          {lines.map((line, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 18,
                  height: 18,
                  flexShrink: 0,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 9,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {line.speaker}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
                {line.widths.map((w, k) => (
                  <span
                    key={k}
                    style={{ height: 5, width: `${w}%`, borderRadius: 999, background: "rgba(255,255,255,0.1)" }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 20, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14 }}>
          {[
            { valor: "84%", label: "aderência" },
            { valor: "3", label: "objeções" },
            { valor: "2", label: "ações" },
          ].map((m) => (
            <div key={m.label} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <b style={{ fontSize: 16, color: "#ffffff" }}>{m.valor}</b>
              <small style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{m.label}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
