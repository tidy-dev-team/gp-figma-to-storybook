# Genpact Design System — Storybook Integration

A Storybook project that mirrors Genpact's Figma Design System in code, built from [KendoReact](https://www.telerik.com/kendo-react-ui/) primitives.

## What this is

Genpact's designers work in Figma. This project provides a workflow where a developer pastes a Figma component URL into Claude Code, and the LLM reads the design, maps each visual element to the correct KendoReact sub-component, and writes two files: a standalone React component and a Storybook story with interactive Controls.

The output is a living component library in Storybook that matches the Figma designs and is built entirely from KendoReact primitives — no custom UI from scratch.

## Quick start

```bash
npm install
npm run storybook
# opens at http://localhost:6006
```

## Generating a new component

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
