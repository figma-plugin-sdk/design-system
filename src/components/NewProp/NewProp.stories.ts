import { Meta, StoryObj } from '@storybook/marko';
import { action } from '@storybook/addon-actions';
import NewProp from './NewProp.marko';

export default {
    title: 'NewProp',
    component: NewProp,
    argTypes: {
        createVariant: { action: 'createVariant' },
        createBoolean: { action: 'createBoolean' },
        createInstanceSwap: { action: 'createInstanceSwap' },
        createText: { action: 'createText' },
    },
} as Meta;

export const Default: StoryObj = {
    args: {
        on: {
            'create-variant': action('createVariant'),
            'create-boolean': action('createBoolean'),
            'create-instance-swap': action('createInstanceSwap'),
            'create-text': action('createText'),
        },
    },
};

