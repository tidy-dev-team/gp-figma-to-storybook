import { Checkbox as KendoCheckbox, CheckboxProps } from '@progress/kendo-react-inputs';

/**
 * Raw KendoReact primitive — Checkbox.
 *
 * Thin pass-through over KendoReact's Checkbox; props type IS Kendo's own
 * `CheckboxProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { CheckboxProps };

export function Checkbox(props: CheckboxProps) {
  return <KendoCheckbox {...props} />;
}
