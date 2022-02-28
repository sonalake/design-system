import React from 'react';
import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { renderWithProviders } from '../../../utils';
import { Typography } from '../../typography';
import { CheckboxField } from './checkbox-field.component';

describe('CheckboxField', () => {
  test('renders an accessible checkbox', async () => {
    const { container } = renderWithProviders(
      <CheckboxField
        label="STORY_BOOK.CHECKBOX.LABEL"
        helpText={
          <Typography
            variant="caption"
            translationKey="STORY_BOOK.CHECKBOX.HELP"
          />
        }
      />
    );

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
