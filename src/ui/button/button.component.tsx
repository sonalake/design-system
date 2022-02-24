import React, { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';

import { BaseButtonProps } from './button.model';
import { getButtonClasses } from './button.util';

export type ButtonProps = ComponentPropsWithRef<'button'> & BaseButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { type = 'button', children, disabled, size = 'md', className, ...props },
    ref
  ) {
    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        ref={ref}
        className={clsx(getButtonClasses({ disabled, size }), className)}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
