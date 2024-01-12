import { Meta, Story } from '@storybook/marko';
import Input from './Input.marko';

export default {
    title: 'Input',
    component: Input,
    argTypes: {
        placeholder: {
            control: 'text',
            description: 'Placeholder text for the input field',
        },
        value: {
            control: 'text',
            description: 'Value of the input field',
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state of the input field',
        },
        withIcon: {
            control: 'boolean',
            description: 'Determines if an icon is shown',
        },
        iconName: {
            control: 'text',
            description: 'Name of the icon to display',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    placeholder: 'Enter text...',
    value: '',
    disabled: false,
    withIcon: false,
    iconName: '',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    ...Default.args,
    withIcon: true,
    iconName: 'search',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
    ...Default.args,
    placeholder: 'Search here...',
};
