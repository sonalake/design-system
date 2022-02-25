import React, { useMemo } from 'react';
import { MdCheck, MdClose, MdInfo } from 'react-icons/md';
import clsx from 'clsx';

import { NotificationStatus } from './notification.model';

type NotificationIconProps = {
  status: NotificationStatus;
};

export const NotificationIcon = ({ status }: NotificationIconProps) => {
  const icon = useMemo(() => {
    if (status !== undefined) {
      switch (status) {
        case 'error':
          return <MdClose className="text-red-400" />;
        case 'success':
          return <MdCheck className="text-green-400" />;
        default:
          return (
            <MdInfo
              className={clsx({
                'text-blue-400': status === 'info',
                'text-orange-400': status === 'warning',
              })}
            />
          );
      }
    }

    return <MdInfo className="text-neutral-400" />;
  }, [status]);

  return <div className="mr-2">{icon}</div>;
};
