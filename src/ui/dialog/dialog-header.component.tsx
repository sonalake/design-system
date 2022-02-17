import React, { forwardRef, ReactNode } from 'react';

export type DialogHeaderProps = { children: ReactNode; icon?: ReactNode };

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ children, icon }, ref) => (
    <div ref={ref} className="flex items-center space-x-3 text-mono-700">
      {icon && <div className="text-5xl">{icon}</div>}
      {children}
    </div>
  )
);
