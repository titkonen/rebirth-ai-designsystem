import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    children: 'Neutral',
  },
};

export const Brand: Story = {
  args: {
    children: 'Brand',
    tone: 'brand',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    tone: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    tone: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    tone: 'danger',
  },
};

export const Counter: Story = {
  args: {
    children: '3',
    tone: 'brand',
    variant: 'counter',
    'aria-label': '3 notifications',
  },
};
