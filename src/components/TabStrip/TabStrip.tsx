import { TabStrip as KendoTabStrip, TabStripProps } from '@progress/kendo-react-layout';

/**
 * Raw KendoReact primitive — TabStrip.
 *
 * Thin pass-through over KendoReact's TabStrip; props type IS Kendo's own
 * `TabStripProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { TabStripProps };

export function TabStrip(props: TabStripProps) {
  return <KendoTabStrip {...props} />;
}
