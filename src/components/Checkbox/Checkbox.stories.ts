import type { Meta, StoryObj } from "@storybook/marko";
import { action } from '@storybook/addon-actions';

import Checkbox, { Input } from "./Checkbox.marko";

export default {
    title: "Checkbox",
    component: Checkbox,
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Whether the checkbox is checked'
        },
        mixed: {
            control: 'boolean',
            description: 'Whether the checkbox is in an indeterminate state'
        },
        value: {
            control: 'text',
            description: 'The value of the checkbox'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the checkbox is disabled'
        },
        tabindex: {
            control: { type: 'number', min: -1 },
            description: 'Tab index of the checkbox'
        },
        className: {
            control: 'text',
            description: 'Custom class name for styling'
        },
        uniqueId: {
            control: 'text',
            description: 'Unique ID for the checkbox'
        },
        onClick: { action: 'clicked' },
        onChange: { action: 'changed' },
        onFocus: { action: 'focused' },
        onBlur: { action: 'blurred' }
    }
} satisfies Meta<Input>;

type Story = StoryObj<Input>;

export const Default: Story = {
    args: {
        checked: false,
        mixed: false,
        value: '',
        disabled: false,
        tabindex: 0,
        uniqueId: 'checkbox--default',
        className: ''
    },
    play: async ({ canvasElement }) => {
        const input = canvasElement.querySelector('input');
        input.addEventListener('click', action('clicked'));
        input.addEventListener('change', action('changed'));
        input.addEventListener('focus', action('focused'));
        input.addEventListener('blur', action('blurred'));
    }
};

export const Checked: Story = {
    args: {
        ...Default.args,
        checked: true
    }
};

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true
    }
};

export const CustomClass: Story = {
    args: {
        ...Default.args,
        className: 'custom-checkbox'
    }
};

export const Indeterminate: Story = {
    args: {
        ...Default.args,
        mixed: true
    }
};
