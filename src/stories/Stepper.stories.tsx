import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { StepperChangeEvent } from '@progress/kendo-react-layout';
import { Stepper } from '../components/Stepper/Stepper';

const MODES = ['steps', 'labels'] as const;
const ORIENTATIONS = ['horizontal', 'vertical'] as const;
const ITEMS = [
  { label: 'Account' },
  { label: 'Details' },
  { label: 'Payment' },
  { label: 'Confirm' },
];

const meta = {
  title: 'Raw Kendo/Stepper',
  component: Stepper,
  parameters: { layout: 'padded' },
  argTypes: {
    mode: { control: 'radio', options: MODES, description: 'Step indicators or labels-only' },
    orientation: { control: 'radio', options: ORIENTATIONS, description: 'Layout direction' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { mode: 'steps', orientation: 'horizontal', items: ITEMS, value: 1 },
  render: (args) => {
    const [value, setValue] = useState(1);
    return (
      <div style={{ minWidth: 480 }}>
        <Stepper {...args} value={value} items={ITEMS} onChange={(e: StepperChangeEvent) => setValue(e.value)} />
      </div>
    );
  },
};

export const Vertical: Story = {
  args: { mode: 'steps', orientation: 'vertical', items: ITEMS, value: 1 },
  render: (args) => {
    const [value, setValue] = useState(1);
    return (
      <div style={{ height: 280 }}>
        <Stepper {...args} value={value} items={ITEMS} onChange={(e: StepperChangeEvent) => setValue(e.value)} />
      </div>
    );
  },
};
