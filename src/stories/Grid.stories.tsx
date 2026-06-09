import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { process, type State } from '@progress/kendo-data-query';
import { GridColumn, GridToolbar, type GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { Grid } from '../components/Grid/Grid';
import { Button } from '../components/Button/Button';

// Free-tier Data Grid only: paging, sorting, basic filtering, toolbar.
// No virtualization / PDF / Excel export / grouping (those are premium).
const PRODUCTS = [
  { id: 1, name: 'Aurora Lamp', category: 'Lighting', price: 49, inStock: true },
  { id: 2, name: 'Basalt Desk', category: 'Furniture', price: 320, inStock: false },
  { id: 3, name: 'Cobalt Chair', category: 'Furniture', price: 140, inStock: true },
  { id: 4, name: 'Drift Rug', category: 'Decor', price: 89, inStock: true },
  { id: 5, name: 'Ember Heater', category: 'Appliances', price: 210, inStock: false },
  { id: 6, name: 'Flux Monitor', category: 'Electronics', price: 430, inStock: true },
  { id: 7, name: 'Glow Bulb', category: 'Lighting', price: 12, inStock: true },
  { id: 8, name: 'Haven Sofa', category: 'Furniture', price: 760, inStock: true },
  { id: 9, name: 'Iris Vase', category: 'Decor', price: 34, inStock: false },
  { id: 10, name: 'Juno Kettle', category: 'Appliances', price: 55, inStock: true },
];

const SIZES = ['small', 'medium'] as const;

const meta = {
  title: 'Raw Kendo/Grid',
  component: Grid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: 'radio', options: SIZES, description: 'Kendo size' },
    sortable: { control: 'boolean', description: 'Enable column sorting' },
    filterable: { control: 'boolean', description: 'Enable column filtering' },
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { size: 'medium', sortable: true, filterable: true },
  render: (args) => {
    const [dataState, setDataState] = useState<State>({ skip: 0, take: 5, sort: [], filter: undefined });
    const result = process(PRODUCTS, dataState);
    return (
      <Grid
        {...args}
        data={result.data}
        total={result.total}
        skip={dataState.skip}
        take={dataState.take}
        sort={dataState.sort}
        filter={dataState.filter}
        pageable={{ pageSizes: [5, 10] }}
        onDataStateChange={(e: GridDataStateChangeEvent) => setDataState(e.dataState)}
      >
        <GridToolbar>
          <span style={{ fontWeight: 600 }}>Products</span>
          <Button themeColor="primary" size="small">Add</Button>
        </GridToolbar>
        <GridColumn field="id" title="ID" width={70} />
        <GridColumn field="name" title="Name" />
        <GridColumn field="category" title="Category" />
        <GridColumn field="price" title="Price" format="{0:c0}" />
        <GridColumn field="inStock" title="In stock" />
      </Grid>
    );
  },
};

export const Plain: Story = {
  render: () => (
    <Grid data={PRODUCTS.slice(0, 5)}>
      <GridColumn field="name" title="Name" />
      <GridColumn field="category" title="Category" />
      <GridColumn field="price" title="Price" format="{0:c0}" />
    </Grid>
  ),
};
