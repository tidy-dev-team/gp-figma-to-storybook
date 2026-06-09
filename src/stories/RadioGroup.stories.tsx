import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from '../components/RadioGroup/RadioGroup';

const LAYOUTS = ['horizontal', 'vertical'] as const;
const DATA = [
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'SMS', value: 'sms' },
];

const meta = {
  title: 'Raw Kendo/RadioGroup',
  component: RadioGroup,
  parameters: { layout: 'padded' },
  argTypes: {
    layout: { control: 'radio', options: LAYOUTS, description: 'Item layout direction' },
    disabled: { control: 'boolean', description: 'Disable the whole group' },
    data: { control: 'object', description: 'Radio items' },
    defaultValue: { control: 'text', description: 'Initially selected value' },
    onChange: { action: 'change' },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: DATA, defaultValue: 'email', layout: 'vertical' },
};

export const Horizontal: Story = {
  args: { data: DATA, defaultValue: 'email', layout: 'horizontal' },
};

export const Disabled: Story = {
  args: { data: DATA, defaultValue: 'email', disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <RadioGroup data={DATA} defaultValue="email" layout="vertical" />
      <RadioGroup data={DATA} defaultValue="phone" layout="horizontal" />
      <RadioGroup data={DATA} defaultValue="sms" disabled />
    </div>
  ),
};
