import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import {
  CheckboxGroupField,
  CheckboxGroupFieldProps,
} from './checkbox-group-field.component';
import { CHECKBOX_GROUP_ITEMS } from './test-data.constant';

const meta: Meta = {
  title: 'Molecules/Fields/Checkbox Group Field',
  component: CheckboxGroupField,
};

export default meta;

const Template: Story<CheckboxGroupFieldProps> = ({
  items = CHECKBOX_GROUP_ITEMS.map(({ value, label }) => ({
    value,
    label,
  })),
  showAllCheckbox,
  disabled,
  hasError,
}) => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <CheckboxGroupField
      value={value}
      items={items}
      showAllCheckbox={showAllCheckbox}
      disabled={disabled}
      hasError={hasError}
      onChange={setValue}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};

export const WithAllCheckbox = Template.bind({});
WithAllCheckbox.args = { showAllCheckbox: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const HasError = Template.bind({});
HasError.args = { hasError: true };

export const SomeDisabled = Template.bind({});
SomeDisabled.args = {
  items: CHECKBOX_GROUP_ITEMS.map(({ value, label }, index) => ({
    value,
    label,
    disabled: !(index % 2),
  })),
};
