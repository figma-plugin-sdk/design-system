import { Meta, Story } from '@storybook/marko';
import SelectMenu from './SelectMenu.marko';

export default {
    title: 'SelectMenu',
    component: SelectMenu,
    argTypes: {
        id: {
            control: 'text',
            description: 'ID for the select menu',
        },
        options: {
            control: 'object',
            description: 'Options for the select menu',
        },
        selectedValue: {
            control: 'text',
            description: 'Currently selected value',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the select menu is disabled',
        },
        customClass: {
            control: 'text',
            description: 'Custom class for styling',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    id: 'select1',
    options: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ],
    selectedValue: 'option1',
    disabled: false,
    customClass: '',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
    ...Default.args,
    customClass: 'custom-select-style',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

// Additional stories can be added here as needed
