import { Meta, Story } from '@storybook/marko';
import TextArea from './TextArea.marko';

export default {
    title: 'TextArea',
    component: TextArea,
    argTypes: {
        rows: {
            control: 'number',
            description: 'Number of rows in the textarea',
        },
        initialValue: {
            control: 'text',
            description: 'Initial text value of the textarea',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the textarea is disabled',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    rows: 4,
    initialValue: '',
    disabled: false,
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
    ...Default.args,
    initialValue: 'Enter your text here...',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

// Additional stories can be added here as needed
