// PropForm.stories.ts
import { Meta, Story } from '@storybook/marko';
import { action } from '@storybook/addon-actions';
import PropForm from './PropsForm.marko'; // Corrected import statement

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

// export const WithSelectedValue = Template.bind({});
// WithSelectedValue.args = {
//     ...Default.args,
//     selectedValue: 'on',
// };

// You can define more scenarios based on the component's functionality
