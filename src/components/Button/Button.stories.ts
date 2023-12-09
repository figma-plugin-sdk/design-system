import type { Meta, StoryObj } from "@storybook/marko";

import Button, { Input } from "./Button.marko";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
  },
} satisfies Meta<Input>;

/**
 * Stories
 */
type Story = StoryObj<Input>;

const commonArgs: Input = {
  renderBody: "Click me" as any,
  variant: "primary",
};

export const Primary: Story = {
  args: {
    ...commonArgs,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    ...commonArgs,
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    ...commonArgs,
    variant: "tertiary",
  },
};
