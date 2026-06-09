import { Notification as KendoNotification, NotificationProps } from '@progress/kendo-react-notification';

/**
 * Raw KendoReact primitive — Notification (toast).
 *
 * Thin pass-through over KendoReact's Notification; props type IS Kendo's own
 * `NotificationProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { NotificationProps };

export function Notification(props: NotificationProps) {
  return <KendoNotification {...props} />;
}
