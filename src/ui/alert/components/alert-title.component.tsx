import React from 'react';
import { Title } from '@radix-ui/react-alert-dialog';

import { DialogHeader, DialogHeaderProps } from '../../dialog';
import { TypographyWithRef } from '../../typography';

export const AlertTitle = ({ children, icon }: DialogHeaderProps) => (
  <DialogHeader icon={icon}>
    <Title asChild>
      <TypographyWithRef variant="heading2">{children}</TypographyWithRef>
    </Title>
  </DialogHeader>
);
