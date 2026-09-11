import type { Locale } from "@/lib/i18n/types";

/**
 * Strings for components shared across case-study pages that live outside
 * the per-case chapter files (components/case-lp/*). Kept separate from
 * home.ts / acquire.ts / intelligence.ts / scale.ts since these components
 * are reused by more than one case.
 */
export type SharedCaseDictionary = {
  clintPrompt: { phrases: string[] };
  clintAiSignature: { lead: string; bold: string };
  clintCommandCloud: { ariaLabel: string; rows: string[][] };
  clintMeetingIntel: {
    title: string;
    duration: string;
    statusAnalyzing: string;
    adherence: string;
    objections: string;
    actions: string;
  };
};

export const sharedCase: Record<Locale, SharedCaseDictionary> = {
  pt: {
    clintPrompt: {
      phrases: [
        "O que você deseja criar?",
        "Crie um agente para atender leads",
        "Crie um funil de vendas",
        "Quero recuperar oportunidades perdidas",
      ],
    },
    clintAiSignature: { lead: "Você pensa,", bold: "a Clint faz" },
    clintCommandCloud: {
      ariaLabel: "Exemplos de comandos para a IA da Clint",
      rows: [
        ["crie um agente", "recupere carrinhos abandonados", "monte um funil", "crie um indicador"],
        ["analise as últimas vendas", "qual vendedor mais converte?", "segmente a lista fria", "agende uma reunião"],
        ["monte um follow-up", "mova negócios de etapa", "consulte o histórico do lead", "gere um dashboard"],
      ],
    },
    clintMeetingIntel: {
      title: "Reunião comercial",
      duration: "32 min · transcrição concluída",
      statusAnalyzing: "analisando",
      adherence: "aderência",
      objections: "objeções",
      actions: "ações",
    },
  },
  en: {
    clintPrompt: {
      phrases: [
        "What do you want to create?",
        "Create an agent to handle leads",
        "Build a sales funnel",
        "I want to recover lost opportunities",
      ],
    },
    clintAiSignature: { lead: "You think it,", bold: "Clint builds it" },
    clintCommandCloud: {
      ariaLabel: "Example prompts for Clint's AI",
      rows: [
        ["create an agent", "recover abandoned carts", "build a funnel", "create a dashboard metric"],
        ["analyze recent sales", "which rep converts most?", "segment the cold list", "schedule a meeting"],
        ["build a follow-up", "move a deal to another stage", "check the lead's history", "generate a dashboard"],
      ],
    },
    clintMeetingIntel: {
      title: "Sales call",
      duration: "32 min · transcription complete",
      statusAnalyzing: "analyzing",
      adherence: "adherence",
      objections: "objections",
      actions: "actions",
    },
  },
  es: {
    clintPrompt: {
      phrases: [
        "¿Qué quieres crear?",
        "Crea un agente para atender leads",
        "Crea un embudo de ventas",
        "Quiero recuperar oportunidades perdidas",
      ],
    },
    clintAiSignature: { lead: "Tú lo piensas,", bold: "Clint lo hace" },
    clintCommandCloud: {
      ariaLabel: "Ejemplos de comandos para la IA de Clint",
      rows: [
        ["crea un agente", "recupera carritos abandonados", "arma un embudo", "crea un indicador"],
        ["analiza las últimas ventas", "¿qué vendedor convierte más?", "segmenta la lista fría", "agenda una reunión"],
        ["arma un follow-up", "mueve un negocio de etapa", "consulta el historial del lead", "genera un dashboard"],
      ],
    },
    clintMeetingIntel: {
      title: "Reunión comercial",
      duration: "32 min · transcripción completa",
      statusAnalyzing: "analizando",
      adherence: "adherencia",
      objections: "objeciones",
      actions: "acciones",
    },
  },
};
