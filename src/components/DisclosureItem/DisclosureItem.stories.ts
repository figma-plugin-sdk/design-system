import { Meta, Story } from "@storybook/marko";
import { IconCaretDown } from "../../Icon/components/index";
import { IconCaretRight } from "../../Icon/components/index";
import DisclosureItem from "./DisclosureItem.marko";

export default {
  title: "DisclosureItem",
  component: DisclosureItem,
  argTypes: {
    uniqueId: {
      control: "text",
      description: "Unique identifier for the item",
    },
    title: {
      control: "text",
      description: "Title of the disclosure item",
    },
    expanded: {
      control: "boolean",
      description: "Indicates if the item is expanded",
    },
    section: {
      control: "boolean",
      description: "Indicates if the item is a section",
    },
    open: {
      control: "boolean",
      description: "Indicates if the item is open",
    },
    // Note: renderBody is a function and cannot be directly controlled via Storybook UI,
    // but we can demonstrate its usage in the story.
  },
} as Meta;

const RenderBody = (content: string) => `<div>${content}</div>`;

const Template: Story = (args) => ({
  input: {
    ...args,
    renderBody: RenderBody,
    IconCaretDown: IconCaretDown,
    IconCaretRight: IconCaretRight,
  },
});

export const Default = Template.bind({});
Default.args = {
  uniqueId: "disclosureItem--example",
  title: "Default Disclosure Item",
  expanded: false,
  section: false,
  open: false,
  renderBody: "Content of the item",
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Default.args,
  expanded: true,
};

export const SectionItem = Template.bind({});
SectionItem.args = {
  ...Default.args,
  section: true,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
  ...Default.args,
  title: "Custom Content",
  // The renderBody function will be used to render this content
};
