import type { Meta, StoryObj } from '@storybook/react';
import { StepsHorizontal } from '../components/StepsHorizontal/StepsHorizontal';

const meta = {
  title: 'Genpact/Navigation/StepsHorizontal',
  component: StepsHorizontal,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    steps: {
      control: 'object',
      description:
        'Ordered list of steps. Each step has a `label` string and a `status` of `"done"`, `"now"`, or `"next"`.',
    },
  },
} satisfies Meta<typeof StepsHorizontal>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Step 1 of 2 — current step is active */
export const TwoSteps: Story = {
  args: {
    steps: [
      { label: 'Stage now', status: 'now' },
      { label: 'Stage next', status: 'next' },
    ],
  },
};

/** Step 2 of 3 — one step completed, one active, one ahead */
export const ThreeSteps: Story = {
  args: {
    steps: [
      { label: 'Stage done', status: 'done' },
      { label: 'Stage now', status: 'now' },
      { label: 'Stage next', status: 'next' },
    ],
  },
};

/** Step 2 of 4 — one step completed, one active, two ahead */
export const FourSteps: Story = {
  args: {
    steps: [
      { label: 'Stage done', status: 'done' },
      { label: 'Stage now', status: 'now' },
      { label: 'Stage next', status: 'next' },
      { label: 'Stage next', status: 'next' },
    ],
  },
};

/** All three Figma variants stacked for visual comparison */
export const AllVariants: Story = {
  args: { steps: [] },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {[
        {
          label: '2 steps',
          steps: [
            { label: 'Stage now', status: 'now' as const },
            { label: 'Stage next', status: 'next' as const },
          ],
        },
        {
          label: '3 steps',
          steps: [
            { label: 'Stage done', status: 'done' as const },
            { label: 'Stage now', status: 'now' as const },
            { label: 'Stage next', status: 'next' as const },
          ],
        },
        {
          label: '4 steps',
          steps: [
            { label: 'Stage done', status: 'done' as const },
            { label: 'Stage now', status: 'now' as const },
            { label: 'Stage next', status: 'next' as const },
            { label: 'Stage next', status: 'next' as const },
          ],
        },
      ].map(({ label, steps }) => (
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
          <StepsHorizontal steps={steps} />
        </div>
      ))}
    </div>
  ),
};
