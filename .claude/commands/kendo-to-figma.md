Mirror a raw KendoReact primitive from this repo's Storybook into a sandbox Figma file, 1:1, via the Figma MCP code-to-design. Step 2 of the code→Figma→code round-trip.

Arguments: $ARGUMENTS

Parse arguments as follows:
- First argument: `ComponentName` (required) — a raw primitive in `src/components/<ComponentName>/`.
- Second argument: `sandbox-figma-url` (required) — the dedicated sandbox Figma file. NEVER the canonical Genpact DS file (`Ak8bNddcwozR84eZNnGdwQ`). If missing, ask — do not default to the DS file.

---

## What to do

Follow the skill definition at `skills/kendo-to-figma.md` exactly. Summary:

0. Read the Figma plugin's `/figma-use` skill before any `use_figma` call (mandatory); consult `/figma-generate-library` for building from code.
1. Read the component's real prop surface from `src/components/<ComponentName>/<ComponentName>.tsx`, its story's `argTypes`, and Kendo's `index.d.ts`. Produce a mirror spec (axes + exact options).
2. Resolve the sandbox file; check for an existing `<ComponentName>` component to avoid duplicates.
3. Plan the variant matrix faithfully: enum axes → Figma variant properties with Kendo's exact options; booleans → boolean properties; text content → text properties. Pick a dominant axis for the matrix, expose the rest as component properties, and `log` any cap explicitly (no silent truncation, no invented variants, no full cartesian).
4. Build in Figma with `use_figma`, placed inside a Section/Frame, at default Kendo styling (no branding).
5. Screenshot and compare against the raw component in the running Storybook; iterate up to ~3×.
6. Report the file/node, variant properties + options, any caps with counts/rationale, and a Figma-vs-Storybook note for visual sign-off.

Hard rules: never write to the canonical DS file; faithful 1:1 only; no branding; cap out loud.
