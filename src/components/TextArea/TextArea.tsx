import { TextArea as KendoTextArea, TextAreaProps } from '@progress/kendo-react-inputs';

/**
 * Raw KendoReact primitive — TextArea.
 *
 * Thin pass-through over KendoReact's TextArea; props type IS Kendo's own
 * `TextAreaProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { TextAreaProps };

export function TextArea(props: TextAreaProps) {
  return <KendoTextArea {...props} />;
}
