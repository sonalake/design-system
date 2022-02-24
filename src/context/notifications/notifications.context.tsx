import React, {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { useContextFallback } from '../../hooks';
import { NotificationGateway } from '../../ui';
import { Notification } from '../../ui/notification/notification.model';

export type NotificationsState = {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
};

export const NotificationsContext = createContext<
  NotificationsState | undefined
>(undefined);

type NotificationsProviderProps = {
  children: ReactNode;
};

let notificationCounter = 0;

export const NotificationsProvider = ({
  children,
}: NotificationsProviderProps) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (notification: Omit<Notification, 'id'>) => {
      const id = `${notificationCounter++}`;

      setNotifications((notifications) => [
        ...notifications,
        {
          ...notification,
          id,
        },
      ]);
    },
    []
  );

  const removeNotification = useCallback((id: string) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  }, []);

  const value = useMemo(
    () => ({
      notifications,
      addNotification,
      removeNotification,
    }),
    [notifications, addNotification, removeNotification]
  );

  return (
    <NotificationsContext.Provider value={value}>
      <NotificationGateway />

      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotifications = () => useContextFallback(NotificationsContext);
