import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Window } from '../components/Window/Window';
import { Button } from '../components/Button/Button';

const meta = {
  title: 'Raw Kendo/Window',
  component: Window,
  parameters: { layout: 'padded' },
  argTypes: {
    title: { control: 'text', description: 'Window title' },
    modal: { control: 'boolean', description: 'Block interaction with the page behind' },
    initialWidth: { control: 'number', description: 'Initial width (px)' },
    initialHeight: { control: 'number', description: 'Initial height (px)' },
  },
} satisfies Meta<typeof Window>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Activity log', modal: false, initialWidth: 420, initialHeight: 260 },
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open window</Button>
        {open && (
          <Window {...args} onClose={() => setOpen(false)}>
            <p style={{ margin: 0 }}>Drag the title bar to move, or drag an edge to resize.</p>
          </Window>
        )}
      </>
    );
  },
};

export const Modal: Story = {
  args: { title: 'Modal window', modal: true, initialWidth: 420, initialHeight: 220 },
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open window</Button>
        {open && (
          <Window {...args} onClose={() => setOpen(false)}>
            <p style={{ margin: 0 }}>This window blocks the page behind it.</p>
          </Window>
        )}
      </>
    );
  },
};
