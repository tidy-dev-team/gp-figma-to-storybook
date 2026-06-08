# Genpact Design System — Code ⇄ Figma Round-Trip

A skill system that automates a **code→Figma→code round-trip** for Genpact's Design System, built on [KendoReact](https://www.telerik.com/kendo-react-ui/) primitives.

## What this is

Raw Kendo-9 components are authored in this repo's Storybook, mirrored 1:1 into Figma, branded by a designer in Figma, then synced back to code as a single global Kendo theme override. The deliverable is the repeatable round-trip *capability* (a set of skills), proven on 3–5 components.

The loop:

1. **Build** raw Kendo-9 primitives + stories in Storybook — `/kendo-storybook-scaffold`
2. **Mirror** each raw component 1:1 into a sandbox Figma file — `/kendo-to-figma`
3. *(Designer brands the components in Figma — manual)*
4. **Sync back** brand tokens → `src/theme/kendo-overrides.css` + regenerated stories — `/figma-to-kendo`

> **The three round-trip skills are not built yet — they are the v2 work.** See `docs/adr/0001-code-to-figma-round-trip.md` for the decision and rejected alternatives, `CONTEXT.md` for canonical terms, and `v2.md` for the plan.
>
> This **supersedes** the project's earlier one-way Figma→Storybook generator (`/genpact-figma-to-storybook`), which is now retired.

## Quick start

```bash
npm install
npm run storybook
# opens at http://localhost:6006
```

## Extracting design tokens (one-time setup)

`DESIGN.md` holds all Genpact brand tokens in DTCG format. It feeds into every component generation run, so it must exist before using `/genpact-figma-to-storybook`.

Run the extract skill once per project (re-run only if the Figma foundation file changes):

```
/ds-extract-design
```

Point it at the Genpact foundation page:

```
https://www.figma.com/design/Ak8bNddcwozR84eZNnGdwQ/Design-system--Genpact?node-id=3007-13437
```

Claude will:
1. Read the Figma file's variables and styles via the Figma MCP
2. Categorize tokens into colors, typography, spacing, radius, shadow, and themes
3. Write `DESIGN.md` in DTCG format — primitives (raw values) + semantic (purposeful names referencing primitives)

The output covers:
- **80+ primitive colors** — Gray, Primary Blue, Light Blue, Purple, Error, Green, Teal, Chart palettes
- **~80 semantic tokens** — two themes: **ThemeBlue** (default) and **ThemeGray**
- **16 typography styles** — Rubik, 5 sizes (12–20 px) × 3 weights
- **33 spacing tokens** — 4 px base unit, Tailwind-style scale
- **9 border-radius tokens** — 2 px → 9999 px
- **1 shadow** — side drawer

> If the Figma Variables API returns a 403 (token scope limitation), the skill falls back to extracting via the Figma Desktop Bridge plugin (`figma_execute`). Start the Desktop Bridge in Figma before running if you hit that error.

---

## Generating a new component (RETIRED — old one-way flow)

> The `/genpact-figma-to-storybook` flow below is **retired**, kept for reference only. See the round-trip skills above.

Run the skill inside Claude Code:

```
/genpact-figma-to-storybook <figma-url>
```

Example:
```
/genpact-figma-to-storybook https://www.figma.com/design/Ak8bNddcwozR84eZNnGdwQ/Design-system--Genpact?node-id=3493-3254
```

Claude will:
1. Read the Figma component and screenshot
2. Map each visual element to a KendoReact component (see `KENDOREACT_COMPONENTS.md`)
3. Write `src/components/<Name>/<Name>.tsx` — the React component
4. Write `src/stories/<Name>.stories.tsx` — the Storybook story with Controls

## Project structure

