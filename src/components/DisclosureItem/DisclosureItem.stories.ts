import { Meta, Story } from '@storybook/marko';
import DisclosureItem from './DisclosureItem.marko';

export default {
    title: 'DisclosureItem',
    component: DisclosureItem,
    argTypes: {
        title: {
            control: 'text',
            description: 'Title of the disclosure item',
        },
        section: {
            control: 'boolean',
            description: 'Indicates if the item is a section',
        },
        expanded: {
            control: 'boolean',
            description: 'Indicates if the item is expanded',
        },
        open: {
            control: 'boolean',
            description: 'Indicates if the item is open',
        },
        uniqueId: {
            control: 'text',
            description: 'Unique identifier for the item',
        },
    },
} as Meta;

const RenderBody = (content: string) => `<span>${content}</span>`;

const Template: Story = (args) => ({
    input: {
        ...args,
        renderBody: RenderBody,
    },
});

export const Default = Template.bind({});
Default.args = {
    title: 'Default Disclosure Item',
    section: false,
    expanded: false,
    open: false,
    uniqueId: 'disclosureItem--1234567',
};

export const ExpandedSection = Template.bind({});
ExpandedSection.args = {
    ...Default.args,
    title: 'Expanded Section',
    section: true,
    expanded: true,
};

export const CustomContent = Template.bind({});
CustomContent.args = {
    ...Default.args,
    title: 'Custom Content',
};
