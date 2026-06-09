import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '../components/Skeleton/Skeleton';

const SHAPES = ['text', 'rectangle', 'circle'] as const;

const meta = {
  title: 'Raw Kendo/Skeleton',
  component: Skeleton,
  parameters: { layout: 'padded' },
  argTypes: {
    shape: { control: 'radio', options: SHAPES, description: 'Kendo shape' },
    animation: { control: 'boolean', description: 'Animate the placeholder (wave)' },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: { shape: 'text', style: { width: 240 } },
};

export const Rectangle: Story = {
  args: { shape: 'rectangle', style: { width: 240, height: 120 } },
};

export const Circle: Story = {
  args: { shape: 'circle', style: { width: 48, height: 48 } },
};

export const CardPlaceholder: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', maxWidth: 320 }}>
      <Skeleton shape="circle" style={{ width: 48, height: 48 }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Skeleton shape="text" style={{ width: '80%' }} />
        <Skeleton shape="text" style={{ width: '60%' }} />
      </div>
    </div>
  ),
};
