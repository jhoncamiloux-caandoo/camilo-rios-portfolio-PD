import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case: IA para Vendas no WhatsApp | Jhon Camilo Rios",
  description:
    "Como um único produto digital concentrou 79% da geração de demanda da operação. Product Design, Growth e CRO gerando 10.722 conversas qualificadas.",
  keywords: [
    "Product Design",
    "CRO",
    "Landing Page",
    "Agente de IA",
    "WhatsApp",
    "Growth",
    "Conversão",
    "UX",
  ],
  openGraph: {
    title: "Case: IA para Vendas no WhatsApp · Jhon Camilo Rios",
    description:
      "28.967 cliques. 10.722 conversas. 37% de conversão. Como o Product Design transformou tráfego pago em conversas qualificadas.",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "/case-lp-camilo",
  },
};

export default function CaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
