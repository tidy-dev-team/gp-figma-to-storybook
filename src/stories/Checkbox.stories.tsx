import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/Checkbox/Checkbox';

const SIZES = ['small', 'medium', 'large'] as const;

const meta = {
  title: 'Raw Kendo/Checkbox',
  component: Checkbox,
  parameters: { layout: 'padded' },
  argTypes: {
    label: { control: 'text', description: 'Checkbox label' },
    checked: { control: 'boolean', description: 'Checked state' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'radio', options: SIZES, description: 'Kendo corner rounding' },
    labelPlacement: { control: 'radio', options: ['before', 'after'], description: 'Label position' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Accept terms', checked: true, size: 'medium', labelPlacement: 'after' },
};

export const Unchecked: Story = {
  args: { label: 'Subscribe to updates', checked: false, size: 'medium' },
};

export const Disabled: Story = {
  args: { label: 'Disabled option', checked: true, disabled: true, size: 'medium' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {SIZES.map((s) => <Checkbox key={s} {...args} size={s} label={s} />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } }, label: { table: { disable: true } } },
  args: { checked: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Checkbox label="Checked" checked size="medium" />
      <Checkbox label="Unchecked" checked={false} size="medium" />
      <Checkbox label="Disabled checked" checked disabled size="medium" />
      <Checkbox label="Disabled unchecked" checked={false} disabled size="medium" />
      <Checkbox label="Label before" checked labelPlacement="before" size="medium" />
    </div>
  ),
};
