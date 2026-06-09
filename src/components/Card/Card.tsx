import { Card as KendoCard, CardProps } from '@progress/kendo-react-layout';

/**
 * Raw KendoReact primitive — Card.
 *
 * Thin pass-through over KendoReact's Card; props type IS Kendo's own
 * `CardProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { CardProps };

export function Card(props: CardProps) {
  return <KendoCard {...props} />;
}
