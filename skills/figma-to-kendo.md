# figma-to-kendo

Read a designer-branded Figma component, extract its resolved brand values, and sync them back into code as a **global Kendo theme override** — then verify the branded Storybook builds. Step 4 (the loop-closer) of the code→Figma→code round-trip.

> See `CONTEXT.md` (round-trip, branding) and `docs/adr/0001-code-to-figma-round-trip.md`.
> Branding is **global, never per-component** — values land only in `src/theme/kendo-overrides.css`.

---

## Purpose

After the designer brands the mirrored component in Figma (step 3), this skill pulls those values back into code. It does **not** edit component files — KendoReact is themed globally, so the designer's colors/radius/typography map onto Kendo theme variables (`--kendo-*`) in the single override file. All components rebrand together.

---

## Input

```
/figma-to-kendo <ComponentName> <branded-figma-url>
```

- `ComponentName` — the raw primitive whose Figma mirror was branded (e.g. `Button`).
- `branded-figma-url` — the polished Figma component/component-set node (sandbox file). Required.

If `DESIGN.md` exists, use it as the canonical token vocabulary: map each extracted Figma value to a named Genpact token before writing.

---

## Hard rules

- 🌐 **Global only.** Write brand values **only** to `src/theme/kendo-overrides.css`, as `--kendo-*` variables. Never edit `src/components/**` to apply branding.
- 🚫 **No structural writes.** Per-component structural drift (padding, icon side, alignment) is **out of scope** — detect and **report** it, never write it (see Step 4).
- 🎨 **Tokens, with provenance.** Each override references its `DESIGN.md` token name + theme in a comment (e.g. `/* token: accent-color / ThemeBlue */`).
- ✅ **Verify before done.** `npm run build-storybook` must still exit 0 after the write.

---

## Workflow

### Step 1 — Read the branded Figma component

Use the official Figma MCP. `get_design_context` on the node for resolved values; `use_figma` for node-level reads `get_design_context` abstracts away.

Read representative variants (mirror of `/ds-push`'s approach). For a Button set, read `themeColor=primary, fillMode=solid` (idle) plus a couple of fill/state signals:

| Read from Figma | Maps to Kendo theme variable |
|---|---|
| primary/solid fill | `--kendo-color-primary` (+ hover/active/subtle if branded) |
| label fill on primary/solid | `--kendo-color-on-primary` |
| corner radius | `--kendo-border-radius` (md/sm/lg as branded) |
| base surface / border fills | `--kendo-color-base`, `--kendo-color-border` |
| error/success/warning fills | `--kendo-color-error` / `-success` / `-warning` |
| font family / size / weight | `--kendo-font-family`, `--kendo-font-size`, `--kendo-font-weight-*` |

Read all colors as hex (convert Figma's 0–1 RGB: `Math.round(v*255).toString(16).padStart(2,'0')`). Convert RGBA opacity to `#RRGGBBAA`.

### Step 2 — Map to Genpact tokens (via DESIGN.md)

For each extracted value, find its matching `DESIGN.md` token (and which theme — ThemeBlue/ThemeGray). If a value doesn't match any token, write it raw and flag it in the report (the designer may have introduced a new brand value).

### Step 3 — Write the override

Update `src/theme/kendo-overrides.css` under `:root`:
- Add/update only the `--kendo-*` variables whose values changed.
- Keep one variable per line with a provenance comment.
- Do not remove unrelated existing variables.
- Never touch `.storybook/`, `package.json`, `DESIGN.md`, or any `src/components/**` file.

### Step 4 — Detect (don't write) structural drift

Compare the branded Figma node's auto-layout against the raw component's expectations: `paddingLeft/Right/Top/Bottom`, `itemSpacing`, `primaryAxisAlignItems`/`counterAxisAlignItems`, child order (icon vs label). Anything beyond theme tokens (geometry, alignment, icon side) is **structural** — list it under "Manual follow-up" in the report. Do not encode it in the override or component files.

### Step 5 — Verify

```bash
npx tsc --noEmit
npm run build-storybook          # must exit 0
npm run storybook                # (designer) visual: components now render branded
```

The branded look is confirmed visually in the running Storybook, since the override propagates to every Kendo component automatically.

### Step 6 — Report

Output: the override variables written (with before→after values + their DESIGN.md token), any raw/unmatched values flagged, the structural-drift "Manual follow-up" list, and the build result. Note that the designer confirms the branded render in Storybook.

---

## Key Principles

- **"Global, one file"** — branding lives only in `kendo-overrides.css`.
- **"Tokens carry provenance"** — every override cites its DESIGN.md token + theme.
- **"Structure is reported, not written"** — drift is a follow-up list, never an auto-edit.
- **"Build must stay green"** — verify the branded Storybook builds before done.
