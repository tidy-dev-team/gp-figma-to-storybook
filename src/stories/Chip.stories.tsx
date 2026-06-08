import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from '../components/Chip/Chip';

const THEME_COLORS = ['base', 'info', 'success', 'warning', 'error'] as const;
const FILL_MODES = ['solid', 'outline'] as const;
const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full'] as const;

const meta = {
  title: 'Raw Kendo/Chip',
  component: Chip,
  parameters: { layout: 'padded' },
  argTypes: {
    text: { control: 'text', description: 'Chip label' },
    themeColor: { control: 'select', options: THEME_COLORS, description: 'Kendo themeColor' },
    fillMode: { control: 'radio', options: FILL_MODES, description: 'Kendo fillMode' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    removable: { control: 'boolean', description: 'Show remove icon' },
    selected: { control: 'boolean', description: 'Selected state' },
    onRemove: { action: 'remove' },
    onClick: { action: 'click' },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { text: 'Chip', value: 'chip', themeColor: 'base', fillMode: 'solid', size: 'medium', rounded: 'medium' },
};

export const ThemeColors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {THEME_COLORS.map((c) => <Chip key={c} {...args} themeColor={c} text={c} value={c} />)}
    </div>
  ),
  argTypes: { themeColor: { table: { disable: true } }, text: { table: { disable: true } } },
  args: { fillMode: 'solid', size: 'medium' },
};

export const FillModes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {FILL_MODES.map((f) => <Chip key={f} {...args} fillMode={f} text={f} value={f} />)}
    </div>
  ),
  argTypes: { fillMode: { table: { disable: true } }, text: { table: { disable: true } } },
  args: { themeColor: 'info', size: 'medium' },
};

export const Removable: Story = {
  args: { text: 'Removable', value: 'removable', themeColor: 'info', fillMode: 'solid', size: 'medium', removable: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {FILL_MODES.map((f) => (
        <div key={f} style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ width: 64, fontSize: 12, color: '#667085' }}>{f}</span>
          {THEME_COLORS.map((c) => <Chip key={c} fillMode={f} themeColor={c} text={c} value={`${f}-${c}`} size="medium" />)}
        </div>
      ))}
    </div>
  ),
};
