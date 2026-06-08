import { DropDownList as KendoDropDownList, DropDownListProps } from '@progress/kendo-react-dropdowns';

/**
 * Raw KendoReact primitive — DropDownList.
 *
 * Thin pass-through over KendoReact's DropDownList; props type IS Kendo's own
 * `DropDownListProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { DropDownListProps };

export function DropDownList(props: DropDownListProps) {
  return <KendoDropDownList {...props} />;
}
