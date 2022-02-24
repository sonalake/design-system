import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Spinner } from './spinner.component';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = () => <Spinner />;
