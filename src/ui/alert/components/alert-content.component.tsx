import React from 'react';
import { Content, Overlay, Portal } from '@radix-ui/react-alert-dialog';

import { DialogContent, DialogContentProps, DialogOverlay } from '../../dialog';

export const AlertContent = ({ size, children }: DialogContentProps) => (
  <Portal>
    <Overlay asChild>
      <DialogOverlay />
    </Overlay>
    <Content>
      <DialogContent size={size}>{children}</DialogContent>
    </Content>
  </Portal>
);
