import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case: Clint Acquire · CRO & Produto | Jhon Camilo Rios",
  description:
    "Projetando a jornada de aquisição da Clint. Product Design e CRO transformando pontos de contato em conversão.",
  openGraph: {
    title: "Case: Clint Acquire · Jhon Camilo Rios",
    description: "CRO / Produto: arquitetura de conversão da Clint.",
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
