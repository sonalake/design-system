import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Stack } from '../stack';
import { Typography } from '../typography';
import { Notification } from './notification.component';
import { NotificationStatus } from './notification.model';

export default {
  title: 'Molecules/Notification',
  component: Notification,
} as ComponentMeta<typeof Notification>;

export const Default: ComponentStory<typeof Notification> = () => {
  const statuses: NotificationStatus[] = [
    'success',
    'error',
    'warning',
    'info',
    'default',
  ];

  return (
    <Stack vertical spacing={4} items="start">
      {statuses.map((status) => (
        <Notification
          message={
            <Typography translationKey="STORY_BOOK.NOTIFICATION.CONTENT" />
          }
          status={status}
          onClear={() => {}}
        />
      ))}
    </Stack>
  );
};
