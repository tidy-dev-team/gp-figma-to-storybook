import type { Meta, StoryObj } from '@storybook/react';
import { chevronDownIcon, caretAltDownIcon, searchIcon } from '@progress/kendo-svg-icons';
import { DropDownList } from '../components/DropDownList/DropDownList';

const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full'] as const;
const FILL_MODES = ['solid', 'flat', 'outline'] as const;
const DATA = ['Small', 'Medium', 'Large', 'Extra Large'];

// The toggle icon isn't an enum — surface it as a select + `mapping` so the icon
// capability shows up in Controls (and reaches the designer when mirrored to Figma).
const ICON_OPTIONS = ['none', 'chevronDown', 'caretAltDown', 'search'] as const;
const ICONS = { none: undefined, chevronDown: chevronDownIcon, caretAltDown: caretAltDownIcon, search: searchIcon };

const meta = {
  title: 'Raw Kendo/DropDownList',
  component: DropDownList,
  parameters: { layout: 'padded' },
  argTypes: {
    data: { control: 'object', description: 'List items' },
    defaultValue: { control: 'text', description: 'Initial selected value' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    fillMode: { control: 'radio', options: FILL_MODES, description: 'Kendo fillMode' },
    svgIcon: { control: 'select', options: ICON_OPTIONS, mapping: ICONS, description: 'Toggle SVG icon (Kendo svgIcon slot)' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof DropDownList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: DATA, defaultValue: 'Medium', size: 'medium', rounded: 'medium', fillMode: 'solid' },
};

export const Disabled: Story = {
  args: { data: DATA, defaultValue: 'Medium', disabled: true, size: 'medium' },
};

export const WithIcon: Story = {
  args: { data: DATA, defaultValue: 'Medium', svgIcon: caretAltDownIcon, size: 'medium', rounded: 'medium', fillMode: 'solid' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 240 }}>
      {SIZES.map((s) => <DropDownList key={s} {...args} size={s} defaultValue={s} />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } }, defaultValue: { table: { disable: true } } },
  args: { data: SIZES as unknown as string[], fillMode: 'solid' },
};

export const FillModes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 240 }}>
      {FILL_MODES.map((f) => <DropDownList key={f} {...args} fillMode={f} defaultValue={f} />)}
    </div>
  ),
  argTypes: { fillMode: { table: { disable: true } }, defaultValue: { table: { disable: true } } },
  args: { data: FILL_MODES as unknown as string[], size: 'medium' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 240 }}>
      <DropDownList data={DATA} defaultValue="Medium" size="medium" />
      <DropDownList data={DATA} defaultValue="Medium" disabled size="medium" />
      <DropDownList data={DATA} defaultValue="Medium" fillMode="outline" size="medium" />
      <DropDownList data={DATA} defaultValue="Medium" fillMode="flat" size="medium" />
    </div>
  ),
};
