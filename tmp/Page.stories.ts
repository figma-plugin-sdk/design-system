import type { Meta, StoryObj } from "@storybook/marko";

import Page from "./Page.marko";

//👇 Imports all Header stories
import * as HeaderStories from "./Header.stories";

const meta = {
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    ...HeaderStories.LoggedIn.args,
  },
};
