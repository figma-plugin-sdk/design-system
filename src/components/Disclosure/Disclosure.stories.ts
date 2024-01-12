import { Meta, Story } from '@storybook/marko';
import { action } from '@storybook/addon-actions';
import Disclosure from './Disclosure.marko'

export default {
    title: 'Disclosure',
    component: Disclosure,
    argTypes: {
        items: {
            control: 'object',
            description: 'Array of disclosure items',
        },
    },
} as Meta;

interface Disclosure {
    items: typeof Disclosure[];
}

const Template: Story = (args) => ({
    input: args,
    methods: {
        toggleDisclosure(item) {
            // Simulate state update by modifying args and forcing re-render
            const newItems = args.items.map((i) =>
                i.id === item.id ? { ...i, expanded: !i.expanded } : i
            );
            this.input = { ...args, items: newItems };
            action('toggleDisclosure')(item);
        },
    },
});

export const Default = Template.bind({});
Default.args = {
    items: [
        { id: '1', label: 'Item 1', expanded: false, renderBody: 'Content for Item 1' },
        { id: '2', label: 'Item 2', expanded: true, isSection: true, renderBody: 'Content for Item 2' },
    ],
};

// Additional scenarios can be added similarly
