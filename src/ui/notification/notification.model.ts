import { ReactNode } from 'react';

export type NotificationStatus =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info';

export type Notification = {
  id: string;
  message: ReactNode;
  action?: NotificationAction;
  status?: NotificationStatus;
};

export type NotificationAction = {
  label: string;
  onClick: () => void;
};
