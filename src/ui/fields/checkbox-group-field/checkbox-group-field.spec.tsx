import React from 'react';
import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { renderWithProviders } from '../../../utils';
import {
  CheckboxGroupField,
  CheckboxGroupFieldProps,
} from './checkbox-group-field.component';
import { CHECKBOX_GROUP_ITEMS } from './test-data.constant';

const onChangeMock = jest.fn();
const renderCheckboxGroupField = (
  extraProps?: Partial<CheckboxGroupFieldProps>
) => {
  const props = {
    value: [],
    items: CHECKBOX_GROUP_ITEMS,
    onChange: onChangeMock,
    ...extraProps,
  };

  return renderWithProviders(<CheckboxGroupField {...props} />);
};

describe('CheckboxGroupField', () => {
  test('renders an accessible checkbox group', async () => {
    const { container } = renderCheckboxGroupField();

    expect(screen.getAllByRole('checkbox')).toHaveLength(4);
    expect(screen.getByRole('checkbox', { name: 'Red' })).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: 'Yellow' })
    ).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Blue' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Green' })).toBeInTheDocument();

    expect(await axe(container)).toHaveNoViolations();
  });

  test('renders with select all checkbox', () => {
    renderCheckboxGroupField({ showAllCheckbox: true });

    expect(screen.getAllByRole('checkbox')).toHaveLength(5);
    expect(screen.getByRole('checkbox', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Red' })).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: 'Yellow' })
    ).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Blue' })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Green' })).toBeInTheDocument();
  });
});
