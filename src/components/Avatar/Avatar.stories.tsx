import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const avatarImage = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 96 96%22%3E%3Crect width=%2296%22 height=%2296%22 fill=%22%2393c5fd%22/%3E%3Ccircle cx=%2248%22 cy=%2236%22 r=%2218%22 fill=%22%231e3a8a%22/%3E%3Cpath d=%22M18 88c3-22 15-34 30-34s27 12 30 34%22 fill=%22%231e3a8a%22/%3E%3C/svg%3E';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Initials: Story = {
  args: {
    name: 'Ada Lovelace',
    size: 'md',
  },
};

export const WithImage: Story = {
  args: {
    src: avatarImage,
    alt: 'Portrait avatar',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    name: 'Ada Lovelace',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    name: 'Ada Lovelace',
    size: 'lg',
  },
};
