// LayerComponent.stories.ts
import { Meta, StoryObj } from '@storybook/marko';
import { action } from '@storybook/addon-actions';
import LayerTree, { Type, State, type Layer, SampleValues } from './LayerTree.marko';

export default {
    title: 'Layer',
    component: LayerTree,
    argTypes: {
        selectLayer: { action: 'selectLayer' },
        toggleExpand: { action: 'toggleExpand' },
        toggleLock: { action: 'toggleLock' },
        toggleVisibility: { action: 'toggleVisibility' },
    },
    parameters: {
        controls: {
            expanded: true,
        },
    },
} as Meta;

const Template: StoryObj = {
    render: (args) => ({
        template: (args),
        methods: {
            selectLayer: action('selectLayer'),
            toggleExpand: action('toggleExpand'),
            toggleLock: action('toggleLock'),
            toggleVisibility: action('toggleVisibility'),
        },
    }),
    args: {
        ...SampleValues,
    },
};

// export const Default = Template.bind({});

export const LayerSelected = {
    ...Template,
    args: {
        ...SampleValues,
        rootLayers: SampleValues.map((layer, index) => ({
            ...layer,
            selected: index === 0, // Select the first layer
        })),
    },
};

export const LayerExpanded = {
    ...Template,
    args: {
        ...SampleValues,
        rootLayers: SampleValues.map((layer, index) => ({
            ...layer,
            expanded: index === 0, // Expand the first layer
        })),
    },
};

export const LayerLocked = {
    ...Template,
    args: {
        ...SampleValues,
        rootLayers: SampleValues.map((layer, index) => ({
            ...layer,
            locked: index === 0, // Lock the first layer
        })),
    },
};

export const LayerHidden = {
    ...Template,
    args: {
        ...SampleValues,
        rootLayers: SampleValues.map((layer, index) => ({
            ...layer,
            hidden: index === 0, // Hide the first layer
        })),
    },
};
