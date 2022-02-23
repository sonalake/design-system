import React from 'react';

import { useNotifications } from '../../context';
import { Notification } from './notification.component';

export const NotificationGateway = () => {
  const { notifications, removeNotification } = useNotifications();

  return (
    <div className="absolute top-4 right-4 flex flex-col">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          {...notification}
          onClear={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
};
