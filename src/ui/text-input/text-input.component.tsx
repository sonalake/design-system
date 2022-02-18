import React, { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';

import { BaseInputProps, getTextBasedInputClasses } from '../input/';

type TextInputProps = Omit<ComponentPropsWithRef<'input'>, 'size'> &
  BaseInputProps;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ disabled, readOnly, error, size, className, ...rest }, ref) => (
    <>
      <input
        ref={ref}
        type="text"
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={error || undefined}
        className={clsx(
          getTextBasedInputClasses({
            disabled,
            readOnly,
            error,
            size,
          }),
          className
        )}
        {...rest}
      />
    </>
  )
);
