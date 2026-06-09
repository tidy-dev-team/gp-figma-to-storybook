import { Calendar as KendoCalendar, CalendarProps } from '@progress/kendo-react-dateinputs';

/**
 * Raw KendoReact primitive — Calendar.
 *
 * Thin pass-through over KendoReact's Calendar; props type IS Kendo's own
 * `CalendarProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { CalendarProps };

export function Calendar(props: CalendarProps) {
  return <KendoCalendar {...props} />;
}
