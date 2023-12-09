import type { StorybookConfig } from "@storybook/marko-vite";

export default {
  stories: [
    // "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|mjs|cjs|ts|mts|cts|marko)",
    "../src/**/*.stories.@(js|mjs|cjs|ts|mts|cts|marko)",
  ],
  addons: [
    "@storybook/addon-essentials",
    // "@storybook/addon-docs",
    // "@storybook/addon-links",
    // "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/marko-vite",
    options: {},
  },
  // docs: {
  //   autodocs: "tag",
  // },
} satisfies StorybookConfig;
