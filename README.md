# Genpact Design System — Code ⇄ Figma Round-Trip

A skill system that automates a **code→Figma→code round-trip** for Genpact's Design System, built on [KendoReact](https://www.telerik.com/kendo-react-ui/) primitives.

## What this is

Raw Kendo-9 components are authored in this repo's Storybook, mirrored 1:1 into Figma, branded by a designer in Figma, then synced back to code as a single global Kendo theme override. The deliverable is the repeatable round-trip *capability* — three skills — proven on a small set of components.

```
  ┌──────────────────────┐   /kendo-to-figma    ┌─────────────────┐
  │  Storybook            │ ───────────────────▶ │  Figma          │
  │  (raw Kendo-9 + CSF3) │                      │  (sandbox file) │
  │                       │ ◀─────────────────── │                 │
  └──────────────────────┘   /figma-to-kendo     └─────────────────┘
            ▲                                              │
            │ /kendo-storybook-scaffold       designer brands (manual)
            │                                              ▼
        (author raw)                              branded component
```

| Stage | Skill | Direction |
|---|---|---|
| 1 — Add a component to Storybook from Kendo | `/kendo-storybook-scaffold` | author raw |
| 2 — Create the Figma component | `/kendo-to-figma` | code → Figma |
| 3 — *(designer brands in Figma)* | — | manual |
| 4 — Update the component in Storybook from Figma | `/figma-to-kendo` | Figma → code |

> See `docs/adr/0001-code-to-figma-round-trip.md` for the architecture decision and `CONTEXT.md` for canonical terms. This supersedes the earlier one-way `/genpact-figma-to-storybook` flow, since removed.

---

## Prerequisites

```bash
npm install
npm run storybook      # http://localhost:6006
```

- **Node + this repo** — Kendo 9 / Storybook / Vite / TypeScript are already wired up.
- **Figma MCP** (the official `claude.ai Figma` server) — required for stages 2 and 4. Verify with the `whoami` tool if unsure.
- **A sandbox Figma file** — a throwaway file for stage 2. **Never** point the round-trip at the canonical Genpact DS file (`Ak8bNddcwozR84eZNnGdwQ`).
- **`DESIGN.md`** — Genpact brand tokens (generated once via `/ds-extract-design`); the source of branding values for stage 4.

---

## The round-trip, stage by stage

### Stage 1 — Add a component to Storybook from Kendo

```
/kendo-storybook-scaffold <ComponentName> [kendo-package]
```

| Argument | Required | Meaning |
|---|---|---|
| `ComponentName` | ✅ | The KendoReact component to scaffold, e.g. `Button`, `Checkbox`, `DropDownList`. |
| `kendo-package` | optional | The `@progress/kendo-react-*` package it lives in. Auto-discovered from `node_modules` if omitted. |

**What it does:** discovers the component's real prop axes from Kendo's own type definitions, then writes a thin pass-through wrapper + a CSF3 story exposing those axes as live Controls. No branding, no state.

**Outputs (two files):**
```
src/components/<ComponentName>/<ComponentName>.tsx   # raw wrapper: function X(props: XProps) { return <KendoX {...props} /> }
src/stories/<ComponentName>.stories.tsx              # CSF3 story, title "Raw Kendo/<ComponentName>"
```

**Example:**
```
/kendo-storybook-scaffold Button
/kendo-storybook-scaffold DropDownList @progress/kendo-react-dropdowns
```

**Verify:**
```bash
npx tsc --noEmit                 # zero errors
npm run build-storybook          # exit 0
npm run storybook                # see it under "Raw Kendo/<ComponentName>"
```

---

### Stage 2 — Create the Figma component

```
/kendo-to-figma <ComponentName> <sandbox-figma-url>
```

| Argument | Required | Meaning |
|---|---|---|
| `ComponentName` | ✅ | A raw primitive that exists in `src/components/<ComponentName>/`. |
| `sandbox-figma-url` | ✅ | The sandbox Figma file to write into. **Refused if it's the canonical Genpact DS file.** |

**What it does:** reads the component's prop surface from code and builds a **faithful 1:1** Figma component set — the same axes, the same Kendo option values, no invented variants. Enum axes become Figma variant properties; the matrix is capped on secondary axes (logged in the component description). Default-Kendo styling — branding is the designer's job in stage 3.

**Output:** a Figma component set in the sandbox file (e.g. Button → 55 variants: `fillMode` × `themeColor`).

**Example:**
```
/kendo-to-figma Button https://www.figma.com/design/xbpuIo9ZcRwbLtfEXRj2xN/GP-Test
```

**Verify:** visual sign-off — the Figma component's axes/options match the raw Storybook component; default-Kendo look; written only to the sandbox file.

---

### Stage 3 — Designer brands the component in Figma (manual)

