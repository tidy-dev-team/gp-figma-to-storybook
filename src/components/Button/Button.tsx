import { Button as KendoButton, ButtonProps } from '@progress/kendo-react-buttons';

/**
 * Raw KendoReact primitive — Button.
 *
 * A thin pass-through over KendoReact's Button: every prop is forwarded
 * unchanged and the props type IS Kendo's own `ButtonProps`. No Genpact
 * branding, no bespoke styling — branding arrives later, globally, via
 * src/theme/kendo-overrides.css (see CONTEXT.md → Branding).
 */
export type { ButtonProps };

export function Button(props: ButtonProps) {
  return <KendoButton {...props} />;
}
