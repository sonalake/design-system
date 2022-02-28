import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Checkbox } from './checkbox.component';

describe('Checkbox', () => {
  test('renders an accessible checkbox', async () => {
    const { container } = render(<Checkbox aria-label="test-input" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
