# REQUIREMENTS.md — Genpact Design System Round-Trip

Quality standards for the code→Figma→code round-trip. See `docs/adr/0001-code-to-figma-round-trip.md`
for the architecture and `CONTEXT.md` for canonical terms.

> The previous one-way Figma→Storybook, per-component-wrapper standards are retired
> (recoverable from git history). They conflict with the global-theme model used here.

---

## Scope

- **Project:** Genpact Design System — code⇄Figma round-trip
- **Component library:** KendoReact 9 (`@progress/kendo-react-*`)
- **Stack:** React 18 · Vite · Storybook · TypeScript · `@progress/kendo-theme-default` 9
- **Deliverable:** the repeatable round-trip capability (three skills), proven on ~5 components — not a shipped library.

---

## ❗ The Raw-Primitive Rule — STRICT (step 1 / `/kendo-storybook-scaffold`)

A **raw KendoReact primitive** is as close to default KendoReact as possible.

- ⚙️ The wrapper is a thin pass-through: `function X(props: XProps) { return <KendoX {...props} />; }`. It forwards every prop and adds nothing.
- ⚙️ The props type **is Kendo's own** exported interface (`ButtonProps`, `CheckboxProps`, …), re-exported — never hand-authored or renamed.
- ⚙️ **Zero Genpact values** in the component: no `const t` token block, no inline colors, no import of token/theme files. Branding lives only in the global override.
- ⚙️ No `useState`/`useEffect` prop-sync — a pass-through already re-renders live on Control change.
- ⚙️ No `@storybook/*` imports in the component file.

## 🏗️ File & Export Structure

- ⚙️ Two files per component: `src/components/<Name>/<Name>.tsx` + `src/stories/<Name>.stories.tsx`. No barrel `index.ts`.
- ⚙️ Component file exports the component function and re-exports Kendo's props type.
- ⚙️ Story file exports `default` (meta) + one named export per variant; never defines component logic.

## 🔄 Storybook Stories & Controls

- ⚙️ CSF3 with `satisfies Meta<typeof X>` and `StoryObj<typeof meta>`.
- ⚙️ Story title `Raw Kendo/<Name>`.
- ⚙️ Every meaningful Kendo prop axis has an `argTypes` entry with `control`, `description`, and `options` (for enums) that **match Kendo's real option lists exactly** (verified against `node_modules/@progress/.../index.d.ts`).
- ⚙️ Event props (`onClick`, `onChange`, `onRemove`) use `{ action: '<event>' }` so controlled inputs have a handler.
- ⚙️ Variant stories per dominant axis + an `AllVariants` story.
- 👁️ Changing a Control updates the rendered component live (verify in the running Storybook).

## 🎨 Branding — Global Only (step 4 / `/figma-to-kendo`)

- ⚙️ Brand values land **only** in `src/theme/kendo-overrides.css`, as Kendo theme variables (`--kendo-color-primary`, `--kendo-border-radius`, font tokens, …) mapping `DESIGN.md` Genpact tokens.
- ⚙️ No per-component files are edited to apply branding. All components rebrand together.
- ⚙️ Each override references its `DESIGN.md` token in a comment, with the theme noted (e.g. `/* token: accent-color / ThemeBlue */`).
- 👁️ Per-component **structural** drift introduced in Figma (padding, icon side, alignment) is out of scope — it must be **detected and reported**, never silently written.

## 🪞 Faithful Mirror (step 2 / `/kendo-to-figma`)

- 👁️ The Figma component mirrors the raw component **1:1**: the variants/props it exposes in code, and no invented variant matrix.
- ⚙️ Writes only to the dedicated **sandbox** Figma file — never the canonical Genpact DS file (`Ak8bNddcwozR84eZNnGdwQ`).

## ✅ Acceptance Gates

| # | Check | How |
|---|---|---|
| 1 | `npx tsc --noEmit` passes, zero errors | ⚙️ terminal |
| 2 | `npm run build-storybook` exits 0 | ⚙️ terminal |
| 3 | New stories appear in `storybook-static/index.json` under `Raw Kendo/*` | ⚙️ terminal |
| 4 | Stories render without console errors; Controls update live | 👁️ running Storybook |
| 5 | No Genpact values in any `src/components/**` file | ⚙️ grep / review |
| 6 | Branding present only in `kendo-overrides.css` (step 4) | ⚙️ review |
| 7 | Figma output matches the raw component 1:1 (step 2) | 👁️ sandbox Figma vs Storybook |
