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

### Layout / Display

| Figma Visual Pattern | KendoReact Component | Package | Key Props |
|---|---|---|---|
| Expandable panel | `ExpansionPanel` | `@progress/kendo-react-layout` | `title`, `expanded`, `onAction` |
| Tab bar | `TabStrip` | `@progress/kendo-react-layout` | `selected`, `onSelect`, children `TabStripTab` |
| Card container | `Card` | `@progress/kendo-react-layout` | `orientation`, children `CardHeader`, `CardBody` |
| Tooltip on hover | `Tooltip` | `@progress/kendo-react-tooltip` | `anchorElement`, `content`, `position` |

---

## Common Patterns

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
  @progress/kendo-theme-default
```
