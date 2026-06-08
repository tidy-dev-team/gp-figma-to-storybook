import { Chip as KendoChip, ChipProps } from '@progress/kendo-react-buttons';

/**
 * Raw KendoReact primitive — Chip.
 *
 * Thin pass-through over KendoReact's Chip; props type IS Kendo's own
 * `ChipProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { ChipProps };

export function Chip(props: ChipProps) {
  return <KendoChip {...props} />;
}
