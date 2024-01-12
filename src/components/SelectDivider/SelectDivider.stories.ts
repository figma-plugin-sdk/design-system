import { Meta, Story } from '@storybook/marko';
import SelectDivider from './SelectDivider.marko';

export default {
    title: 'SelectDivider',
    component: SelectDivider,
    argTypes: {
        label: {
            control: 'text',
            description: 'Label for the divider. If present, it renders as a label, otherwise as a divider.',
        },
        // Note: renderBody is a function and cannot be directly controlled via Storybook UI,
        // but we can demonstrate its usage in the story.
    },
} as Meta;

const RenderBody = (content: string) => `<span>${content}</span>`;

const Template: Story = (args) => ({
    input: {
        ...args,
        renderBody: RenderBody,
    },
});

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'Section Label',
    // The renderBody function will be used to render this content
};

export const DividerOnly = Template.bind({});
DividerOnly.args = {
    // No label provided, so it will render as a divider
};
