import type { Locale } from "@/lib/i18n/types";
import { home, type HomeDictionary } from "./home";
import { acquire, type AcquireDictionary } from "./acquire";
import { intelligence, type IntelligenceDictionary } from "./intelligence";
import { scale, type ScaleDictionary } from "./scale";
import { sharedCase, type SharedCaseDictionary } from "./shared-case";

export type Dictionary = {
  home: HomeDictionary;
  acquire: AcquireDictionary;
  intelligence: IntelligenceDictionary;
  scale: ScaleDictionary;
  sharedCase: SharedCaseDictionary;
};

export const dictionaries: Record<Locale, Dictionary> = {
  pt: { home: home.pt, acquire: acquire.pt, intelligence: intelligence.pt, scale: scale.pt, sharedCase: sharedCase.pt },
  en: { home: home.en, acquire: acquire.en, intelligence: intelligence.en, scale: scale.en, sharedCase: sharedCase.en },
  es: { home: home.es, acquire: acquire.es, intelligence: intelligence.es, scale: scale.es, sharedCase: sharedCase.es },
};
