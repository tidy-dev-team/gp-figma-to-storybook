import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../components/Switch/Switch';

const SIZES = ['small', 'medium', 'large'] as const;

const meta = {
  title: 'Raw Kendo/Switch',
  component: Switch,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    defaultChecked: { control: 'boolean', description: 'Initial on/off state' },
    onLabel: { control: 'text', description: 'Label shown in the on state' },
    offLabel: { control: 'text', description: 'Label shown in the off state' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 'medium', defaultChecked: true },
};

export const Off: Story = {
  args: { size: 'medium', defaultChecked: false },
};

export const Disabled: Story = {
  args: { size: 'medium', defaultChecked: true, disabled: true },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {SIZES.map((s) => <Switch key={s} {...args} size={s} defaultChecked />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } } },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Switch defaultChecked />
      <Switch defaultChecked={false} />
      <Switch defaultChecked disabled />
    </div>
  ),
};
