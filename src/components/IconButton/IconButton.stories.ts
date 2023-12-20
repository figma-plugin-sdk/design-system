import { Meta, Story } from '@storybook/marko';
import IconButton from './IconButton.marko';

export default {
    title: 'IconButton',
    component: IconButton,
    argTypes: {
        iconName: {
            control: 'text',
            description: 'Name of the icon',
        },
        iconText: {
            control: 'text',
            description: 'Text for the icon',
        },
        selected: {
            control: 'boolean',
            description: 'Indicates if the button is selected',
        },
        spin: {
            control: 'boolean',
            description: 'Indicates if the icon should spin',
        },
        className: {
            control: 'text',
            description: 'Custom class name for styling',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    iconName: 'defaultIcon',
    iconText: 'Default Icon',
    selected: false,
    spin: false,
    className: '',
};

export const Selected = Template.bind({});
Selected.args = {
    ...Default.args,
    selected: true,
};

export const SpinningIcon = Template.bind({});
SpinningIcon.args = {
    ...Default.args,
    spin: true,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
    ...Default.args,
    className: 'custom-class',
};
