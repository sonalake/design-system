import React, { forwardRef, ReactNode } from 'react';

export type DialogDescriptionProps = { children: ReactNode };

export const DialogDescription = forwardRef<
  HTMLParagraphElement,
  DialogDescriptionProps
>(({ children, ...props }, ref) => (
  <div ref={ref} className="text-mono-500" {...props}>
    {children}
  </div>
));
