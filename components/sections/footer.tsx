"use client";

import { useLocale } from "@/lib/i18n/locale-context";
import { SocialLinks } from "@/components/social-links";

export function Footer() {
  const { t } = useLocale();

  return (
    <footer data-nav-theme="dark" className="border-t border-white/10 bg-[#0A0A0A] pb-36 pt-10 md:pb-10">
      <div className="container flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:pr-44 md:text-left">
        <p className="max-w-md font-sans text-sm text-white/60">
          {t.home.footer.tagline}
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
