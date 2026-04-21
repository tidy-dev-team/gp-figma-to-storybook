import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilterWithRadio } from '../components/FilterWithRadio/FilterWithRadio';

const meta = {
  title: 'Genpact/Filters/FilterWithRadio',
  component: FilterWithRadio,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    activeFilter: {
      control: 'radio',
      options: ['savings', 'benchmarking', 'report'],
      description: 'Which filter row is initially active',
      table: { defaultValue: { summary: 'savings' } },
    },
    categoryOptions: {
      control: 'object',
      description: 'Options shown in the category dropdown',
    },
    supplierOptions: {
      control: 'object',
      description: 'Options shown in the supplier dropdown (Benchmarking row only)',
    },
    defaultDate: {
      control: 'date',
      description: 'Initial date value in the Report date picker',
    },
  },
} satisfies Meta<typeof FilterWithRadio>;

export default meta;
type Story = StoryObj<typeof meta>;

const sharedArgs = {
  categoryOptions: ['All Categories', 'A4 Copy Paper', 'Office Supplies', 'IT Equipment', 'Facilities'],
  supplierOptions: ['All Suppliers', 'Supplier A', 'Supplier B', 'Supplier C'],
  defaultDate: new Date('2025-01-21'),
};

/** Default state — Potential Savings Summary active, category dropdown visible */
export const SavingsSummary: Story = {
  args: { ...sharedArgs, activeFilter: 'savings' },
};

/** Item Benchmarking active — two dropdowns visible (category + supplier) */
export const Benchmarking: Story = {
  args: { ...sharedArgs, activeFilter: 'benchmarking' },
};

/** Report active — category dropdown + "ending on" label + date picker */
export const Report: Story = {
  args: { ...sharedArgs, activeFilter: 'report' },
};

/** All three variants shown together for visual overview */
export const AllVariants: Story = {
  args: sharedArgs as Story['args'],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['savings', 'benchmarking', 'report'] as const).map((mode) => (
        <div key={mode}>
          <p style={{ fontFamily: 'Rubik, sans-serif', fontSize: 11, color: '#98a2b3', marginBottom: 4 }}>
            {mode}
          </p>
          <FilterWithRadio {...sharedArgs} activeFilter={mode} />
        </div>
      ))}
    </div>
  ),
};
