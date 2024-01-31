import { Meta, Story } from '@storybook/marko';
import Layer from './Layer.marko';

export default {
    title: 'Layer',
    component: Layer,
    argTypes: {
        layers: {
            control: 'object',
            description: 'The nested layers structure',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
