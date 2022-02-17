import React, { ReactNode } from 'react';
import { Description } from '@radix-ui/react-alert-dialog';

import { DialogDescription } from '../../dialog';

export type AlertDescriptionProps = { children: ReactNode };

export const AlertDescription = ({ children }: AlertDescriptionProps) => (
  <Description asChild>
    <DialogDescription>{children}</DialogDescription>
  </Description>
);
