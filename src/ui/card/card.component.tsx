import React from 'react';
import clsx from 'clsx';

import { Elevation } from '../../models';
import { getCardClasses } from './card.styles';

export type CardProps = {
  elevation?: Elevation;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  elevation,
  children,
  className,
}) => (
  <div className={clsx(getCardClasses(elevation), className)}>{children}</div>
);
