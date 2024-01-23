// PropertyList.stories.ts
import { Meta, Story } from '@storybook/marko';
import { action } from '@storybook/addon-actions';
import PropsRel from './PropsRel.marko'; // Assuming the file name is PropertyList.marko

export default {
    title: 'PropsRel',
    component: PropsRel,
} as Meta;

const Template: Story = (args) => (
    { input: args }
)
export const Default = Template.bind({});
Default.args = {
    // Assuming default args if any can be provided here
};

export const WithAddedProperty = Template.bind({});
WithAddedProperty.args = {
    // Args to simulate a state with an added property
};

// Simulate user interactions if necessary
WithAddedProperty.play = async ({ canvasElement }) => {
    // Using addon-actions to simulate adding a property
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('+'));
    action('addProperty')();
};

// Additional scenarios can be defined based on component functionality
