import type { Meta, StoryObj } from '@storybook/react';
import { TextBox } from '../components/TextBox/TextBox';

const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full'] as const;
const FILL_MODES = ['solid', 'flat', 'outline'] as const;

const meta = {
  title: 'Raw Kendo/TextBox',
  component: TextBox,
  parameters: { layout: 'padded' },
  argTypes: {
    placeholder: { control: 'text', description: 'Placeholder text' },
    defaultValue: { control: 'text', description: 'Initial value (uncontrolled)' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    fillMode: { control: 'radio', options: FILL_MODES, description: 'Kendo fillMode' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: 'Enter your name', size: 'medium', rounded: 'medium', fillMode: 'solid' },
};

export const WithValue: Story = {
  args: { defaultValue: 'Genpact', size: 'medium', fillMode: 'solid' },
};

export const Disabled: Story = {
  args: { defaultValue: 'Read only', disabled: true, size: 'medium' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 280 }}>
      {SIZES.map((s) => <TextBox key={s} {...args} size={s} placeholder={s} />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } }, placeholder: { table: { disable: true } } },
  args: { fillMode: 'solid' },
};

export const FillModes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 280 }}>
      {FILL_MODES.map((f) => <TextBox key={f} {...args} fillMode={f} placeholder={f} />)}
    </div>
  ),
  argTypes: { fillMode: { table: { disable: true } }, placeholder: { table: { disable: true } } },
  args: { size: 'medium' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 280 }}>
      <TextBox placeholder="Empty" size="medium" />
      <TextBox defaultValue="With value" size="medium" />
      <TextBox defaultValue="Disabled" disabled size="medium" />
      <TextBox placeholder="Outline" fillMode="outline" size="medium" />
      <TextBox placeholder="Flat" fillMode="flat" size="medium" />
    </div>
  ),
};
