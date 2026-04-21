Extract design tokens from the Genpact Figma foundation file and write them to DESIGN.md in DTCG format.

Figma URL: $ARGUMENTS

If no URL is provided, use the Genpact foundation page:
https://www.figma.com/design/Ak8bNddcwozR84eZNnGdwQ/Design-system--Genpact?node-id=3007-13437

---

## What to do

Follow the skill definition at `skills/ds-extract-design.md` exactly. Here is a summary:

### Step 1 — Read the foundation file
Extract `fileKey` and `nodeId` from the URL. Use the highest-fidelity tool available:
1. `figma_get_design_system_kit` — preferred, one call for variables + styles
2. `figma_get_variables` + `figma_get_styles` — separate calls, combine results
3. `figma_get_variable_defs` + `get_design_context` — fallback
4. `figma_execute` via Desktop Bridge — last resort if the API returns 403 on variables

Extract every mode (ThemeBlue, ThemeGray, etc.).

### Step 2 — Categorize tokens
Sort every extracted value into: colors (primitives + semantic), typography, spacing, sizing, radius, shadow, border, duration, easing.

Separate primitives (raw values like `#15223f`) from semantic tokens (purposeful names referencing primitives).

### Step 3 — Write DESIGN.md
Output to `DESIGN.md` at the repo root. Hybrid Markdown + DTCG JSON blocks.

Structure:
- Header: source file, extraction date, modes, token count
- Colors / Primitives
- Colors / Semantic (per theme)
- Typography
- Spacing
- Radius
- Shadow
- Gaps and Notes (anything that couldn't be extracted cleanly)

### Step 4 — Report
Output: source file, output path, modes captured, token count (primitive vs semantic).
