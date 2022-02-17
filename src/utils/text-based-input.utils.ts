import clsx from 'clsx';

import { InputSize } from '../models';

type TextBasedInputClassProps = {
  disabled?: boolean;
  error?: boolean;
  size?: InputSize;
};

export const getTextBasedInputClasses = ({
  disabled,
  error,
  size = 'md',
}: TextBasedInputClassProps) =>
  clsx(
    'appearance-none border rounded focus:outline-none placeholder-primary-300 bg-slate-100',
    {
      'py-1 px-2 text-sm': size === 'sm',
      'py-3 px-4 text-base': size === 'md',
      // 'text-primary-400': disabled,
      // 'text-primary-500': !disabled,
      // 'border-red-500 focus:ring-1 focus:ring-red-500': error,
      'border-primary-150 focus:shadow-primary-100': !error,
    }
  );
