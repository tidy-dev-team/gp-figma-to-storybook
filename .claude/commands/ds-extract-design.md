Extract design tokens from the Genpact Figma foundation file and write them to DESIGN.md in DTCG format.

Figma URL(s): $ARGUMENTS

If no URL is provided, use the Genpact foundation page:
https://www.figma.com/design/Ak8bNddcwozR84eZNnGdwQ/Design-system--Genpact?node-id=3007-13437

**Genpact-specific overrides (take precedence over the skill defaults):**
- Output goes to `DESIGN.md` at the repo root — not `working/{project}/DESIGN.md`
- Project name is always `genpact` — do not ask for one
- The Genpact DS has two themes: **ThemeBlue** (teal accent `#00aecf`) and **ThemeGray** (orange accent `#fe9d00`) — treat these as the two primary modes

---

## What to do

Follow the skill definition at `skills/ds-extract-design.md` exactly. Here is a summary:

### Step 1 — Read the foundation file(s)

Extract `fileKey` and `nodeId` from each URL. Foundations may be split across multiple files — extract each and merge. Use the highest-fidelity tool available:
1. `figma_get_design_system_kit` — preferred, one call for variables + styles + components
2. `figma_get_variables` + `figma_get_styles` — separate calls, combine results
3. `figma_get_variable_defs` + `get_design_context` — fallback
4. `figma_execute` via Desktop Bridge — last resort if the API returns 403 on variables

Extract every mode (ThemeBlue, ThemeGray, etc.). If multiple files share a mode name, merge their tokens under that mode.

### Step 2 — Categorize tokens

Sort every extracted value into: colors (primitives + semantic), typography, spacing, sizing, radius, shadow, border, duration, easing.

Separate primitives (raw values like `#15223f`) from semantic tokens (purposeful names referencing primitives via `{token.path}` syntax).

### Step 3 — Write DESIGN.md

Output to `DESIGN.md` at the repo root. Hybrid format:
- **YAML front matter** — design.md CLI-compatible flat summary (hex colors, `Npx` dimensions)
- **DTCG body** — full token tree in JSON code blocks, section order: Overview → Colors → Typography → Layout → Elevation & Depth → Shapes → Components → Do's and Don'ts → Themes → Gaps and Notes

See `skills/ds-extract-design.md` for the full template.

### Step 4 — Report

Output: source file(s), output path, modes captured, token count (primitive vs semantic).
