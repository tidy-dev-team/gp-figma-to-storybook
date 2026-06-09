import { AppBar as KendoAppBar, AppBarProps } from '@progress/kendo-react-layout';

/**
 * Raw KendoReact primitive — AppBar (Header / App bar).
 *
 * Thin pass-through over KendoReact's AppBar; props type IS Kendo's own
 * `AppBarProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { AppBarProps };

export function AppBar(props: AppBarProps) {
  return <KendoAppBar {...props} />;
}
