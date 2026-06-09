import type { Meta, StoryObj } from '@storybook/react';
import { MultiSelect } from '../components/MultiSelect/MultiSelect';

const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full', 'none'] as const;
const FILL_MODES = ['solid', 'flat', 'outline'] as const;
const DATA = ['Red', 'Green', 'Blue', 'Orange', 'Purple'];

const meta = {
  title: 'Raw Kendo/MultiSelect',
  component: MultiSelect,
  parameters: { layout: 'padded' },
  argTypes: {
    data: { control: 'object', description: 'List items' },
    defaultValue: { control: 'object', description: 'Initially selected values' },
    placeholder: { control: 'text', description: 'Placeholder text' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    fillMode: { control: 'radio', options: FILL_MODES, description: 'Kendo fillMode' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: DATA, defaultValue: ['Green', 'Blue'], placeholder: 'Select colors', size: 'medium', rounded: 'medium', fillMode: 'solid' },
};

export const Empty: Story = {
  args: { data: DATA, placeholder: 'Select colors', size: 'medium' },
};

export const Disabled: Story = {
  args: { data: DATA, defaultValue: ['Red'], disabled: true, size: 'medium' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 280 }}>
      {SIZES.map((s) => <MultiSelect key={s} {...args} size={s} />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } } },
  args: { data: DATA, defaultValue: ['Green'], fillMode: 'solid' },
};

export const FillModes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 280 }}>
      {FILL_MODES.map((f) => <MultiSelect key={f} {...args} fillMode={f} placeholder={f} />)}
    </div>
  ),
  argTypes: { fillMode: { table: { disable: true } }, placeholder: { table: { disable: true } } },
  args: { data: DATA, size: 'medium' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 280 }}>
      <MultiSelect data={DATA} defaultValue={['Green', 'Blue']} />
      <MultiSelect data={DATA} placeholder="Empty" />
      <MultiSelect data={DATA} defaultValue={['Red']} disabled />
    </div>
  ),
};
