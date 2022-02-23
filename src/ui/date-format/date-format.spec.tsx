import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils';
import { DateFormat } from './date-format.component';

describe('DateFormat', () => {
  test('should render default date format', () => {
    renderWithProviders(<DateFormat date={new Date(2020, 0, 1)} />);

    expect(screen.getByText('Wed, 1 Jan 2020')).toBeInTheDocument();
  });

  test('should render default date time format', () => {
    renderWithProviders(<DateFormat date={new Date(2020, 0, 1)} showTime />);

    expect(screen.getByText('Wed, 1 Jan 2020 00:00:00')).toBeInTheDocument();
  });

  test('should render alternative date format', () => {
    renderWithProviders(
      <DateFormat date={new Date(2020, 0, 1)} altFormat="E" />
    );

    expect(screen.getByText('Wed')).toBeInTheDocument();
  });
});
