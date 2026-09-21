import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './Popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: 'More actions',
    children: (
      <>
        <span className="rb-popover__title">Project actions</span>
        <span className="rb-popover__body">Choose an action for this project.</span>
        <button className="rb-button rb-button--primary rb-button--sm" type="button">Share project</button>
      </>
    ),
  },
};

export const Top: Story = {
  args: {
    trigger: 'Open details',
    position: 'top',
    children: (
      <>
        <span className="rb-popover__title">Details</span>
        <span className="rb-popover__body">This popover opens above its trigger.</span>
      </>
    ),
  },
};
