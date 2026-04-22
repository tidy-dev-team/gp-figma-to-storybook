import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from '../components/Tab/Tab';

const meta = {
  title: 'Genpact/Tab',
  component: Tab,
  parameters: { layout: 'padded' },
  argTypes: {
    label: {
      control: 'text',
      description: 'Tab label text',
    },
    active: {
      control: 'boolean',
      description: 'Whether this tab is currently selected',
    },
    showIndicator: {
      control: 'boolean',
      description: 'Show the red status indicator dot',
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActiveWithIndicator: Story = {
  args: {
    label: 'Dashboard',
    active: true,
    showIndicator: true,
  },
};

export const ActiveNoIndicator: Story = {
  args: {
    label: 'Dashboard',
    active: true,
    showIndicator: false,
  },
};

export const InactiveWithIndicator: Story = {
  args: {
    label: 'Reports',
    active: false,
    showIndicator: true,
  },
};

export const InactiveNoIndicator: Story = {
  args: {
    label: 'Reports',
    active: false,
    showIndicator: false,
  },
};

export const TabGroup: Story = {
  render: () => {
    const tabs = [
      { label: 'Dashboard', showIndicator: false },
      { label: 'Tasks', showIndicator: true },
      { label: 'Reports', showIndicator: false },
      { label: 'Analytics', showIndicator: false },
    ];
    const [active, setActive] = useState(0);
    return (
      <div style={{ display: 'flex' }}>
        {tabs.map((tab, i) => (
          <Tab
            key={tab.label}
            label={tab.label}
            active={active === i}
            showIndicator={tab.showIndicator}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    );
  },
  args: { label: 'Dashboard', active: true, showIndicator: false },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 0, alignItems: 'flex-end' }}>
      <Tab label="Dashboard" active={true} showIndicator={true} />
      <Tab label="Dashboard" active={true} showIndicator={false} />
      <Tab label="Reports" active={false} showIndicator={true} />
      <Tab label="Reports" active={false} showIndicator={false} />
    </div>
  ),
  args: {
    label: 'Dashboard',
    active: true,
    showIndicator: false,
  },
};
