import type { Meta, StoryObj } from '@storybook/react';
import { AppBarSection, AppBarSpacer } from '@progress/kendo-react-layout';
import { AppBar } from '../components/AppBar/AppBar';
import { Button } from '../components/Button/Button';

const POSITIONS = ['top', 'bottom'] as const;
const THEME_COLORS = ['base', 'primary', 'secondary', 'tertiary', 'inverse'] as const;

const meta = {
  title: 'Raw Kendo/AppBar',
  component: AppBar,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    position: { control: 'radio', options: POSITIONS, description: 'Static positioning' },
    themeColor: { control: 'select', options: THEME_COLORS, description: 'Kendo themeColor' },
  },
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => (
  <>
    <AppBarSection>
      <strong>Genpact</strong>
    </AppBarSection>
    <AppBarSpacer style={{ width: 16 }} />
    <AppBarSection>
      <nav style={{ display: 'flex', gap: 12 }}>
        <span>Dashboard</span>
        <span>Reports</span>
        <span>Settings</span>
      </nav>
    </AppBarSection>
    <AppBarSpacer />
    <AppBarSection>
      <Button fillMode="flat">Sign out</Button>
    </AppBarSection>
  </>
);

export const Default: Story = {
  args: { themeColor: 'base', position: 'top' },
  render: (args) => <AppBar {...args}><Content /></AppBar>,
};

export const ThemeColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {THEME_COLORS.map((c) => <AppBar key={c} themeColor={c}><Content /></AppBar>)}
    </div>
  ),
};
