import type { Locale } from "@/lib/i18n/types";
import { home, type HomeDictionary } from "./home";
import { acquire, type AcquireDictionary } from "./acquire";
import { intelligence, type IntelligenceDictionary } from "./intelligence";
import { scale, type ScaleDictionary } from "./scale";
import { whatsappNext, type WhatsappNextDictionary } from "./whatsapp-next";
import { servientrega, type ServientregaDictionary } from "./servientrega";
import { sharedCase, type SharedCaseDictionary } from "./shared-case";

export type Dictionary = {
  home: HomeDictionary;
  acquire: AcquireDictionary;
  intelligence: IntelligenceDictionary;
  scale: ScaleDictionary;
  whatsappNext: WhatsappNextDictionary;
  servientrega: ServientregaDictionary;
  sharedCase: SharedCaseDictionary;
};

export const dictionaries: Record<Locale, Dictionary> = {
  pt: { home: home.pt, acquire: acquire.pt, intelligence: intelligence.pt, scale: scale.pt, whatsappNext: whatsappNext.pt, servientrega: servientrega.pt, sharedCase: sharedCase.pt },
  en: { home: home.en, acquire: acquire.en, intelligence: intelligence.en, scale: scale.en, whatsappNext: whatsappNext.en, servientrega: servientrega.en, sharedCase: sharedCase.en },
  es: { home: home.es, acquire: acquire.es, intelligence: intelligence.es, scale: scale.es, whatsappNext: whatsappNext.es, servientrega: servientrega.es, sharedCase: sharedCase.es },
};
