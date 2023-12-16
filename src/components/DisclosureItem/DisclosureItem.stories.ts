import type { Meta, StoryObj } from "@storybook/marko";
import { action } from '@storybook/addon-actions';

import DisclosureItem, { Input } from "./DisclosureItem.marko";

export default {
    title: "DisclosureItem",
    component: DisclosureItem,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'tertiary'],
            description: 'The variant of the disclosure item'
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the disclosure item is disabled'
        },
        destructive: {
            control: 'boolean',
            description: 'Whether the disclosure item has a destructive style'
        },
        title: {
            control: 'text',
            description: 'Title of the disclosure item'
        },
        expanded: {
            control: 'boolean',
            description: 'Whether the disclosure item is expanded'
        },
        section: {
            control: 'boolean',
            description: 'Whether the disclosure item is a section'
        },
        open: {
            control: 'boolean',
            description: 'Whether the disclosure item is open'
        },
        renderBody: {
            control: 'text',
            description: 'Custom body content for the disclosure item'
        },
        uniqueId: {
            control: 'text',
            description: 'Unique ID for the disclosure item'
        },
        onClick: { action: 'clicked' }
    }
} satisfies Meta<Input>;

type Story = StoryObj<Input>;

export const Default: Story = {
    args: {
        variant: "primary",
        disabled: false,
        destructive: false,
        title: 'Default Title',
        expanded: false,
        section: false,
        open: false,
        uniqueId: 'disclosureItem--default',
        renderBody: 'Default Content'
    },
    play: async ({ canvasElement, args }) => {
        const item = canvasElement.querySelector('li');
        item.addEventListener('click', (event) => {
            // Logic to identify clicked part (e.g., header)
            if (event.target.classList.contains('header')) {
                action('clicked')(args.uniqueId);
                args.expanded = !args.expanded;
            }
        });
    }
};

// Additional stories for different variants, disabled, expanded, etc., can be created following the same pattern as the Default story.
