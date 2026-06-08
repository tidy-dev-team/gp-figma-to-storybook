# Genpact Integration

A skill system that automates a **round-trip** between code and design: KendoReact components are published to Storybook, generated into Figma, edited by a designer, and synced back to Storybook. The deliverable is the reusable round-trip capability, not a specific component library.

## Language

**Round-trip**:
The end-to-end loop this project automates — Storybook → Figma → (designer edits) → Storybook. Replaces the project's earlier one-way Figma → Storybook flow as the primary workflow.
_Avoid_: pipeline, sync (too vague)

**Raw KendoReact primitive**:
A thin Kendo-9 wrapper (~10-line `{...props}` pass-through) kept as close to default KendoReact as possible — no Genpact branding. Built natively in this repo's single Storybook, exposing Kendo's real prop axes. The step-1 starting point and the step-2 mirror source.
_Avoid_: wrapper, branded component

**Branding**:
Applying Genpact's visual identity to the raw primitives by overriding Kendo's global theme variables — never by editing component files. Authored by the designer in Figma (step 3), synced back to code (step 4) as a single global theme override (`src/theme/kendo-overrides.css`). All components rebrand together.
_Avoid_: styling, theming a component, per-component override
