import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Stack } from './stack.component';

describe('Stack', () => {
  test('should render default Stack', async () => {
    const { container } = render(
      <Stack>
        <div>test</div>
      </Stack>
    );

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
