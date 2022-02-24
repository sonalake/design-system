import React from 'react';

import { useNotifications } from './context';
import { Button, DateFormat, Stack, Typography } from './ui';

export const Intro = () => {
  const { addNotification } = useNotifications();

  return (
    <>
      <Stack vertical className="mb-4">
        <Typography translationKey="STORY_BOOK.INTRO.TITLE" />
        <DateFormat date={new Date()} />
      </Stack>

      <Stack vertical items="start">
        <Typography
          as={Button}
          translationKey="STORY_BOOK.NOTIFICATION.SUCCESS"
          onClick={() =>
            addNotification({
              message: (
                <Typography translationKey="STORY_BOOK.NOTIFICATION.CONTENT" />
              ),
              status: 'success',
            })
          }
        />
      </Stack>
    </>
  );
};
