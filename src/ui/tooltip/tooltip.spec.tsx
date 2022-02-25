import React from 'react';
import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { renderWithProviders } from '../../utils';
import { Button } from '../button';
import { Typography } from '../typography';
import { Tooltip } from './tooltip.component';

describe('Tooltip', () => {
  test('has no accessibility violations', async () => {
    const { container } = renderWithProviders(
      <Tooltip content="Tooltip Content" defaultOpen>
        <Typography as={Button} translationKey="STORY_BOOK.SHOW_TOOLTIP" />
      </Tooltip>
    );

    expect(
      screen.getByRole('button', { name: 'Show Tooltip' })
    ).toBeInTheDocument();

    expect(await axe(container)).toHaveNoViolations();
  });
});
