import { Meta, Story } from '@storybook/marko';
import Switch from './Switch.marko';

export default {
    title: 'Switch',
    component: Switch,
    argTypes: {
        id: {
            control: 'text',
            description: 'ID for the toggle switch',
        },
        checked: {
            control: 'boolean',
            description: 'Whether the switch is checked (on)',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the switch is disabled',
        },
        label: {
            control: 'text',
            description: 'Label text for the switch',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    id: 'switch1',
    checked: false,
    disabled: false,
    label: 'Toggle Switch',
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
