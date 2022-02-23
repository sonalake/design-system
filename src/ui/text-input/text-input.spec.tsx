import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { TextInput } from './text-input.component';

describe('Text-Input', () => {
  test('renders an accessible text-input', async () => {
    const { container } = render(
      <TextInput defaultValue="Test Value" aria-label="test-input" />
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(await axe(container)).toHaveNoViolations();
  });
});
