import { Stepper as KendoStepper, StepperProps } from '@progress/kendo-react-layout';

/**
 * Raw KendoReact primitive — Stepper.
 *
 * Thin pass-through over KendoReact's Stepper; props type IS Kendo's own
 * `StepperProps`. No Genpact branding (see CONTEXT.md → Raw KendoReact primitive).
 */
export type { StepperProps };

export function Stepper(props: StepperProps) {
  return <KendoStepper {...props} />;
}
