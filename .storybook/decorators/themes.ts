import { MarkoRenderer } from "@storybook/marko";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

export default withThemeByDataAttribute<MarkoRenderer>({
  themes: {
    "Figma Light": "light",
    "Figma Dark": "dark",
    FigJam: "figjam",
  },
  defaultTheme: "Figma Light",
  attributeName: "data-theme",
});
