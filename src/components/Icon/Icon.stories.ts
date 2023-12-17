import { Meta, Story } from '@storybook/marko';
import Icon from './Icon.marko';

export default {
    title: 'Icon',
    component: Icon,
    argTypes: {
        name: {
            control: 'text',
            description: 'Icon name',
        },
        spin: {
            control: 'boolean',
            description: 'Whether the icon spins',
        },
        color: {
            control: 'color',
            description: 'Icon color',
        },
        isText: {
            control: 'boolean',
            description: 'True if the icon is text-based',
        },
        content: {
            control: 'text',
            description: 'Content for text icon',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    name: 'default-icon',
    spin: false,
    color: 'black',
    isText: false,
    content: '',
};

export const SpinningIcon = Template.bind({});
SpinningIcon.args = {
    ...Default.args,
    name: 'spinner',
    spin: true,
};

export const TextIcon = Template.bind({});
TextIcon.args = {
    ...Default.args,
    isText: true,
    content: 'Text Icon',
};
