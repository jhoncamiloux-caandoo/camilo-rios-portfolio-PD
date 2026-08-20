import type { Metadata } from "next";
import localFont from "next/font/local";
import { FloatingActions } from "@/components/floating-actions";
import "./globals.css";

const dmSans = localFont({
  src: [
    {
      path: "../public/fonts/DMSans-latin-var.woff2",
      weight: "100 1000",
      style: "normal",
    },
  ],
  variable: "--font-dm-sans",
  display: "swap",
});

const degular = localFont({
  src: [
    {
      path: "../public/fonts/Degular-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Degular-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-degular",
  display: "swap",
});

const SITE_URL = "https://camilo-rios-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jhon Camilo Rios | Senior Product Designer",
    template: "%s | Jhon Camilo Rios",
  },
  description:
    "Portfolio premium de Jhon Camilo Rios, Senior Product Designer especializado em Growth, Inteligência Artificial, CRO e SaaS.",
  keywords: [
    "Jhon Camilo Rios",
    "Senior Product Designer",
    "Product Design",
    "UX Designer",
    "Growth Design",
    "CRO",
    "Design System",
    "IA para produto",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jhon Camilo Rios | Senior Product Designer",
    description: "Growth, IA e SaaS com precisão de produto.",
    url: SITE_URL,
    siteName: "Jhon Camilo Rios",
    locale: "pt_BR",
    type: "website",
  },
};

/* Schema Person — ajuda motores de IA (ChatGPT, Perplexity, Claude) a
   entender quem é o autor do site como entidade, não só como texto. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jhon Camilo Rios",
  jobTitle: "Senior Product Designer",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/jhon-camilo-rios/",
    "https://www.behance.net/CamiloRiosQuintero",
    "https://medium.com/@jhoncamiloux",
  ],
  knowsAbout: [
    "Product Design",
    "UX Design",
    "Growth",
    "CRO",
    "Design Systems",
    "Inteligência Artificial aplicada a produto",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${dmSans.variable} ${degular.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-dark text-light font-sans antialiased selection:bg-primary selection:text-white">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
