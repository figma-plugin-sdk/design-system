import Disclosure from './Disclosure.marko'; // Adjust the import path as necessary
import { action } from '@storybook/addon-actions';

export default {
    title: 'Disclosure',
    component: Disclosure,
    argTypes: {
        items: {
            control: 'object',
        },
        customStyles: {
            control: 'text',
        },
    },
};

const Template = (args) => ({
    component: Disclosure,
    input: args,
    on: {
        'expand': action('expand'),
        'collapse': action('collapse')
    },
});

export const Default = Template.bind({});
Default.args = {
    items: [
        { label: 'Item 1', content: 'Content 1', expanded: false, section: false },
        { label: 'Item 2', content: 'Content 2', expanded: false, section: true },
        // Add more items as needed
    ],
    customStyles: '',
};

// Additional stories can be added to demonstrate different states or item configurations
