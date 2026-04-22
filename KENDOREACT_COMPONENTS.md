# KendoReact Component Map

This file is the primary reference for mapping Figma visual patterns to KendoReact components.
Used by the `/genpact-figma-to-storybook` skill during story generation.

---

## Genpact Brand Tokens

| Token | Value | Usage |
|---|---|---|
| `--text-primary` | `#15223F` | Primary text |
| `--primary-blue-700` | `#104683` | Selected state, active controls |
| `--gray-300` | `#D0D5DD` | Disabled/unchecked borders |
| `--gray-400` | `#98A2B3` | Unchecked control borders |
| `--gray-5` | `#C1CBE1` | Input/field borders |
| `--bg-filter` | `#E3E7EF` | Filter row background |
| `--basic-white` | `#FFFFFF` | Input backgrounds |

**Typography:** Font family `Rubik`, weights Light (300) and Regular (400), base size 12px, line-height 20px.

**Radius:** Filter rows `8px`, input fields `4px`.

---

## Component Map

### Inputs

| Figma Visual Pattern | KendoReact Component | Package | Key Props |
|---|---|---|---|
| Radio button (circle, checked/unchecked) | `RadioButton` | `@progress/kendo-react-inputs` | `value`, `checked`, `onChange`, `label`, `disabled` |
| Checkbox (square, checked/unchecked/indeterminate) | `Checkbox` | `@progress/kendo-react-inputs` | `value`, `checked`, `indeterminate`, `onChange`, `label`, `disabled` |
| Single-line text field | `Input` | `@progress/kendo-react-inputs` | `value`, `onChange`, `placeholder`, `disabled`, `readOnly` |
| Numeric field | `NumericTextBox` | `@progress/kendo-react-inputs` | `value`, `onChange`, `min`, `max`, `step`, `format` |
| Toggle/switch | `Switch` | `@progress/kendo-react-inputs` | `checked`, `onChange`, `disabled` |

### Dropdowns

| Figma Visual Pattern | KendoReact Component | Package | Key Props |
|---|---|---|---|
| Dropdown with chevron (single value) | `DropDownList` | `@progress/kendo-react-dropdowns` | `data`, `value`, `onChange`, `defaultItem`, `textField`, `dataItemKey`, `disabled` |
| Searchable dropdown / combobox | `ComboBox` | `@progress/kendo-react-dropdowns` | `data`, `value`, `onChange`, `filterable`, `onFilterChange` |
| Multi-value chips/tags selector | `MultiSelect` | `@progress/kendo-react-dropdowns` | `data`, `value`, `onChange`, `textField`, `dataItemKey`, `tags` |
| Autocomplete text field | `AutoComplete` | `@progress/kendo-react-dropdowns` | `data`, `value`, `onChange` |

### Date / Time

| Figma Visual Pattern | KendoReact Component | Package | Key Props |
|---|---|---|---|
| Date field with calendar icon | `DatePicker` | `@progress/kendo-react-dateinputs` | `value`, `onChange`, `min`, `max`, `format`, `disabled` |
| Date range (start + end) | `DateRangePicker` | `@progress/kendo-react-dateinputs` | `value`, `onChange`, `min`, `max`, `format` |
| Time field with clock icon | `TimePicker` | `@progress/kendo-react-dateinputs` | `value`, `onChange`, `format`, `disabled` |
| Date + time combined | `DateTimePicker` | `@progress/kendo-react-dateinputs` | `value`, `onChange`, `min`, `max`, `format` |

### Buttons

| Figma Visual Pattern | KendoReact Component | Package | Key Props |
|---|---|---|---|
| Standard button (primary/secondary/flat) | `Button` | `@progress/kendo-react-buttons` | `themeColor`, `fillMode`, `size`, `disabled`, `onClick`, `icon` |
| Icon-only button | `Button` | `@progress/kendo-react-buttons` | `icon`, `fillMode="flat"` |
| Split button (action + dropdown) | `SplitButton` | `@progress/kendo-react-buttons` | `text`, `items`, `onItemClick`, `themeColor` |
| Button group | `ButtonGroup` | `@progress/kendo-react-buttons` | wraps multiple `Button` children |

### Data & Filters

| Figma Visual Pattern | KendoReact Component | Package | Key Props |
|---|---|---|---|
| Visual filter builder (AND/OR groups) | `Filter` | `@progress/kendo-react-data-tools` | `fields`, `value`, `onChange` |
| Filter field config | `FieldSettings` (type) | `@progress/kendo-react-data-tools` | `name`, `label`, `filter`, `operators` |

### Icons

Use KendoReact SVG icons for **all** icons. Never use inline SVG or icon fonts when a KendoReact equivalent exists.

| Usage | Import | Package |
|---|---|---|
| Render an icon | `SvgIcon` | `@progress/kendo-react-common` |
| Icon definitions (665 icons) | `*Icon` named exports | `@progress/kendo-svg-icons` |

