# genpact-figma-to-storybook

Transform a Figma component from the Genpact Design System into a production-ready Storybook CSF3 story file, composing the UI from KendoReact primitives.

---

## Purpose

Genpact's Figma components are visual compositions of KendoReact primitives (RadioButton, DropDownList, DatePicker, etc.) styled with the Genpact brand tokens. This skill reads the Figma design, maps each visual element to its KendoReact equivalent, and generates a `.stories.tsx` file with full Storybook Controls and one story per Figma variant.

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

## Workflow

### Step 1 — Parse Input

Extract from the Figma URL:
- `fileKey`: the path segment after `/design/` (e.g. `Ak8bNddcwozR84eZNnGdwQ`)
- `nodeId`: from `?node-id=` query param; convert `-` to `:` (e.g. `3493-3254` → `3493:3254`)

---

### Step 2 — Read Design Context

Call `get_design_context` with the extracted `fileKey` and `nodeId`. This returns:
- A screenshot of the component
- Reference React+Tailwind code (use as structural map only — do NOT use as output)
- Component variant metadata

Also read:
- `KENDOREACT_COMPONENTS.md` — the visual pattern → KendoReact component map
- `DESIGN.md` (if present) — Genpact brand tokens in DTCG format

---

### Step 3 — Decompose Structure

Analyze the reference code and screenshot to identify every visual sub-element. For each element:

1. Name the visual pattern (e.g. "radio button", "dropdown with chevron", "date field")
2. Look it up in `KENDOREACT_COMPONENTS.md`
3. Note the KendoReact component, package, and key props

**Rules:**
- Always use KendoReact primitives — never raw HTML `<input>`, `<select>`, or `<button>`
- If a pattern is not in `KENDOREACT_COMPONENTS.md`, use the closest match and flag it in the report
- Ignore absolute positioning from the reference code; use CSS flexbox/gap for layout

---

### Step 4 — Identify Variants

From the reference code and Figma component props, identify the distinct states/variants. Map each to a PascalCase story name.

Example mapping:
```
radioFilterChecked = "Default"              → Default
radioFilterChecked = "Radio filter-unchecked" → Unchecked
radioFilterChecked = "Radio filter-Unchecked1" → UncheckedAlt
radioFilterChecked = "Radio filter-checked2"   → CheckedWithCategory
radioFilterChecked = "Radio filter-checkedReport" → CheckedReport
```

Target 4–8 story variants. Prioritise: Default (the most representative state), then meaningful interaction states.

---

### Step 5 — Generate Component Wrapper

Create a thin TSX wrapper function (not exported as a component; only used in the story) that:
- Accepts props matching the story `args`
- Composes KendoReact primitives to reproduce the Figma layout
- Uses Genpact brand tokens inline (pull exact hex values from Figma reference code or `DESIGN.md`)
- Uses controlled state (`useState`) for interactive elements (selected radio, dropdown value, date)

**Layout principles:**
- Use `display: flex`, `gap`, `alignItems: center` — never absolute positioning
- Match Figma spacing/padding/radius values from the reference code
- The component wrapper lives inside the story file, not in a separate file

---

### Step 6 — Generate Story File

Write the file to `src/stories/<ComponentName>.stories.tsx`.

**Template:**
```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
// Import only what is actually used:
import { RadioButton } from '@progress/kendo-react-inputs';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { DatePicker } from '@progress/kendo-react-dateinputs';

// --- Component wrapper (internal to story file) ---
type FilterWithRadioProps = {
  filterMode: 'savings' | 'benchmarking' | 'report';
  categoryOptions: string[];
  supplierOptions: string[];
};

function FilterWithRadio({ filterMode, categoryOptions, supplierOptions }: FilterWithRadioProps) {
  const [selected, setSelected] = useState(filterMode);
  const [category, setCategory] = useState(categoryOptions[0]);
  const [supplier, setSupplier] = useState(supplierOptions[0]);
  const [date, setDate] = useState<Date | null>(new Date('2025-01-21'));

  return (
    // ... KendoReact composition matching Figma layout
  );
}

// --- Storybook meta ---
const meta = {
  title: 'Genpact/Filters/FilterWithRadio',
  component: FilterWithRadio,
  tags: ['autodocs'],
  argTypes: {
    filterMode: {
      control: 'select',
      options: ['savings', 'benchmarking', 'report'],
      description: 'Which filter row is active',
    },
    categoryOptions: { control: 'object', description: 'Options for the category dropdown' },
    supplierOptions: { control: 'object', description: 'Options for the supplier dropdown' },
  },
} satisfies Meta<typeof FilterWithRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- Story variants ---
export const Default: Story = {
  args: {
    filterMode: 'savings',
    categoryOptions: ['All Categories', 'Office Supplies', 'IT Equipment'],
    supplierOptions: ['All Suppliers', 'Supplier A', 'Supplier B'],
  },
};

// ... additional variants
```

**Rules:**
- File extension is always `.stories.tsx` (never `.ts`)
- Use `satisfies Meta<typeof X>` (CSF3, TypeScript strict)
- `argTypes` must have `control`, `description`, and `options` (for enums) for every prop
- Realistic initial data extracted from Figma text content beats generic placeholders
- Never add `@storybook/addon-pseudo-states` imports unless it is already in `package.json`
- Never modify `package.json`, `.storybook/preview.ts`, or any other existing file

---

### Step 7 — Report

After writing the file, output:
- File path written
- List of story variant names
- KendoReact components used and their packages
- Any visual elements that could not be mapped to KendoReact (needs manual review)

---

## Key Principles

- **"Always KendoReact primitives"** — If a visual element could be a KendoReact component, it must be. Never use raw HTML form elements.
- **"Figma variant names → PascalCase story names"** — Map Figma state names directly to story names for traceability.
- **"Realistic data from Figma text"** — Use the actual text content visible in the Figma design (e.g. "All Categories", "A4 Copy Paper", "21.1.2025") as initial `args` values.
- **"Layout from Figma spacing, not reference code positions"** — The reference code uses absolute Tailwind positioning. Extract padding/gap values numerically and apply via inline styles or CSS flexbox.
- **"Never touch config"** — The skill only writes `.stories.tsx` files. It does not install packages, modify `.storybook/`, or change `package.json`.
