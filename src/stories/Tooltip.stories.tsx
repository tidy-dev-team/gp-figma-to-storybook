import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components/Tooltip/Tooltip';
import { Button } from '../components/Button/Button';

const POSITIONS = ['top', 'right', 'bottom', 'left', 'auto'] as const;
const THEME_COLORS = ['base', 'inverse', 'info', 'success', 'warning', 'error'] as const;

const meta = {
  title: 'Raw Kendo/Tooltip',
  component: Tooltip,
  parameters: { layout: 'padded' },
  argTypes: {
    position: { control: 'radio', options: POSITIONS, description: 'Tooltip placement' },
    themeColor: { control: 'select', options: THEME_COLORS, description: 'Kendo themeColor' },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { position: 'top', themeColor: 'base' },
  render: (args) => (
    <Tooltip {...args} anchorElement="target">
      <div style={{ display: 'flex', gap: 8 }}>
        <Button title="Save your work">Save</Button>
        <Button title="Discard changes">Cancel</Button>
      </div>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      {POSITIONS.filter((p) => p !== 'auto').map((p) => (
        <Tooltip key={p} position={p} anchorElement="target">
          <Button title={`Tooltip on ${p}`}>{p}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};
