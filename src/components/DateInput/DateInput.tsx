import { DateInput as KendoDateInput, DateInputProps } from '@progress/kendo-react-dateinputs';

/**
 * Raw KendoReact primitive — DateInput.
 *
 * Thin pass-through over KendoReact's DateInput; props type IS Kendo's own
 * `DateInputProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { DateInputProps };

export function DateInput(props: DateInputProps) {
  return <KendoDateInput {...props} />;
}
