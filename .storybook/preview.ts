import type { Preview } from "@storybook/marko";
import { createThemeSelector } from "./utils/theme-selector";

import "./themes.css";
import "../src/global.css";

const themes = createThemeSelector({
  items: [
    { value: "figma-light", title: "Figma (Light)" },
    { value: "figma-dark", title: "Figma (Dark)" },
    { value: "figjam", title: "FigJam" },
  ],
  defaultValue: "figma-light",
});

export const globalTypes = [themes.globalType];

// export const decorators = [themes.decorator];

export default {
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
