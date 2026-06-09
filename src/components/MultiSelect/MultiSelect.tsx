import { MultiSelect as KendoMultiSelect, MultiSelectProps } from '@progress/kendo-react-dropdowns';

/**
 * Raw KendoReact primitive — MultiSelect.
 *
 * Thin pass-through over KendoReact's MultiSelect; props type IS Kendo's own
 * `MultiSelectProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { MultiSelectProps };

export function MultiSelect(props: MultiSelectProps) {
  return <KendoMultiSelect {...props} />;
}
