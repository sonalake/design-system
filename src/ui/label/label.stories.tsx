import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DefaultTestProviders } from '../../utils';
import { Typography } from '../typography';
import { Label } from './label.component';

export default {
  title: 'Atoms/Label',
  component: Label,
  decorators: [
    (Story) => (
      <DefaultTestProviders>
        <Story />
      </DefaultTestProviders>
    ),
  ],
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = () => (
  <Label>
    <Typography as="span" translationKey="STORY_BOOK.LABEL" />
  </Label>
);

export const Required: ComponentStory<typeof Label> = () => (
  <Label required={true}>
    <Typography as="span" translationKey="STORY_BOOK.LABEL" />
  </Label>
);
