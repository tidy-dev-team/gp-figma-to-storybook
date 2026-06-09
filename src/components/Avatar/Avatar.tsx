import { Avatar as KendoAvatar, AvatarProps } from '@progress/kendo-react-layout';

/**
 * Raw KendoReact primitive — Avatar.
 *
 * Thin pass-through over KendoReact's Avatar; props type IS Kendo's own
 * `AvatarProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { AvatarProps };

export function Avatar(props: AvatarProps) {
  return <KendoAvatar {...props} />;
}
