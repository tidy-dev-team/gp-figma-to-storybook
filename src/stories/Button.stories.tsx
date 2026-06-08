import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button/Button';

const THEME_COLORS = ['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'dark', 'light', 'inverse'] as const;
const FILL_MODES = ['solid', 'outline', 'flat', 'link', 'clear'] as const;
const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full'] as const;

const meta = {
  title: 'Raw Kendo/Button',
  component: Button,
  parameters: { layout: 'padded' },
  argTypes: {
    children: { control: 'text', description: 'Button label (children)' },
    themeColor: { control: 'select', options: THEME_COLORS, description: 'Kendo themeColor' },
    fillMode: { control: 'select', options: FILL_MODES, description: 'Kendo fillMode' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    togglable: { control: 'boolean', description: 'Toggle button behavior' },
    selected: { control: 'boolean', description: 'Selected state (togglable)' },
    onClick: { action: 'click' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Button', themeColor: 'primary', fillMode: 'solid', size: 'medium', rounded: 'medium' },
};

export const ThemeColors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {THEME_COLORS.map((c) => <Button key={c} {...args} themeColor={c}>{c}</Button>)}
    </div>
  ),
  argTypes: { themeColor: { table: { disable: true } }, children: { table: { disable: true } } },
  args: { fillMode: 'solid', size: 'medium' },
};

export const FillModes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {FILL_MODES.map((f) => <Button key={f} {...args} fillMode={f}>{f}</Button>)}
    </div>
  ),
  argTypes: { fillMode: { table: { disable: true } }, children: { table: { disable: true } } },
  args: { themeColor: 'primary', size: 'medium' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {SIZES.map((s) => <Button key={s} {...args} size={s}>{s}</Button>)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } }, children: { table: { disable: true } } },
  args: { themeColor: 'primary', fillMode: 'solid' },
};

export const Disabled: Story = {
  args: { children: 'Disabled', themeColor: 'primary', fillMode: 'solid', size: 'medium', disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {FILL_MODES.map((f) => (
        <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ width: 64, fontSize: 12, color: '#667085' }}>{f}</span>
          {['base', 'primary', 'success', 'error'].map((c) => (
            <Button key={c} fillMode={f} themeColor={c as (typeof THEME_COLORS)[number]} size="medium">{c}</Button>
          ))}
        </div>
      ))}
    </div>
  ),
};
