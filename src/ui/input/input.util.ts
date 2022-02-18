import clsx from 'clsx';

import { InputSize } from './input.model';

type TextBasedInputClassProps = {
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  size?: InputSize;
};

export const getTextBasedInputClasses = ({
  disabled,
  readOnly,
  error,
  size = 'md',
}: TextBasedInputClassProps) =>
  clsx(
    'appearance-none border rounded focus:outline-none placeholder-primary-300 bg-slate-100',
    {
      'py-1 px-2 text-sm': size === 'sm',
      'py-3 px-4 text-base': size === 'md',
      'border-primary-150 focus:shadow-primary-100': !error,
      'border-error-100 focus:shadow-error-100': error,
      'pointer-events-none': readOnly,
      'text-neutral-200': disabled,
      'text-black': !disabled,
    }
  );
