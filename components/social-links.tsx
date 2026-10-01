"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { BEHANCE_URL, LINKEDIN_URL, MEDIUM_URL } from "@/lib/links";

export function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function BehanceGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M0 7.2h6.55c1.63 0 2.87.36 3.71 1.08.84.72 1.26 1.68 1.26 2.9 0 .84-.2 1.55-.6 2.13-.29.42-.71.76-1.26 1.03.71.24 1.28.63 1.71 1.19.51.66.76 1.5.76 2.53 0 .76-.15 1.44-.44 2.03a3.8 3.8 0 0 1-1.24 1.44c-.47.33-1.03.57-1.68.72-.65.15-1.42.22-2.31.22H0V7.2zm3.53 5.34h2.55c.72 0 1.28-.16 1.68-.47.4-.31.6-.77.6-1.38 0-.68-.2-1.16-.6-1.44-.4-.28-.98-.42-1.74-.42H3.53v3.71zm0 6.05h2.9c.83 0 1.46-.17 1.88-.52.42-.35.63-.87.63-1.56 0-.68-.21-1.19-.63-1.53-.42-.34-1.05-.51-1.88-.51H3.53v4.12zM24 15.66c0 .16-.01.36-.03.6H15.6c.03 1 .34 1.76.93 2.28.59.51 1.28.77 2.07.77.63 0 1.18-.15 1.65-.46.47-.31.79-.71.96-1.19h3.03c-.34 1.15-1 2.08-1.98 2.79-.97.71-2.19 1.06-3.66 1.06-1 0-1.9-.19-2.72-.58a5.94 5.94 0 0 1-2.06-1.62 6.06 6.06 0 0 1-1.05-2.29 8.4 8.4 0 0 1-.28-2.19c0-.85.13-1.65.4-2.4.27-.75.65-1.4 1.15-1.95.5-.55 1.11-.98 1.83-1.3.72-.32 1.53-.48 2.44-.48 1.02 0 1.92.2 2.7.6a5.24 5.24 0 0 1 1.88 1.64c.48.68.81 1.44 1 2.29.13.57.19 1.24.19 2.03zm-3.16-1.55c-.06-.86-.32-1.53-.78-2.02-.46-.49-1.08-.73-1.86-.73-.79 0-1.42.25-1.9.75-.48.5-.77 1.16-.87 2h5.41zm-5.51-8.35h6.19v1.44h-6.19V5.76z" />
    </svg>
  );
}

export function MediumGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

/* Redes sociais com rótulo visível: usadas no rodapé da home, dos cases e do blog. */
export function SocialLinks({ dark = true }: { dark?: boolean }) {
  const { t } = useLocale();
  const f = t.home.footer;
  const items = [
    { href: LINKEDIN_URL, label: "LinkedIn", aria: f.linkedinAria, Icon: LinkedInGlyph },
    { href: MEDIUM_URL, label: "Medium", aria: f.mediumAria, Icon: MediumGlyph },
    { href: BEHANCE_URL, label: "Behance", aria: f.behanceAria, Icon: BehanceGlyph },
  ];
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2">
      {items.map(({ href, label, aria, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={aria}
            className={`inline-flex h-10 items-center gap-2 rounded-full border px-4 font-sans text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              dark ? "border-white/10 text-white/70 hover:border-primary/50 hover:text-white" : "border-black/10 text-[#0A0A0A]/70 hover:border-primary/50 hover:text-primary"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
}
