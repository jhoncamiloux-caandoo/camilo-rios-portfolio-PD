"use client";

import { SceneDecisionSequence, ScenePossibilitySpace, SceneProcessMorph, SceneSizeVsPrecision, SceneSpecExpand, KineticQuote } from "./scenes-1-2";
import { SceneCodeLine, SceneCompile, SceneFillClose, SceneJourneyTrack, SceneQuestionFlip, SceneTechGlossary, SceneTwoVoices, SceneVersus } from "./scenes-5-6";
import { SceneContactSheet, SceneCritique, SceneDataDeluge, SceneDropCauses, SceneInsightFocus, SceneLooksRight, SceneMarkedQuestion, SceneTeleprompter } from "./scenes-7-8";
import { SceneAgentFeed, SceneAgentPanel, SceneCaseFile, SceneCircleQuestions, SceneEquation, SceneEvidenceBoard, SceneGraphMorph, SceneOrbit, ScenePresence, SceneRecoveryBar, SceneRespondVsAct, SceneSynthetic } from "./scenes-9-12";
import { SceneA11ySimulator, SceneA11yStats, SceneAnnotatedLine, SceneFunnelMath, SceneHourglass, SceneLens, ScenePageFlip, SceneRings, SceneSpeedBrake, SceneStamps, SceneStoryboard } from "./scenes-13-16";
import { SceneAdaptiveRows, SceneFlipCases, SceneGears, SceneKpiDials, SceneLiveFix, SceneMenuSimplify, ScenePortalToSearch, SceneProactiveHelp, SceneThinkAloud, SceneThinkMeter, SceneTimerTips, SceneWhiteboard } from "./scenes-17-20";
import { SceneBigStat, SceneBlinkTest, SceneCareerElevator, SceneDsToggle, SceneExploded, SceneGovernance, SceneMicroPlayground, SceneOrderFromChaos, SceneSharedTransition, SceneStateMachine, SceneTrajectories } from "./scenes-21-24";
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
  "presence": ScenePresence,
  "synthetic": SceneSynthetic,
  "circle-questions": SceneCircleQuestions,
  "orbit": SceneOrbit,
  "graph-morph": SceneGraphMorph,
  "agent-panel": SceneAgentPanel,
  "respond-vs-act": SceneRespondVsAct,
  "agent-feed": SceneAgentFeed,
  "recovery-bar": SceneRecoveryBar,
  "evidence-board": SceneEvidenceBoard,
  "case-file": SceneCaseFile,
  "equation": SceneEquation,
  "speed-brake": SceneSpeedBrake,
  "funnel-math": SceneFunnelMath,
  "hourglass": SceneHourglass,
  "lens": SceneLens,
  "stamps": SceneStamps,
  "rings": SceneRings,
  "storyboard": SceneStoryboard,
  "page-flip": ScenePageFlip,
  "annotated-line": SceneAnnotatedLine,
  "a11y-stats": SceneA11yStats,
  "a11y-simulator": SceneA11ySimulator,
  "whiteboard": SceneWhiteboard,
  "timer-tips": SceneTimerTips,
  "think-aloud": SceneThinkAloud,
  "gears": SceneGears,
  "flip-cases": SceneFlipCases,
  "kpi-dials": SceneKpiDials,
  "adaptive-rows": SceneAdaptiveRows,
  "live-fix": SceneLiveFix,
  "proactive-help": SceneProactiveHelp,
  "think-meter": SceneThinkMeter,
  "menu-simplify": SceneMenuSimplify,
  "portal-search": ScenePortalToSearch,
  "ds-toggle": SceneDsToggle,
  "exploded": SceneExploded,
  "governance": SceneGovernance,
  "micro-playground": SceneMicroPlayground,
  "shared-transition": SceneSharedTransition,
  "state-machine": SceneStateMachine,
  "career-elevator": SceneCareerElevator,
  "trajectories": SceneTrajectories,
  "big-stat": SceneBigStat,
  "blink-test": SceneBlinkTest,
  "order-chaos": SceneOrderFromChaos,
};

export function BlogScene({ id, data }: { id: string; data: Record<string, unknown> }) {
  const S = SCENES[id];
  return S ? <S {...data} /> : null;
}
