import { Grid as KendoGrid, GridProps } from '@progress/kendo-react-grid';

/**
 * Raw KendoReact primitive — Grid (Data Grid, free feature set).
 *
 * Thin pass-through over KendoReact's Grid; props type IS Kendo's own
 * `GridProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { GridProps };

export function Grid(props: GridProps) {
  return <KendoGrid {...props} />;
}
