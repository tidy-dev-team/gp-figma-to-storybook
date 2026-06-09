import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '../components/ButtonGroup/ButtonGroup';
import { Button } from '../components/Button/Button';

const meta = {
  title: 'Raw Kendo/ButtonGroup',
  component: ButtonGroup,
  parameters: { layout: 'padded' },
  argTypes: {
    disabled: { control: 'boolean', description: 'Disable every button in the group' },
    width: { control: 'text', description: 'Group width (CSS length)' },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ),
};

export const Selected: Story = {
  render: (args) => (
    <ButtonGroup {...args}>
      <Button togglable selected>Day</Button>
      <Button togglable>Week</Button>
      <Button togglable>Month</Button>
    </ButtonGroup>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button togglable selected>On</Button>
        <Button togglable>Off</Button>
      </ButtonGroup>
      <ButtonGroup disabled>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </div>
  ),
};
