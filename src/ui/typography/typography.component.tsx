import React from 'react';
import clsx from 'clsx';

import { QueryableComponent } from '../../models/index';
import { TypographyAs, TypographyVariant } from './typography.model';
import { getTypographyVariantStyles } from './typography.styles';
import { getTypographyVariantComponent } from './typography.util';

export type TypographyProps<As extends TypographyAs = 'span'> = Omit<
  As extends TypographyAs
    ? JSX.IntrinsicElements[As]
    : React.ComponentProps<As>,
  'children'
> & {
  children: React.ReactNode;
  as?: As;
  variant?: TypographyVariant;
  className?: string;
} & QueryableComponent;

export const Typography = <As extends TypographyAs = 'span'>({
  children,
  as,
  variant = 'body',
  className,
  ...props
}: TypographyProps<As>) => {
  const Component = as ?? getTypographyVariantComponent(variant);

  return (
    <Component
      data-testid={props['data-testid'] || 'typography'}
      className={clsx(getTypographyVariantStyles(variant), className)}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};
