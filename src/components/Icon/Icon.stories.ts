import { Meta, Story } from '@storybook/marko';
import Icon from './Icon.marko'; // Adjust the import path as needed

export default {
    title: 'Icon',
    component: Icon,
    argTypes: {
        iconName: {
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

interface IconProps {
    iconName?: string;
    spin?: boolean;
    colorName?: string;
    iconText?: string;
    className?: string;
    renderBody?: Marko.Body<[string]>;
}

const Template: Story<IconProps> = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    iconName: 'example-icon',
    spin: false,
    colorName: 'blue',
    iconText: 'Example Icon',
    className: 'custom-class',
};

// Additional scenarios can be added similarly
