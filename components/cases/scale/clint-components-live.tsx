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
