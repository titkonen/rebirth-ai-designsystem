import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalPages: 5,
    defaultPage: 1,
  },
};

export const StartingOnPageThree: Story = {
  args: {
    totalPages: 5,
    defaultPage: 3,
  },
};
