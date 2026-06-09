import type { Meta, StoryObj } from '@storybook/react';
import { BadgeContainer } from '@progress/kendo-react-indicators';
import { Badge } from '../components/Badge/Badge';
import { Button } from '../components/Button/Button';

const SIZES = ['small', 'medium', 'large'] as const;
const ROUNDED = ['small', 'medium', 'large', 'full', 'none'] as const;
const FILL_MODES = ['solid', 'outline'] as const;
const THEME_COLORS = ['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error'] as const;
const POSITIONS = ['edge', 'outside', 'inside'] as const;

const meta = {
  title: 'Raw Kendo/Badge',
  component: Badge,
  parameters: { layout: 'padded' },
  argTypes: {
    children: { control: 'text', description: 'Badge content' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    rounded: { control: 'select', options: ROUNDED, description: 'Kendo corner rounding' },
    fillMode: { control: 'radio', options: FILL_MODES, description: 'Kendo fillMode' },
    themeColor: { control: 'select', options: THEME_COLORS, description: 'Kendo themeColor' },
    position: { control: 'radio', options: POSITIONS, description: 'Anchor position relative to container' },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: '5', themeColor: 'primary', size: 'medium', fillMode: 'solid', position: 'edge' },
  render: (args) => (
    <BadgeContainer>
      <Button>Inbox</Button>
      <Badge {...args} />
    </BadgeContainer>
  ),
};

export const ThemeColors: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
      {THEME_COLORS.map((c) => (
        <BadgeContainer key={c}>
          <Button>{c}</Button>
          <Badge {...args} themeColor={c}>9</Badge>
        </BadgeContainer>
      ))}
    </div>
  ),
  argTypes: { themeColor: { table: { disable: true } }, children: { table: { disable: true } } },
  args: { size: 'medium', fillMode: 'solid' },
};

export const Standalone: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge themeColor="success">New</Badge>
      <Badge themeColor="warning" fillMode="outline">Beta</Badge>
      <Badge themeColor="error">99+</Badge>
    </div>
  ),
};
