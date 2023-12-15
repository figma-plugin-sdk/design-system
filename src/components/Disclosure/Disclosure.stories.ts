import type { Meta, StoryObj } from "@storybook/marko";
import { action } from '@storybook/addon-actions';

import Disclosure, { Input } from "./Disclosure.marko";

export default {
    title: "Disclosure",
    component: Disclosure,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'tertiary'],
            description: 'The variant of the disclosure'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the disclosure is disabled'
        },
        renderBody: {
            control: 'text',
            description: 'Custom body content for the disclosure'
        },
        selected: {
            control: 'text',
            description: 'Currently selected item ID'
        },
        onChange: { action: 'changed' }
    }
} satisfies Meta<Input>;

type Story = StoryObj<Input>;

export const Default: Story = {
    args: {
        variant: "primary",
        disabled: false,
        renderBody: 'Item 1\nItem 2\nItem 3',
        selected: null
    },
    play: async ({ canvasElement, args }) => {
        const container = canvasElement.querySelector('ul');
        container.addEventListener('click', (event) => {
            // Logic to identify clicked item (e.g., via a data attribute)
            const itemId = event.target.getAttribute('data-item-id');
            if (itemId) {
                action('changed')(itemId);
                args.selected = args.selected === itemId ? null : itemId;
            }
        });
    }
};