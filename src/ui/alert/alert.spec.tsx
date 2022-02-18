import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Alert } from './alert.component';
import {
  AlertAction,
  AlertCancel,
  AlertContent,
  AlertDescription,
  AlertTitle,
  AlertTrigger,
} from './components';

describe('Alert', () => {
  test('renders an accessible alert dialog', async () => {
    const { container } = render(
      <Alert>
        <AlertTrigger asChild>
          <button>Trigger</button>
        </AlertTrigger>
        <AlertContent>
          <AlertTitle>Title</AlertTitle>
          <AlertDescription>Description</AlertDescription>
          <AlertCancel asChild>
            <button>Cancel</button>
          </AlertCancel>
          <AlertAction asChild>
            <button>Action</button>
          </AlertAction>
        </AlertContent>
      </Alert>
    );

    userEvent.click(screen.getByRole('button', { name: 'Trigger' }));

    expect(
      screen.getByRole('alertdialog', { name: 'Title' })
    ).toBeInTheDocument();
    expect(screen.getByRole('alertdialog')).toHaveAccessibleDescription(
      'Description'
    );
    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveFocus();
    expect(await axe(container)).toHaveNoViolations();
  });
});
