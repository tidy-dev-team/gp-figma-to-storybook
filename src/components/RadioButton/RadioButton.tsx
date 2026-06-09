import { RadioButton as KendoRadioButton, RadioButtonProps } from '@progress/kendo-react-inputs';

/**
 * Raw KendoReact primitive — RadioButton.
 *
 * Thin pass-through over KendoReact's RadioButton; props type IS Kendo's own
 * `RadioButtonProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { RadioButtonProps };

export function RadioButton(props: RadioButtonProps) {
  return <KendoRadioButton {...props} />;
}
