"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Copy, Loader2, Plus, Sparkles, X, Bot, AlertCircle, CalendarDays, FileText } from "lucide-react";
import { Eyebrow, BlurTitle, Reveal } from "@/components/case-lp/case-primitives";
import { useLocale } from "@/lib/i18n/locale-context";
import { CALENDAR_URL, RESUME_URL } from "@/lib/links";
import type { ScaleDictionary } from "@/lib/i18n/dictionaries/scale";

type PG = ScaleDictionary["playground"];
type State = keyof PG["states"];
type Size = "sm" | "md" | "lg";

type Spec = {
  id: string;
  name: string;
  states: State[];
  variants: string[];
  sizes?: Size[];
  tokens: string[];
  code: (o: { variant: string; state: State; size: Size }) => string;
};

const SPECS: Spec[] = [
  {
    id: "button",
    name: "Button",
    states: ["default", "hover", "focus", "disabled", "loading"],
    variants: ["primary", "secondary", "ghost", "danger"],
    sizes: ["sm", "md", "lg"],
    tokens: ["button.primary.bg", "button.primary.fg", "radius.full", "space.4", "focus.ring"],
    code: ({ variant, state, size }) =>
      `<Button\n  variant="${variant}"\n  size="${size}"${state === "disabled" ? "\n  disabled" : ""}${state === "loading" ? "\n  loading" : ""}\n  leftIcon={<Plus />}\n>\n  Criar agente\n</Button>`,
  },
  {
    id: "input",
    name: "Input",
    states: ["default", "focus", "disabled", "error"],
    variants: ["outline", "filled"],
    sizes: ["sm", "md", "lg"],
    tokens: ["input.bg", "input.border", "border.focus", "fg.danger", "radius.md"],
    code: ({ variant, state, size }) =>
      `<Field label="E-mail de trabalho"${state === "error" ? ' error="Informe um e-mail válido."' : ' help="Usado para enviar o convite."'}>\n  <Input variant="${variant}" size="${size}"${state === "disabled" ? " disabled" : ""} />\n</Field>`,
  },
  {
    id: "select",
    name: "Select",
    states: ["default", "focus", "disabled"],
    variants: ["outline", "filled"],
    tokens: ["input.bg", "input.border", "shadow.popover", "radius.md"],
    code: ({ variant, state }) => `<Select variant="${variant}"${state === "disabled" ? " disabled" : ""} options={stages} />`,
  },
  {
    id: "controls",
    name: "Switch & Checkbox",
    states: ["default", "focus", "disabled"],
    variants: ["on", "off"],
    tokens: ["accent.solid", "bg.subtle", "focus.ring", "motion.fast"],
    code: ({ variant, state }) =>
      `<Switch checked={${variant === "on"}}${state === "disabled" ? " disabled" : ""} />\n<Checkbox checked={${variant === "on"}}${state === "disabled" ? " disabled" : ""} />`,
  },
  {
    id: "badge",
    name: "Badge",
    states: ["default"],
    variants: ["subtle", "solid", "outline"],
    tokens: ["status.success", "status.warning", "status.danger", "radius.full"],
    code: ({ variant }) => `<Badge variant="${variant}" status="success">Ativo</Badge>`,
  },
  {
    id: "toast",
    name: "Toast",
    states: ["default"],
    variants: ["success", "ai", "error"],
    tokens: ["bg.elevated", "shadow.lg", "status.*", "motion.spring"],
    code: ({ variant }) => `toast({\n  status: "${variant}",\n  title: "Agente publicado",\n})`,
  },
  {
    id: "tabs",
    name: "Tabs",
    states: ["default", "focus"],
    variants: ["line", "pill"],
    tokens: ["accent.text", "border.subtle", "radius.full"],
    code: ({ variant }) => `<Tabs variant="${variant}" items={["Resumo", "Configurar", "Testar"]} />`,
  },
  {
    id: "overlay",
    name: "Tooltip & Modal",
    states: ["default"],
    variants: ["tooltip", "modal"],
    tokens: ["bg.overlay", "shadow.xl", "radius.xl", "z.modal"],
    code: ({ variant }) =>
      variant === "tooltip"
        ? `<Tooltip label="Duplicar agente">\n  <IconButton icon={<Copy />} />\n</Tooltip>`
        : `<Dialog open onConfirm={pause}>\n  <Dialog.Title>Pausar automação?</Dialog.Title>\n</Dialog>`,
  },
  {
    id: "feedback",
    name: "Empty & Skeleton",
    states: ["default", "loading"],
    variants: ["empty"],
    tokens: ["bg.subtle", "fg.muted", "motion.pulse"],
    code: ({ state }) => (state === "loading" ? `<Skeleton lines={3} />` : `<EmptyState icon={<Bot />} action={<Button>Criar agente</Button>} />`),
  },
];

