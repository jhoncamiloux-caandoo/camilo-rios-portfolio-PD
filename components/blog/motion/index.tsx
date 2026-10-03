"use client";

import { SceneDecisionSequence, ScenePossibilitySpace, SceneProcessMorph, SceneSizeVsPrecision, SceneSpecExpand, KineticQuote } from "./scenes-1-2";
import { SceneCriteriaMorph, SceneFiveInterfaces, SceneGapFiller, SceneIntentMorph, SceneOrdersStory, SceneTwoRoutes } from "./scenes-3-4";

/* Registro das cenas de motion: o artigo aponta um id e passa o texto como dados. */
const SCENES: Record<string, React.FC<any>> = {
  "spec-expand": SceneSpecExpand,
  "size-vs-precision": SceneSizeVsPrecision,
  "process-morph": SceneProcessMorph,
  "possibility-space": ScenePossibilitySpace,
  "decision-sequence": SceneDecisionSequence,
  "kinetic-quote": KineticQuote,
  "gap-filler": SceneGapFiller,
  "orders-story": SceneOrdersStory,
  "two-routes": SceneTwoRoutes,
  "five-interfaces": SceneFiveInterfaces,
  "criteria-morph": SceneCriteriaMorph,
  "intent-morph": SceneIntentMorph,
};

export function BlogScene({ id, data }: { id: string; data: Record<string, unknown> }) {
  const S = SCENES[id];
  return S ? <S {...data} /> : null;
}
