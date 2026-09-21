import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from './Alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    children: 'Your profile is ready to review.',
  },
};

export const Success: Story = {
  args: {
    children: 'Your changes have been saved.',
    tone: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'This action may take a few minutes to complete.',
    tone: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'We could not complete the request.',
    tone: 'danger',
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Scheduled maintenance',
    children: 'Some features may be unavailable during this time.',
  },
};
