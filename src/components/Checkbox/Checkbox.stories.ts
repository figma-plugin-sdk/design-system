import { Meta, Story } from '@storybook/marko';
import { action } from '@storybook/addon-actions';
import Checkbox from './Checkbox.marko';

export default {
    title: 'Checkbox',
    component: Checkbox,
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Determines if the checkbox is checked',
        },
        disabled: {
            control: 'boolean',
            description: 'Determines if the checkbox is disabled',
        },
        label: {
            control: 'text',
            description: 'Label for the checkbox',
        },
        onInput: {
            action: 'inputChanged',
            description: 'Event emitted when the checkbox value changes',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
    on: {
        input: action('inputChanged'),
    },
});

export const Default = Template.bind({});
Default.args = {
    checked: false,
    disabled: false,
    label: 'Default Checkbox',
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

export const CustomLabel = Template.bind({});
CustomLabel.args = {
    ...Default.args,
    label: 'Custom Label',
};
