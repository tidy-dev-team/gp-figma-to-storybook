import type { Meta, StoryObj } from '@storybook/react';
import { CardHeader, CardTitle, CardSubtitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { Card } from '../components/Card/Card';
import { Button } from '../components/Button/Button';

const TYPES = ['default', 'primary', 'info', 'success', 'warning', 'error'] as const;
const ORIENTATIONS = ['vertical', 'horizontal'] as const;

const meta = {
  title: 'Raw Kendo/Card',
  component: Card,
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: 'select', options: TYPES, description: 'Kendo card type (themeColor)' },
    orientation: { control: 'radio', options: ORIENTATIONS, description: 'Content flow direction' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const Inner = () => (
  <>
    <CardHeader>
      <CardTitle>Quarterly report</CardTitle>
      <CardSubtitle>Q2 2026</CardSubtitle>
    </CardHeader>
    <CardBody>
      <p style={{ margin: 0 }}>Revenue is up 12% compared to the previous quarter.</p>
    </CardBody>
    <CardActions>
      <Button fillMode="flat">Dismiss</Button>
      <Button themeColor="primary">View</Button>
    </CardActions>
  </>
);

export const Default: Story = {
  args: { type: 'default', orientation: 'vertical' },
  render: (args) => <div style={{ maxWidth: 320 }}><Card {...args}><Inner /></Card></div>,
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {TYPES.map((t) => (
        <div key={t} style={{ width: 220 }}>
          <Card type={t}><Inner /></Card>
        </div>
      ))}
    </div>
  ),
};
