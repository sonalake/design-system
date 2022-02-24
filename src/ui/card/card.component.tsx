import React from 'react';
import clsx from 'clsx';

import { BaseCardProps } from './card.model';
import { getCardClasses } from './card.utils';

export const Card: React.FC<BaseCardProps> = ({
  elevation,
  children,
  className,
}) => (
  <div className={clsx(getCardClasses(elevation), className)}>{children}</div>
);
