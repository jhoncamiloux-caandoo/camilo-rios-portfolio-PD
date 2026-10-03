"use client";

import { SceneDecisionSequence, ScenePossibilitySpace, SceneProcessMorph, SceneSizeVsPrecision, SceneSpecExpand, KineticQuote } from "./scenes-1-2";
import { SceneCodeLine, SceneCompile, SceneFillClose, SceneJourneyTrack, SceneQuestionFlip, SceneTechGlossary, SceneTwoVoices, SceneVersus } from "./scenes-5-6";
import { SceneContactSheet, SceneCritique, SceneDataDeluge, SceneDropCauses, SceneInsightFocus, SceneLooksRight, SceneMarkedQuestion, SceneTeleprompter } from "./scenes-7-8";
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
  "two-voices": SceneTwoVoices,
  "journey-track": SceneJourneyTrack,
  "question-flip": SceneQuestionFlip,
  "fill-close": SceneFillClose,
  "code-line": SceneCodeLine,
  "tech-glossary": SceneTechGlossary,
  "versus": SceneVersus,
  "compile": SceneCompile,
  "data-deluge": SceneDataDeluge,
  "drop-causes": SceneDropCauses,
  "teleprompter": SceneTeleprompter,
  "insight-focus": SceneInsightFocus,
  "marked-question": SceneMarkedQuestion,
  "looks-right": SceneLooksRight,
  "critique": SceneCritique,
  "contact-sheet": SceneContactSheet,
};

export function BlogScene({ id, data }: { id: string; data: Record<string, unknown> }) {
  const S = SCENES[id];
  return S ? <S {...data} /> : null;
}
