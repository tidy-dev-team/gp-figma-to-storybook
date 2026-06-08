Read a designer-branded Figma component, extract its resolved brand values, and sync them back into code as a global Kendo theme override — then verify the branded Storybook builds. Step 4 (loop-closer) of the code→Figma→code round-trip.

Arguments: $ARGUMENTS

Parse arguments as follows:
- First argument: `ComponentName` (required) — the raw primitive whose Figma mirror was branded (e.g. `Button`).
- Second argument: `branded-figma-url` (required) — the polished Figma component/component-set node (sandbox file).

---

## What to do

Follow the skill definition at `skills/figma-to-kendo.md` exactly. Summary:

1. **Read** the branded Figma component via the Figma MCP (`get_design_context` for resolved values; `use_figma` for node-level reads). Read representative variants (e.g. Button `themeColor=primary, fillMode=solid`) for fills, radius, base/border, semantic colors, typography. Convert Figma 0–1 RGB → hex.
2. **Map** each value to a `DESIGN.md` Genpact token (and theme). Flag values that match no token.
3. **Write** only changed `--kendo-*` variables into `src/theme/kendo-overrides.css`, one per line with a provenance comment. Never edit `src/components/**`, `.storybook/`, `package.json`, or `DESIGN.md`.
4. **Detect, don't write** per-component structural drift (padding, alignment, icon side, gap) — list it under "Manual follow-up".
5. **Verify**: `npx tsc --noEmit` clean and `npm run build-storybook` exits 0. Branded render confirmed visually in the running Storybook.
6. **Report** the override variables (before→after + DESIGN.md token), unmatched values, the structural-drift follow-up list, and the build result.

Hard rules: branding is global (one file) only; no per-component branding writes; structure is reported not written; build must stay green.
