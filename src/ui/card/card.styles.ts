import clsx from 'clsx';

import { CardElevation } from '../../models/card-elevation.model';

const getShadowClass = (elevation?: CardElevation) => {
  switch (elevation) {
    case 'none':
      return 'shadow-none';
    case 'sm':
      return 'shadow-sm';
    case 'md':
      return 'shadow-md';
    case 'lg':
      return 'shadow-lg';
    case 'xl':
      return 'shadow-xl';
    case '2xl':
      return 'shadow-2xl';
    default:
      return 'shadow';
  }
};
export const getCardClasses = (elevation?: CardElevation) =>
  clsx('border rounded p-2 ', getShadowClass(elevation));
