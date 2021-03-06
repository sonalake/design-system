import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { DateFormat } from './date-format.component';

export default {
  title: 'Atoms/Date Format',
  component: DateFormat,
} as ComponentMeta<typeof DateFormat>;

export const Default: ComponentStory<typeof DateFormat> = () => (
  <DateFormat date={new Date(2020, 0, 1)} />
);

export const WithTime: ComponentStory<typeof DateFormat> = () => (
  <DateFormat date={new Date(2020, 0, 1)} showTime />
);

export const CustomFormat: ComponentStory<typeof DateFormat> = () => (
  <DateFormat date={new Date(2020, 0, 1)} altFormat="E" />
);
