import { Switch as KendoSwitch, SwitchProps } from '@progress/kendo-react-inputs';

/**
 * Raw KendoReact primitive — Switch.
 *
 * Thin pass-through over KendoReact's Switch; props type IS Kendo's own
 * `SwitchProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { SwitchProps };

export function Switch(props: SwitchProps) {
  return <KendoSwitch {...props} />;
}
