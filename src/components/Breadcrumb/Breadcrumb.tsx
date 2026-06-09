import { Breadcrumb as KendoBreadcrumb, BreadcrumbProps } from '@progress/kendo-react-layout';

/**
 * Raw KendoReact primitive — Breadcrumb.
 *
 * Thin pass-through over KendoReact's Breadcrumb; props type IS Kendo's own
 * `BreadcrumbProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { BreadcrumbProps };

export function Breadcrumb(props: BreadcrumbProps) {
  return <KendoBreadcrumb {...props} />;
}
