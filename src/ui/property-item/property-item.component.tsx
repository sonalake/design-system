import React, { ReactNode } from 'react';
import clsx from 'clsx';

export type PropertyItemProps = {
  label?: ReactNode;
  isInline?: boolean;
  children: ReactNode;
};

export const PropertyItem = ({
  children,
  label,
  isInline,
}: PropertyItemProps) => (
  <div
    className={clsx('flex', {
      'flex-col': !isInline,
      'items-center': isInline,
    })}
  >
    {label && <div className={clsx({ 'mr-1': isInline })}>{label}</div>}
    {children}
  </div>
);
