import { Badge as KendoBadge, BadgeProps } from '@progress/kendo-react-indicators';

/**
 * Raw KendoReact primitive — Badge.
 *
 * Thin pass-through over KendoReact's Badge; props type IS Kendo's own
 * `BadgeProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { BadgeProps };

export function Badge(props: BadgeProps) {
  return <KendoBadge {...props} />;
}
