import { Meta, Story } from '@storybook/marko';
import SectionTitle from './SectionTitle.marko';

export default {
    title: 'SectionTitle',
    component: SectionTitle,
    argTypes: {
        content: {
            control: 'text',
            description: 'Text content for the header',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    content: 'Default Header',
};

export const CustomContent = Template.bind({});
CustomContent.args = {
    content: 'Custom Header Content',
};