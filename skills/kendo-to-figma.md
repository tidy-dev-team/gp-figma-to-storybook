# kendo-to-figma

Mirror a **raw KendoReact primitive** from this repo's Storybook into a **sandbox Figma file**, 1:1, via the Figma MCP code-to-design. Step 2 of the code→Figma→code round-trip.

> See `CONTEXT.md` (round-trip, raw KendoReact primitive) and
> `docs/adr/0001-code-to-figma-round-trip.md` for why this is a *faithful mirror*, not variant explosion.

---

## Purpose

After step 1 scaffolds raw primitives in code, step 2 reflects them into Figma so a designer can brand them (step 3). The Figma component must mirror **exactly the prop surface the component exposes in code** — the same axes, the same option values — and **nothing more**. No invented variants, no Kido-style structure, no expansion. Divergence is introduced later, deliberately, by the designer.

---

## Input

```
/kendo-to-figma <ComponentName> <sandbox-figma-url>
```

- `ComponentName` — required. A raw primitive that exists in `src/components/<ComponentName>/`.
- `sandbox-figma-url` — required. The dedicated sandbox Figma file to write into. **Never the canonical Genpact DS file (`Ak8bNddcwozR84eZNnGdwQ`).** If omitted, ask for it — do not default to the DS file.

---

## Hard rules

- ⛔ **Never write to the canonical Genpact DS file.** Refuse and ask for a sandbox URL if the target is `Ak8bNddcwozR84eZNnGdwQ`.
- 🪞 **Faithful 1:1.** Mirror the component's real prop axes using Kendo's exact option values. Do not add axes, options, or variants the code doesn't expose.
- 🚫 **No branding.** The mirror reflects default Kendo (the designer brands it in step 3). Don't bake Genpact colors into the Figma component.
- 📋 **No silent caps.** If a faithful full matrix would be combinatorially huge, cap it deliberately and `log` exactly what was capped and why (see Step 3).

---

## Workflow

### Step 0 — Read the Figma MCP usage skill

Before any `use_figma` call, read the Figma plugin's `/figma-use` skill (mandatory per the Figma MCP instructions; fallback `skill://figma/figma-use/SKILL.md`). For building a component/library from code, also consult `/figma-generate-library`.

### Step 1 — Read the component's prop surface from code

This is the source of truth for the mirror — read it, don't guess:

- `src/components/<ComponentName>/<ComponentName>.tsx` — confirms it's a raw pass-through and which Kendo props type it re-exports.
- `src/stories/<ComponentName>.stories.tsx` — the `argTypes` already enumerate the meaningful axes and their exact options.
- `node_modules/@progress/.../index.d.ts` — the authoritative option lists, if the story is ambiguous.

Produce the **mirror spec**: the list of prop axes, each with its kind (enum / boolean / text) and exact options.

### Step 2 — Resolve the sandbox file and check for an existing component

Confirm the sandbox Figma URL. Load the file; check whether a component named `<ComponentName>` already exists (avoid duplicates — update or version it rather than creating a second).

### Step 3 — Plan the variant matrix (faithfully, with explicit caps)

Map the mirror spec to Figma:

- **Enum axes** → Figma **variant properties** with the exact Kendo option values (e.g. Button `fillMode = solid | outline | flat | link | clear`).
- **Boolean axes** (`disabled`, `selected`, `removable`) → boolean variant properties or component properties.
- **Text content** (`text`, `label`, `placeholder`) → a Figma **text property**, not a variant.

Figma component sets need a concrete variant per combination. A full cartesian across every axis explodes (e.g. Button 11×5×3×4 = 660) — that is **not** faithful, it's noise. Choose the **dominant axis** (usually `themeColor` or `fillMode`) as the variant matrix, expose the rest as component properties or a small representative set, and **`log` the cap**: "Mirrored themeColor×fillMode (55 variants); size/rounded exposed as component properties; no full cartesian." Never silently drop an axis.

### Step 4 — Build in Figma (code-to-design)

Use `use_figma` (per the `/figma-use` skill) to create the component / component set in the sandbox file with the planned variants and properties. Place it inside a Section/Frame (per the Figma Console guidance), not on blank canvas. Keep styling at Kendo defaults.

### Step 5 — Visual validation (required)

Screenshot the created component (`get_screenshot` / `figma_take_screenshot`). Compare against the raw component in the running Storybook (`npm run storybook`, default `http://localhost:6006`) — with the **Branding** toolbar toggle **off** (the default), so Storybook shows default Kendo rather than the synced override. Check: same axes present, same option labels, default Kendo appearance, no invented variants. Iterate up to ~3 times to fix structural mismatches.

### Step 6 — Report

Output: the sandbox file + node, the variant properties and options created, any matrix caps (with counts and rationale), and a side-by-side note of Figma vs Storybook for the designer's visual sign-off.

---

## Key Principles

- **"Mirror the surface, not a matrix"** — reflect the component's prop axes, don't enumerate every combination.
- **"Kendo's options, exactly"** — option values come from the code/types, never invented.
- **"Sandbox only"** — never touch the canonical DS file.
- **"Cap out loud"** — any bound on the matrix is logged, never silent.
- **"Default Kendo look"** — branding is the designer's job in step 3.
