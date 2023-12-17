import { Meta, Story } from '@storybook/marko';
import Label from './Label.marko';

export default {
    title: 'Label',
    component: Label,
    argTypes: {
        content: {
            control: 'text',
            description: 'Text content of the label',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    content: 'Default Label',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
    content: 'Custom Text Here',
};
