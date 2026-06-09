import type { Meta, StoryObj } from '@storybook/react';
import { NotificationGroup } from '@progress/kendo-react-notification';
import { Notification } from '../components/Notification/Notification';

const STYLES = ['success', 'info', 'warning', 'error', 'none'] as const;

const meta = {
  title: 'Raw Kendo/Notification',
  component: Notification,
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: 'object', description: 'Kendo type — { style, icon }' },
    closable: { control: 'boolean', description: 'Show a close button' },
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: { style: 'success', icon: true }, closable: true },
  render: (args) => (
    <Notification {...args}>
      <span>Your changes have been saved.</span>
    </Notification>
  ),
};

export const Styles: Story = {
  render: () => (
    <NotificationGroup style={{ position: 'static', flexWrap: 'wrap', gap: 8 }}>
      {STYLES.map((style) => (
        <Notification key={style} type={{ style, icon: true }} closable>
          <span>{style} notification</span>
        </Notification>
      ))}
    </NotificationGroup>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Notification type={{ style: 'info', icon: false }}>
      <span>A plain notification with no icon.</span>
    </Notification>
  ),
};
