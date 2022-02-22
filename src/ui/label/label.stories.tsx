import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DefaultTestProviders } from '../../utils';
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
  <Label label="STORY_BOOK.LABEL" />
);

export const Required: ComponentStory<typeof Label> = () => (
  <Label label="STORY_BOOK.LABEL" required />
);
