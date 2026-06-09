import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Dialog } from '../components/Dialog/Dialog';
import { Button } from '../components/Button/Button';

const meta = {
  title: 'Raw Kendo/Dialog',
  component: Dialog,
  parameters: { layout: 'padded' },
  argTypes: {
    title: { control: 'text', description: 'Dialog title' },
    width: { control: 'number', description: 'Dialog width (px)' },
    height: { control: 'number', description: 'Dialog height (px)' },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: 'Delete item', width: 360 },
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        {open && (
          <Dialog {...args} onClose={() => setOpen(false)}>
            <p style={{ margin: 0 }}>Are you sure you want to delete this item? This action cannot be undone.</p>
            <DialogActionsBar layout="end">
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button themeColor="error" onClick={() => setOpen(false)}>Delete</Button>
            </DialogActionsBar>
          </Dialog>
        )}
      </>
    );
  },
};

export const StretchedActions: Story = {
  args: { title: 'Confirm', width: 360 },
  render: (args) => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        {open && (
          <Dialog {...args} onClose={() => setOpen(false)}>
            <p style={{ margin: 0 }}>Save your changes before leaving?</p>
            <DialogActionsBar layout="stretched">
              <Button onClick={() => setOpen(false)}>Discard</Button>
              <Button themeColor="primary" onClick={() => setOpen(false)}>Save</Button>
            </DialogActionsBar>
          </Dialog>
        )}
      </>
    );
  },
};