```
├── src/
│   ├── components/              # React components (one folder per component)
│   │   └── FilterWithRadio/
│   │       └── FilterWithRadio.tsx
│   └── stories/                 # Storybook stories (one file per component)
│       └── FilterWithRadio.stories.tsx
├── .storybook/
│   ├── main.ts                  # Storybook config (react-vite)
│   └── preview.ts               # Global KendoReact Default theme import
├── skills/
│   └── genpact-figma-to-storybook.md   # Skill definition for Claude Code
├── CLAUDE.md                    # Claude Code context + skill registration
├── DESIGN.md                    # Genpact design tokens (DTCG format)
└── KENDOREACT_COMPONENTS.md     # Figma visual pattern → KendoReact component map
```

## Design tokens

`DESIGN.md` contains the full token set extracted from Figma (run once per project with `/ds-extract-design`):

| Category | Count | Notes |
|---|---|---|
| Primitive colors | 80+ | Gray, Primary Blue, Light Blue, Purple, Error, Green, Teal, Chart, etc. |
| Semantic tokens | ~80 | Two themes: **ThemeBlue** (default) and **ThemeGray** |
| Typography | 16 styles | Rubik font, 5 sizes (12–20px) × 3 weights (Light/Regular/Bold) |
| Spacing | 33 tokens | Tailwind-style scale, 4px base unit |
| Border radius | 9 tokens | 2px → 9999px |
| Shadows | 1 | Side drawer |

Key brand values (ThemeBlue):

| Token | Value | Usage |
|---|---|---|
| `main-color` | `#15223f` | Primary text, dark navy |
| `accent-color` | `#00aecf` | CTAs, active indicators |
| `top-header-background` | `#104683` | Navigation header |
| `checkbox-fill-checked` | `#104683` | Selected state for checkboxes/radios |
| `error-color` | `#f9343f` | Error states |
| `success-color` | `#16b364` | Success states |

## KendoReact component map

`KENDOREACT_COMPONENTS.md` maps Figma visual patterns to KendoReact APIs. Quick reference:

| Figma pattern | KendoReact component | Package |
|---|---|---|
| Radio button | `RadioButton` | `@progress/kendo-react-inputs` |
| Checkbox | `Checkbox` | `@progress/kendo-react-inputs` |
| Dropdown with chevron | `DropDownList` | `@progress/kendo-react-dropdowns` |
| Multi-select chips | `MultiSelect` | `@progress/kendo-react-dropdowns` |
| Date field + calendar icon | `DatePicker` | `@progress/kendo-react-dateinputs` |
| Date range inputs | `DateRangePicker` | `@progress/kendo-react-dateinputs` |
| Button | `Button` | `@progress/kendo-react-buttons` |
| Composite filter builder | `Filter` | `@progress/kendo-react-data-tools` |
| Text input | `Input` | `@progress/kendo-react-inputs` |
| Numeric input | `NumericTextBox` | `@progress/kendo-react-inputs` |

## Component conventions

**Component file** (`src/components/<Name>/<Name>.tsx`):
- Exports the component function and its props type
- Uses `useState` for interactive state (selected option, date, etc.)
- Uses `useEffect` to sync each prop with its internal state (makes Storybook Controls work)
- Defines design tokens as a `const t = { ... }` block at the top, referencing `DESIGN.md` values
- Groups radio buttons with a shared `name` prop
- Layout via CSS flexbox/gap — no absolute positioning

**Story file** (`src/stories/<Name>.stories.tsx`):
- Imports the component — never redefines it
- CSF3 format with `satisfies Meta<typeof X>`
- `argTypes` for every prop with `control`, `description`, and `options`
- Realistic `args` data taken from Figma text content
- An `AllVariants` story shows all meaningful states side-by-side

## Figma file

Design System: [Genpact Design System on Figma](https://www.figma.com/design/Ak8bNddcwozR84eZNnGdwQ/Design-system--Genpact)

## Tech stack

- React 18 + TypeScript
- Vite 5
- Storybook 8 (`@storybook/react-vite`)
- KendoReact 9 (`@progress/kendo-*`)
- KendoReact Default theme (`@progress/kendo-theme-default`)
