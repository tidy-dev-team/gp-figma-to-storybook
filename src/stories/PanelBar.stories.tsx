import type { Meta, StoryObj } from '@storybook/react';
import { PanelBarItem } from '@progress/kendo-react-layout';
import { PanelBar } from '../components/PanelBar/PanelBar';

const EXPAND_MODES = ['single', 'multiple'] as const;

const meta = {
  title: 'Raw Kendo/PanelBar',
  component: PanelBar,
  parameters: { layout: 'padded' },
  argTypes: {
    expandMode: { control: 'radio', options: EXPAND_MODES, description: 'Allow one or many expanded panels' },
    animation: { control: 'boolean', description: 'Animate expand/collapse' },
  },
} satisfies Meta<typeof PanelBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Items = () => (
  <>
    <PanelBarItem title="General" expanded>
      <div style={{ padding: 12 }}>General settings</div>
    </PanelBarItem>
    <PanelBarItem title="Notifications">
      <div style={{ padding: 12 }}>Notification preferences</div>
    </PanelBarItem>
    <PanelBarItem title="Security">
      <div style={{ padding: 12 }}>Security options</div>
    </PanelBarItem>
  </>
);

export const Default: Story = {
  args: { expandMode: 'single' },
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <PanelBar {...args}><Items /></PanelBar>
    </div>
  ),
};

export const Multiple: Story = {
  args: { expandMode: 'multiple' },
  render: (args) => (
    <div style={{ maxWidth: 320 }}>
      <PanelBar {...args}><Items /></PanelBar>
    </div>
  ),
};
