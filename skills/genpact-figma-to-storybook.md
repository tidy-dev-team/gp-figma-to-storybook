# genpact-figma-to-storybook

Transform a Figma component from the Genpact Design System into a production-ready component + Storybook story, composing the UI from KendoReact primitives.

---

## Purpose

Genpact's Figma components are visual compositions of KendoReact primitives (RadioButton, DropDownList, DatePicker, etc.) styled with Genpact brand tokens. This skill reads the Figma design, maps each visual element to its KendoReact equivalent, and generates two files: a standalone React component and a Storybook CSF3 story with full Controls.

---

## Input

```
/genpact-figma-to-storybook <figma-url>
```

Example:
```
/genpact-figma-to-storybook https://www.figma.com/design/Ak8bNddcwozR84eZNnGdwQ/Design-system--Genpact?node-id=3493-3254
```

---

## Output (always two files)

```
src/
  components/
    <ComponentName>/
      <ComponentName>.tsx       ← the React component
  stories/
    <ComponentName>.stories.tsx ← the Storybook story (imports from component)
```

**Never put the component inside the story file.** Always separate them.

---

## Workflow

### Step 1 — Parse Input

Extract from the Figma URL:
- `fileKey`: path segment after `/design/` (e.g. `Ak8bNddcwozR84eZNnGdwQ`)
- `nodeId`: from `?node-id=` query param; convert `-` to `:` (e.g. `3493-3254` → `3493:3254`)

---

### Step 2 — Read Design Context

Call `get_design_context` with the extracted `fileKey` and `nodeId`. This returns:
- A screenshot of the component (visual ground truth)
- Reference React+Tailwind code (structural map only — do NOT copy as output)
- Component variant metadata

Also read:
- `KENDOREACT_COMPONENTS.md` — visual pattern → KendoReact component map
- `DESIGN.md` (if present) — Genpact brand tokens in DTCG format
- `REQUIREMENTS.md` — design standards and quality acceptance criteria; all generated code must satisfy every item in the Visual Sign-Off Checklist

---

### Step 3 — Decompose Structure

Analyze the reference code and screenshot to identify every visual sub-element. For each:

1. Name the visual pattern (e.g. "radio button", "dropdown with chevron", "date field")
2. Look it up in `KENDOREACT_COMPONENTS.md`
3. Note the KendoReact component, package, and key props

**Rules:**
- Always use KendoReact primitives — never raw HTML `<input>`, `<select>`, or `<button>`
- If a pattern is not in `KENDOREACT_COMPONENTS.md`, use the closest match and flag it in the report
- Ignore absolute positioning from the reference code; use CSS flexbox/gap for layout

---

### Step 4 — Identify Variants

From the Figma component props, identify the distinct states/variants. Map each to a PascalCase story name.

Target 4–8 story variants. Prioritise: Default (most representative state), then meaningful interaction states.

---

### Step 5 — Generate the Component File

Write `src/components/<ComponentName>/<ComponentName>.tsx`.

**Rules:**
- Export the component and its props type (`export type`, `export function`)
- Use `useState` for all interactive state (selected radio, dropdown value, date, etc.)
- Use `useEffect` to sync each prop with its internal state — this makes Storybook Controls work:
  ```tsx
  useEffect(() => { setMode(activeFilter); }, [activeFilter]);
  ```
- Use Genpact brand tokens from `DESIGN.md` as inline style constants at the top of the file
- Use CSS flexbox/gap for layout — never absolute positioning
- Match Figma spacing/padding/radius values from the reference code
- Add `name="<group-name>"` to all `RadioButton` components in the same group
- No Storybook imports — this file is a plain React component

