// PropForm.stories.ts
import { Meta, Story } from '@storybook/marko';
import { action } from '@storybook/addon-actions';
import PropForm from './PropForm.marko';

export default {
    title: 'PropForm',
    component: PropForm,
} as Meta;

const Template: Story = (args) => ({
    input: args,
    on: {
        input: action('clicked')
    }
});

export const Default = Template.bind({});
Default.args = {
    value: '',
    selectedValue: 'mixed',
};
