import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Label } from './label.component';

export default {
  title: 'Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = () => (
  <Label label="STORY_BOOK.LABEL" />
);

export const Required: ComponentStory<typeof Label> = () => (
  <Label label="STORY_BOOK.LABEL" required />
);
