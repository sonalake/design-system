import React, { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from 'clsx';

import { BaseInputProps } from '../../models';
import { getTextBasedInputClasses } from '../../utils/text-based-input.utils';

type TextInputProps = BaseInputProps & ComponentPropsWithRef<'input'>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ disabled, readOnly, error, size, className, ...rest }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type="text"
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={error || undefined}
          className={clsx(
            getTextBasedInputClasses({
              disabled: disabled || readOnly,
              error,
              size,
            }),
            className
          )}
          {...rest}
        />
      </>
    );
  }
);
