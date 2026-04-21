Transform a Figma component from the Genpact Design System into a React component + Storybook story built from KendoReact primitives.

Arguments: $ARGUMENTS

Parse arguments as follows:
- First argument: Figma URL (required)
- Second argument: Storybook base URL (optional, e.g. `http://localhost:6006`). If omitted, assume `http://localhost:6006`. Never start a new Storybook process — use the URL as-is.

---

## What to do

Follow the skill definition at `skills/genpact-figma-to-storybook.md` exactly. Here is a summary:

### Step 1 — Parse the URL
Extract `fileKey` (segment after `/design/`) and `nodeId` (from `?node-id=`, convert `-` to `:`).

### Step 2 — Read design context
Call `get_design_context` with the fileKey and nodeId. Read `KENDOREACT_COMPONENTS.md` and `DESIGN.md`.

### Step 3 — Decompose structure
Identify every visual sub-element and map it to a KendoReact component from `KENDOREACT_COMPONENTS.md`. Never use raw HTML form elements.

### Step 4 — Identify variants
Map Figma component states/props to PascalCase story names. Target 4–8 variants.

### Step 5 — Write the component file
Path: `src/components/<ComponentName>/<ComponentName>.tsx`

Rules:
- Export the component function and its props type
- Define design tokens as `const t = { ... }` at the top, using values from `DESIGN.md`
- Use `useState` for all interactive state
- Use `useEffect` to sync every prop to its internal state (so Storybook Controls work live):
  `useEffect(() => { setState(prop); }, [prop]);`
- Add `name="<group>"` to all `RadioButton` elements in the same group
- Layout via CSS flexbox/gap — no absolute positioning
- No Storybook imports

### Step 6 — Write the story file
Path: `src/stories/<ComponentName>.stories.tsx`

Rules:
- Import the component from `../components/<ComponentName>/<ComponentName>`
- Never redefine the component here
- CSF3 format: `satisfies Meta<typeof X>`, `StoryObj<typeof meta>`
- Every prop needs an `argType` with `control`, `description`, and `options` (for enums)
- Use realistic data from Figma text content as `args`
- Include an `AllVariants` story that renders all states side-by-side

### Step 7 — Report
Output both file paths, story variant names, KendoReact components used, and any unmapped elements.
