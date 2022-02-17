import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextInput } from './text-input.component';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Default: ComponentStory<typeof TextInput> = () => (
  <TextInput defaultValue="Default" />
);

export const WithPlaceholder: ComponentStory<typeof TextInput> = () => (
  <TextInput placeholder="Placeholder" />
);

export const Small: ComponentStory<typeof TextInput> = () => (
  <TextInput size="sm" defaultValue="Small" />
);

export const WithError: ComponentStory<typeof TextInput> = () => (
  <TextInput error={true} defaultValue="Error" />
);

export const Disabled: ComponentStory<typeof TextInput> = () => (
  <TextInput disabled={true} defaultValue="Disabled" />
);

export const Readonly: ComponentStory<typeof TextInput> = () => (
  <TextInput readOnly={true} defaultValue="Readonly" />
);
