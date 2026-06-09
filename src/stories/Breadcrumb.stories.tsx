import type { Meta, StoryObj } from '@storybook/react';
import { homeIcon } from '@progress/kendo-svg-icons';
import { Breadcrumb } from '../components/Breadcrumb/Breadcrumb';

const SIZES = ['small', 'medium', 'large'] as const;
const DATA = [
  { id: 'home', text: 'Home', svgIcon: homeIcon },
  { id: 'products', text: 'Products' },
  { id: 'analytics', text: 'Analytics' },
];

const meta = {
  title: 'Raw Kendo/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'padded' },
  argTypes: {
    data: { control: 'object', description: 'Breadcrumb items' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size (padding)' },
    disabled: { control: 'boolean', description: 'Disabled state' },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: DATA, size: 'medium' },
};

export const Disabled: Story = {
  args: { data: DATA, disabled: true, size: 'medium' },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {SIZES.map((s) => <Breadcrumb key={s} {...args} size={s} />)}
    </div>
  ),
  argTypes: { size: { table: { disable: true } } },
  args: { data: DATA },
};
