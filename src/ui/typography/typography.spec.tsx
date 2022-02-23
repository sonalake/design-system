import React from 'react';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '../../utils';
import { Typography } from './typography.component';
import { TypographyAs, TypographyVariant } from './typography.model';
import { getTypographyVariantComponent } from './typography.util';

const translations = {
  FORMATTED_MESSAGE_ID: 'FORMATTED_MESSAGE_ID',
};

describe('Typography', () => {
  describe('Utils', () => {
    const componentTestCases: {
      variant: TypographyVariant;
      component: TypographyAs;
    }[] = [
      { variant: 'body', component: 'p' },
      { variant: 'caption', component: 'p' },
      { variant: 'heading1', component: 'h1' },
      { variant: 'heading2', component: 'h2' },
      { variant: 'heading3', component: 'h3' },
      { variant: 'heading4', component: 'h4' },
      { variant: 'subtitle1', component: 'h5' },
      { variant: 'subtitle2', component: 'h6' },
    ];

    test.each(componentTestCases)(
      'getTypographyVariantComponent should return the correct components',
      ({ variant, component }) =>
        expect(getTypographyVariantComponent(variant)).toBe(component)
    );
  });

  test('should render default typography in span', () => {
    const { container } = renderWithProviders(
      <Typography translationKey="FORMATTED_MESSAGE_ID" />,
      { translations }
    );

    expect(container.querySelector('span')).toBeInTheDocument();
    expect(screen.getByText('FORMATTED_MESSAGE_ID')).toBeInTheDocument();
    expect(screen.getByTestId('FORMATTED_MESSAGE_ID')).toBeInTheDocument();
  });

  test('should render typography as a div', () => {
    const { container } = renderWithProviders(
      <Typography as="div" translationKey="FORMATTED_MESSAGE_ID" />,
      { translations }
    );

    expect(container.querySelector('span')).not.toBeInTheDocument();
    expect(container.querySelector('div')).toBeInTheDocument();
    expect(screen.getByText('FORMATTED_MESSAGE_ID')).toBeInTheDocument();
    expect(screen.getByTestId('FORMATTED_MESSAGE_ID')).toBeInTheDocument();
  });

  test('should render formatted message with children', () => {
    const { container } = renderWithProviders(
      <Typography as="div" translationKey="FORMATTED_MESSAGE_ID">
        {(extraParams, placeholder) => (
          <div {...extraParams}>{placeholder}</div>
        )}
      </Typography>,
      { translations }
    );

    expect(container.querySelector('div')).toBeInTheDocument();
    expect(screen.getByText('FORMATTED_MESSAGE_ID')).toBeInTheDocument();
    expect(screen.getByTestId('FORMATTED_MESSAGE_ID')).toBeInTheDocument();
  });
});
