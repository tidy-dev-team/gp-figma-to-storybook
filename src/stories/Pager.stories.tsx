import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { PageChangeEvent } from '@progress/kendo-react-data-tools';
import { Pager } from '../components/Pager/Pager';

const TYPES = ['numeric', 'input'] as const;
const SIZES = ['small', 'medium', 'large'] as const;
const TOTAL = 87;

const meta = {
  title: 'Raw Kendo/Pager',
  component: Pager,
  parameters: { layout: 'padded' },
  argTypes: {
    type: { control: 'radio', options: TYPES, description: 'Numeric buttons or input box' },
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    total: { control: 'number', description: 'Total record count' },
    pageSizes: { control: 'object', description: 'Selectable page sizes' },
  },
} satisfies Meta<typeof Pager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: 'numeric', size: 'medium', total: TOTAL, skip: 0, take: 10, pageSizes: [5, 10, 20] },
  render: (args) => {
    const [page, setPage] = useState({ skip: 0, take: 10 });
    return (
      <Pager
        {...args}
        skip={page.skip}
        take={page.take}
        onPageChange={(e: PageChangeEvent) => setPage({ skip: e.skip, take: e.take })}
      />
    );
  },
};

export const InputType: Story = {
  args: { type: 'input', size: 'medium', total: TOTAL, skip: 0, take: 10 },
  render: (args) => {
    const [page, setPage] = useState({ skip: 0, take: 10 });
    return (
      <Pager
        {...args}
        skip={page.skip}
        take={page.take}
        onPageChange={(e: PageChangeEvent) => setPage({ skip: e.skip, take: e.take })}
      />
    );
  },
};
