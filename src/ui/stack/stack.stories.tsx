import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Stack } from './stack.component';

export default {
  title: 'Atoms/Stack',
  component: Stack,
  argTypes: {
    vertical: {
      control: {
        type: 'boolean',
      },
    },
    wrap: {
      control: {
        type: 'boolean',
      },
    },
    spacing: {
      control: {
        type: 'number',
        min: 0,
        max: 9,
      },
    },
    alignItems: {
      options: ['start', 'center', 'end', 'stretch'],
      control: {
        type: 'radio',
      },
    },
    justify: {
      options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
      control: {
        type: 'radio',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
  },
} as ComponentMeta<typeof Stack>;

const Box = ({ label }: { label: string }) => (
  <div className=" w-6 h-6 bg-slate-100 border">{label}</div>
);

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    <Box label="1" />
    <Box label="2" />
    <Box label="3" />
  </Stack>
);

export const Default = Template.bind({});
Default.args = {
  spacing: 2,
  vertical: false,
  className: 'border',
};
