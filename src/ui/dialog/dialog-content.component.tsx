import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

export type DialogContentProps = { children: ReactNode; size?: 'sm' | 'md' };

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, size = 'md' }, ref) => (
    <div className="fixed z-40 inset-0 flex items-center justify-center overflow-auto">
      <div
        ref={ref}
        className={clsx('bg-white p-6 rounded space-y-6', {
          'max-w-sm': size === 'sm',
          'max-w-md': size === 'md',
        })}
      >
        {children}
      </div>
    </div>
  )
);
