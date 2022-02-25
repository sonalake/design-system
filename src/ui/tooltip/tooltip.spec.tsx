import React from 'react';
import { screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { renderWithProviders } from '../../utils';
import { Button } from '../button';
import { Typography } from '../typography';
import { Tooltip } from './tooltip.component';
import { TooltipProvider } from './tooltip.context';

describe('Tooltip', () => {
  test('has no accessibility violations', async () => {
    const { container } = renderWithProviders(
      <TooltipProvider>
        <Tooltip content="Tooltip Content" defaultOpen>
          <Typography as={Button} translationKey="STORY_BOOK.SHOW_TOOLTIP" />
        </Tooltip>
      </TooltipProvider>
    );

    expect(
      screen.getByRole('button', { name: 'Show Tooltip' })
    ).toBeInTheDocument();

    expect(await axe(container)).toHaveNoViolations();
  });
});
