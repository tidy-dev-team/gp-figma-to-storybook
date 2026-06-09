import { Window as KendoWindow, WindowProps } from '@progress/kendo-react-dialogs';

/**
 * Raw KendoReact primitive — Window.
 *
 * Thin pass-through over KendoReact's Window; props type IS Kendo's own
 * `WindowProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { WindowProps };

export function Window(props: WindowProps) {
  return <KendoWindow {...props} />;
}
