import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Typography } from '../../typography';
import { CheckboxField } from './checkbox-field.component';

export default {
  title: 'Molecules/Fields/Checkbox Field',
  component: CheckboxField,
} as ComponentMeta<typeof CheckboxField>;

export const Default: ComponentStory<typeof CheckboxField> = () => (
  <CheckboxField
    label="STORY_BOOK.CHECKBOX.LABEL"
    helpText={
      <Typography variant="caption" translationKey="STORY_BOOK.CHECKBOX.HELP" />
    }
  />
);
