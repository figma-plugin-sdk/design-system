import { Meta, Story } from '@storybook/marko';
import Icon from './Icon.marko'; // Adjust the import path as needed
import LockOff from "../../icons/lock-off.marko";
import LockOn from "../../icons/lock-on.marko";


export default {
    title: 'Icon',
    component: Icon,
    argTypes: {
        iconName: {
            control: 'text',
            description: 'Name of the icon',
        },
        iconName2: {
            control: 'text',
            description: 'Name of the icon',
        },
        spin: {
            control: 'boolean',
            description: 'Whether the icon should spin',
        },
        colorName: {
            control: 'text',
            description: 'Name of the color for the icon',
        },
        iconText: {
            control: 'text',
            description: 'Text associated with the icon',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes for the icon',
        },
        // Note: Handling renderBody in Storybook might be tricky, as it's a function.
        // You might need to adjust based on how you use renderBody in your application.
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    spin: false,
    colorName: 'blue',
    iconText: null,
    className: 'custom-class',

};