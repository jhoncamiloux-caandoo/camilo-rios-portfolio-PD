import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Post } from "@/lib/blog/posts";
import { SERIES_I18N, coverSmall, seriesOf, widenI18n, type Series } from "@/lib/blog/series";
import { L, PostDesc, PostTitle } from "@/components/blog/i18n";

function Thumb({ p, className = "" }: { p: Post; className?: string }) {
  const src = coverSmall(p);
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} width={800} height={450} loading="lazy" decoding="async" alt="" className={`aspect-video w-full rounded-xl object-cover ${className}`} />
  ) : (
    <span aria-hidden="true" className={`block aspect-video w-full rounded-xl bg-gradient-to-br from-[#622FFD] to-[#A48BFF] ${className}`} />
  );
}

function SeriesName({ s }: { s: Series }) {
  const t = SERIES_I18N[s.id];
  return <L pt={s.title} en={t?.en[0] ?? s.title} es={t?.es[0] ?? s.title} />;
}
function SeriesIntro({ s }: { s: Series }) {
  const t = SERIES_I18N[s.id];
  return <L pt={s.intro} en={t?.en[1] ?? s.intro} es={t?.es[1] ?? s.intro} />;
}
const Chapter = () => <L pt="Capítulo" en="Chapter" es="Capítulo" />;
const Of = () => <L pt="de" en="of" es="de" />;

/* Topo do artigo: "Série X · Capítulo n de N" e os capítulos como passos clicáveis. */
export function SeriesBar({ slug }: { slug: string }) {
  const s = seriesOf(slug);
  if (!s) return null;
  return (
    <nav aria-label={`Série ${s.series.title}`} className="mt-8 rounded-2xl border border-line bg-canvas p-4">
      <p className="text-sm text-ink-secondary">
        <L pt="Série" en="Series" es="Serie" /> <strong className="font-semibold text-ink"><SeriesName s={s.series} /></strong> · <Chapter /> {s.index + 1} <Of /> {s.items.length}
      </p>
      <ol className="mt-3 flex gap-1.5">
        {s.items.map((p, i) => (
          <li key={p.slug} className="flex-1">
            <Link
              href={`/blog/${p.slug}`}
              aria-current={i === s.index ? "page" : undefined}
              title={`${i + 1}. ${p.title}`}
              className={`block h-2 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${i === s.index ? "bg-link" : i < s.index ? "bg-link/40 hover:bg-link/70" : "bg-ink/10 hover:bg-ink/25"}`}
            >
              <span className="sr-only"><Chapter /> {i + 1}: <PostTitle slug={p.slug} pt={p.title} /></span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* Fim do artigo: a ordem da série, o próximo capítulo em destaque e o anterior discreto. */
export function SeriesEnd({ slug }: { slug: string }) {
  const s = seriesOf(slug);
  if (!s) return null;
  const n = s.index + 1;
  return (
    <section aria-label={`Série ${s.series.title}`} className="mt-14">
      <h2 className="font-display text-2xl font-semibold md:text-3xl"><L pt="Leia em ordem" en="Read in order" es="Lee en orden" /></h2>
      <p className="mt-2 text-ink-secondary">
        <L
          pt={<>Os artigos conversam entre si. Este é o capítulo {n} da série <strong className="font-semibold text-ink"><SeriesName s={s.series} /></strong>, que segue um raciocínio do primeiro ao último capítulo.</>}
          en={<>These articles build on each other. This is chapter {n} of the <strong className="font-semibold text-ink"><SeriesName s={s.series} /></strong> series, which follows one line of reasoning from the first chapter to the last.</>}
          es={<>Los artículos conversan entre sí. Este es el capítulo {n} de la serie <strong className="font-semibold text-ink"><SeriesName s={s.series} /></strong>, que sigue un razonamiento del primer al último capítulo.</>}
        />
      </p>
      <ol className="mt-5 flex flex-col gap-1.5">
        {s.items.map((p, i) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} aria-current={i === s.index ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${i === s.index ? "bg-link/10 font-semibold text-ink" : "text-ink-secondary hover:bg-ink/5 hover:text-ink"}`}>
              <span className={`grid h-7 w-7 flex-none place-items-center rounded-full text-xs font-bold ${i === s.index ? "bg-link text-white" : i < s.index ? "bg-link/25 text-link" : "border border-line text-ink-muted"}`}>{i < s.index ? "✓" : i + 1}</span>
              <span className="min-w-0 flex-1"><PostTitle slug={p.slug} pt={p.title} /></span>
              {i === s.index && <span className="text-xs font-normal text-link"><L pt="você está aqui" en="you are here" es="estás aquí" /></span>}
            </Link>
          </li>
        ))}
      </ol>
      {s.next ? (
        <Link href={`/blog/${s.next.slug}`} className="group mt-6 grid gap-5 rounded-3xl border border-line bg-canvas p-4 transition hover:border-link/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus md:grid-cols-[1fr_1.1fr] md:items-center">
          <Thumb p={s.next} />
          <span className="px-1 pb-1">
            <span className="text-sm text-link"><L pt="Próximo" en="Next" es="Siguiente" /> · <Chapter /> {s.index + 2} <Of /> {s.items.length}</span>
            <span className="mt-1 block font-display text-2xl font-semibold leading-tight text-ink group-hover:text-link"><PostTitle slug={s.next.slug} pt={s.next.title} /></span>
            <span className="mt-2 block text-sm leading-relaxed text-ink-secondary"><PostDesc slug={s.next.slug} pt={s.next.description} /></span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-link"><L pt="Continuar a leitura" en="Keep reading" es="Seguir leyendo" /> <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
          </span>
        </Link>
      ) : (
        <div className="mt-6 rounded-3xl border border-line bg-canvas p-5">
          <p className="font-display text-xl font-semibold"><L pt="Você chegou ao fim da série." en="You've reached the end of the series." es="Llegaste al final de la serie." /></p>
          <p className="mt-1 text-sm text-ink-secondary"><SeriesIntro s={s.series} /></p>
          <p className="mt-1 text-sm text-ink-secondary"><L pt="Quer continuar? As leituras abaixo ampliam o raciocínio por outros caminhos." en="Want to keep going? The readings below expand the reasoning in other directions." es="¿Quieres seguir? Las lecturas de abajo amplían el razonamiento por otros caminos." /></p>
        </div>
      )}
      {s.prev && (
        <Link href={`/blog/${s.prev.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> <L pt="Anterior" en="Previous" es="Anterior" />: <PostTitle slug={s.prev.slug} pt={s.prev.title} />
        </Link>
      )}
    </section>
  );
}

/* "Para ampliar o raciocínio": artigos de outras séries, cada um com o motivo da ligação. */
export function Widen({ slug }: { slug: string }) {
  const items = widenI18n(slug);
  if (!items.length) return null;
  return (
    <section aria-label="Para ampliar o raciocínio" className="mt-14">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60"><L pt="Para ampliar o raciocínio" en="To expand the reasoning" es="Para ampliar el razonamiento" /></p>
      <ul className="mt-3 grid gap-3 md:grid-cols-3">
        {items.map(({ post: p, reason }) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-canvas p-3 transition hover:border-link/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
              <Thumb p={p} />
              <span className="px-1 text-[13px] leading-snug text-ink-secondary"><L pt={reason.pt} en={reason.en} es={reason.es} /></span>
              <span className="mt-auto px-1 pb-1 font-display text-[16px] font-semibold leading-snug text-ink group-hover:text-link"><PostTitle slug={p.slug} pt={p.title} /></span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
