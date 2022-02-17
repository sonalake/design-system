import React, { ComponentProps, forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

import { QueryableComponent } from '../../models/index';
import { TypographyAs, TypographyVariant } from './typography.model';
import { getTypographyVariantStyles } from './typography.styles';
import { getTypographyVariantComponent } from './typography.util';

export type TypographyOwnProps<As extends TypographyAs = 'span'> = Omit<
  As extends TypographyAs ? JSX.IntrinsicElements[As] : ComponentProps<As>,
  'children'
> & {
  children: ReactNode;
  as?: As;
  variant?: TypographyVariant;
  className?: string;
};

export type TypographyProps<As extends TypographyAs = 'span'> =
  TypographyOwnProps<As> & QueryableComponent;

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

export const TypographyWithRef = forwardRef<
  HTMLElement,
  ComponentProps<typeof Typography>
>(({ children, as, variant = 'body', className, ...props }, ref) => {
  const Component = as ?? getTypographyVariantComponent(variant);

  return (
    <Component
      data-testid={props['data-testid'] || 'typography'}
      className={clsx(getTypographyVariantStyles(variant), className)}
      ref={ref}
      {...(props as any)}
    >
      {children}
    </Component>
  );
});