**Template:**
```tsx
import { useState, useEffect } from 'react';
import { RadioButton, RadioButtonChangeEvent } from '@progress/kendo-react-inputs';
import { DropDownList, DropDownListChangeEvent } from '@progress/kendo-react-dropdowns';
// ... other KendoReact imports

// Design tokens (from DESIGN.md)
const t = {
  filterRowBg: '#e3e7ef',
  textPrimary: '#15223f',   // token: main-color
  rowRadius: 8,             // token: radius.lg
  fontFamily: 'Rubik, sans-serif',
  fontSize: 12,
};

export type FilterMode = 'savings' | 'benchmarking' | 'report';

export type FilterWithRadioProps = {
  /** Which filter row is currently active */
  activeFilter: FilterMode;
  /** Options for the category dropdown */
  categoryOptions: string[];
  // ...
};

export function FilterWithRadio({ activeFilter, categoryOptions }: FilterWithRadioProps) {
  const [mode, setMode] = useState<FilterMode>(activeFilter);
  // ...

  useEffect(() => { setMode(activeFilter); }, [activeFilter]);
  // ...

  return ( /* KendoReact composition */ );
}
```

---

### Step 6 — Generate the Story File

Write `src/stories/<ComponentName>.stories.tsx`.

**Rules:**
- Import the component from its component file — never redefine it here
- File extension is always `.stories.tsx` (never `.ts`)
- Use `satisfies Meta<typeof X>` (CSF3, TypeScript strict)
- `argTypes` must have `control`, `description`, and `options` (for enums) for every prop
- Use realistic data from Figma text content as `args` values
- An `AllVariants` story shows all meaningful states side-by-side

**Template:**
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { FilterWithRadio } from '../components/FilterWithRadio/FilterWithRadio';

const meta = {
  title: 'Genpact/Filters/FilterWithRadio',
  component: FilterWithRadio,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    activeFilter: {
      control: 'radio',
      options: ['savings', 'benchmarking', 'report'],
      description: 'Which filter row is initially active',
    },
    categoryOptions: { control: 'object', description: '...' },
  },
} satisfies Meta<typeof FilterWithRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

const sharedArgs = {
  categoryOptions: ['All Categories', 'A4 Copy Paper', 'Office Supplies'],
  // ... realistic data from Figma
};

export const SavingsSummary: Story = {
  args: { ...sharedArgs, activeFilter: 'savings' },
};

// ... more variants

export const AllVariants: Story = {
  args: sharedArgs as Story['args'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['savings', 'benchmarking', 'report'] as const).map((mode) => (
        <div key={mode}>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: 11, color: '#98a2b3', marginBottom: 4 }}>{mode}</p>
          <FilterWithRadio {...sharedArgs} activeFilter={mode} />
        </div>
      ))}
    </div>
  ),
};
```

---

### Step 7 — Report

After writing both files:
1. Run `npx tsc --noEmit` — fix all errors before reporting done.
2. Output:
   - Paths of both files written
   - List of story variant names
   - KendoReact components used and their packages
   - Any visual elements that could not be mapped to KendoReact (needs manual review)
   - Confirmation that all items in the `REQUIREMENTS.md` Visual Sign-Off Checklist are satisfied (or note which require 👁️ designer review in Storybook)

---

## Key Principles

- **"Two files, always"** — Component in `src/components/<Name>/<Name>.tsx`, story in `src/stories/<Name>.stories.tsx`. Never embed the component inside the story file.
- **"Export everything the story needs"** — Component function, props type, and any enums must be exported from the component file.
- **"useEffect syncs props to state"** — Every prop that maps to internal state needs a `useEffect` so Storybook Controls update the component live.
- **"Always KendoReact primitives"** — Never use raw HTML form elements.
- **"name= groups radio buttons"** — All `RadioButton` elements in the same group must share a `name` prop.
- **"Figma variant names → PascalCase story names"** — Map Figma state names directly to story names for traceability.
- **"Realistic data from Figma text"** — Use actual Figma text content as initial `args` values.
- **"Layout from Figma spacing"** — Extract padding/gap/radius values from the reference code and apply via inline styles or style objects. Never absolute positioning.
- **"Never touch config"** — Only writes `src/components/` and `src/stories/` files. Never modifies `.storybook/`, `package.json`, or `DESIGN.md`.
