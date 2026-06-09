import { DatePicker as KendoDatePicker, DatePickerProps } from '@progress/kendo-react-dateinputs';

/**
 * Raw KendoReact primitive — DatePicker.
 *
 * Thin pass-through over KendoReact's DatePicker; props type IS Kendo's own
 * `DatePickerProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { DatePickerProps };

export function DatePicker(props: DatePickerProps) {
  return <KendoDatePicker {...props} />;
}
