import clsx from 'clsx';

import { BaseElevationOptions } from './card.model';

const getShadowClass = (elevation?: BaseElevationOptions) => {
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
export const getCardClasses = (elevation?: BaseElevationOptions) =>
  clsx('border rounded p-2 ', getShadowClass(elevation));
