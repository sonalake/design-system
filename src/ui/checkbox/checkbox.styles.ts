import clsx from 'clsx';

import { CheckboxProps } from './checkbox.component';

export const getCheckboxStyles = ({
  hasError,
  rounded,
  disabled,
  className,
}: Pick<CheckboxProps, 'hasError' | 'rounded' | 'disabled' | 'className'>) =>
  clsx(
    'appearance-none w-4 h-4 border-2',
    'bg-center bg-no-repeat bg-cover',
    'focus:outline-none focus:ring focus:ring-opacity-50',
    {
      'border-error-100 focus:ring-error-100 checked:bg-checkbox-invalid indeterminate:bg-checkbox-indeterminate-invalid':
        hasError,
      'border-primary-100 focus:ring-primary-100 checked:bg-checkbox indeterminate:bg-checkbox-indeterminate':
        !hasError,
    },
    {
      'rounded-full': rounded,
      rounded: !rounded,
    },
    { 'opacity-50': disabled },
    className
  );
