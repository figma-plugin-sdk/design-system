import type { Preview, MarkoRenderer } from "@storybook/marko";

import "../src/global.css";

import "../src/themes/index.css";

import * as decorators from "./decorators";

export default {
  decorators: [decorators.themes],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    layout: "centered",

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Preview;
