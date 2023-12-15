import type { Meta, StoryObj } from "@storybook/marko";
import { action } from '@storybook/addon-actions';

import Checkbox, { Input } from "./Checkbox.marko";

const meta = {
    title: "Checkbox",
    component: Checkbox,
    parameters: {
        design: {
            type: "figma",
            url: "https://www.figma.com/file/vBQD0M0G6zZfxu5ctekUD8/Figma-Plugin-SDK-Design-System?type=design&node-id=148-8002&mode=design&t=ZTf0R45O5VWbPhrY-4",
        },
        status: {
            type: "beta", // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            url: "http://www.url.com/status", // will make the tag a link
            // statuses: {
            //   add custom statuses for this story here
            // }
        },
    },
} satisfies Meta<Input>;

export default {
    title: "Checkbox",
    component: Checkbox,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'tertiary'],
            description: 'The variant of the checkbox'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the checkbox is disabled'
        },
        label: {
            control: 'text',
            description: 'The label of the checkbox'
        },
        uniqueId: {
            control: 'text',
            description: 'Unique ID for the checkbox'
        },
        checked: {
            control: 'boolean',
            description: 'Whether the checkbox is checked'
        },
        mixed: {
            control: 'boolean',
            description: 'Whether the checkbox is in an indeterminate state'
        },
        tabindex: {
            control: { type: 'number', min: -1 },
            description: 'Tab index of the checkbox'
        },
        className: {
            control: 'click me',
            description: 'Custom class name for styling'
        },
        renderBody: {
            control: 'text',
            description: 'Custom body content for the label'
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
        variant: "primary",
        disabled: false,
        checked: false,
        mixed: false,
        tabindex: 0,
        className: '',
        uniqueId: 'checkbox--default',
        label: 'Default Checkbox',
    },
    play: async ({ canvasElement }) => {
        const input = canvasElement.querySelector('input');
        input.addEventListener('click', action('clicked'));
        input.addEventListener('change', action('changed'));
        input.addEventListener('focus', action('focused'));
        input.addEventListener('blur', action('blurred'));
    }
};