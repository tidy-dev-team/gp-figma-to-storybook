import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from '../components/TextArea/TextArea';

const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full', 'none'] as const;
const FILL_MODES = ['solid', 'flat', 'outline'] as const;

const meta = {
  title: 'Raw Kendo/TextArea',
  component: TextArea,
  parameters: { layout: 'padded' },
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text' },
    defaultValue: { control: 'text', description: 'Initial value' },
    rows: { control: 'number', description: 'Visible rows' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    fillMode: { control: 'radio', options: FILL_MODES, description: 'Kendo fillMode' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Enter a comment…', rows: 4, size: 'medium', rounded: 'medium', fillMode: 'solid' },
};

export const Disabled: Story = {
  args: { defaultValue: 'Read-only content', rows: 4, size: 'medium', disabled: true },
};

export const FillModes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      {FILL_MODES.map((f) => <TextArea key={f} {...args} fillMode={f} placeholder={f} />)}
    </div>
  ),
  argTypes: { fillMode: { table: { disable: true } }, placeholder: { table: { disable: true } } },
  args: { rows: 2, size: 'medium' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      {SIZES.map((s) => <TextArea key={s} {...args} size={s} placeholder={s} />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } }, placeholder: { table: { disable: true } } },
  args: { rows: 2, fillMode: 'solid' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 320 }}>
      <TextArea placeholder="Solid" fillMode="solid" rows={2} />
      <TextArea placeholder="Outline" fillMode="outline" rows={2} />
      <TextArea defaultValue="Disabled" disabled rows={2} />
    </div>
  ),
};
