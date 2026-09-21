import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tab, Tabs } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tabs',
  },
  render: () => (
    <Tabs aria-label="Project views">
      <Tab selected>Overview</Tab>
      <Tab>Activity</Tab>
      <Tab>Settings</Tab>
    </Tabs>
  ),
};

export const Pill: Story = {
  args: {
    children: 'Pill tabs',
  },
  render: () => (
    <Tabs className="rb-tabs--pill" aria-label="Project views">
      <Tab className="rb-tab--pill" selected>Overview</Tab>
      <Tab className="rb-tab--pill">Activity</Tab>
      <Tab className="rb-tab--pill">Settings</Tab>
    </Tabs>
  ),
};

export const WithDisabledTab: Story = {
  args: {
    children: 'Tabs with a disabled tab',
  },
  render: () => (
    <Tabs aria-label="Project views">
      <Tab selected>Overview</Tab>
      <Tab disabled>Activity</Tab>
      <Tab>Settings</Tab>
    </Tabs>
  ),
};
