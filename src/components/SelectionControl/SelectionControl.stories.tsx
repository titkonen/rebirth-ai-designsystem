import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, Radio as RadioControl, Stepper, Switch } from './SelectionControl';

const meta = {
  title: 'Components/SelectionControl',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CheckboxDefault: Story = {
  args: {
    label: 'Subscribe to product updates',
  },
  render: () => <Checkbox label="Subscribe to product updates" />,
};

export const CheckboxCard: Story = {
  args: {
    label: 'Enable team access',
  },
  render: () => (
    <Checkbox
      label="Enable team access"
      hint="Allow members of your team to view this project."
      variant="card"
    />
  ),
};

export const CheckboxError: Story = {
  args: {
    label: 'Accept the terms and conditions',
  },
  render: () => (
    <Checkbox
      label="Accept the terms and conditions"
      error="You must accept the terms before continuing."
    />
  ),
};

export const Radio: Story = {
  args: {
    label: 'Monthly billing',
  },
  render: () => (
    <RadioControl
      label="Monthly billing"
      hint="You can change your plan at any time."
      name="billing-cycle"
      defaultChecked
    />
  ),
};

export const SwitchControl: Story = {
  args: {
    label: 'Email notifications',
  },
  render: () => (
    <Switch
      label="Email notifications"
      hint="Receive updates about activity in your workspace."
      defaultChecked
    />
  ),
};

export const StepperControl: Story = {
  args: {
    label: 'Seats',
  },
  render: () => (
    <Stepper
      label="Seats"
      hint="Choose between 1 and 10 seats."
      min={1}
      max={10}
      defaultValue={3}
    />
  ),
};
