import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Post } from "@/lib/blog/posts";
import { coverSmall, postBySlug, seriesOf, widen } from "@/lib/blog/series";

function Thumb({ p, className = "" }: { p: Post; className?: string }) {
  const src = coverSmall(p);
  return src ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} width={800} height={450} loading="lazy" decoding="async" alt="" className={`aspect-video w-full rounded-xl object-cover ${className}`} />
  ) : (
    <span aria-hidden="true" className={`block aspect-video w-full rounded-xl bg-gradient-to-br from-[#622FFD] to-[#A48BFF] ${className}`} />
  );
}

/* Topo do artigo: "Série X · Capítulo n de N" e os capítulos como passos clicáveis. */
export function SeriesBar({ slug }: { slug: string }) {
  const s = seriesOf(slug);
  if (!s) return null;
  return (
    <nav aria-label={`Série ${s.series.title}`} className="mt-8 rounded-2xl border border-line bg-canvas p-4">
      <p className="text-sm text-ink-secondary">
        Série <strong className="font-semibold text-ink">{s.series.title}</strong> · Capítulo {s.index + 1} de {s.items.length}
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
              <span className="sr-only">{`Capítulo ${i + 1}: ${p.title}`}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* Banner no meio do texto: leva para outro artigo no ponto em que ele explica melhor o assunto. */
export function PostLinkCard({ slug, text }: { slug: string; text: string }) {
  const p = postBySlug(slug);
  if (!p) return null;
  const s = seriesOf(slug);
  return (
    <Link href={`/blog/${p.slug}`} className="group my-8 grid grid-cols-[112px_1fr] items-center gap-4 rounded-2xl border border-line bg-canvas p-3 transition hover:border-link/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus sm:grid-cols-[160px_1fr]">
      <Thumb p={p} />
      <span className="min-w-0 pr-2">
        <span className="block text-[13px] text-ink-secondary">{text}</span>
        <span className="mt-1 block font-display text-[17px] font-semibold leading-snug text-ink group-hover:text-link">
          {s && <span className="text-link">Capítulo {s.index + 1} · </span>}
          {p.title}
        </span>
      </span>
    </Link>
  );
}

/* Fim do artigo: próximo capítulo em destaque, anterior discreto; no último, a série inteira. */
export function SeriesEnd({ slug }: { slug: string }) {
  const s = seriesOf(slug);
  if (!s) return null;
  const last = !s.next;
  return (
    <section aria-label={`Continuar a série ${s.series.title}`} className="mt-14">
      <h2 className="font-display text-2xl font-semibold md:text-3xl">Leia em ordem</h2>
      <p className="mt-2 text-ink-secondary">Os artigos conversam entre si. Este é o capítulo {s.index + 1} da série <strong className="font-semibold text-ink">{s.series.title}</strong>, que segue um raciocínio do primeiro ao último capítulo.</p>
      <ol className="mt-5 flex flex-col gap-1.5">
        {s.items.map((p, i) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} aria-current={i === s.index ? "page" : undefined}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus ${i === s.index ? "bg-link/10 font-semibold text-ink" : "text-ink-secondary hover:bg-ink/5 hover:text-ink"}`}>
              <span className={`grid h-7 w-7 flex-none place-items-center rounded-full text-xs font-bold ${i === s.index ? "bg-link text-white" : i < s.index ? "bg-link/25 text-link" : "border border-line text-ink-muted"}`}>{i < s.index ? "✓" : i + 1}</span>
              <span className="min-w-0 flex-1">{p.title}</span>
              {i === s.index && <span className="text-xs font-normal text-link">você está aqui</span>}
            </Link>
          </li>
        ))}
      </ol>
      {s.next && (
        <Link href={`/blog/${s.next.slug}`} className="group mt-6 grid gap-5 rounded-3xl border border-line bg-canvas p-4 transition hover:border-link/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus md:grid-cols-[1fr_1.1fr] md:items-center">
          <Thumb p={s.next} />
          <span className="px-1 pb-1">
            <span className="text-sm text-link">Próximo · Capítulo {s.index + 2} de {s.items.length}</span>
            <span className="mt-1 block font-display text-2xl font-semibold leading-tight text-ink group-hover:text-link">{s.next.title}</span>
            <span className="mt-2 block text-sm leading-relaxed text-ink-secondary">{s.next.description}</span>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-link">Continuar a leitura <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
          </span>
        </Link>
      )}
      {last && (
        <div className="mt-6 rounded-3xl border border-line bg-canvas p-5">
          <p className="font-display text-xl font-semibold">Você chegou ao fim da série.</p>
          <p className="mt-1 text-sm text-ink-secondary">Quer continuar? As leituras abaixo ampliam o raciocínio por outros caminhos.</p>
          <p className="mt-1 text-sm text-ink-secondary">{s.series.intro}</p>
        </div>
      )}
      {s.prev && (
        <Link href={`/blog/${s.prev.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink-secondary hover:text-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Anterior: {s.prev.title}
        </Link>
      )}
    </section>
  );
}

/* "Para ampliar o raciocínio": artigos de outras séries, cada um com o motivo da ligação. */
export function Widen({ slug }: { slug: string }) {
  const items = widen(slug);
  if (!items.length) return null;
  return (
    <section aria-label="Para ampliar o raciocínio" className="mt-14">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/60">Para ampliar o raciocínio</p>
      <ul className="mt-3 grid gap-3 md:grid-cols-3">
        {items.map(({ post: p, reason }) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col gap-3 rounded-2xl border border-line bg-canvas p-3 transition hover:border-link/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus">
              <Thumb p={p} />
              <span className="px-1 text-[13px] leading-snug text-ink-secondary">{reason}</span>
              <span className="mt-auto px-1 pb-1 font-display text-[16px] font-semibold leading-snug text-ink group-hover:text-link">{p.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
