"use client";

/* Blog em 3 idiomas: o português vem no HTML (servidor); inglês e espanhol chegam como JSON estático
   (public/blog-i18n/<idioma>/) só quando a pessoa troca a bandeira. Sem tradução, mostra o português. */
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useLocale } from "@/lib/i18n/locale-context";
import type { Locale } from "@/lib/i18n/types";
import type { Block, Category } from "@/lib/blog/posts";

export type PostI18n = { slug: string; title: string; description: string; updateNote?: string; related: { title: string; body: string }; blocks: Block[] };
type Index = Record<string, { title: string; description: string }>;

const cache = new Map<string, Promise<unknown>>();
function load<T>(url: string): Promise<T | null> {
  if (!cache.has(url)) cache.set(url, fetch(url).then((r) => (r.ok ? r.json() : null)).catch(() => null));
  return cache.get(url) as Promise<T | null>;
}

function useJson<T>(path: (l: Locale) => string): T | null {
  const { locale } = useLocale();
  const [data, setData] = useState<{ l: Locale; v: T | null } | null>(null);
  useEffect(() => {
    if (locale === "pt") return;
    let on = true;
    load<T>(path(locale)).then((v) => on && setData({ l: locale, v }));
    return () => { on = false; };
  }, [locale]); // eslint-disable-line react-hooks/exhaustive-deps
  return locale !== "pt" && data?.l === locale ? data.v : null;
}

export const useBlogIndex = () => useJson<Index>((l) => `/blog-i18n/${l}/index.json`);

/* Texto curto em 3 idiomas, escrito no próprio componente. */
export function L({ pt, en, es }: { pt: ReactNode; en: ReactNode; es: ReactNode }) {
  const { locale } = useLocale();
  return <>{locale === "en" ? en : locale === "es" ? es : pt}</>;
}

export function PostTitle({ slug, pt }: { slug: string; pt: string }) {
  const idx = useBlogIndex();
  return <>{idx?.[slug]?.title ?? pt}</>;
}
export function PostDesc({ slug, pt }: { slug: string; pt: string }) {
  const idx = useBlogIndex();
  return <>{idx?.[slug]?.description ?? pt}</>;
}

/* Artigo aberto: carrega a tradução inteira uma vez e reparte por contexto. */
const ArticleCtx = createContext<PostI18n | null>(null);
export function ArticleI18nProvider({ slug, children }: { slug: string; children: ReactNode }) {
  const t = useJson<PostI18n>((l) => `/blog-i18n/${l}/${slug}.json`);
  return <ArticleCtx.Provider value={t}>{children}</ArticleCtx.Provider>;
}
export const useArticleI18n = () => useContext(ArticleCtx);

export function ArticleField({ field, pt }: { field: "title" | "description" | "updateNote" | "relatedTitle" | "relatedBody"; pt: string }) {
  const t = useArticleI18n();
  const v = !t ? undefined : field === "relatedTitle" ? t.related.title : field === "relatedBody" ? t.related.body : t[field];
  return <>{v ?? pt}</>;
}

export const CATEGORY_I18N: Record<Locale, Record<Category, string>> = {
  pt: { ux: "Product Design & UX", ai: "AI + Design", growth: "Growth & CRO", ds: "Design Systems", career: "Carreira" },
  en: { ux: "Product Design & UX", ai: "AI + Design", growth: "Growth & CRO", ds: "Design Systems", career: "Career" },
  es: { ux: "Product Design y UX", ai: "IA + Diseño", growth: "Growth y CRO", ds: "Design Systems", career: "Carrera" },
};
export const DATE_LOCALE: Record<Locale, string> = { pt: "pt-BR", en: "en-US", es: "es-CO" };

export function CategoryLabel({ c }: { c: Category }) {
  const { locale } = useLocale();
  return <>{CATEGORY_I18N[locale][c]}</>;
}

export function PostDate({ date, month = "long" }: { date: string; month?: "long" | "short" }) {
  const { locale } = useLocale();
  return <time dateTime={date}>{new Date(date + "T12:00:00").toLocaleDateString(DATE_LOCALE[locale], { day: "2-digit", month, year: "numeric" })}</time>;
}

/* Textos das cenas e visuais: o português é a chave; inglês e espanhol vêm de /blog-i18n/<idioma>/ui.json.
   Uso: const t = useT(); t("Arraste o tempo") ou t("quadro {n} de 180", { n }). */
type Vars = Record<string, string | number>;
const fill = (s: string, v?: Vars) => (v ? s.replace(/\{(\w+)\}/g, (m, k) => (k in v ? String(v[k]) : m)) : s);
export function useT() {
  const dict = useJson<Record<string, string>>((l) => `/blog-i18n/${l}/ui.json`);
  return (pt: string, v?: Vars) => fill(dict?.[pt] ?? pt, v);
}
