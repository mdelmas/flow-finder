import Button from "./Button";
import { ButtonType } from "./ButtonType";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    type: {
      options: Object.values(ButtonType),
      mapping: Object.values(ButtonType),
      control: {
        type: "select",
        labels: Object.keys(ButtonType),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "test",
    type: ButtonType.FILLED,
    textColor: "white",
    backgroundColor: "secondaryblue",
  },
  render: function Render(args) {
    console.log("obj values", Object.values(ButtonType));
    console.log("obj keys", Object.keys(ButtonType));
    return <Button {...args} />;
  },
};
