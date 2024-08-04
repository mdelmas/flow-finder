import type { Meta, StoryObj } from '@storybook/react';

import ToggleButtonGroup from './ToggleButtonGroup';

const meta = {
  component: ToggleButtonGroup,
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "label",
    fieldName: "fieldName",
    options: {}
  }
};