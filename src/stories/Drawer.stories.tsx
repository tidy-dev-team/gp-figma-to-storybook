import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DrawerContent } from '@progress/kendo-react-layout';
import { inboxIcon, gearIcon, calendarIcon } from '@progress/kendo-svg-icons';
import { Drawer } from '../components/Drawer/Drawer';
import { Button } from '../components/Button/Button';

const MODES = ['overlay', 'push'] as const;
const POSITIONS = ['start', 'end'] as const;
const ITEMS = [
  { text: 'Inbox', svgIcon: inboxIcon, selected: true },
  { text: 'Calendar', svgIcon: calendarIcon },
  { text: 'Settings', svgIcon: gearIcon },
];

const meta = {
  title: 'Raw Kendo/Drawer',
  component: Drawer,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    mode: { control: 'radio', options: MODES, description: 'Overlay or push content' },
    position: { control: 'radio', options: POSITIONS, description: 'Side of the screen' },
    mini: { control: 'boolean', description: 'Mini (icons-only) collapsed view' },
    animation: { control: 'boolean', description: 'Animate open/close' },
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { mode: 'push', position: 'start', mini: true },
  render: (args) => {
    const [expanded, setExpanded] = useState(true);
    return (
      <div style={{ height: 320 }}>
        <Button onClick={() => setExpanded((e) => !e)}>Toggle drawer</Button>
        <Drawer {...args} expanded={expanded} items={ITEMS} onSelect={() => undefined}>
          <DrawerContent>
            <div style={{ padding: 16 }}>Main content area</div>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};

export const Overlay: Story = {
  args: { mode: 'overlay', position: 'start', mini: false },
  render: (args) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <div style={{ height: 320 }}>
        <Button onClick={() => setExpanded((e) => !e)}>Toggle drawer</Button>
        <Drawer {...args} expanded={expanded} items={ITEMS} onSelect={() => setExpanded(false)}>
          <DrawerContent>
            <div style={{ padding: 16 }}>Main content area</div>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};
