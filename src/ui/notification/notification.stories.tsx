import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useNotifications } from '../../context/notifications';
import { DefaultTestProviders } from '../../utils';
import { Button } from '../button';
import { Stack } from '../stack';
import { Typography } from '../typography';
import { Notification } from './notification.component';
import { NotificationStatus } from './notification.model';

export default {
  title: 'Molecules/Notification',
  component: Notification,
  decorators: [
    (Story) => (
      <DefaultTestProviders>
        <Story />
      </DefaultTestProviders>
    ),
  ],
} as ComponentMeta<typeof Notification>;

export const Default: ComponentStory<typeof Notification> = () => {
  const notifications: [string, NotificationStatus][] = [
    ['STORY_BOOK.NOTIFICATION.SUCCESS', 'success'],
    ['STORY_BOOK.NOTIFICATION.ERROR', 'error'],
    ['STORY_BOOK.NOTIFICATION.WARNING', 'warning'],
    ['STORY_BOOK.NOTIFICATION.INFO', 'info'],
    ['STORY_BOOK.NOTIFICATION.DEFAULT', 'default'],
  ];

  const { addNotification } = useNotifications();

  return (
    <Stack vertical spacing={4} items="start">
      {notifications.map(([translationKey, status]) => (
        <Typography
          key={status}
          as={Button}
          translationKey={translationKey}
          className="mb-1"
          onClick={() =>
            addNotification({
              message: (
                <Typography translationKey="STORY_BOOK.NOTIFICATION.CONTENT" />
              ),
              status,
            })
          }
        />
      ))}
    </Stack>
  );
};
