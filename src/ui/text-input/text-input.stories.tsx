import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextInput } from './text-input.component';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Default: ComponentStory<typeof TextInput> = () => <TextInput />;

export const Disabled: ComponentStory<typeof TextInput> = () => (
  <TextInput disabled={true} />
);

export const Readonly: ComponentStory<typeof TextInput> = () => (
  <TextInput readOnly={true} />
);