**Usage pattern:**
```tsx
import { SvgIcon } from '@progress/kendo-react-common';
import { searchIcon, chevronDownIcon, xIcon } from '@progress/kendo-svg-icons';

<SvgIcon icon={searchIcon} size="medium" />
```

**Icon lookup:** Search the full list at https://www.telerik.com/kendo-react-ui/components/common/svgicon  
Named exports follow the pattern `<camelCaseName>Icon` (e.g. `chevronDownIcon`, `filterIcon`, `calendarIcon`).

**When no KendoReact icon matches:** use inline SVG with `currentColor` fill and include a comment `// no kendo equivalent`.

**Size values:** `"xsmall"` | `"small"` | `"medium"` (default) | `"large"` | `"xlarge"` | `"xxlarge"` | `"xxxlarge"`

---

### Layout / Display

| Figma Visual Pattern | KendoReact Component | Package | Key Props |
|---|---|---|---|
| Expandable panel | `ExpansionPanel` | `@progress/kendo-react-layout` | `title`, `expanded`, `onAction` |
| Tab bar | `TabStrip` | `@progress/kendo-react-layout` | `selected`, `onSelect`, children `TabStripTab` |
| Card container | `Card` | `@progress/kendo-react-layout` | `orientation`, children `CardHeader`, `CardBody` |
| Tooltip on hover | `Tooltip` | `@progress/kendo-react-tooltip` | `anchorElement`, `content`, `position` |

---

## Common Patterns

### Overriding KendoReact theme colors

KendoReact's Default theme uses `!important` on fill/border/shadow colors for interactive states (checked, selected, focused). **Inline `style` props cannot override these.** Use a scoped `<style>` tag injected inside a wrapper element instead.

Pattern — wrap the component and inject scoped CSS:
```tsx
const WRAPPER_CLASS = 'genpact-my-component';

const overrideStyles = `
  .${WRAPPER_CLASS} .k-radio:checked,
  .${WRAPPER_CLASS} .k-radio.k-checked {
    border-color: #104683 !important;
    background-color: #104683 !important;
    box-shadow: none !important;
  }
`;

// In JSX:
<div className={WRAPPER_CLASS}>
  <style>{overrideStyles}</style>
  <RadioButton ... />
</div>
```

Apply the same pattern for:
- `RadioButton` → `.k-radio:checked`
- `Checkbox` → `.k-checkbox:checked`
- `Switch` → `.k-switch-on .k-switch-thumb-wrap`
- `Button` active/selected background → `.k-button-flat` (background is `transparent !important`)

For `Button` background specifically: apply the colored background to a **wrapper `<div>`** around the Button rather than injecting CSS, since the button must stay transparent for its content layout.

### Multi-element layouts inside a Button (`k-button-text` wrapper gotcha)

KendoReact's `Button` always wraps **all children** in a single `<span class="k-button-text">`. This means:

- `display: flex` and `gap` on the Button's `style` prop apply to the `<button>` element
- But the button has **only one flex child** — the `k-button-text` span
- All your content (text + icons + badges) ends up as siblings *inside* that one span with no flex context

**Consequence:** `gap` between elements inside a Button never works when applied to the Button itself.

**Fix:** Wrap the button's children in an explicit inner flex container:
```tsx
<Button fillMode="flat" style={{ color: activeColor, padding: '6px 8px' }}>
  {/* This inner span becomes the single child of k-button-text,
      giving us a real flex context between our elements */}
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
    {label}
    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: dotColor }} />
  </span>
</Button>
```

This applies any time a Button contains: label + icon, label + badge/dot, icon + text, etc.

---

### Controlled DropDownList
```tsx
const [value, setValue] = useState<string>('All Categories');
<DropDownList
  data={['All Categories', 'Office Supplies', 'IT Equipment']}
  value={value}
  onChange={(e) => setValue(e.value)}
/>
```

### RadioButton group
```tsx
const [selected, setSelected] = useState<string>('option-a');
<RadioButton value="option-a" checked={selected === 'option-a'} onChange={() => setSelected('option-a')} label="Option A" />
<RadioButton value="option-b" checked={selected === 'option-b'} onChange={() => setSelected('option-b')} label="Option B" />
```

### DatePicker with Genpact format
```tsx
<DatePicker value={new Date('2025-01-21')} format="d.M.yyyy" />
```

---

## Package Install Reference

```bash
# Install all commonly used KendoReact packages
npm install \
  @progress/kendo-react-inputs \
  @progress/kendo-react-dropdowns \
  @progress/kendo-react-dateinputs \
  @progress/kendo-react-data-tools \
  @progress/kendo-react-buttons \
  @progress/kendo-react-layout \
  @progress/kendo-react-common \
  @progress/kendo-react-intl \
  @progress/kendo-data-query \
  @progress/kendo-theme-default \
  @progress/kendo-svg-icons
```
