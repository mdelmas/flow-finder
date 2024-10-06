import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { label: "my button", type: "", color: "" },
  render: function Render(args) {
    return <Button>{args.label}</Button>;
  },
};
