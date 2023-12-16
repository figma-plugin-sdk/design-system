import type { Meta, StoryObj } from "@storybook/marko";
import { action } from '@storybook/addon-actions';

import Icon, { Input } from "./Icon.marko";

export default {
    title: "Icon",
    component: Icon,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'tertiary'],
            description: 'The variant of the icon'
        },
        iconName: {
            control: 'text',
            description: 'Name/path of the icon image'
        },
        spin: {
            control: 'boolean',
            description: 'Whether the icon should have a spinning animation'
        },
        iconText: {
            control: 'text',
            description: 'Text to display in place of an icon'
        },
        color: {
            control: 'color',
            description: 'Color of the icon'
        },
        className: {
            control: 'text',
            description: 'Custom class name for additional styling'
        },
        clicked: {
            control: 'boolean',
            description: 'Whether the icon has been clicked'
        },
        keydown: {
            control: 'boolean',
            description: 'Whether a keydown event has occurred on the icon'
        },
        onClick: { action: 'clicked' },
        onKeyDown: { action: 'keyPressed' }
    }
} satisfies Meta<Input>;

type Story = StoryObj<Input>;

export const Default: Story = {
    args: {
        variant: "primary",
        iconName: null,
        spin: false,
        iconText: 'Default Icon Text',
        color: '--figma-color-icon',
        className: '',
        clicked: false,
        keydown: false
    },
    play: async ({ canvasElement }) => {
        const icon = canvasElement.querySelector('.icon-component');
        icon.addEventListener('click', action('clicked'));
        icon.addEventListener('keydown', action('keyPressed'));
    }
};

export const WithImageIcon: Story = {
    args: {
        ...Default.args,
        iconName: 'path/to/icon.png',
        iconText: null
    }
};

export const SpinningIcon: Story = {
    args: {
        ...Default.args,
        spin: true,
        iconName: 'path/to/spinning-icon.png'
    }
};