import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DefaultTestProviders } from '../../utils';
import { Typography } from '../typography';
import { PropertyItem } from './property-item.component';

export default {
  title: 'Atoms/PropertyItem',
  component: PropertyItem,
  decorators: [
    (Story) => (
      <DefaultTestProviders>
        <Story />
      </DefaultTestProviders>
    ),
  ],
} as ComponentMeta<typeof PropertyItem>;

const Template: ComponentStory<typeof PropertyItem> = (args) => (
  <PropertyItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: <Typography variant="caption" translationKey="STORY_BOOK.LABEL" />,
  children: 'Value',
};

export const Inline = Template.bind({});
Inline.args = {
  label: <Typography variant="caption" translationKey="STORY_BOOK.LABEL" />,
  children: 'Value',
  isInline: true,
};
