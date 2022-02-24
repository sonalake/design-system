import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Chip } from './chip.component';

describe('Chip', () => {
  test('should render', async () => {
    const { container } = render(<Chip label="test" />);

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
