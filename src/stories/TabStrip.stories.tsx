import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TabStripTab, type TabStripSelectEventArguments } from '@progress/kendo-react-layout';
import { TabStrip } from '../components/TabStrip/TabStrip';

const SIZES = ['small', 'medium', 'large'] as const;
const TAB_POSITIONS = ['top', 'left', 'right', 'bottom'] as const;

const meta = {
  title: 'Raw Kendo/TabStrip',
  component: TabStrip,
  parameters: { layout: 'padded' },
  argTypes: {
    tabPosition: { control: 'radio', options: TAB_POSITIONS, description: 'Tab strip placement' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    animation: { control: 'boolean', description: 'Animate tab transitions' },
  },
} satisfies Meta<typeof TabStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

const Tabs = () => (
  <>
    <TabStripTab title="Overview"><div style={{ padding: 12 }}>Overview content</div></TabStripTab>
    <TabStripTab title="Details"><div style={{ padding: 12 }}>Details content</div></TabStripTab>
    <TabStripTab title="History"><div style={{ padding: 12 }}>History content</div></TabStripTab>
  </>
);

export const Default: Story = {
  args: { tabPosition: 'top', size: 'medium' },
  render: (args) => {
    const [selected, setSelected] = useState(0);
    return (
      <TabStrip {...args} selected={selected} onSelect={(e: TabStripSelectEventArguments) => setSelected(e.selected)}>
        <Tabs />
      </TabStrip>
    );
  },
};

export const LeftTabs: Story = {
  args: { tabPosition: 'left', size: 'medium' },
  render: (args) => {
    const [selected, setSelected] = useState(0);
    return (
      <TabStrip {...args} selected={selected} onSelect={(e: TabStripSelectEventArguments) => setSelected(e.selected)}>
        <Tabs />
      </TabStrip>
    );
  },
};
