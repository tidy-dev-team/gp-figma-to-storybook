import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../components/Calendar/Calendar';

const SAMPLE = new Date(2026, 5, 9);

const meta = {
  title: 'Raw Kendo/Calendar',
  component: Calendar,
  parameters: { layout: 'padded' },
  argTypes: {
    disabled: { control: 'boolean', description: 'Disabled state' },
    weekNumber: { control: 'boolean', description: 'Show ISO week-number column' },
    navigation: { control: 'boolean', description: 'Show the navigation sidebar' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultValue: SAMPLE, navigation: true },
};

export const WithWeekNumbers: Story = {
  args: { defaultValue: SAMPLE, weekNumber: true, navigation: true },
};

export const Disabled: Story = {
  args: { defaultValue: SAMPLE, disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      <Calendar defaultValue={SAMPLE} />
      <Calendar defaultValue={SAMPLE} weekNumber />
    </div>
  ),
};
