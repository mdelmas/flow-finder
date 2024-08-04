import type { Meta, StoryObj } from '@storybook/react';

import RangeSlider from './RangeSlider';

const meta = {
  component: RangeSlider,
} satisfies Meta<typeof RangeSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "label",
    min: 0,
    max: 0
  }
};