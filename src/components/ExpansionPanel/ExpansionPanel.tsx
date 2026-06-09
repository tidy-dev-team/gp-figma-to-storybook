import { ExpansionPanel as KendoExpansionPanel, ExpansionPanelProps } from '@progress/kendo-react-layout';

/**
 * Raw KendoReact primitive — ExpansionPanel (the "expander").
 *
 * Thin pass-through over KendoReact's ExpansionPanel; props type IS Kendo's own
 * `ExpansionPanelProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { ExpansionPanelProps };

export function ExpansionPanel(props: ExpansionPanelProps) {
  return <KendoExpansionPanel {...props} />;
}
