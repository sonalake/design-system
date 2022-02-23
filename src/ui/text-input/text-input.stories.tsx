import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { TextInput } from './text-input.component';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: 'Default',
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  defaultValue: 'Small',
};

export const WithError = Template.bind({});
WithError.args = {
  error: true,
  defaultValue: 'Error',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  defaultValue: 'Disabled',
};

export const Readonly = Template.bind({});
Readonly.args = {
  readOnly: true,
  defaultValue: 'Readonly',
};
