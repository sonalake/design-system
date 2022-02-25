import React from 'react';
import { MdError, MdWarning } from 'react-icons/md';
import { ComponentMeta, ComponentStory, Meta } from '@storybook/react';

import { DefaultTestProviders } from '../../utils';
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

const meta: Meta = {
  title: 'Molecules/Alert',
  component: Alert,
  decorators: [
    (Story) => (
      <DefaultTestProviders>
        <Story />
      </DefaultTestProviders>
    ),
  ],
} as ComponentMeta<typeof Alert>;

export default meta;

export const Error: ComponentStory<typeof Alert> = () => (
  <Alert>
    <AlertTrigger asChild>
      <Typography as={Button} translationKey="STORY_BOOK.ALERT.SHOW_ERROR" />
    </AlertTrigger>
    <AlertContent size="sm">
      <AlertTitle
        icon={<MdError />}
        translationKey="STORY_BOOK.ALERT.TITLE_ERROR"
      />
      <AlertDescription>
        <Typography as="p" translationKey="STORY_BOOK.ALERT.ERROR_CONTENT" />
      </AlertDescription>
      <AlertCancel asChild>
        <Typography as={Button} translationKey="STORY_BOOK.ALERT.CLOSE" />
      </AlertCancel>
    </AlertContent>
  </Alert>
);

export const Confirmation: ComponentStory<typeof Alert> = () => (
  <Alert>
    <AlertTrigger asChild>
      <Typography
        as={Button}
        translationKey="STORY_BOOK.ALERT.DELETE_ACCOUNT"
      />
    </AlertTrigger>
    <AlertContent>
      <AlertTitle
        icon={<MdWarning />}
        translationKey="STORY_BOOK.ALERT.TITLE_WARNING"
      />
      <AlertDescription>
        <Typography
          as="p"
          translationKey="STORY_BOOK.ALERT.CONFIRMATION_CONTENT"
        />
      </AlertDescription>
      <div className="flex space-x-6">
        <AlertCancel asChild>
          <Typography as={Button} translationKey="STORY_BOOK.ALERT.CANCEL" />
        </AlertCancel>
        <AlertAction asChild>
          <Typography as={Button} translationKey="STORY_BOOK.ALERT.CONTINUE" />
        </AlertAction>
      </div>
    </AlertContent>
  </Alert>
);
