import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Project overview',
    description: 'Track the latest activity in your workspace.',
    children: 'Your project is up to date.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Team settings',
    description: 'Manage access and notification preferences.',
    children: 'Three team members have access to this project.',
    footer: 'Last updated today',
  },
};

export const ContentOnly: Story = {
  args: {
    children: 'A simple card can contain any content.',
  },
};
