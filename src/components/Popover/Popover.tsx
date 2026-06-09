import { Popover as KendoPopover, PopoverProps } from '@progress/kendo-react-tooltip';

/**
 * Raw KendoReact primitive — Popover.
 *
 * Thin pass-through over KendoReact's Popover; props type IS Kendo's own
 * `PopoverProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { PopoverProps };

export function Popover(props: PopoverProps) {
  return <KendoPopover {...props} />;
}
