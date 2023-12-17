import { Meta, Story } from '@storybook/marko';
import RadioButton from './RadioButton.marko';

export default {
    title: 'RadioButton',
    component: RadioButton,
    argTypes: {
        id: {
            control: 'text',
            description: 'ID for the radio button',
        },
        value: {
            control: 'text',
            description: 'Value of the radio button',
        },
        name: {
            control: 'text',
            description: 'Name attribute for the radio button',
        },
        checked: {
            control: 'boolean',
            description: 'Whether the radio button is checked',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the radio button is disabled',
        },
        label: {
            control: 'text',
            description: 'Label for the radio button',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    id: 'radio1',
    value: 'option1',
    name: 'example',
    checked: false,
    disabled: false,
    label: 'Option 1',
};

export const Checked = Template.bind({});
Checked.args = {
    ...Default.args,
    checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

// Additional stories can be added here as needed
