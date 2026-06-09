import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from '../components/RadioButton/RadioButton';

const SIZES = ['small', 'medium', 'large'] as const;

const meta = {
  title: 'Raw Kendo/RadioButton',
  component: RadioButton,
  parameters: { layout: 'padded' },
  argTypes: {
    label: { control: 'text', description: 'Radio label' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    defaultChecked: { control: 'boolean', description: 'Initial checked state' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Option A', size: 'medium', defaultChecked: true },
};

export const Disabled: Story = {
  args: { label: 'Disabled', size: 'medium', disabled: true },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {SIZES.map((s) => <RadioButton key={s} {...args} size={s} label={s} defaultChecked />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } }, label: { table: { disable: true } } },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <RadioButton name="g" label="Selected" defaultChecked />
      <RadioButton name="g" label="Unselected" />
      <RadioButton name="g" label="Disabled" disabled />
    </div>
  ),
};
