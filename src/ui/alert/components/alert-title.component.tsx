import React from 'react';
import { Title } from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';

import { DialogHeader, DialogHeaderProps } from '../../dialog';
import { getTypographyVariantStyles } from '../../typography/typography.styles';

export const AlertTitle = ({ children, icon }: DialogHeaderProps) => (
  <DialogHeader icon={icon}>
    <Title asChild>
      <h2 className={clsx(getTypographyVariantStyles('heading2'), 'font-bold')}>
        {children}
      </h2>
    </Title>
  </DialogHeader>
);
