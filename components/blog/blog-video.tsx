"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export type VideoItem = { src: string; poster: string; label?: string; sound?: boolean };

/* Vídeo leve do blog: nada baixa antes de chegar perto da tela (preload none + poster),
   toca mudo em loop só enquanto visível e respeita "reduzir movimento" (fica no poster com controles). */
function LazyVideo({ item }: { item: VideoItem }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduce(r);
    if (r) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { rootMargin: "200px 0px", threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <figure className="m-0">
      <div className="relative overflow-hidden rounded-2xl border border-line bg-[#07060c]">
        <video
          ref={ref}
          src={item.src}
          poster={item.poster}
          preload="none"
          muted={muted}
          loop
          playsInline
          controls={reduce}
          width={720}
          height={900}
          className="block aspect-[4/5] h-auto w-full"
          aria-label={item.label}
        />
        {item.sound && !reduce && (
          <button
            type="button"
            onClick={() => {
              const v = ref.current;
              if (!v) return;
              v.muted = !muted;
              setMuted(!muted);
              if (muted) v.play().catch(() => {});
            }}
            aria-pressed={!muted}
            aria-label={muted ? "Ligar som" : "Desligar som"}
            className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur"
          >
            {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
          </button>
        )}
      </div>
      {item.label && <figcaption className="mt-2 text-sm text-ink-secondary">{item.label}</figcaption>}
    </figure>
  );
}

export function BlogVideo({ items, caption }: { items: VideoItem[]; caption?: string }) {
  const cols = items.length >= 3 ? "grid-cols-2 md:grid-cols-3" : items.length === 2 ? "grid-cols-2" : "grid-cols-1 max-w-md mx-auto";
  return (
    <div className="my-10">
      <div className={`grid gap-4 ${cols}`}>
        {items.map((it) => (
          <LazyVideo key={it.src} item={it} />
        ))}
      </div>
      {caption && <p className="mt-4 text-sm leading-relaxed text-ink-secondary">{caption}</p>}
    </div>
  );
}
