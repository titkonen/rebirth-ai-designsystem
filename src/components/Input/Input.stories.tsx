import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your email',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    type: 'email',
  },
};

export const WithHint: Story = {
  args: {
    label: 'Username',
    hint: 'Use between 3 and 20 characters.',
    placeholder: 'your-name',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email address',
    error: 'Enter a valid email address.',
    value: 'not-an-email',
    type: 'email',
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Account ID',
    value: 'RB-1042',
    disabled: true,
    readOnly: true,
  },
};
