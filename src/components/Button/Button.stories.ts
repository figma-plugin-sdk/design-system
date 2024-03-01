import type { Meta, StoryObj } from "@storybook/marko";

import Button, { Input } from "./Button.marko";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/vBQD0M0G6zZfxu5ctekUD8/Figma-Plugin-SDK-Design-System?type=design&node-id=148-8002&mode=design&t=ZTf0R45O5VWbPhrY-4",
    },
    status: {
      type: "beta", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
      url: "http://www.url.com/status", // will make the tag a link
      // statuses: {
      //   add custom statuses for this story here
      // }
    },
  },
} satisfies Meta<Input>;

export default meta;
/**
 * Stories
 */
type Story = StoryObj<Input>;

const commonArgs: Partial<Input> = {
  // renderBody: "Click me" as any,
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
