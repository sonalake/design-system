import React, { useCallback } from 'react';
import { MdClose } from 'react-icons/md';
import clsx from 'clsx';

import { useTimeout } from '../../hooks';
import { Button } from '../button';
import { Typography } from '../typography';
import { Notification as NotificationModel } from './notification.model';
import { NotificationIcon } from './notification-icon.component';

export type NotificationProps = {
  className?: string;
  onClear: () => void;
} & Omit<NotificationModel, 'id'>;

export const Notification = ({
  message,
  action,
  status = 'default',
  className,
  onClear,
}: NotificationProps) => {
  const handleActionClick = useCallback(() => {
    onClear();
    action?.onClick();
  }, [action, onClear]);

  useTimeout({ duration: 10000, onTimeout: onClear });

  return (
    <div
      className={clsx(
        'flex items-center px-4 py-2 mb-2',
        'border rounded shadow',
        className
      )}
    >
      <NotificationIcon status={status} />
      <div role="alert" className="flex-1 truncate text-sm mr-2">
        {message}
      </div>
      <div className="flex-none flex space-x-6">
        {action && (
          <Typography
            as={Button}
            translationKey={action.label}
            onClick={handleActionClick}
          />
        )}

        <Typography
          as={Button}
          translationKey="DESIGN_SYSTEM.ACTIONS.CLOSE"
          onClick={onClear}
        >
          {() => <MdClose />}
        </Typography>
      </div>
    </div>
  );
};
