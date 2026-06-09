import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../components/Popover/Popover';
import { Button } from '../components/Button/Button';

const POSITIONS = ['top', 'right', 'bottom', 'left'] as const;

const meta = {
  title: 'Raw Kendo/Popover',
  component: Popover,
  parameters: { layout: 'padded' },
  argTypes: {
    position: { control: 'radio', options: POSITIONS, description: 'Popover placement' },
    title: { control: 'text', description: 'Popover header' },
    callout: { control: 'boolean', description: 'Show the pointer callout' },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { position: 'top', title: 'More info', callout: true },
  render: (args) => {
    const [show, setShow] = useState(false);
    const anchor = useRef<HTMLSpanElement>(null);
    return (
      <div style={{ padding: 60 }}>
        <span ref={anchor}>
          <Button onClick={() => setShow((s) => !s)}>Toggle popover</Button>
        </span>
        <Popover {...args} show={show} anchor={anchor.current}>
          <div style={{ maxWidth: 220 }}>This popover is anchored to the button and toggled on click.</div>
        </Popover>
      </div>
    );
  },
};
