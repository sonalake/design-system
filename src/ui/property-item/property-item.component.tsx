import React, { ReactNode } from 'react';
import clsx from 'clsx';

export type PropertyItemProps = {
  label: ReactNode;
  children: ReactNode;
  isInline?: boolean;
};

export const PropertyItem = ({
  label,
  children,
  isInline,
}: PropertyItemProps) => (
  <div
    className={clsx('flex', {
      'flex-col': !isInline,
      'items-center': isInline,
    })}
  >
    <div className={clsx({ 'mr-1': isInline })}>{label}</div>
    {children}
  </div>
);
