import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Reveal } from '@progress/kendo-react-animation';
import type { ExpansionPanelActionEvent } from '@progress/kendo-react-layout';
import { ExpansionPanel } from '../components/ExpansionPanel/ExpansionPanel';

const meta = {
  title: 'Raw Kendo/ExpansionPanel',
  component: ExpansionPanel,
  parameters: { layout: 'padded' },
  argTypes: {
    title: { control: 'text', description: 'Panel title' },
    subtitle: { control: 'text', description: 'Panel subtitle' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
} satisfies Meta<typeof ExpansionPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Billing details', subtitle: 'Tap to expand' },
  render: (args) => {
    const [expanded, setExpanded] = useState(true);
    return (
      <div style={{ maxWidth: 360 }}>
        <ExpansionPanel
          {...args}
          expanded={expanded}
          onAction={(e: ExpansionPanelActionEvent) => setExpanded(!e.expanded)}
        >
          <Reveal>
            {expanded && <div style={{ padding: 12 }}>Card ending in 4242 · expires 09/28</div>}
          </Reveal>
        </ExpansionPanel>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: { title: 'Locked section', subtitle: 'Unavailable', disabled: true },
  render: (args) => (
    <div style={{ maxWidth: 360 }}>
      <ExpansionPanel {...args} />
    </div>
  ),
};
