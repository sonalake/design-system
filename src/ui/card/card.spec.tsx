import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Card } from './card.component';

describe('Card', () => {
  test('should render', async () => {
    const { container } = render(<Card>test</Card>);

    expect(screen.getByText('test')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
