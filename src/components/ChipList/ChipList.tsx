import { ChipList as KendoChipList, ChipListProps } from '@progress/kendo-react-buttons';

/**
 * Raw KendoReact primitive — ChipList (the "Tags" indicator).
 *
 * Thin pass-through over KendoReact's ChipList; props type IS Kendo's own
 * `ChipListProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { ChipListProps };

export function ChipList(props: ChipListProps) {
  return <KendoChipList {...props} />;
}
