import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Button } from './button.component';

describe('Button', () => {
  test('renders  button', async () => {
    const { container } = render(<Button>button</Button>);

    expect(screen.getByRole('button', { name: 'button' })).toHaveAttribute(
      'type',
      'button'
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should be disabled', () => {
    render(<Button disabled>button</Button>);

    expect(screen.getByRole('button', { name: 'button' })).toBeDisabled();
  });

  test('should call onClick', async () => {
    const mockfn = jest.fn();
    render(<Button onClick={mockfn}>button</Button>);

    userEvent.click(screen.getByRole('button', { name: 'button' }));
    expect(mockfn).toHaveBeenCalled();
  });
});
