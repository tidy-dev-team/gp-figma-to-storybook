import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroupTwoState } from '../components/ToggleGroupTwoState/ToggleGroupTwoState';

const meta = {
  title: 'Genpact/Navigation/ToggleGroupTwoState',
  component: ToggleGroupTwoState,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    leftLabel: {
      control: 'text',
      description: 'Label for the left toggle button',
    },
    rightLabel: {
      control: 'text',
      description: 'Label for the right toggle button',
    },
    selected: {
      control: 'radio',
      options: ['left', 'right'],
      description: 'Which toggle is currently active',
    },
    variant: {
      control: 'radio',
      options: ['main', 'sub'],
      description: 'Main: accent fill on active; Sub: white fill on active',
    },
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof ToggleGroupTwoState>;

export default meta;
type Story = StoryObj<typeof meta>;

const sharedArgs = {
  leftLabel: 'Savings',
  rightLabel: 'Benchmark',
};

/** Main variant — left selected */
export const MainLeftSelected: Story = {
  args: { ...sharedArgs, selected: 'left', variant: 'main' },
};

/** Main variant — right selected */
export const MainRightSelected: Story = {
  args: { ...sharedArgs, selected: 'right', variant: 'main' },
};

/** Sub variant — left selected */
export const SubLeftSelected: Story = {
  args: { ...sharedArgs, selected: 'left', variant: 'sub' },
};

/** Sub variant — right selected */
export const SubRightSelected: Story = {
  args: { ...sharedArgs, selected: 'right', variant: 'sub' },
};

/** All four Figma states stacked for visual comparison */
export const AllVariants: Story = {
  args: { ...sharedArgs, selected: 'left', variant: 'main' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {(
        [
          { label: 'Main — left selected',  selected: 'left'  as const, variant: 'main' as const },
          { label: 'Main — right selected', selected: 'right' as const, variant: 'main' as const },
          { label: 'Sub — left selected',   selected: 'left'  as const, variant: 'sub'  as const },
          { label: 'Sub — right selected',  selected: 'right' as const, variant: 'sub'  as const },
        ]
      ).map(({ label, selected, variant }) => (
        <div key={label}>
          <p
            style={{
              fontFamily: 'Rubik, sans-serif',
              fontSize: 11,
              color: '#98a2b3',
              marginBottom: 6,
            }}
          >
            {label}
          </p>
          <ToggleGroupTwoState
            leftLabel="Savings"
            rightLabel="Benchmark"
            selected={selected}
            variant={variant}
          />
        </div>
      ))}
    </div>
  ),
};
