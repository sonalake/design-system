import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './checkbox.component';

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    hasError: {
      control: {
        type: 'boolean',
      },
    },
    indeterminate: {
      control: {
        type: 'boolean',
      },
    },
    rounded: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
