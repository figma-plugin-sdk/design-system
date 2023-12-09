import type { Story, StoryContext } from "@storybook/marko";
import ThemeDecorator from "../../src/components/theme-decorator.marko";

const themes = [
  { value: "figma-light", title: "Figma (Light)" },
  { value: "figma-dark", title: "Figma (Dark)" },
  { value: "figjam", title: "FigJam" },
];

export const globalType = {
  name: "Theme",
  defaultValue: "figma-light",
  toolbar: {
    icon: "mirror",
    items: themes,
    dynamicTitle: true,
  },
};

export type ThemeSelectorOptions = {
  items: {
    title: string;
    value: string;
  }[];

  defaultValue: string;
};

function createThemeGlobalType(options: ThemeSelectorOptions) {
  if (!options.items) {
    throw new Error("At least one item must be defined");
  }

  return {
    name: "Theme",
    defaultValue: options.defaultValue ?? options.items[0].value,
    toolbar: {
      icon: "mirror",
      items: options.items,
      dynamicTitle: true,
    },
  };
}

function createDecorator(story: Story, context: StoryContext) {
  const bodyElement = document.body;

  for (const theme of themes) {
    bodyElement.classList.remove(theme.value);
  }

  bodyElement.classList.add(context.globals.theme);

  return {
    component: ThemeDecorator,
    input: {
      renderBody: story,
    },
  };
}

export function createThemeSelector(options: ThemeSelectorOptions) {
  return {
    name: "Theme",
    globalType: createThemeGlobalType(options),
    decorator: createDecorator,
  };
}

export default createThemeSelector;
