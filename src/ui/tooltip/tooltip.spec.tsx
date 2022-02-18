import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Tooltip } from './tooltip.component';
import { TooltipProvider } from './tooltip.context';

describe('Tooltip', () => {
  test('has no accessibility violations', async () => {
    const { container } = render(
      <TooltipProvider>
        <Tooltip content="Tooltip Content" defaultOpen>
          <button type="button">Trigger</button>
        </Tooltip>
      </TooltipProvider>
    );

    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument();

    expect(await axe(container)).toHaveNoViolations();
  });
});
