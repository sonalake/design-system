import React from 'react';
import clsx from 'clsx';

import { BaseChipProps } from './chip.model';
import { getChipClasses } from './chip.utils';

export const Chip = ({ label, outlined, className }: BaseChipProps) => (
  <div className={clsx(getChipClasses(outlined), className)}>{label}</div>
);
