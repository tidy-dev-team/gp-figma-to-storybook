# kendo-storybook-scaffold

Scaffold a **raw KendoReact primitive** (and its CSF3 story) into this repo's Storybook — the step-1 starting point of the code→Figma→code round-trip.

> See `CONTEXT.md` for canonical terms (raw KendoReact primitive, branding) and
> `docs/adr/0001-code-to-figma-round-trip.md` for why the project works this way.

---

## Purpose

The round-trip begins with components kept **as close to default KendoReact as possible** — no Genpact branding, no bespoke styling. Branding is applied later, globally, by a designer in Figma and synced back via `src/theme/kendo-overrides.css`. This skill generates those raw primitives repeatably so seeding a new component is one command.

---

## Input

```
/kendo-storybook-scaffold <ComponentName> [kendo-package]
```

- `ComponentName` — required. The KendoReact component to scaffold (e.g. `Button`, `Checkbox`, `DropDownList`).
- `kendo-package` — optional. The `@progress/kendo-react-*` package it lives in. If omitted, discover it (see Step 1).

---

## Output (always two files)

```
src/components/<ComponentName>/<ComponentName>.tsx   ← the raw wrapper
src/stories/<ComponentName>.stories.tsx              ← the CSF3 story
```

---

## Rules (the raw-primitive contract)

1. **Thin pass-through only.** The wrapper forwards every prop unchanged to the KendoReact component and adds nothing:
   ```tsx
   import { Button as KendoButton, ButtonProps } from '@progress/kendo-react-buttons';
   export type { ButtonProps };
   export function Button(props: ButtonProps) {
     return <KendoButton {...props} />;
   }
   ```
2. **The props type IS Kendo's own.** Re-export the component's exported props interface (`ButtonProps`, `CheckboxProps`, …). Never hand-author a props type or rename axes.
3. **No branding, no styling.** No `const t` token block, no inline colors, no `import` of theme/token files. The component must contain zero Genpact values — branding lives only in the global override.
4. **No `useState`/`useEffect` sync.** A pass-through re-renders on prop change, so Storybook Controls already work live. (This deliberately departs from the retired per-component-wrapper model.)
5. **No Storybook imports** in the component file.
6. **Story title:** `Raw Kendo/<ComponentName>` — keeps the raw set grouped and separate from any branded/legacy stories.
7. **Surface every *visual* capability, not just the enum axes.** A prop being non-enum (an icon object, a ReactNode, a render-component adornment) is not a reason to omit it — it just can't be a plain control. Icon/adornment slots (`icon`, `svgIcon`, `startIcon`/`endIcon`, `prefix`/`suffix`) are first-class design decisions the designer must see in the Figma mirror, so they MUST appear as controls. Expose them with a `select` + `mapping` (see Step 3). Behavioral-only props (`type`, `tabIndex`, `name`) are optional; a missing *visual* slot is a bug.

---

## Workflow

### Step 1 — Discover the component's package and prop axes

Find which package exports the component and what props it really has — read Kendo's own type definitions, never guess:

```bash
# Which package exports it?
grep -rl "export declare const <ComponentName>" node_modules/@progress/kendo-react-*/index.d.ts

# Its exported props interface + axis enums (size, rounded, fillMode, themeColor, …)
grep -nE "export declare interface <ComponentName>Props|size\?:|rounded\?:|fillMode\?:|themeColor\?:|disabled\?:" \
  node_modules/@progress/<package>/index.d.ts

# Icon / adornment slots — these are visual capabilities the designer must see (rule 7)
grep -nE "icon\?:|svgIcon\?:|startIcon\?:|endIcon\?:|prefix\?:|suffix\?:" \
  node_modules/@progress/<package>/index.d.ts
```

Record the real option lists (e.g. Button `fillMode`: `solid | outline | flat | link | clear`). These become the story's `argTypes` options — they must match Kendo exactly. Note which **icon/adornment slots** the component exposes (`svgIcon`, `startIcon`/`endIcon`, `prefix`/`suffix`) — they're surfaced too (rule 7, Step 3).

### Step 2 — Write the wrapper

`src/components/<ComponentName>/<ComponentName>.tsx`, following the raw-primitive contract above. Re-export the Kendo props type with `export type { ... }`.

### Step 3 — Write the story

`src/stories/<ComponentName>.stories.tsx`:

- CSF3 with `satisfies Meta<typeof X>` and `StoryObj<typeof meta>`.
- Title `Raw Kendo/<ComponentName>`, `parameters: { layout: 'padded' }`.
- An `argTypes` entry for **every meaningful Kendo prop axis**, with `control` + `description`, and `options` taken from Step 1 for enums (`select` for long lists, `radio` for ≤3).
- **Icon / adornment slots (rule 7).** For each icon slot the component exposes, add a `select` control with a `mapping` so the non-primitive value is selectable — and a `WithIcon` (or `WithAdornment`) story so the capability is visible by default:
  ```tsx
  import { plusIcon, searchIcon, xIcon, checkIcon } from '@progress/kendo-svg-icons';
  const ICON_OPTIONS = ['none', 'plus', 'search', 'x', 'check'] as const;
  const ICONS = { none: undefined, plus: plusIcon, search: searchIcon, x: xIcon, check: checkIcon };
  // …in argTypes:
  svgIcon: { control: 'select', options: ICON_OPTIONS, mapping: ICONS, description: 'SVG icon (Kendo svgIcon slot)' },
  ```
  For `SVGIcon` props (`svgIcon`, DropDownList toggle), map option → icon object. For `ReactNode`/render-component slots (`startIcon`/`endIcon`, TextBox `prefix`/`suffix`), map option → a tiny component that renders `<SvgIcon icon={…} />` (from `@progress/kendo-react-common`). Pick 3–4 representative `@progress/kendo-svg-icons` glyphs; `none` ⇒ `undefined`.
- Event props (`onClick`, `onChange`, `onRemove`) get `{ action: '<event>' }` — this also supplies a handler so controlled inputs don't warn.
- For controlled inputs (value/checked), prefer `defaultValue`/`defaultChecked` args so the story stays interactive.
- Variant stories per dominant axis (e.g. `ThemeColors`, `FillModes`, `Sizes`, `Disabled`) plus an `AllVariants` story showing the meaningful states side-by-side. Disable irrelevant controls per grid story with `argTypes: { x: { table: { disable: true } } }`.
- Use realistic args (no `foo`/`bar`).

### Step 4 — Verify (acceptance gate)

```bash
npx tsc --noEmit                 # must be zero errors
npm run build-storybook          # must exit 0
# confirm the story is indexed:
python3 -c "import json;d=json.load(open('storybook-static/index.json'));[print(v['title']) for v in d['entries'].values()]" | grep "Raw Kendo/<ComponentName>"
```

### Step 5 — Report

Output: the two file paths, the prop axes exposed as controls, the story variant names, and a reminder that visual sign-off (controls update live; renders without console errors) happens in the running Storybook (`npm run storybook`).

---

## Key Principles

- **"Raw means raw"** — the wrapper adds nothing Kendo didn't already have.
- **"Kendo's types are the contract"** — re-export them; the story's controls mirror them exactly.
- **"Show the designer every visual capability"** — icon and adornment slots get controls (via `mapping`) and a demo story, so they survive into the Figma mirror. A non-enum prop is surfaced differently, not dropped.
- **"Branding is not this skill's job"** — it arrives later, globally, via the override file.
- **"Two files, always"** — wrapper in `src/components/`, story in `src/stories/`.
