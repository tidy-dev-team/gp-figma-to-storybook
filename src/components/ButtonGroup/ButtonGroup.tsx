import { ButtonGroup as KendoButtonGroup, ButtonGroupProps } from '@progress/kendo-react-buttons';

/**
 * Raw KendoReact primitive — ButtonGroup.
 *
 * Thin pass-through over KendoReact's ButtonGroup; props type IS Kendo's own
 * `ButtonGroupProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { ButtonGroupProps };

export function ButtonGroup(props: ButtonGroupProps) {
  return <KendoButtonGroup {...props} />;
}