Not automated. The designer applies Genpact's identity to the mirrored component in Figma — colors, corner radius, typography. This is where the code and design intentionally diverge.

*(For testing before a real designer is available, the `/figma-to-kendo` skill permits hand-branding the Figma component as a fixture.)*

---

### Stage 4 — Update the component in Storybook from Figma

```
/figma-to-kendo <ComponentName> <branded-figma-url>
```

| Argument | Required | Meaning |
|---|---|---|
| `ComponentName` | ✅ | The raw primitive whose Figma mirror was branded, e.g. `Button`. |
| `branded-figma-url` | ✅ | The polished Figma component/component-set node in the sandbox file. |

**What it does:** reads the branded Figma component, extracts resolved brand values, maps them to `DESIGN.md` tokens, and writes **only the changed** `--kendo-*` variables into the single global override. It never edits component files. Per-component structural changes (padding, alignment, icon side) are **detected and reported**, never written.

**Output:**
```
src/theme/kendo-overrides.css    # updated global Kendo theme variables (with DESIGN.md provenance comments)
```
…plus a report: variables written (before→after + token), unmatched values, a structural-drift "Manual follow-up" list, and the build result.

**Example:**
```
/figma-to-kendo Button https://www.figma.com/design/xbpuIo9ZcRwbLtfEXRj2xN/GP-Test?node-id=3-112
```

**Verify:**
```bash
npx tsc --noEmit                 # zero errors
npm run build-storybook          # exit 0
npm run storybook                # flip the Branding toolbar toggle to "Genpact branded" to preview the synced override
```

The override is a single global stylesheet, so when applied every Kendo component rebrands at once — the loop is closed. In Storybook it is layered on via the **Branding** toolbar toggle (default off = raw Kendo) so the raw stages stay visually faithful to default Kendo.

---

## Worked example (Button)

```
# 1. author the raw primitive
/kendo-storybook-scaffold Button
#    → src/components/Button/Button.tsx + src/stories/Button.stories.tsx (Raw Kendo/Button)

# 2. mirror it into the sandbox Figma file
/kendo-to-figma Button https://www.figma.com/design/xbpuIo9ZcRwbLtfEXRj2xN/GP-Test
#    → Figma component set "Button": fillMode (5) × themeColor (11) = 55 variants

# 3. designer brands it in Figma (primary → #104683, corners → 8px)

# 4. sync the branding back
/figma-to-kendo Button https://www.figma.com/design/xbpuIo9ZcRwbLtfEXRj2xN/GP-Test?node-id=3-112
#    → kendo-overrides.css gains  --kendo-border-radius-md: 8px  (token: radius.lg)
```

---

## Project structure

```
├── src/
│   ├── components/<Name>/<Name>.tsx   # raw Kendo-9 wrappers (pass-through, no branding)
│   ├── stories/<Name>.stories.tsx     # CSF3 stories, title "Raw Kendo/<Name>"
│   └── theme/
│       └── kendo-overrides.css        # the single global brand override (stage-4 target)
├── .storybook/preview.ts              # loads the Kendo Default theme; toggles kendo-overrides.css via the Branding toolbar
├── skills/                            # skill definitions (authoritative)
│   ├── kendo-storybook-scaffold.md
│   ├── kendo-to-figma.md
│   ├── figma-to-kendo.md
│   └── ds-extract-design.md
├── .claude/commands/                  # slash-command wrappers for the skills
├── CONTEXT.md                         # canonical domain terms
├── docs/adr/0001-code-to-figma-round-trip.md
└── DESIGN.md                          # Genpact brand tokens (DTCG)
```

## Skills reference

| Skill | Stage | Args | Writes |
|---|---|---|---|
| `/kendo-storybook-scaffold` | 1 | `<ComponentName> [kendo-package]` | `src/components/**`, `src/stories/**` |
| `/kendo-to-figma` | 2 | `<ComponentName> <sandbox-figma-url>` | a sandbox Figma file (never the DS file) |
| `/figma-to-kendo` | 4 | `<ComponentName> <branded-figma-url>` | `src/theme/kendo-overrides.css` only |
| `/ds-extract-design` | setup | foundation Figma URL | `DESIGN.md` |

## Design tokens

`DESIGN.md` holds the full Genpact token set (extracted once via `/ds-extract-design`): ~97 primitive + ~82 semantic colors (two themes — **ThemeBlue** default, **ThemeGray**), 16 typography styles (Rubik), spacing, and 9 radius steps (`sm` 2px → `full` 9999px). Stage 4 maps branded Figma values onto these tokens before writing the override.

## Tech stack

React 18 · Vite · Storybook · TypeScript · KendoReact 9 (`@progress/kendo-*`) · `@progress/kendo-theme-default` 9.
