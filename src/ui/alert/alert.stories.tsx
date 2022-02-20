import React from 'react';
import { MdError, MdWarning } from 'react-icons/md';
import { ComponentMeta, ComponentStory, Meta } from '@storybook/react';

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
} as ComponentMeta<typeof Alert>;

export default meta;

export const Error: ComponentStory<typeof Alert> = () => (
  <Alert>
    <AlertTrigger asChild>
      <button type="button">Show error</button>
    </AlertTrigger>
    <AlertContent size="sm">
      <AlertTitle icon={<MdError />}>Error</AlertTitle>
      <AlertDescription>This is the content of the Error.</AlertDescription>
      <AlertCancel asChild>
        <button type="button">Close</button>
      </AlertCancel>
    </AlertContent>
  </Alert>
);

export const Confirmation: ComponentStory<typeof Alert> = () => (
  <Alert>
    <AlertTrigger asChild>
      <button type="button">Delete account</button>
    </AlertTrigger>
    <AlertContent>
      <AlertTitle icon={<MdWarning />}>
        Warning are you sure you want to do this?
      </AlertTitle>
      <AlertDescription>This action cannot be undone.</AlertDescription>
      <div className="flex space-x-6">
        <AlertCancel asChild>
          <button type="button">Cancel</button>
        </AlertCancel>
        <AlertAction asChild>
          <button type="button">Continue</button>
        </AlertAction>
      </div>
    </AlertContent>
  </Alert>
);
