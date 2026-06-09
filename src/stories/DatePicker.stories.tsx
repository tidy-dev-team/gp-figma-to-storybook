import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../components/DatePicker/DatePicker';

const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full', 'none'] as const;
const FILL_MODES = ['solid', 'flat', 'outline'] as const;
const SAMPLE = new Date(2026, 5, 9);

const meta = {
  title: 'Raw Kendo/DatePicker',
  component: DatePicker,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    fillMode: { control: 'radio', options: FILL_MODES, description: 'Kendo fillMode' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: SAMPLE, size: 'medium', rounded: 'medium', fillMode: 'solid' },
};

export const Disabled: Story = {
  args: { defaultValue: SAMPLE, disabled: true, size: 'medium' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 240 }}>
      {SIZES.map((s) => <DatePicker key={s} {...args} size={s} />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } } },
  args: { defaultValue: SAMPLE, fillMode: 'solid' },
};

export const FillModes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 240 }}>
      {FILL_MODES.map((f) => <DatePicker key={f} {...args} fillMode={f} />)}
    </div>
  ),
  argTypes: { fillMode: { table: { disable: true } } },
  args: { defaultValue: SAMPLE, size: 'medium' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 240 }}>
      <DatePicker defaultValue={SAMPLE} fillMode="solid" />
      <DatePicker defaultValue={SAMPLE} fillMode="outline" />
      <DatePicker defaultValue={SAMPLE} disabled />
    </div>
  ),
};
