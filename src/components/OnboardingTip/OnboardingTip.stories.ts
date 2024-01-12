import { Meta, Story } from '@storybook/marko';
import OnboardingTip from './OnboardingTip.marko';

export default {
    title: 'OnboardingTip',
    component: OnboardingTip,
    argTypes: {
        iconName: {
            control: 'text',
            description: 'Icon name for the tip',
        },
        message: {
            control: 'text',
            description: 'Message content of the tip',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    iconName: 'info',
    message: 'This is an onboarding tip',
};

export const CustomTip = Template.bind({});
CustomTip.args = {
    iconName: 'check',
    message: 'Successful operation',
};

// Additional stories can be added here as needed
