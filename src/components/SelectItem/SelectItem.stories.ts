import { Meta, Story } from '@storybook/marko';
import SelectItem from './SelectItem.marko';

export default {
    title: 'SelectItem',
    component: SelectItem,
    argTypes: {
        isSelected: {
            control: 'boolean',
            description: 'Determines if the item is selected',
        },
        content: {
            control: 'text',
            description: 'Content of the list item',
        },
        tabindex: {
            control: 'number',
            description: 'Tab index for the list item',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    isSelected: false,
    content: 'List Item',
    tabindex: 0,
};

export const Selected = Template.bind({});
Selected.args = {
    ...Default.args,
    isSelected: true,
};

export const CustomTabindex = Template.bind({});
CustomTabindex.args = {
    ...Default.args,
    tabindex: 1,
};
