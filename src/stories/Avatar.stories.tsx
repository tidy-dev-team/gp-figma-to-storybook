import type { Meta, StoryObj } from '@storybook/react';
import { SvgIcon } from '@progress/kendo-react-common';
import { userIcon } from '@progress/kendo-svg-icons';
import { Avatar } from '../components/Avatar/Avatar';

const TYPES = ['text', 'icon', 'image'] as const;
const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full', 'none'] as const;
const FILL_MODES = ['solid', 'outline'] as const;
const THEME_COLORS = ['base', 'primary', 'secondary', 'tertiary'] as const;

const meta = {
  title: 'Raw Kendo/Avatar',
  component: Avatar,
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: 'radio', options: TYPES, description: 'Avatar content type' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    fillMode: { control: 'radio', options: FILL_MODES, description: 'Kendo fillMode' },
    themeColor: { control: 'select', options: THEME_COLORS, description: 'Kendo themeColor' },
    border: { control: 'boolean', description: 'Show border' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = {
  args: { type: 'text', themeColor: 'primary', size: 'medium', rounded: 'full', fillMode: 'solid' },
  render: (args) => <Avatar {...args}>GP</Avatar>,
};

export const Icon: Story = {
  args: { type: 'icon', themeColor: 'primary', size: 'medium', rounded: 'full', fillMode: 'solid' },
  render: (args) => <Avatar {...args}><SvgIcon icon={userIcon} /></Avatar>,
};

export const ThemeColors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12 }}>
      {THEME_COLORS.map((c) => <Avatar key={c} {...args} themeColor={c}>{c[0].toUpperCase()}</Avatar>)}
    </div>
  ),
  argTypes: { themeColor: { table: { disable: true } } },
  args: { type: 'text', size: 'medium', rounded: 'full', fillMode: 'solid' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      {SIZES.map((s) => <Avatar key={s} {...args} size={s}>GP</Avatar>)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } } },
  args: { type: 'text', themeColor: 'primary', rounded: 'full', fillMode: 'solid' },
};
