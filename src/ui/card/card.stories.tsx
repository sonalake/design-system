import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from '../typography';
import { Card } from './card.component';

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    elevation: {
      options: ['none', 'sm', undefined, 'md', 'lg', 'xl', '2xl'],
      control: {
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Typography translationKey="STORY_BOOK.CARD" />
  </Card>
);
