import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./index";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Marbella/Badge",
  argTypes: {},
};
export default meta;

type Story = StoryObj;

export const Primary: Story = (args: any) => <Badge>Badge</Badge>;
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
};
