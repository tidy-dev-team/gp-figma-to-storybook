import { Dialog as KendoDialog, DialogProps } from '@progress/kendo-react-dialogs';

/**
 * Raw KendoReact primitive — Dialog.
 *
 * Thin pass-through over KendoReact's Dialog; props type IS Kendo's own
 * `DialogProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { DialogProps };

export function Dialog(props: DialogProps) {
  return <KendoDialog {...props} />;
}
