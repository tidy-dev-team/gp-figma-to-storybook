import { Drawer as KendoDrawer, DrawerProps } from '@progress/kendo-react-layout';

/**
 * Raw KendoReact primitive — Drawer.
 *
 * Thin pass-through over KendoReact's Drawer; props type IS Kendo's own
 * `DrawerProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { DrawerProps };

export function Drawer(props: DrawerProps) {
  return <KendoDrawer {...props} />;
}
