import type { Meta, StoryObj } from '@storybook/react';
import { Tag, TagColor } from '../components/Tag/Tag';

const meta = {
  title: 'Genpact/Tag',
  component: Tag,
  parameters: { layout: 'padded' },
  argTypes: {
    label: {
      control: 'text',
      description: 'Tag label text',
    },
    color: {
      control: 'select',
      options: ['red', 'orange', 'purple', 'blue', 'green'] satisfies TagColor[],
      description: 'Semantic color',
    },
    variant: {
      control: 'radio',
      options: ['subtle', 'colored'],
      description: 'subtle = gray bg/border · colored = tinted bg + color border',
    },
    shape: {
      control: 'radio',
      options: ['square', 'rounded'],
      description: 'square = 8px radius · rounded = 24px radius',
    },
    size: {
      control: 'radio',
      options: ['xs', 'sm', 'md'],
      description: 'Tag size',
    },
    showDot: {
      control: 'boolean',
      description: 'Show red status dot on the left',
    },
    showInfo: {
      control: 'boolean',
      description: 'Show secondary info text',
    },
    infoText: {
      control: 'text',
      description: 'Text shown when showInfo is true',
    },
    showDelete: {
      control: 'boolean',
      description: 'Show the × delete icon',
    },
    onDelete: { action: 'deleted' },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

const ALL_COLORS: TagColor[] = ['red', 'orange', 'purple', 'blue', 'green'];
const LABELS: Record<TagColor, string> = {
  red:    "Tag's Name",
  orange: "Tag's Name",
  purple: 'Ready For Process',
  blue:   'Ready for processing',
  green:  'Invoice paid',
};

// Single tag — all Controls are live here
export const Default: Story = {
  args: {
    label: "Tag's Name",
    color: 'purple',
    variant: 'colored',
    shape: 'rounded',
    size: 'md',
    showDot: false,
    showInfo: false,
    infoText: 'info',
    showDelete: false,
  },
};

// Grid stories show all 5 colors at once.
// variant / shape / size Controls apply; color is disabled (all colors always shown).
export const SubtleSquare: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {ALL_COLORS.map((c) => (
        <Tag key={c} label={LABELS[c]} color={c} variant={args.variant} shape={args.shape} size={args.size} />
      ))}
    </div>
  ),
  argTypes: { color: { table: { disable: true } }, label: { table: { disable: true } }, showDot: { table: { disable: true } }, showInfo: { table: { disable: true } }, infoText: { table: { disable: true } }, showDelete: { table: { disable: true } } },
  args: { label: "Tag's Name", color: 'red', variant: 'subtle', shape: 'square', size: 'md' },
};

export const ColoredSquare: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {ALL_COLORS.map((c) => (
        <Tag key={c} label={LABELS[c]} color={c} variant={args.variant} shape={args.shape} size={args.size} />
      ))}
    </div>
  ),
  argTypes: { color: { table: { disable: true } }, label: { table: { disable: true } }, showDot: { table: { disable: true } }, showInfo: { table: { disable: true } }, infoText: { table: { disable: true } }, showDelete: { table: { disable: true } } },
  args: { label: "Tag's Name", color: 'red', variant: 'colored', shape: 'square', size: 'md' },
};

export const SubtleRounded: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {ALL_COLORS.map((c) => (
        <Tag key={c} label={LABELS[c]} color={c} variant={args.variant} shape={args.shape} size={args.size} />
      ))}
    </div>
  ),
  argTypes: { color: { table: { disable: true } }, label: { table: { disable: true } }, showDot: { table: { disable: true } }, showInfo: { table: { disable: true } }, infoText: { table: { disable: true } }, showDelete: { table: { disable: true } } },
  args: { label: "Tag's Name", color: 'red', variant: 'subtle', shape: 'rounded', size: 'md' },
};

export const ColoredRounded: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {ALL_COLORS.map((c) => (
        <Tag key={c} label={LABELS[c]} color={c} variant={args.variant} shape={args.shape} size={args.size} />
      ))}
    </div>
  ),
  argTypes: { color: { table: { disable: true } }, label: { table: { disable: true } }, showDot: { table: { disable: true } }, showInfo: { table: { disable: true } }, infoText: { table: { disable: true } }, showDelete: { table: { disable: true } } },
  args: { label: "Tag's Name", color: 'red', variant: 'colored', shape: 'rounded', size: 'md' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
      <Tag label="Extra small" color="blue" variant="colored" shape="rounded" size="xs" />
      <Tag label="Small" color="blue" variant="colored" shape="rounded" size="sm" />
      <Tag label="Medium" color="blue" variant="colored" shape="rounded" size="md" />
      <Tag label="Extra small" color="green" variant="subtle" shape="square" size="xs" />
      <Tag label="Small" color="green" variant="subtle" shape="square" size="sm" />
      <Tag label="Medium" color="green" variant="subtle" shape="square" size="md" />
    </div>
  ),
  argTypes: { color: { table: { disable: true } }, label: { table: { disable: true } }, variant: { table: { disable: true } }, shape: { table: { disable: true } }, size: { table: { disable: true } }, showDot: { table: { disable: true } }, showInfo: { table: { disable: true } }, infoText: { table: { disable: true } }, showDelete: { table: { disable: true } } },
  args: { label: 'Invoice paid', color: 'green', variant: 'subtle', shape: 'square', size: 'md' },
};

export const WithExtras: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Tag label="With dot" color="purple" variant="colored" shape="rounded" size="md" showDot />
      <Tag label="With info" color="blue" variant="colored" shape="rounded" size="md" showInfo infoText="12" />
      <Tag label="Deletable" color="red" variant="colored" shape="rounded" size="md" showDelete />
      <Tag label="All extras" color="orange" variant="colored" shape="rounded" size="md" showDot showInfo infoText="5" showDelete />
    </div>
  ),
  argTypes: { color: { table: { disable: true } }, label: { table: { disable: true } }, variant: { table: { disable: true } }, shape: { table: { disable: true } }, size: { table: { disable: true } }, showDot: { table: { disable: true } }, showInfo: { table: { disable: true } }, infoText: { table: { disable: true } }, showDelete: { table: { disable: true } } },
  args: { label: "Tag's Name", color: 'orange', variant: 'colored', shape: 'rounded', size: 'md' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {ALL_COLORS.map((c) => <Tag key={c} label={LABELS[c]} color={c} variant="subtle" shape="square" size="md" />)}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {ALL_COLORS.map((c) => <Tag key={c} label={LABELS[c]} color={c} variant="colored" shape="square" size="md" />)}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {ALL_COLORS.map((c) => <Tag key={c} label={LABELS[c]} color={c} variant="subtle" shape="rounded" size="md" />)}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {ALL_COLORS.map((c) => <Tag key={c} label={LABELS[c]} color={c} variant="colored" shape="rounded" size="md" />)}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {ALL_COLORS.map((c) => <Tag key={c} label={LABELS[c]} color={c} variant="subtle" shape="rounded" size="sm" />)}
      </div>
    </div>
  ),
  argTypes: { color: { table: { disable: true } }, label: { table: { disable: true } }, variant: { table: { disable: true } }, shape: { table: { disable: true } }, size: { table: { disable: true } }, showDot: { table: { disable: true } }, showInfo: { table: { disable: true } }, infoText: { table: { disable: true } }, showDelete: { table: { disable: true } } },
  args: { label: "Tag's Name", color: 'red', variant: 'subtle', shape: 'square', size: 'md' },
};
