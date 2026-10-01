import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { FloatingActions } from "@/components/floating-actions";
import { LocaleProvider, NO_FLASH_LOCALE_SCRIPT } from "@/lib/i18n/locale-context";
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
      path: "../public/fonts/Degular-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Degular-Semibold.woff2",
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
    "Jhon Camilo Rios, Senior Product Designer em SaaS B2B. Cases de Growth, CRO, Design Systems e IA aplicada a produto, com resultados medidos, e um blog sobre UX, dados e IA.",
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
  twitter: {
    card: "summary_large_image",
    title: "Jhon Camilo Rios | Senior Product Designer",
    description: "Growth, IA e SaaS com precisão de produto.",
  },
  authors: [{ name: "Jhon Camilo Rios", url: SITE_URL }],
  creator: "Jhon Camilo Rios",
};

/* Schema Person — ajuda motores de IA (ChatGPT, Perplexity, Claude) a
   entender quem é o autor do site como entidade, não só como texto. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Jhon Camilo Rios",
  url: SITE_URL,
  inLanguage: "pt-BR",
  author: { "@id": `${SITE_URL}/#person` },
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
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }}
        />
        <Script id="no-flash-locale" strategy="beforeInteractive">
          {NO_FLASH_LOCALE_SCRIPT}
        </Script>
      </head>
      <body className="bg-dark text-light font-sans antialiased selection:bg-primary selection:text-white">
        <LocaleProvider>
          {children}
          <FloatingActions />
        </LocaleProvider>
      </body>
    </html>
  );
}
