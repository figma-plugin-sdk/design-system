# Figma Plugin Design System

A Figma Plugin design system and component library in [Marko](https://markojs.com) made by [CVA Plugin Team](https://cva.desgin)

# Installation

```
pnpm install
```

## Overview

This project is powered by [@marko/run](https://github.com/marko-js/run).

- Run `pnpm run dev` to start the development server
- Run `pnpm run build` to build a production-ready node.js server
- Run `pnpm run preview` to run the production server

## Adding Components

Pages map to the directory structure. You can add additional pages by creating files/directories under `src/routes` with `+page.marko` files.
Learn more in the [`@marko/run` docs](https://github.com/marko-js/run/#file-based-routing).

# To Do

## Configure Addons

### Documentation

- [ ] [`@storybook/addon-docs`](https://storybook.js.org/addons/@storybook/addon-docs/):

  > Document component usage and properties in Markdown

- [ ] [`storybook-addon-docs-tabs`](https://storybook.js.org/addons/storybook-addon-docs-tabs):

  > A Storybook addon that adds tabs to the Docs Addon.

  ![](https://raw.githubusercontent.com/cliedelt/storybook-addon-docs-tabs/HEAD/screenshot.png)

- [ ] [`@storybook/addon-storysource`](https://storybook.js.org/addons/@storybook/addon-storysource/):

  > View a story’s source code to see how it works and paste into your app

  ![addon storysource preview](https://raw.githubusercontent.com/storybookjs/storybook/next/code/addons/storysource/docs/demo.gif)

### Versioning and Publishing

- [ ] Configure component statuses for [@etchteam/storybook-addon-status](https://github.com/etchteam/storybook-addon-status)

### Prototyping

- [ ] Configure [@storybook/addon-links](https://storybook.js.org/addons/@storybook/addon-links/)

  > The Storybook Links addon can be used to create links that navigate between stories in Storybook.

### Speeding up Development

- [ ] [Create a custom ChatGPT to create stories](https://storybook.js.org/blog/build-your-own-storybook-gpt/)

- [ ] [storybook-vscode-component](https://storybook.js.org/addons/storybook-vscode-component)

  > A simple Storybook addon to open the component source in VS Code

- [ ] [@storybook/addon-designs](https://storybookjs.github.io/addon-designs/?path=/docs/docs-quick-start--docs)
  > Storybook addon for embedding your design preview in addon panel
