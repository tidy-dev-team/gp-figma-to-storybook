import { TextBox as KendoTextBox, TextBoxProps } from '@progress/kendo-react-inputs';

/**
 * Raw KendoReact primitive — TextBox.
 *
 * Thin pass-through over KendoReact's TextBox; props type IS Kendo's own
 * `TextBoxProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { TextBoxProps };

export function TextBox(props: TextBoxProps) {
  return <KendoTextBox {...props} />;
}
