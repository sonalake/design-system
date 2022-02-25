import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import { getCheckboxStyles } from './checkbox.styles';

export type CheckboxOwnProps = {
  hasError?: boolean;
  indeterminate?: boolean;
  rounded?: boolean;
  className?: string;
};

export type CheckboxProps = CheckboxOwnProps & JSX.IntrinsicElements['input'];

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      disabled,
      hasError = false,
      indeterminate = false,
      rounded = false,
      children,
      ...rest
    },
    ref
  ) => {
    const innerRef = useRef<HTMLInputElement>(null!);

    useImperativeHandle(ref, () => innerRef.current);

    useEffect(() => {
      innerRef.current.indeterminate = indeterminate;
    }, [indeterminate]);

    return (
      <input
        ref={innerRef}
        type="checkbox"
        disabled={disabled}
        aria-invalid={hasError || undefined}
        className={getCheckboxStyles({
          hasError,
          rounded,
          disabled,
          className,
        })}
        {...rest}
      >
        {children}
      </input>
    );
  }
);
