import React from 'react';
import { useIntl } from 'react-intl';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DefaultTestProviders } from '../../utils';
import { Chip } from './chip.component';

export default {
  title: 'Atoms/Chip',
  component: Chip,
  decorators: [
    (Story) => (
      <DefaultTestProviders>
        <Story />
      </DefaultTestProviders>
    ),
  ],
  argTypes: {
    outlined: {
      defaultValue: false,

      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Chip>;

export const Default: ComponentStory<typeof Chip> = (args) => {
  const intl = useIntl();

  return (
    <Chip {...args} label={intl.formatMessage({ id: 'STORY_BOOK.CHIP' })} />
  );
};
