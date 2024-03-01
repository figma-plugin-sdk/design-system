import { Meta, Story } from '@storybook/marko';
import { action } from '@storybook/addon-actions';
import Type from "./Type.marko"

export default {
    title: 'Type',
    component: Type,
    argTypes: {
        size: {
            control: { type: 'select', options: ['small', 'large', 'xlarge'] },
            description: 'Sets the size of the component',
        },
        weight: {
            control: { type: 'select', options: ['medium', 'bold'] },
            description: 'Sets the font weight of the component',
        },
        inverse: {
            control: 'boolean',
            description: 'Toggles the inverse style of the component',
        },
        content: {
            control: 'text',
            description: 'Content of the component',
        },
    },
} as Meta;

const Template: Story = (args) => ({
    template: `
    <div class=[
      "type",
      args.size ? \`type--\${args.size}\` : "",
      args.weight ? \`type--\${args.weight}\` : "",
      args.inverse ? "type--inverse" : "",
    ]>
      \${args.content}
    </div>
  `,
    input: args,
});

export const Default = Template.bind({});
Default.args = {
    content: 'Sample text',
};

export const LargeBold = Template.bind({});
LargeBold.args = {
    size: 'large',
    weight: 'bold',
    content: 'Large Bold text',
};

export const SmallInverse = Template.bind({});
SmallInverse.args = {
    size: 'small',
    inverse: true,
    content: 'Small Inverse text',
};
