import React, { ComponentPropsWithRef, forwardRef } from 'react';

import { BaseButtonProps, getButtonClasses } from './button.util';
export type ButtonProps = ComponentPropsWithRef<'button'> & BaseButtonProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { type = 'button', children, disabled, size = 'md', ...props },
    ref
  ) {
    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        ref={ref}
        className={getButtonClasses({ disabled, size })}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);
