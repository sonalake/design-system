import clsx from 'clsx';

import { BaseButtonProps } from './button.model';

export const getButtonClasses = ({ size, disabled }: BaseButtonProps) =>
  clsx(
    'inline-flex gap-2 items-center justify-center font-bold',
    ' border rounded focus:outline-none bg-slate-100',
    {
      'py-1 px-2 text-sm': size === 'sm',
      'py-3 px-4 text-base': size === 'md',
      'text-neutral-100 pointer-none': disabled,
      'text-black hover:bg-slate-200': !disabled,
    }
  );
