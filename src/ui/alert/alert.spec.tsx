import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { renderWithProviders } from '../../utils';
import { Button } from '../button';
import { Typography } from '../typography';
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
    const { container } = renderWithProviders(
      <Alert>
        <AlertTrigger asChild>
          <Typography as={Button} translationKey="STORY_BOOK.ALERT.TRIGGER" />
        </AlertTrigger>
        <AlertContent>
          <AlertTitle translationKey="STORY_BOOK.ALERT.TITLE" />
          <AlertDescription>
            <Typography as="p" translationKey="STORY_BOOK.ALERT.DESCRIPTION" />
          </AlertDescription>
          <AlertCancel asChild>
            <Button>
              <Typography translationKey="STORY_BOOK.ALERT.CANCEL" />
            </Button>
          </AlertCancel>
          <AlertAction asChild>
            <Typography as={Button} translationKey="STORY_BOOK.ALERT.ACTION" />
          </AlertAction>
        </AlertContent>
      </Alert>
    );

    userEvent.click(screen.getByRole('button', { name: 'Trigger' }));

    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument();
    expect(screen.getByRole('alertdialog')).toHaveAccessibleDescription(
      'Description'
    );
    expect(screen.getByRole('button', { name: 'Cancel' })).toHaveFocus();
    expect(await axe(container)).toHaveNoViolations();
  });
});
