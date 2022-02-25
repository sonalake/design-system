import React, { ReactNode } from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useNotifications } from '../../context';
import { renderWithProviders } from '../../utils';
import { Button } from '../button';
import { Typography } from '../typography';
import { NotificationAction } from './notification.model';

type TestComponentProps = {
  message: ReactNode;
  action?: NotificationAction;
};

const TestComponent = ({ message, action }: TestComponentProps) => {
  const { addNotification } = useNotifications();

  return (
    <Typography
      translationKey="STORY_BOOK.NOTIFICATION.DEFAULT"
      as={Button}
      onClick={() =>
        addNotification({
          message,
          action,
        })
      }
    />
  );
};

const renderNotification = ({
  message = <Typography translationKey="STORY_BOOK.NOTIFICATION.CONTENT" />,
  action,
}: Partial<TestComponentProps> = {}) =>
  renderWithProviders(<TestComponent message={message} action={action} />);

test('displays the provided notification message', async () => {
  renderNotification();

  userEvent.click(screen.getByRole('button', { name: 'Show Notification' }));

  expect(screen.getByText('This is a notification!')).toBeInTheDocument();
});

test('displays multiple notifications at a time', async () => {
  renderNotification();

  userEvent.click(screen.getByRole('button', { name: 'Show Notification' }));
  userEvent.click(screen.getByRole('button', { name: 'Show Notification' }));

  expect(screen.queryAllByText('This is a notification!')).toHaveLength(2);
});

test('closes after clicking on the Close button', async () => {
  renderNotification();
  userEvent.click(screen.getByRole('button', { name: 'Show Notification' }));

  expect(screen.getByText('This is a notification!')).toBeInTheDocument();

  userEvent.click(screen.getByTestId('DESIGN_SYSTEM.ACTIONS.CLOSE'));

  expect(screen.queryByText('This is a notification!')).not.toBeInTheDocument();
});

test('displays the action button and invokes the handler on click', async () => {
  const onClick = jest.fn();
  renderNotification({
    action: {
      label: 'STORY_BOOK.NOTIFICATION.ACTION',
      onClick,
    },
  });
  userEvent.click(screen.getByRole('button', { name: 'Show Notification' }));

  userEvent.click(screen.getByRole('button', { name: 'Action' }));

  expect(onClick).toHaveBeenCalled();
});
