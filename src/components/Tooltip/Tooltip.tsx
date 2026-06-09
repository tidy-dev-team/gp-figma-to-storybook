import { Tooltip as KendoTooltip, TooltipProps } from '@progress/kendo-react-tooltip';

/**
 * Raw KendoReact primitive — Tooltip.
 *
 * Thin pass-through over KendoReact's Tooltip; props type IS Kendo's own
 * `TooltipProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { TooltipProps };

export function Tooltip(props: TooltipProps) {
  return <KendoTooltip {...props} />;
}
