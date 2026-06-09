import { PanelBar as KendoPanelBar, PanelBarProps } from '@progress/kendo-react-layout';

/**
 * Raw KendoReact primitive — PanelBar.
 *
 * Thin pass-through over KendoReact's PanelBar; props type IS Kendo's own
 * `PanelBarProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { PanelBarProps };

export function PanelBar(props: PanelBarProps) {
  return <KendoPanelBar {...props} />;
}
