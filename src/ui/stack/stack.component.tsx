import React from 'react';
import clsx from 'clsx';

import { StackAlign, StackJustify, StackSpacing } from './stack.model';
import { getStackClasses } from './stack.styles';

export type StackProps = {
  vertical?: boolean;
  wrap?: boolean;
  spacing?: StackSpacing;
  items?: StackAlign;
  justify?: StackJustify;
  className?: string;
};

export const Stack: React.FC<StackProps> = ({
  children,
  className,
  ...props
}) => <div className={clsx(getStackClasses(props), className)}>{children}</div>;
