import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case: Clint Acquire · CRO & Produto | Jhon Camilo Rios",
  description:
    "Como uma landing page com IA no WhatsApp e um fluxo Typebot concentrou 79% da demanda comercial da Clint. Product Design, CRO e conversação de ponta a ponta.",
  keywords: [
    "CRO",
    "Product Design",
    "UX Strategy",
    "Growth",
    "Clint",
    "Aquisição",
    "Conversão",
    "WhatsApp",
    "Typebot",
  ],
  openGraph: {
    title: "Case: Clint Acquire · Jhon Camilo Rios",
    description: "Da landing page ao Typebot: a jornada completa de aquisição da Clint.",
    locale: "pt_BR",
    type: "article",
  },
  alternates: {
    canonical: "/cases/acquire",
  },
};

export default function CaseAcquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
