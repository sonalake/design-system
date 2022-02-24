import React from 'react';
import clsx from 'clsx';

import { BaseStackClasses } from './stack.model';
import { getStackClasses } from './stack.utils';

export const Stack: React.FC<BaseStackClasses> = ({
  children,
  className,
  ...props
}) => <div className={clsx(getStackClasses(props), className)}>{children}</div>;