const BTN_SIZE: Record<Size, string> = { sm: "h-8 px-3 text-xs gap-1.5", md: "h-10 px-4 text-sm gap-2", lg: "h-12 px-6 text-base gap-2" };
const INPUT_SIZE: Record<Size, string> = { sm: "h-8 text-xs", md: "h-10 text-sm", lg: "h-12 text-base" };

function Anatomy({ on, label, children }: { on: boolean; label?: string; children: React.ReactNode }) {
  return (
    <span className={`relative inline-flex ${on ? "outline outline-1 outline-dashed outline-offset-4 outline-fuchsia-400/80" : ""}`}>
      {children}
      {on && label && (
        <span className="pointer-events-none absolute -top-6 left-0 whitespace-nowrap rounded bg-fuchsia-500 px-1.5 py-0.5 font-mono text-[10px] text-white">
          {label}
        </span>
      )}
    </span>
  );
}

function Preview({ spec, variant, state, size, anatomy, d }: { spec: Spec; variant: string; state: State; size: Size; anatomy: boolean; d: PG["demo"] }) {
  const ring = state === "focus" ? "ring-2 ring-primary-light ring-offset-2 ring-offset-[#111]" : "";
  const disabled = state === "disabled";

  switch (spec.id) {
    case "button": {
      const base = {
        primary: state === "hover" ? "bg-[#7447FF] text-white" : "bg-primary text-white",
        secondary: state === "hover" ? "bg-white/15 text-white" : "bg-white/10 text-white",
        ghost: state === "hover" ? "bg-white/[0.06] text-white" : "text-white",
        danger: state === "hover" ? "bg-rose-500 text-white" : "bg-rose-600 text-white",
      }[variant];
      return (
        <Anatomy on={anatomy} label={`h ${size === "sm" ? 32 : size === "md" ? 40 : 48} · px ${size === "sm" ? 12 : size === "md" ? 16 : 24}`}>
          <button
            type="button"
            disabled={disabled || state === "loading"}
            className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors ${BTN_SIZE[size]} ${base} ${ring} ${
              disabled ? "cursor-not-allowed opacity-40" : ""
            }`}
          >
            {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
            <Anatomy on={anatomy} label="label">
              <span>{d.button}</span>
            </Anatomy>
          </button>
        </Anatomy>
      );
    }
    case "input": {
      const err = state === "error";
      return (
        <div className={`flex w-full max-w-sm flex-col ${anatomy ? "gap-8 pt-4" : "gap-1.5"}`}>
          <Anatomy on={anatomy} label="label">
            <label className="text-xs font-medium text-white/80">{d.inputLabel}</label>
          </Anatomy>
          <Anatomy on={anatomy} label="control">
            <input
              readOnly
              disabled={disabled}
              placeholder={d.inputPlaceholder}
              defaultValue={err ? "camilo@" : ""}
              className={`w-80 max-w-full rounded-lg border px-3 text-white placeholder:text-white/60 outline-none ${INPUT_SIZE[size]} ${
                variant === "filled" ? "bg-white/[0.08]" : "bg-transparent"
              } ${err ? "border-rose-400" : state === "focus" ? "border-primary-light ring-4 ring-primary/25" : "border-white/15"} ${disabled ? "cursor-not-allowed opacity-40" : ""}`}
            />
          </Anatomy>
          <Anatomy on={anatomy} label="helper">
            <span className={`inline-flex items-center gap-1 text-xs ${err ? "text-rose-300" : "text-white/60"}`}>
              {err && <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />}
              {err ? d.inputError : d.inputHelp}
            </span>
          </Anatomy>
        </div>
      );
    }
    case "select":
      return (
        <div className="flex w-full max-w-xs flex-col gap-1.5">
          <label className="text-xs font-medium text-white/80">{d.selectLabel}</label>
          <div className={`relative ${disabled ? "opacity-40" : ""}`}>
            <Anatomy on={anatomy} label="trigger">
              <span
                className={`flex h-10 w-72 max-w-full items-center justify-between rounded-lg border px-3 text-sm text-white ${
                  variant === "filled" ? "bg-white/[0.08]" : ""
                } ${state === "focus" ? "border-primary-light ring-4 ring-primary/25" : "border-white/15"}`}
              >
                {d.selectOptions[1]}
                <ChevronDown className="h-4 w-4 text-white/60" aria-hidden="true" />
              </span>
            </Anatomy>
            {state === "focus" && (
              <Anatomy on={anatomy} label="listbox">
                <ul className="absolute left-0 top-12 z-10 w-72 rounded-lg border border-white/10 bg-[#1a1a1a] p-1 shadow-2xl">
                  {d.selectOptions.map((o, i) => (
                    <li key={o} className={`flex items-center justify-between rounded-md px-3 py-2 text-sm ${i === 1 ? "bg-primary/15 text-white" : "text-white/80"}`}>
                      {o}
                      {i === 1 && <Check className="h-4 w-4 text-primary-light" aria-hidden="true" />}
                    </li>
                  ))}
                </ul>
              </Anatomy>
            )}
          </div>
        </div>
      );
    case "controls": {
      const on = variant === "on";
      return (
        <div className={`flex flex-col gap-4 ${disabled ? "opacity-40" : ""}`}>
          <label className="flex items-center gap-3 text-sm text-white">
            <Anatomy on={anatomy} label="track">
              <span className={`relative inline-flex h-6 w-11 rounded-full transition-colors ${on ? "bg-primary" : "bg-white/15"} ${ring}`}>
                <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all ${on ? "left-[22px]" : "left-0.5"}`} />
              </span>
            </Anatomy>
            {d.switchLabel}
          </label>
          <label className="flex items-center gap-3 text-sm text-white">
            <span className={`flex h-5 w-5 items-center justify-center rounded-md border ${on ? "border-primary bg-primary" : "border-white/30"} ${ring}`}>
              {on && <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden="true" />}
            </span>
            {d.checkboxLabel}
          </label>
        </div>
      );
    }
    case "badge": {
      const tones = [
        ["bg-emerald-400/15 text-emerald-300", "bg-emerald-500 text-[#04210f]", "border-emerald-400/60 text-emerald-300"],
        ["bg-white/10 text-white/80", "bg-white text-[#0A0A0A]", "border-white/30 text-white/80"],
        ["bg-amber-400/15 text-amber-300", "bg-amber-400 text-[#2a1a00]", "border-amber-400/60 text-amber-300"],
        ["bg-rose-400/15 text-rose-300", "bg-rose-500 text-white", "border-rose-400/60 text-rose-300"],
      ];
      const vi = ["subtle", "solid", "outline"].indexOf(variant);
      return (
        <div className="flex flex-wrap gap-2">
          {d.badges.map((b, i) => (
            <Anatomy key={b} on={anatomy && i === 0} label="px 10 · h 24">
              <span className={`inline-flex h-6 items-center gap-1.5 rounded-full px-2.5 text-xs font-semibold ${vi === 2 ? "border" : ""} ${tones[i][vi]}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                {b}
              </span>
            </Anatomy>
          ))}
        </div>
      );
    }
    case "toast": {
      const icon = { success: <Check className="h-4 w-4" />, ai: <Sparkles className="h-4 w-4" />, error: <AlertCircle className="h-4 w-4" /> }[variant];
      const tone = { success: "bg-emerald-400/15 text-emerald-300", ai: "bg-primary/20 text-primary-light", error: "bg-rose-400/15 text-rose-300" }[variant];
      return (
        <AnimatePresence mode="wait">
          <motion.div
            key={variant}
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            <Anatomy on={anatomy} label="icon · content · dismiss">
              <div className="flex w-80 max-w-full items-start gap-3 rounded-xl border border-white/10 bg-[#1a1a1a] p-4 shadow-2xl">
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${tone}`}>{icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{d.toastTitle}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-white/60">{d.toastBody}</p>
                </div>
                <X className="h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
              </div>
            </Anatomy>
          </motion.div>
        </AnimatePresence>
      );
    }
    case "tabs":
      return <TabsDemo pill={variant === "pill"} focus={state === "focus"} tabs={d.tabs} anatomy={anatomy} />;
    case "overlay":
      return variant === "tooltip" ? (
        <div className="flex flex-col items-center gap-2 pt-8">
          <Anatomy on={anatomy} label="content · arrow">
            <span className="relative rounded-md bg-white px-2.5 py-1.5 text-xs font-medium text-[#0A0A0A] shadow-lg">
              {d.tooltip}
              <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-white" />
            </span>
          </Anatomy>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white">
            <Copy className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      ) : (
        <div className="relative flex w-full items-center justify-center rounded-xl bg-black/60 p-6">
          <Anatomy on={anatomy} label="header · body · footer">
            <div className="w-80 max-w-full rounded-2xl border border-white/10 bg-[#1a1a1a] p-5 shadow-2xl">
              <p className="font-display text-lg font-semibold text-white">{d.modalTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{d.modalBody}</p>
              <div className="mt-5 flex justify-end gap-2">
                <button type="button" className="h-9 rounded-full px-4 text-sm font-semibold text-white hover:bg-white/[0.06]">
                  {d.modalCancel}
                </button>
                <button type="button" className="h-9 rounded-full bg-primary px-4 text-sm font-semibold text-white">
                  {d.modalConfirm}
                </button>
              </div>
            </div>
          </Anatomy>
        </div>
      );
    case "feedback":
      return state === "loading" ? (
        <div className="flex w-80 max-w-full flex-col gap-3" aria-hidden="true">
          <div className="flex items-center gap-3">
            <span className="h-10 w-10 animate-pulse rounded-full bg-white/10" />
            <span className="h-3 w-32 animate-pulse rounded bg-white/10" />
          </div>
          <span className="h-3 w-full animate-pulse rounded bg-white/10" />
          <span className="h-3 w-4/5 animate-pulse rounded bg-white/10" />
        </div>
      ) : (
        <Anatomy on={anatomy} label="icon · title · body · action">
          <div className="flex w-80 max-w-full flex-col items-center gap-3 rounded-2xl border border-dashed border-white/15 p-6 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary-light">
              <Bot className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="font-display text-base font-semibold text-white">{d.emptyTitle}</p>
            <p className="text-xs leading-relaxed text-white/60">{d.emptyBody}</p>
            <span className="mt-1 inline-flex h-8 items-center gap-1.5 rounded-full bg-primary px-3 text-xs font-semibold text-white">
              <Plus className="h-3.5 w-3.5" aria-hidden="true" />
              {d.button}
            </span>
          </div>
        </Anatomy>
      );
  }
  return null;
}

function TabsDemo({ pill, focus, tabs, anatomy }: { pill: boolean; focus: boolean; tabs: string[]; anatomy: boolean }) {
  const [sel, setSel] = useState(0);
  return (
    <Anatomy on={anatomy} label="tablist">
      <div role="tablist" className={`flex gap-1 ${pill ? "rounded-full bg-white/[0.06] p-1" : "border-b border-white/10"}`}>
        {tabs.map((tab, i) => (
          <button
            key={tab}
            role="tab"
            type="button"
            aria-selected={sel === i}
            onClick={() => setSel(i)}
            className={`relative px-4 text-sm font-medium transition-colors ${pill ? "h-8 rounded-full" : "h-10"} ${
              sel === i ? (pill ? "bg-white text-[#0A0A0A]" : "text-white") : "text-white/60 hover:text-white"
            } ${focus && i === 1 ? "ring-2 ring-primary-light ring-offset-2 ring-offset-[#111]" : ""}`}
          >
            {tab}
            {!pill && sel === i && <motion.span layoutId="tab-line" className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary-light" />}
          </button>
        ))}
      </div>
    </Anatomy>
  );
}

function Segmented<T extends string>({ label, options, value, onChange, format }: { label: string; options: T[]; value: T; onChange: (v: T) => void; format?: (v: T) => string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">{label}</span>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            className={`h-8 rounded-full px-3 font-sans text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light ${
              value === o ? "bg-white text-[#0A0A0A]" : "bg-white/[0.06] text-white/80 hover:bg-white/10"
            }`}
          >
            {format ? format(o) : o}
          </button>
        ))}
      </div>
    </div>
  );
}

/* Explorador de componentes: usado no Playground antigo e no System Lab. */
export function ComponentExplorer({ categories }: { categories?: { label: string; ids: string[] }[] }) {
  const { t } = useLocale();
  const c = t.scale.playground;
  const [cat, setCat] = useState(0);
  const visible = categories ? SPECS.filter((s) => categories[cat].ids.includes(s.id)) : SPECS;
  const [specId, setSpecId] = useState(visible[0].id);
  const spec = SPECS.find((s) => s.id === specId)!;
  const [variant, setVariant] = useState(spec.variants[0]);
  const [state, setState] = useState<State>("default");
  const [size, setSize] = useState<Size>("md");
  const [anatomy, setAnatomy] = useState(false);
  const [copied, setCopied] = useState(false);

  const pick = (id: string) => {
    const next = SPECS.find((s) => s.id === id)!;
    setSpecId(id);
    setVariant(next.variants[0]);
    setState("default");
  };
  const pickCat = (i: number) => {
    setCat(i);
    pick(SPECS.find((s) => categories![i].ids.includes(s.id))!.id);
  };
  const code = spec.code({ variant, state, size });

  return (
    <>
      {categories && (
        <div role="group" aria-label={c.componentsLabel} className="mb-4 flex flex-wrap gap-2">
          {categories.map((k, i) => (
            <button
              key={k.label}
              type="button"
              aria-pressed={cat === i}
              onClick={() => pickCat(i)}
              className={`rounded-full px-4 py-2 font-sans text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A48BFF] ${cat === i ? "bg-white text-[#0A0A0A]" : "border border-white/15 text-white/75 hover:text-white"}`}
            >
              {k.label}
            </button>
          ))}
        </div>
      )}
          <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111] lg:grid-cols-[220px_1fr]">
            {/* Lista de componentes */}
            <nav aria-label={c.componentsLabel} className="border-b border-white/[0.08] p-3 lg:border-b-0 lg:border-r">
              <p className="px-3 pb-2 pt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">{c.componentsLabel}</p>
              <ul className="flex gap-1 overflow-x-auto lg:flex-col">
                {visible.map((s) => (
                  <li key={s.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => pick(s.id)}
                      aria-current={s.id === specId || undefined}
                      className={`w-full whitespace-nowrap rounded-lg px-3 py-2 text-left font-sans text-sm transition-colors ${
                        s.id === specId ? "bg-primary/15 text-white" : "text-white/60 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {s.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex min-w-0 flex-col">
              {/* Controles */}
              <div className="flex flex-wrap items-end gap-6 border-b border-white/[0.08] p-5">
                {spec.states.length > 1 && (
                  <Segmented label={c.stateLabel} options={spec.states} value={state} onChange={setState} format={(s) => c.states[s]} />
                )}
                {spec.variants.length > 1 && <Segmented label={c.variantLabel} options={spec.variants} value={variant} onChange={setVariant} />}
                {spec.sizes && <Segmented label={c.sizeLabel} options={spec.sizes} value={size} onChange={setSize} />}
                <label className="ml-auto flex cursor-pointer items-center gap-2 font-sans text-xs text-white/80">
                  <input type="checkbox" checked={anatomy} onChange={(e) => setAnatomy(e.target.checked)} className="h-4 w-4 accent-[#A48BFF]" />
                  {c.anatomyLabel}
                </label>
              </div>

              {/* Palco */}
              <div
                className="flex min-h-[280px] items-center justify-center p-8 md:p-12"
                style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "16px 16px" }}
              >
                <Preview spec={spec} variant={variant} state={state} size={size} anatomy={anatomy} d={c.demo} />
              </div>

              {/* Código + tokens */}
              <div className="grid grid-cols-1 border-t border-white/[0.08] md:grid-cols-[1fr_240px]">
                <div className="relative min-w-0 p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">{c.codeLabel}</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard?.writeText(code);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 1400);
                      }}
                      aria-label={c.codeLabel}
                      className="inline-flex h-7 items-center gap-1.5 rounded-md px-2 font-sans text-xs text-white/80 hover:bg-white/[0.06]"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-emerald-300" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                    </button>
                  </div>
                  <pre className="overflow-x-auto rounded-lg bg-black/40 p-4 font-mono text-xs leading-relaxed text-[#d7ccff]">
                    <code>{code}</code>
                  </pre>
                </div>
                <div className="border-t border-white/[0.08] p-5 md:border-l md:border-t-0">
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">{c.tokensLabel}</span>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {spec.tokens.map((tok) => (
                      <li key={tok} className="rounded-md border border-white/10 px-2 py-1 font-mono text-[11px] text-primary-light">
                        {tok}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export function Ch05bPlayground() {
  const { t } = useLocale();
  const c = t.scale.playground;

  return (
    <section className="bg-[#0A0A0A] py-28 md:py-40" aria-label={c.ariaLabel}>
      <div className="container">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow light>{c.eyebrow}</Eyebrow>
          <BlurTitle
            text={c.title}
            className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-white md:text-5xl"
          />
          <p className="max-w-xl font-sans text-base leading-relaxed text-white/60">{c.description}</p>
        </div>

        <Reveal className="mx-auto mt-16 max-w-6xl">
          <ComponentExplorer />
        </Reveal>

        {/* CTA */}
        <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-white/[0.08] bg-[radial-gradient(60%_80%_at_50%_0%,rgba(98,47,253,0.18),transparent_70%)] p-8 text-center md:p-12">
            <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{c.ctaTitle}</h3>
            <p className="max-w-lg font-sans text-sm leading-relaxed text-white/60 md:text-base">{c.ctaDescription}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={CALENDAR_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#7447FF]">
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                {c.ctaPrimary}
              </a>
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 px-6 font-sans text-sm font-semibold text-white transition-colors hover:border-primary-light hover:text-primary-light">
                <FileText className="h-4 w-4" aria-hidden="true" />
                {c.ctaSecondary}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
