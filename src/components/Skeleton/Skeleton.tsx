import { Skeleton as KendoSkeleton, SkeletonProps } from '@progress/kendo-react-indicators';

/**
 * Raw KendoReact primitive — Skeleton.
 *
 * Thin pass-through over KendoReact's Skeleton; props type IS Kendo's own
 * `SkeletonProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { SkeletonProps };

export function Skeleton(props: SkeletonProps) {
  return <KendoSkeleton {...props} />;
}
