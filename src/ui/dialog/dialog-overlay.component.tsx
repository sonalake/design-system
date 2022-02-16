import React, { forwardRef } from 'react';

export const DialogOverlay = forwardRef<HTMLDivElement>((_, ref) => (
  <div ref={ref} className="fixed z-30 inset-0 bg-brand-overlay/90" />
));
