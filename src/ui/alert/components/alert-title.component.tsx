import React from 'react';
import { Title } from '@radix-ui/react-alert-dialog';

import { DialogHeader, DialogHeaderProps } from '../../dialog';
import { TypographyWithRef } from '../../typography';

type AlertTitleProps = { translationKey: string } & Pick<
  DialogHeaderProps,
  'icon'
>;

export const AlertTitle = ({ translationKey, icon }: AlertTitleProps) => (
  <DialogHeader icon={icon}>
    <Title asChild>
      <TypographyWithRef variant="heading2" translationKey={translationKey} />
    </Title>
  </DialogHeader>
);
