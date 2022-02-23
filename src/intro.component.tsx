import React from 'react';

import { NotificationStatus } from './ui/notification/notification.model';
import { useNotifications } from './context';
import { DateFormat, Typography } from './ui';

const notifications: [string, NotificationStatus][] = [
  ['STORY_BOOK.NOTIFICATION.SUCCESS', 'success'],
  ['STORY_BOOK.NOTIFICATION.ERROR', 'error'],
  ['STORY_BOOK.NOTIFICATION.WARNING', 'warning'],
  ['STORY_BOOK.NOTIFICATION.INFO', 'info'],
  ['STORY_BOOK.NOTIFICATION.DEFAULT', 'default'],
];

export const Intro = () => {
  const { addNotification } = useNotifications();

  return (
    <>
      <div className="flex flex-col mb-4">
        <Typography translationKey="STORY_BOOK.INTRO.TITLE" />
        <DateFormat date={new Date()} />
      </div>

      <div className="flex flex-col items-start">
        {notifications.map(([translationKey, status]) => (
          <Typography
            key={status}
            as="button"
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
      </div>
    </>
  );
};
