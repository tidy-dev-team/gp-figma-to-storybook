import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from '../components/DateInput/DateInput';

const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full', 'none'] as const;
const FILL_MODES = ['solid', 'flat', 'outline'] as const;
const SAMPLE = new Date(2026, 5, 9);

const meta = {
  title: 'Raw Kendo/DateInput',
  component: DateInput,
  parameters: { layout: 'padded' },
  argTypes: {
    label: { control: 'text', description: 'Floating label' },
    format: { control: 'text', description: 'Date format (e.g. dd/MM/yyyy)' },
    spinners: { control: 'boolean', description: 'Show up/down spinners' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    fillMode: { control: 'radio', options: FILL_MODES, description: 'Kendo fillMode' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: SAMPLE, label: 'Date', size: 'medium', rounded: 'medium', fillMode: 'solid' },
};

export const WithSpinners: Story = {
  args: { defaultValue: SAMPLE, spinners: true, size: 'medium' },
};

export const Disabled: Story = {
  args: { defaultValue: SAMPLE, disabled: true, size: 'medium' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 240 }}>
      {SIZES.map((s) => <DateInput key={s} {...args} size={s} />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } } },
  args: { defaultValue: SAMPLE, fillMode: 'solid' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 240 }}>
      <DateInput defaultValue={SAMPLE} fillMode="solid" />
      <DateInput defaultValue={SAMPLE} fillMode="outline" />
      <DateInput defaultValue={SAMPLE} disabled />
    </div>
  ),
};
