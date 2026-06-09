import type { Meta, StoryObj } from '@storybook/react';
import { ChipList } from '../components/ChipList/ChipList';

const SIZES = ['small', 'medium', 'large'] as const;
const SELECTION = ['none', 'single', 'multiple'] as const;
const DATA = [
  { text: 'Design', value: 'design' },
  { text: 'Engineering', value: 'engineering' },
  { text: 'Product', value: 'product' },
  { text: 'Research', value: 'research' },
];

const meta = {
  title: 'Raw Kendo/ChipList',
  component: ChipList,
  parameters: { layout: 'padded' },
  argTypes: {
    defaultData: { control: 'object', description: 'Chip items (the "tags")' },
    selection: { control: 'radio', options: SELECTION, description: 'Selection mode' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof ChipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultData: DATA, selection: 'multiple', size: 'medium' },
};

export const SingleSelection: Story = {
  args: { defaultData: DATA, selection: 'single', size: 'medium' },
};

export const Disabled: Story = {
  args: { defaultData: DATA, disabled: true, size: 'medium' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {SIZES.map((s) => <ChipList key={s} {...args} size={s} />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } } },
  args: { defaultData: DATA, selection: 'multiple' },
};
