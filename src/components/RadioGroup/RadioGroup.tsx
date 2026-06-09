import { RadioGroup as KendoRadioGroup, RadioGroupProps } from '@progress/kendo-react-inputs';

/**
 * Raw KendoReact primitive — RadioGroup.
 *
 * Thin pass-through over KendoReact's RadioGroup; props type IS Kendo's own
 * `RadioGroupProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { RadioGroupProps };

export function RadioGroup(props: RadioGroupProps) {
  return <KendoRadioGroup {...props} />;
}
