import { Pager as KendoPager, PagerProps } from '@progress/kendo-react-data-tools';

/**
 * Raw KendoReact primitive — Pager.
 *
 * Thin pass-through over KendoReact's Pager; props type IS Kendo's own
 * `PagerProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { PagerProps };

export function Pager(props: PagerProps) {
  return <KendoPager {...props} />;
}
