# Reorient to a code→Figma→code round-trip

## Status

accepted

## Context

The project began as a one-way generator: paste a Figma component URL, and `/genpact-figma-to-storybook` writes a Genpact-branded KendoReact component + CSF3 story. The new requirement (`v2.md`) reverses and closes the loop: author components in code first, push them into Figma, let a designer brand them there, then sync the result back to code.

## Decision

Adopt a repeatable **code→Figma→code round-trip**, proven on 3–5 components. The deliverable is the capability (a set of skills), not a component library.

1. **Build** raw Kendo-9 primitives + CSF3 stories natively in this repo's existing Storybook — `/kendo-storybook-scaffold`.
2. **Mirror** each raw component 1:1 into a dedicated **sandbox** Figma file via the Figma MCP code-to-design — `/kendo-to-figma`.
3. *(Designer brands the components in Figma — manual, out of scope.)*
4. **Sync back**: brand tokens → a single global Kendo theme override (`src/theme/kendo-overrides.css`), regenerate branded stories, flag structural drift — `/figma-to-kendo`.

Branding is global (Kendo theme variables), never per-component. The round-trip stays in this repo with one Storybook; the branded result lands in place. `/ds-extract-design` is kept as the one-time token foundation; `/genpact-figma-to-storybook` is retired.

## Considered Options

- **`kathryngraysonnanz/kendoreact-storybook` as the component source** — rejected: stale (Kendo 5 / Storybook 6.5 / JS / webpack) and redundant once wrappers are re-declared at Kendo 9, which this repo already supports.
- **Variant explosion (Kido `kido-ds-skills-automation` model)** — rejected: that machinery is spec-driven and library-specific (no KendoReact); we want a faithful 1:1 mirror, with divergence introduced deliberately by the designer in step 3.
- **Per-component branding (Tailwind/`cva` model used by the reference repo's `/ds-push`)** — rejected: KendoReact is themed globally, so brand values belong in one override file, not scattered across component sources.
- **Vendoring the reference repo's skills** — rejected: built on a spec/Tailwind model that fights KendoReact; we write new skills and borrow only patterns.

## Consequences

- The repo's documented purpose changes from "Figma→Storybook" to "round-trip"; README and CLAUDE.md are updated accordingly.
- Per-component structural drift introduced in Figma (padding, icon side, alignment) is **out of scope** — detected and flagged for manual follow-up, not synced.
- Step 2 writes into a throwaway sandbox Figma file, not the canonical Genpact Design System file, until the loop is proven.
