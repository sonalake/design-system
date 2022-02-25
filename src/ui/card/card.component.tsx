import React from 'react';
import clsx from 'clsx';

import { CardElevation } from '../../models/card-elevation.model';
import { getCardClasses } from './card.styles';

export type CardProps = {
  elevation?: CardElevation;
  className?: string;
};
export const Card: React.FC<CardProps> = ({
  elevation,
  children,
  className,
}) => (
  <div className={clsx(getCardClasses(elevation), className)}>{children}</div>
);
