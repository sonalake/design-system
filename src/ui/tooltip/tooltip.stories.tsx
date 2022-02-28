import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../button';
import { Typography } from '../typography';
import { Tooltip } from './tooltip.component';

const meta: ComponentMeta<typeof Tooltip> = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export default meta;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <Button>
      <Typography translationKey="STORY_BOOK.SHOW_TOOLTIP" />
    </Button>
  ),
  content: 'This is the content!',
  side: 'bottom',
};

export const OpenByDefault = Template.bind({});
OpenByDefault.args = {
  ...Default.args,
  defaultOpen: true,
};
